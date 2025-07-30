'use client'

import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/redux/StoreProvider";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";


export default function ContextWrapper({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <StoreProvider>
                {/* <TokenProvider> */}
                {children}
                <Toaster />
                {/* </TokenProvider> */}
            </StoreProvider>
        </SessionProvider>
    );
}