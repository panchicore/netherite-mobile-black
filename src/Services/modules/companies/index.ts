import { api } from '@/Services/api'
import fetchOne from '@/Services/modules/companies/fetchOne'

export const companyApi = api.injectEndpoints({
  endpoints: build => ({
    fetchCompany: fetchOne(build),
  }),
  overrideExisting: false,
})

export const { useFetchCompanyQuery } = companyApi
