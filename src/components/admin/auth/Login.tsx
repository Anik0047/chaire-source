'use client'
import Button from '../customUI/button/Button'
import Label from '../customUI/label/Label'
import Input from '../customUI/input/InputField'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const AdminLogin = () => {
    const [phone, setPhone] = useState('01700000000') // Default phone
    const [password, setPassword] = useState('12345') // Default password
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const result = await signIn('admin-login', { // Changed from 'credentials' to 'admin-login'
            redirect: false,
            admin_phone: phone,
            admin_password: password,
            callbackUrl: '/admin' // Specify where to redirect after success
        })

        if (result?.error) {
            setError(result.error)
        } else {
            router.push('/admin')
        }
    }
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100 px-5 md:px-0'>
            <div className='bg-white rounded-lg shadow-lg w-full max-w-2xl px-2 md:px-4 py-8 animate-in fade-in-0 zoom-in-95 overflow-y-auto max-h-[95%]'>
                <h1 className="text-3xl font-semibold text-gray-800 text-center">Admin Login</h1>
                {/* Content */}
                <form onSubmit={handleSubmit} className="py-8 space-y-4 px-5 md:px-10">
                    <div>
                        <Label>Phone</Label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </div>

                    <div>
                        <Label>Password</Label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </div>

                    <div className='flex justify-end gap-5 mt-10'>
                        <Button size="sm" variant="primary" className='w-full' >Login</Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin