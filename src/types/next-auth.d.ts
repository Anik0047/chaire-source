import NextAuth, { DefaultSession } from "next-auth";

// declare module "next-auth" {
//     interface Session {
//         accessToken?: string;
//         role?: string;
//         user?: {
//             _id?: string;
//             user_phone?: string;
//             user_name?: string;
//             // Add other user fields as needed
//         };
//     }
// }

declare module "next-auth" {
    interface Session {
        accessToken: string;
        role: "user" | "admin";
        user: {
            _id: string;
            user_phone?: string;
            user_name?: string;
            user_profile?: string;
            admin_phone?: string;
            admin_name?: string;
            admin_profile?: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id?: string;
        _id: string;
        accessToken: string;
        role: "user" | "admin";
        user_phone?: string;
        user_name?: string;
        user_profile?: string;
        admin_phone?: string;
        admin_name?: string;
        admin_profile?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        role: "user" | "admin";
        user: {
            _id: string;
            user_phone?: string;
            user_name?: string;
            user_profile?: string;
            admin_phone?: string;
            admin_name?: string;
            admin_profile?: string;
        };
    }
}