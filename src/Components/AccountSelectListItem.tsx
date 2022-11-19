import React from 'react'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import { ListItem } from '@ui-kitten/components'
import { useFetchCompanyQuery } from '@/Services/modules/companies'
import { useDispatch } from 'react-redux'
import { setAccount, setCompany } from '@/Store/Accounts'

interface AccountSelectListItemProps {
  account: Account
}

const AccountSelectListItem = ({ account }: AccountSelectListItemProps) => {
  const { data: company } = useFetchCompanyQuery(account.id)
  const dispatch = useDispatch()
  const onPressed = () => {
    dispatch(setAccount(account))
    dispatch(setCompany(company))
  }
  if (company) {
    return (
      <ListItem
        onPress={onPressed}
        title={`${company.name}`}
        description={`${account.uuid}`}
      />
    )
  }
  return <ListItem title={`cargando...`} description={``} />
}

export default AccountSelectListItem
