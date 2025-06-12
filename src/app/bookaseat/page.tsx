'use client';
import React from 'react'
import './bookaseat.css'
// import ReCAPTCHA from "react-google-recaptcha";

function Seat() {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const date = formData.get('date')
    const time = formData.get('time')

    const data = { name, phone, date, time };

    const res = await fetch('/api/bookaseat', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const returnedstatement = await res.json();
    console.log(returnedstatement)
    if (returnedstatement.result === "success") {
      alert("Seat Booked! We will call you soon")
    }
    else {
      alert("Couldn't book seat! Please try again")
    }

  }



  return (
    <div className='background w-full flex align-middle h-full justify-center'>

      <div className='container min-w-xl py-10 flex flex-col justify-evenly text-center align-middle'>
        <h1>Book a Seat</h1>
        <p>at Namaste Bites</p>
        <form id='form' onSubmit={handleSubmit} className='text-left rounded-2xl py-7 text-gray-950 flex flex-col gap-3 px-7'>
          <label>Name:</label>
          <input name='name' className='inputdata' type='text' placeholder='Ramesh' required />
          <label>Phone</label>
          <div className='flex'>
            <div className='p-2 px-3 flex items-center justify-center align-middle border-2 border-gray-800 translate-x-2 rounded-l-2xl font-bold bg-gray-400'>+91</div>
            <input name='phone' className='inputdata grow' type='phone' required /></div>
          <label>Date</label>
          <input name='date' className='inputdata' type='date' required />
          <label>Time</label>
          <input name='time' className='inputdata' type='time' required />

          <div className='w-full flex justify-center align-middle'>

            <button className='bg-sky-600 flex justify-center align-middle px-7 py-3 font-semibold rounded-2xl text-white hover:shadow-2xs'>Confirm</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Seat
