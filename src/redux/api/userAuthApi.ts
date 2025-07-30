/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const userAuthApi = baseApi.enhanceEndpoints({ addTagTypes: ["Users"] }).injectEndpoints({
    endpoints: (builder) => ({
        signupUser: builder.mutation({
            query: (userData) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userData
            }),
        }),
    }),
});

export const {
    useSignupUserMutation
} = userAuthApi;