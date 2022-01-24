import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import User from '../interface/User'

export const GithubAPI = createApi({
    reducerPath: 'GithubAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        getUserByName: builder.mutation<User, string>({
            query: (name) => `users/${name}`
        }),
    })
})

export const {useGetUserByNameMutation} = GithubAPI;
export default GithubAPI;