import React from 'react'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import { ListItem } from '@ui-kitten/components'
import { useFetchCompanyQuery } from '@/Services/modules/companies'
import { useDispatch } from 'react-redux'
import { setAccount } from '@/Store/Accounts'

interface AccountSelectListItemProps {
  item: Account
}

const AccountSelectListItem = ({ item }: AccountSelectListItemProps) => {
  const { data } = useFetchCompanyQuery(item.id)
  const dispatch = useDispatch()
  const onPressed = () => {
    dispatch(setAccount(item))
  }
  if (data) {
    return (
      <ListItem
        onPress={onPressed}
        title={`${data.name}`}
        description={`${item.uuid}`}
      />
    )
  }
  return <ListItem title={`cargando...`} description={``} />
}

export default AccountSelectListItem
