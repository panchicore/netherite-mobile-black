import { api } from '@/Services/api'
import login from './login'
import logout from '@/Services/modules/auth/logout'

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: login(build),
    logout: logout(build),
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useLogoutMutation } = authApi
