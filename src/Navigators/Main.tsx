import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components'
import { EvaContainer } from '@/Containers'
import { OperationsNavigator } from '@/Navigators/Operations'

const { Navigator, Screen } = createBottomTabNavigator()

const TruckIcon = props => <Icon {...props} name="car-outline" />
const ArchiveIcon = props => <Icon {...props} name="archive-outline" />
const BarIcon = props => <Icon {...props} name="bar-chart-outline" />

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Operaciones" icon={TruckIcon} />
    <BottomNavigationTab title="Bases" icon={ArchiveIcon} />
    <BottomNavigationTab title="Informes" icon={BarIcon} />
  </BottomNavigation>
)

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Operaciones" component={OperationsNavigator} />
    <Screen name="Bases" component={EvaContainer} />
    <Screen name="Informes" component={EvaContainer} />
  </Navigator>
)

const MainNavigator = () => <TabNavigator />

export default MainNavigator
