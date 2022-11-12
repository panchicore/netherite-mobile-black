import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Company, number>({
    query: id => `/accounts/companies/${id}/`,
  })

export type Company = {
  id: number
  uuid: string
  name: string
}
