import React, { useEffect } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import useAccount from '@/Hooks/useAccount'

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()
  const { isLoggedIn } = useAccount()

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 500),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })

    if (!isLoggedIn) {
      navigateAndSimpleReset('Login')
    } else {
      navigateAndSimpleReset('Main')
    }
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
