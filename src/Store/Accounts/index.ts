import { createSlice } from '@reduxjs/toolkit'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import { Tokens, User } from '@/Services/modules/auth/login'

const slice = createSlice({
  name: 'accounts',
  initialState: {
    current: null,
    all: [],
    user: null,
    company: null,
  } as AccountState,
  reducers: {
    setAccount: (state, { payload: current }) => {
      state.current = current
    },
    setAccounts: (state, { payload: accounts }) => {
      state.all = accounts
    },
    setUser: (state, { payload: { refresh_token, access_token, user } }) => {
      state.user = {
        info: user,
        tokens: { refresh_token, access_token },
      }
    },
    setCompany: (state, { payload: company }) => {
      state.company = company
    },
  },
})

export const { setAccount, setAccounts, setUser, setCompany } = slice.actions
export default slice.reducer

export type AccountState = {
  current: Account | null
  all: Account[]
  user: UserState | null
  company: CompanyState | null
}

export type UserState = {
  info: User
  tokens: Tokens
}

export type CompanyState = {
  id: number
  name: string
}
