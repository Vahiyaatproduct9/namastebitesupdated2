'use client'
import React, { useState } from 'react'
import css from './orderonline.module.css'
// import ReCAPTCHA from "react-google-recaptcha";

function OrderOnline() {
    const [locationSetter, setLocationSetter] = useState(false)
    const [alertMsg, setAlertMsg] = useState<Array<string>>(["", ""])

    async function getlocation(): Promise<Array<number>> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latt = position.coords.latitude;
                    const long = position.coords.longitude;
                    const acc = position.coords.accuracy;
                    resolve([latt, long, acc]);
                },
                (error: GeolocationPositionError) => {
                    setAlertMsg(["Couldn't access location :(", "red"]);
                    console.error(error);
                    reject("Location Error");
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const location = formData.get("location");
        const computedlocation = locationSetter ? await getlocation() : null
        const orders = JSON.parse(localStorage.getItem('OrderedList') || '[]');
        const finaldata = {
            name, phone, location, computedlocation, orders
        }
        const res = await fetch('/api/orderonline', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finaldata)
        })
        const returnedstatus = await res.json()
        console.log(returnedstatus)

        if (returnedstatus.status) {

            if (returnedstatus.status === "success") {
                setAlertMsg(['Order Placed! :D', "green"])
            }
            else if (returnedstatus.status === "insertion_failure") {
                setAlertMsg(["Couldn't Contact Namaste Bites (*￣3￣)╭", "yellow"])
            }
            else if (returnedstatus.status === "connection_failure") {
                setAlertMsg(["I'm sorry, Connection Failed (´。＿。｀)", "red"])
            }
            else {
                setAlertMsg(["Something went WRONG!!! ┑(￣Д ￣)┍", "brown"]);
            }
        }
    }

    return (
        <div className={css.container}>
            <div className={css.formContainer}>
                <form onSubmit={handleSubmit} id='onlineorderform'>
                    <h1>Namaste Bites</h1>
                    <p>Welcome</p>
                    <span id='alertwindow' style={{
                        color: alertMsg[1],
                        borderColor: alertMsg[1],
                        display: alertMsg[0] === "" ? 'none' : 'block'
                    }} className={css.alert}>{alertMsg[0]}</span>
                    <div>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Ramesh Das' required />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type='number' name='phone' maxLength={10} placeholder='1234567899' required />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type='text' name='location' required placeholder='Kalagachh, Near Kalagachh Bus Stand' />
                    </div>
                    <div>
                        <div className={css.checkbox}>
                            <input onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                if ((e.target as HTMLInputElement).checked) {
                                    setLocationSetter(true)
                                    getlocation()
                                } else {
                                    setLocationSetter(false)
                                }
                            }} className={css.check} type='checkbox' id='setlocation' />
                            <label htmlFor='setlocation'>Set Current Location for more Accuracy</label>
                        </div>
                        <span className={css.note}>* Note: We only take orders within 20km of Kalagachh</span>
                        <button type="submit" className={css.submit}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderOnline
