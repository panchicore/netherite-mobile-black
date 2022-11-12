import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<void, void>({
    query: () => ({
      url: '/auth/logout/',
      method: 'POST',
    }),
  })
