import { List, TopNavigation } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { SafeAreaLayout } from '@/Components/SafeAreaLayout'
import { useFetchAccountsQuery } from '@/Services/modules/accounts'
import AccountSelectListItem from '@/Components/AccountSelectListItem'
import { setAccounts as setAccountsAction } from '@/Store/Accounts'

const AccountsSelectContainer = (): React.ReactElement => {
  const dispatch = useDispatch()
  const { data: accounts } = useFetchAccountsQuery()

  useEffect(() => {
    if (accounts) {
      dispatch(setAccountsAction(accounts))
    }
  }, [accounts, dispatch])

  return (
    <SafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title="Seleccione su cuenta" />
      <List
        data={accounts}
        renderItem={({ item: account }) => (
          <AccountSelectListItem account={account} />
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
