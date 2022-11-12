import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {
    accessToken: '',
    refreshToken: '',
    username: '',
    id: null,
  } as UserState,
  reducers: {
    setUser: (state, { payload: { refresh_token, access_token, user } }) => {
      state.accessToken = access_token
      state.refreshToken = refresh_token
      state.username = user.username
      state.id = user.pk
    },
  },
})

export const { setUser } = slice.actions
export default slice.reducer

export type UserState = {
  accessToken: string
  refreshToken: string
  username: string
  id: number | null
}
