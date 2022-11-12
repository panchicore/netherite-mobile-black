import { createSlice } from '@reduxjs/toolkit'
import { Account } from '@/Services/modules/accounts/fetchAccounts'

const slice = createSlice({
  name: 'accounts',
  initialState: {
    account: null,
    accounts: [],
  } as AccountState,
  reducers: {
    setAccount: (state, { payload }) => {
      console.log('payload', payload)
      state.account = payload
    },
    setAccounts: (state, { payload }) => {
      state.accounts = payload
    },
  },
})

export const { setAccount, setAccounts } = slice.actions
export default slice.reducer

export type AccountState = {
  account: Account | null
  accounts: Account[]
}
