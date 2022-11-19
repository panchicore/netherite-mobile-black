import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import useAccount from '@/Hooks/useAccount'

const OperationsContainer = () => {
  const { t } = useTranslation()

  const { userInfo } = useAccount()

  return (
    <View>
      <Text>
        {userInfo?.username}: Copia el home de uiKitten app para que muestre el
        grid de las operaciones. - Termina CLIENTES.
      </Text>
    </View>
  )
}

export default OperationsContainer
