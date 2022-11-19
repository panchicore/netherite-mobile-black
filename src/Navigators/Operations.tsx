import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ClientsContainer from '@/Containers/ClientsContainer'
import OperationsContainer from '@/Containers/OperationsContainer'

const Stack = createStackNavigator()

export const OperationsNavigator = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name="Operations" component={OperationsContainer} />
    <Stack.Screen name="Clients" component={ClientsContainer} />
  </Stack.Navigator>
)
