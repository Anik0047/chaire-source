import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import config from "@/config"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'user-login',
            name: 'UserCredentials',
            credentials: {
                user_phone: { label: "Phone", type: "text" },
                user_password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const res = await fetch(`${config.baseUrl}/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(credentials)
                    })

                    const data = await res.json()

                    if (res.ok && data.success) {
                        return {
                            ...data.data,
                            accessToken: data.accessToken,
                            role: 'user'
                        }
                    }
                    return null
                } catch (error) {
                    console.error('Login error:', error)
                    return null
                }
            }
        }),
        CredentialsProvider({
            id: 'admin-login',
            name: 'AdminCredentials',
            credentials: {
                admin_phone: { label: "Phone", type: "text" },
                admin_password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log('credentials >>>>>>>>>', credentials);
                try {
                    const res = await fetch(`${config.baseUrl}/admin/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            admin_phone: credentials?.admin_phone,
                            admin_password: credentials?.admin_password
                        })
                    })

                    const data = await res.json()

                    // if (res.ok && data.success) {
                    //     return {
                    //         ...data.data[0], // Assuming your admin data is in an array
                    //         accessToken: data.accessToken,
                    //         role: 'admin'
                    //     }
                    // }
                    if (res.ok && data.success) {
                        const adminData = data.data[0] || {};
                        return {
                            _id: adminData._id,
                            admin_phone: adminData.admin_phone,
                            admin_name: adminData.admin_name,
                            admin_profile: adminData.admin_profile,
                            accessToken: data.accessToken,
                            role: 'admin'
                        };
                    }
                    return null
                } catch (error) {
                    console.error('Admin login error:', error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // if (user) {
            //     const customUser = user as typeof user & { accessToken?: string; role?: string; _id?: string; user_phone?: string; user_name?: string };
            //     token.accessToken = customUser.accessToken;
            //     token.role = customUser.role;
            //     token.user = {
            //         _id: customUser._id,
            //         user_phone: customUser.user_phone,
            //         user_name: customUser.user_name,
            //         // Add other user fields as needed
            //     };
            // }
            if (user) {
                token.accessToken = user.accessToken;
                token.role = user.role;
                token.user = {
                    _id: user._id,
                    ...(user.role === 'user' ? {
                        user_phone: user.user_phone,
                        user_name: user.user_name,
                        user_profile: user.user_profile
                    } : {
                        admin_phone: user.admin_phone,
                        admin_name: user.admin_name,
                        admin_profile: user.admin_profile
                    })
                };
            }
            return token;
        },
        async session({ session, token }) {
            // session.accessToken = token.accessToken as string
            // session.role = token.role as string
            // session.user = token.user as any
            session.accessToken = token.accessToken;
            session.role = token.role;
            session.user = {
                ...token.user,
                name: token.user.user_name || token.user.admin_name || '',
                email: token.user.user_phone || token.user.admin_phone || ''
            };
            return session
        }
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login'
    },
    session: {
        strategy: "jwt",
    },
    secret: config.NEXTAUTH_SECRET
}