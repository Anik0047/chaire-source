/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "./baseApi";


const siteSettingsApi = baseApi.enhanceEndpoints({ addTagTypes: ["SiteSettings"] }).injectEndpoints({
    endpoints: (builder) => ({

        //get all Site settings
        getSiteSettings: builder.query({
            query: () => {
                return {
                    url: "/web-settings",
                    method: "GET",
                };
            },
            providesTags: ["SiteSettings"],
        }),

        //update SiteSettings
        updateSiteSettings: builder.mutation({
            query: (data) => {
                return {
                    url: `/web-settings`,
                    method: "PATCH",
                    body: data
                };
            },
            invalidatesTags: ["SiteSettings"],
        }),
    }),
});

export const {
    useGetSiteSettingsQuery, useUpdateSiteSettingsMutation
} = siteSettingsApi;