import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<AuthResponse, Credentials>({
    query: credentials => ({
      url: '/auth/login/',
      method: 'POST',
      body: credentials,
    }),
  })

export type Credentials = {
  username: string
  password: string
}

export type User = {
  pk: number
  username: string
  email: string
  first_name: string
  last_name: string
}

export type Tokens = {
  refresh_token: string
  access_token: string
}

export type AuthResponse = {
  refresh_token: string
  access_token: string
  user: User
}
