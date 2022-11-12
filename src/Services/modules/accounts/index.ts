import { api } from '@/Services/api'
import fetchAccounts from './fetchAccounts'

export const accountApi = api.injectEndpoints({
  endpoints: build => ({
    fetchAccounts: fetchAccounts(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchAccountsQuery, useFetchAccountsQuery } = accountApi
