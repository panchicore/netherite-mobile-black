import { List, TopNavigation } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { SafeAreaLayout } from '@/Components/SafeAreaLayout'
import { useFetchAccountsQuery } from '@/Services/modules/accounts'
import AccountSelectListItem from '@/Components/AccountSelectListItem'
import {
  setAccount,
  setAccounts as setAccountsAction,
  setCompany,
} from '@/Store/Accounts'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import { Company } from '@/Services/modules/companies/fetchOne'

const AccountsSelectContainer = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { data: accounts } = useFetchAccountsQuery()

  useEffect(() => {
    if (accounts) {
      dispatch(setAccountsAction(accounts))
    }
  }, [accounts, dispatch])

  const selectAccount = (account: Account, company: Company) => {
    dispatch(setAccount(account))
    dispatch(setCompany(company))
    navigateAndSimpleReset('Main')
  }

  return (
    <SafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title="Seleccione su cuenta" />
      <List
        data={accounts}
        renderItem={({ item: account }) => (
          <AccountSelectListItem
            account={account}
            onAccountSelect={selectAccount}
          />
        )}
        style={styles.list}
      />
    </SafeAreaLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
})

export default AccountsSelectContainer
