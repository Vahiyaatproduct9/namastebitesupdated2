'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import css from './supercontrol.module.css'
import { ObjectId } from 'mongodb'

const uriusername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
const uripassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

export default function SuperControl() {
    const [activeButton, setActiveButton] = useState('Orders')
    const [cred, setCred] = useState<{ username?: string; password?: string }>({})
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [deleteStatus, setDeleteStatus] = useState<string | null>(null)
    const router = useRouter()

    // ⛔ LocalStorage access inside useEffect (client only)
    useEffect(() => {
        const savedCreds = JSON.parse(localStorage.getItem('Admin') || '{}')
        setCred(savedCreds)
    }, [])

    // 🧠 Once cred is set, do the fetch
    useEffect(() => {
        if (!cred.username || !cred.password) return

        if (cred.username === uriusername && cred.password === uripassword) {
            async function fetchData() {
                try {
                    const res = await fetch('/api/supercontrol/watch', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: cred.username, password: cred.password }),
                    })

                    if (!res.ok) throw new Error('Fetch failed')

                    const { result } = await res.json()
                    setData({
                        orders: result.OrdersData || [],
                        tablebookings: result.TableBookingsData || [],
                    })
                    setLoading(false)
                } catch (err) {
                    console.error('Failed to fetch data :(', err)
                    setLoading(false)
                }
            }

            fetchData()
        } else {
            router.push('/')
        }
    }, [cred])

    async function handleDelete(id: string) {
        try {
            const res = await fetch('/api/supercontrol/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: cred.username, password: cred.password, id }),
            })
            const { result } = await res.json()
            setDeleteStatus(result)
            if (deleteStatus === 'success') {
                alert("Order Deleted Succesfully")
            }
            else if (deleteStatus === 'error') {
                alert("Order Not Found")
            }
            else {
                alert("Error: " + deleteStatus)
            }

        }
        catch (err) {
            console.error('Failed to delete order', err)
        }
    }
    // 🔄 Fetch city from coords
    async function getLocation(lat: number, lon: number) {
        const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        )
        return await res.json()
    }

    // 📦 Render orders list
    function OrdersList({ orders }:
        {
            orders:
            Array<{
                _id: ObjectId,
                name: string,
                phone: number,
                location: string,
                computedlocation: [number, number, number],
                orders: Array<{ name: string, price: number }>
            }>
        }) {
        const [parsed, setParsed] = useState<React.ReactElement[]>([])

        useEffect(() => {
            async function build() {
                const results = await Promise.all(
                    orders.map(async (item, i) => {
                        const loc = await getLocation(+item.computedlocation[0], +item.computedlocation[1])

                        return (
                            <div key={item._id.toString()} className={css.OrderContainer}>
                                <div className={css.orderinfo}>
                                    <h1>Name: {item.name}</h1>
                                    <h2>Phone: {item.phone}</h2>
                                    <p>
                                        Input Location:<br />
                                        {item.location}<br />
                                        Actual Location:<br />
                                        {loc.locality || 'Unknown'}<br />
                                        Accuracy:<br />
                                        {(Math.log((item.computedlocation[2]) + 1))}
                                    </p>
                                    <a
                                        href={`https://www.google.com/maps?q=${item.computedlocation[0]},${item.computedlocation[1]}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        See Location on Google Maps
                                    </a>
                                    <table>
                                        {item.orders.map((order: any, idx: number) => (
                                            <tr key={idx}>
                                                <td>{order.name}</td>
                                                <td>₹{order.price}</td>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                                <div className={css.orderactiondiv}>
                                    <button onClick={() => { handleDelete(item._id.toString()) }} className={css.deliveredbutton}>Delivered</button>
                                    <button onClick={() => { handleDelete(item._id.toString()) }} className={css.deletebutton}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                )

                setParsed(results)
            }

            build()
        }, [orders])

        return <div className={css.showOrdersContainer}>{parsed}</div>
    }

    // 🧾 Table booking display
    function TableBookings() {
        return (
            <div className={css.showOrdersContainer}>
                {data?.tablebookings?.map((booking: any, idx: number) => (
                    <div key={idx} className={css.OrderContainer}>
                        <div className={css.orderinfo}>
                            <h1>Name: {booking.name}</h1>
                            <h2>Phone: {booking.phone}</h2>
                            <div className="w-full flex items-center justify-evenly">
                                <label>
                                    Date: <b>{booking.date}</b>
                                </label>
                                <label>
                                    Time: <b>{booking.time}</b>
                                </label>
                            </div>
                        </div>
                        <div className={css.orderactiondiv}>
                            <button className={css.deliveredbutton}>Confirm</button>
                            <button className={css.deletebutton}>Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    // 👀 What to render?
    if (loading) {
        return (
            <div className={css.loadingContainer}>
                <div className={css.loading}>
                    <h1>Loading</h1>
                </div>
            </div>);
    }


    return (
        <div className={css.body}>

            <div className={css.headers}>
                <button
                    onClick={() => setActiveButton('Orders')}
                    style={{
                        textDecoration: activeButton === 'Orders' ? 'underline' : 'none',
                        fontWeight: activeButton === 'Orders' ? '700' : 'initial',
                        textShadow:
                            activeButton === 'Orders' ? '3px 3px 5px rgba(0, 0, 0, 0.5)' : 'none',
                    }}
                >
                    Orders
                </button>
                <button
                    onClick={() => setActiveButton('Table Bookings')}
                    style={{
                        textDecoration: activeButton === 'Table Bookings' ? 'underline' : 'none',
                        fontWeight: activeButton === 'Table Bookings' ? '700' : 'initial',
                        textShadow:
                            activeButton === 'Table Bookings'
                                ? '3px 3px 5px rgba(0, 0, 0, 0.5)'
                                : 'none',
                    }}
                >
                    Table Bookings
                </button>
            </div>

            {activeButton === 'Orders' ? (
                data?.orders ? (
                    <OrdersList orders={data.orders} />
                ) : (
                    <p>No orders found</p>
                )
            ) : (
                <TableBookings />
            )}
        </div>
    )
}
