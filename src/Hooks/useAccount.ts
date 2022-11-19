import { useSelector } from 'react-redux'
import { AccountState } from '@/Store/Accounts'

export default function () {
  const { current, all, user, company } = useSelector(
    (state: { account: AccountState }) => state.account,
  )

  return {
    isLoggedIn: !!user?.info?.pk,
    current,
    company,
    all,
    userInfo: user?.info,
    accessToken: user?.tokens.access_token,
  }
}
