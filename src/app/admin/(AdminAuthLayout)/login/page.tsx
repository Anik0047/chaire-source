import AdminLogin from "@/components/admin/auth/Login"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Admin Login",
    description:
        "This is login page for admin",
    // other metadata
};


const LoginPage = () => {
    return (
        <div>
            <AdminLogin />
        </div>
    )
}

export default LoginPage