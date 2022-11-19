import React from 'react'
import { Account } from '@/Services/modules/accounts/fetchAccounts'
import { ListItem } from '@ui-kitten/components'
import { useFetchCompanyQuery } from '@/Services/modules/companies'
import { Company } from '@/Services/modules/companies/fetchOne'

interface AccountSelectListItemProps {
  account: Account
  onAccountSelect: (account: Account, company: Company) => void
}

const AccountSelectListItem = ({
  account,
  onAccountSelect,
}: AccountSelectListItemProps) => {
  const { data: company } = useFetchCompanyQuery(account.id)
  const onPressed = () => {
    onAccountSelect(account, company!)
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
