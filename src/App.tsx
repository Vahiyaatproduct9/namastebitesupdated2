import Navbar from "./components/Navbar"
import Intro from './components/Intro'
import BookaSeat from './components/BookaSeat'
import OrderOnline from './components/OrderOnline'
import MenuOverview from './components/MenuOverview'
import WhereCanYouFindUs from './components/WhereCanYouFindUs'
import OurPromise from './components/OurPromise'
import React from 'react'

const App = () => {
  return (
    <>
      <Intro />
      <BookaSeat />

      <OrderOnline />

      <MenuOverview />
      <div className="flex justify-center w-full">
        <OurPromise />
      </div>
      <WhereCanYouFindUs />
    </>

  )
}

export default App

