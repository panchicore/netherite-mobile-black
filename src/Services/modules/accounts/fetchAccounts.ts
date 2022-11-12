import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<Account[], void>({
    query: () => '/accounts/',
  })

export type Account = {
  id: number
  uuid: string
  company: number
  user: number
}
