import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  AccountsSelectContainer,
  LoginContainer,
  StartupContainer,
} from '@/Containers'
import { useTheme } from '@/Hooks'

import { navigationRef } from './utils'
import { MainNavigator } from '@/Navigators/Main'

export type StackParams = {
  Startup: undefined
  Login: undefined
  Main: undefined
  AccountsSelect: undefined
}

const Stack = createStackNavigator<StackParams>()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen
            name="AccountsSelect"
            component={AccountsSelectContainer}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
