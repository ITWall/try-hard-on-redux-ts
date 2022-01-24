import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { url } from "inspector";
import { PagerUser } from "../interface/PageUser";
import { User } from "../interface/User";

const ReqresApi = createApi({
    reducerPath: 'ReqresApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    tagTypes: ['User', 'PageUser'],
    endpoints: (builder) => ({
        getListUser: builder.query<PagerUser<User>, number>({
            query: (pageNumber) => `users?page=${pageNumber}`,
            providesTags: ["PageUser"]
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'users/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['PageUser']
        }),
        getListUserDelay: builder.query<PagerUser<User>, number> ({
            query: (delayInSecond) => `users?delay=${delayInSecond}`,
            keepUnusedDataFor: 20,
        })
    })
})

export const {useGetListUserQuery, useCreateUserMutation, useGetListUserDelayQuery} = ReqresApi;
export default ReqresApi;