import {baseApi} from '@/services/base-api';

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserByName: builder.query<UserType[], {username: string}>({
            query: (username) => ({
                url: `users`,
                params: username ?? undefined
            }),
            providesTags: ['Users'],
        }),
    }),
});

export const { useGetUserByNameQuery } = usersApi;
