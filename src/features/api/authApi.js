import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { login as loginAction } from "../authSlice";

const USER_API = "http://localhost:3000/api/users";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // ==================== SIGNUP ===============================
    signup: builder.mutation({
      query: (inputData) => ({
        url: "/register",
        method: "POST",
        body: inputData,
      }),
    }),

    // ==================== LOGIN =================================
    login: builder.mutation({
      query: (inputData) => ({
        url: "/login",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        console.log("req received at rtk login");
        try {
          const { data } = await queryFulfilled;
          console.log("Login successful dataaaaaaaaaaaaaaaaaaaaaa of api:", data);
          dispatch(loginAction({ user: data.data }));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
export default authApi;
