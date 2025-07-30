import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'auth',
    storage,
};

const rootReducer = combineReducers({
    // user: authSlice,
    // cart: cartSlice,
    [baseApi.reducerPath]: baseApi.reducer
});

// ✅ Shared middleware config
const middleware = (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(baseApi.middleware);

// ✅ Server-side store (no persistence)
const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware,
    });

// ✅ Extend store type to include __persistor
import type { Persistor } from 'redux-persist'
import type { EnhancedStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi';


export type ExtendedStore = EnhancedStore & {
    __persistor?: Persistor
}

// ✅ Final unified store creator
export const makeStore = (): ExtendedStore => {
    const isServer = typeof window === 'undefined';
    if (isServer) {
        return makeConfiguredStore();
    } else {
        const persistedReducer = persistReducer(persistConfig, rootReducer);

        // Extend store type to allow __persistor
        const store: ReturnType<typeof configureStore> & { __persistor?: any } = configureStore({
            reducer: persistedReducer,
            middleware, // ✅ Apply the same middleware here!
        }) as ExtendedStore

        store.__persistor = persistStore(store);
        return store;
    }
};

// Inferred types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];