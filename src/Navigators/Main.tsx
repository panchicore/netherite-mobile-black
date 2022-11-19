import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { EvaContainer } from '@/Containers'
import { HomeBottomNavigation } from '@/Navigators/HomeBottomNavigation'
import { HomeDrawer } from '@/Navigators/MainDrawer'
import OperationsContainer from '@/Containers/OperationsContainer'
import useAccount from '@/Hooks/useAccount'

const { Navigator, Screen } = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const ROOT_ROUTES: string[] = ['Home', 'Operaciones', 'Bases', 'Informes']

const HomeTabsNavigator = (): React.ReactElement => (
  <Navigator
    screenOptions={({ route }) => {
      console.log(route)
      // const isNestedRoute: boolean = route?.state?.index > 0
      const isRootRoute: boolean = ROOT_ROUTES.includes(route.name)

      return {
        tabBarVisible: isRootRoute,
        headerShown: false,
      }
    }}
    tabBar={props => <HomeBottomNavigation {...props} />}
  >
    <Screen name="Operaciones" component={OperationsContainer} />
    <Screen name="Bases" component={EvaContainer} />
    <Screen name="Informes" component={EvaContainer} />
  </Navigator>
)

export const MainNavigator = (): React.ReactElement => {
  const { company } = useAccount()
  return (
    <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
      <Drawer.Screen
        name={company?.name || 'Netherite'}
        component={HomeTabsNavigator}
      />
    </Drawer.Navigator>
  )
}
