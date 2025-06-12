'use client'
import React, { useState } from 'react'
import css from './menu.module.css'
import Link from 'next/link'
import items from '../../data/menu'
import { itemnames } from '../../data/menu'
const image = '/images/veg-momos.jpg'
function Menu() {

    const [activeCategory, setActiveCategory] = useState(0)
    const [chosenItem, setChosenItem] = useState(0)
    const [OrderedList, setOrderedList]: [Array<{ name: string, price: number, img: string }>, Function] = useState([])
    function Showcategories(
        list: Array<Array<{
            name: string;
            price: number;
            img: string;
        }>>,
        names: string[]
    ) {
        return list.map((item, index) => {
            return (
                <div onClick={() => {
                    setActiveCategory(index),
                        setChosenItem(0)
                }} key={`${index}`} className={css.categoriescontainer}>
                    <div style={{
                        backgroundImage: `url(${item[0].img})`
                    }} className={css.categoriesitempic} />
                    <p className={css.categoriesitemdesc}>{`${names[index]}`}</p>
                </div>
            )
        });
    }

    function showItems(state: number, list: Array<Array<{
        name: string;
        price: number;
        img: string;
    }>>) {
        return list[state].map((item2, index2) => {
            return (
                <div onClick={() => { setChosenItem(index2) }} key={index2} className={css.itemitem}>
                    <img className={css.itempic} src={item2.img} />
                    <div className={css.itemdesc}>
                        <div>
                            <p>{item2.name}</p>
                            <p>₹{item2.price}</p>
                        </div>
                        <button onClick={() => {
                            const ordereddata = { name: item2.name, price: item2.price, img: item2.img }
                            setOrderedList((prev: Array<{ name: string, price: number, img: string }>) => [...prev, ordereddata])
                        }} className={css.additem}>+</button>
                    </div>
                </div>
            )
        })
    }
    function chooseItem(chosenItem: number, activeCategory: number, items: Array<Array<{
        name: string;
        price: number;
        description: string;
        img: string;
    }>>) {
        return (
            <>
                <div className={css.menuPic}>
                    <img className={css.pic} src={items[activeCategory][chosenItem].img} alt={image} />
                </div>
                <div className={css.menuDesc}>
                    <h2>{items[activeCategory][chosenItem].name}</h2>
                    <p>{items[activeCategory][chosenItem].description}</p>
                    <p>{items[activeCategory][chosenItem].price.toString()}</p>

                    <button onClick={() => {
                        const ordereddata = { name: items[activeCategory][chosenItem].name, price: items[activeCategory][chosenItem].price, img: items[activeCategory][chosenItem].img }
                        setOrderedList((prev: Array<{ name: string, price: number, img: string }>) => [...prev, ordereddata]),
                            console.log(OrderedList)
                    }}>+ Add to PLATE</button>
                </div >
            </>
        )
    }
    function Orders(list: Array<{
        name: string;
        price: number;
        img: string;
    }>) {
        return list.map((order, index) => {
            return (

                <div className={css.ordereditems}>
                    <div className={css.ordereditempic} style={{
                        backgroundImage: `url(${order.img})`
                    }}></div>
                    <div className={css.orderediteminfo}>
                        <div>
                            <h2>{order.name}</h2>
                            <p>{order.price}</p>
                        </div>
                        <button onClick={() => {
                            setOrderedList((prev: Array<{ name: string, price: number, img: string }>) => prev.filter((_, subindex) => index !== subindex))
                        }}>-</button>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className={css.mainbox}>
            <div className={css.box}>
                <div className={css.head}>
                    <h1>Menu</h1>
                </div>
                <div className={css.menuItem}>
                    {chooseItem(chosenItem, activeCategory, items)}
                </div>
                <div className={css.items}>
                    {showItems(activeCategory, items)}
                </div>
                <div className={css.categories}>
                    {Showcategories(items, itemnames)}
                </div>
            </div>
            <div className={css.cart}>
                <div className={css.cartheader}>Items</div>
                <div className={css.cartlist}>

                    {Orders(OrderedList)}

                </div>
                <div className={css.cartfooter}>
                    <div>
                        <div>Total Amount</div>
                        <div>{OrderedList.reduce((acc, item) => acc + item.price, 0)}</div>
                    </div>
                    <Link
                        className={css.orderbutton}
                        href={'/orderonline'}
                        onClick={() => {
                            localStorage.setItem('OrderedList', JSON.stringify(OrderedList.map(({ img, ...rest }) => rest)));
                            console.log(localStorage.getItem('OrderedList'))
                        }}>
                        Place Order
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Menu
