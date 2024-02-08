import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { setToken } from "./slice";
import { notify } from "notify";
import { selectAuthToken } from "store/auth/selectors";

const BASE_URL = "https://goit-task-manager.herokuapp.com";

const UNAUTHORIZED_ERROR_CODE = 401;

const USERS_ENDPOINT = "users";

const GET_USER_ENDPOINT = "me";
const LOG_IN_ENDPOINT = "login";
const LOG_OUT_ENDPOINT = "logout";
const SIGN_UP_ENDPOINT = "signup";

const getEndpoint = (...subEndpoints) =>
  [USERS_ENDPOINT, ...subEndpoints].join("/");

const logOut = dispatch => {
  dispatch(setToken(null));
  dispatch(taskManagerApi.util.resetApiState());
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = selectAuthToken(getState());

    if (token) headers.set("Authorization", `Bearer ${token}`);

    return headers;
  },
});

const baseQueryWithLogOut = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === UNAUTHORIZED_ERROR_CODE) {
    notify("You session has expired. Logging out...", "error");
    logOut(api.dispatch);
  }

  return result;
};

export const taskManagerApi = createApi({
  reducerPath: "taskManagerApi",
  baseQuery: baseQueryWithLogOut,
  endpoints: builder => ({
    getUser: builder.query({
      // Make the query call conditional based on the token in the state
      queryFn(a, { getState }, _, baseQuery) {
        if (!selectAuthToken(getState())) {
          return false;
        }

        return baseQuery(getEndpoint(GET_USER_ENDPOINT));
      },
    }),
    logIn: builder.mutation({
      query: body => ({
        url: getEndpoint(LOG_IN_ENDPOINT),
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(({ data }) => {
            dispatch(
              taskManagerApi.util.upsertQueryData(
                "getUser",
                undefined,
                data.user
              )
            );
            dispatch(setToken(data.token));
          })
          .catch(() =>
            notify(
              "Login was not successfull, please double check you credentials",
              "error"
            )
          );
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: getEndpoint(LOG_OUT_ENDPOINT),
        method: "POST",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(() => logOut(dispatch))
          .catch(() =>
            notify(
              "Login was not successfull, please double check you credentials",
              "error"
            )
          );
      },
    }),
    signUp: builder.mutation({
      query: body => ({
        url: getEndpoint(SIGN_UP_ENDPOINT),
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(({ data }) => dispatch(setToken(data.token)))
          .catch(e => {
            if (e?.error?.status === 400) {
              let errorReason = "";

              if (e.error?.data?.keyPattern?.email) {
                errorReason = "try using a different email address";
              } else if (e.error?.data?.errors?.password) {
                errorReason = "try using a stronger password";
              } else if (e.error?.data?.message) {
                errorReason = e.error.data.message;
              }

              notify(`The data provided is invalid. ${errorReason}`, "error");
            } else {
              notify(
                "Sign up was not successfull. Please try again later",
                "error"
              );
            }
          });
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useLogInMutation,
  useLogOutMutation,
  useSignUpMutation,
} = taskManagerApi;
