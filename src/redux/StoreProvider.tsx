'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore, ExtendedStore } from './store'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<ExtendedStore | null>(null)


    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            {/* ✅ Safe to access __persistor now */}
            <PersistGate loading={null} persistor={storeRef.current.__persistor!}>
                {children}
            </PersistGate>
        </Provider>
    )
}