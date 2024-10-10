import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
})

export const baseApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    reducerPath: 'baseApi',
    tagTypes: ['Users'],
})
