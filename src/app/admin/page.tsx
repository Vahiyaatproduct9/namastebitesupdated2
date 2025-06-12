'use client'

import React from 'react'
import css from './admin.module.css'
import { useRouter } from 'next/navigation'

function Admin() {
    const router = useRouter()
    const adminusername = process.env.NEXT_PUBLIC_ADMIN_USERNAME
    const adminpassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')

        if (username === adminusername && password === adminpassword) {
            const credentials = { username, password }
            localStorage.setItem('Admin', JSON.stringify(credentials))
            router.push('/supercontrol')
        } else {
            alert("Incorrect!!")
        }
    }

    return (
        <div className={css.container}>
            <div className={css.formContainer}>
                <form onSubmit={handleSubmit} id='adminloginform'>
                    <h1>Namaste Bites</h1>
                    <p>Welcome, Admin</p>
                    <div>
                        <label>Username</label>
                        <input type='text' name='username' placeholder='username' required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' name='password' placeholder='password' required />
                    </div>
                    <button type="submit" className={css.submit}>Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
