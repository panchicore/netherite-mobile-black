import { List, TopNavigation } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParams } from '@/Navigators/Application'
import { useDispatch, useSelector } from 'react-redux'
import { UserState } from '@/Store/User'
import { SafeAreaLayout } from '@/Components/SafeAreaLayout'
import { useFetchAccountsQuery } from '@/Services/modules/accounts'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import AccountSelectListItem from '@/Components/AccountSelectListItem'
import { setAccounts as setAccountAction } from '@/Store/Accounts'

interface AccountsSelectContainerProps {
  navigation: StackNavigationProp<StackParams, 'AccountsSelect'>
}

const AccountsSelectContainer = ({
  navigation,
}: AccountsSelectContainerProps): React.ReactElement => {
  const dispatch = useDispatch()
  const user = useSelector((state: { user: UserState }) => state.user)
  const [accounts, setAccounts] = useState<Account[]>([])

  const { data, isLoading, error, isError } = useFetchAccountsQuery()

  useEffect(() => {
    if (data) {
      dispatch(setAccountAction(data))
    }
  }, [data])

  const renderItem = ({ item, index }) => <AccountSelectListItem item={item} />

  return (
    <SafeAreaLayout style={styles.container} insets="top">
      <TopNavigation title="Seleccione su cuenta" />
      <List data={data} renderItem={renderItem} style={styles.list} />
    </SafeAreaLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingVertical: 24,
    //paddingHorizontal: 16,
  },
  list: {
    flex: 1,
  },
})

export default AccountsSelectContainer
