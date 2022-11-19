import React, { ReactElement, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Divider,
  Drawer,
  DrawerElement,
  DrawerItem,
  Icon,
  IndexPath,
  Layout,
  Text,
} from '@ui-kitten/components'
import { SafeAreaLayout } from '@/Components/SafeAreaLayout'

const TruckIcon = props => <Icon {...props} name="car-outline" />

export const HomeDrawer = ({ navigation }): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null)

  const DATA = [
    {
      title: 'Libraries',
      icon: TruckIcon,
      onPress: () => {
        navigation.toggleDrawer()
        navigation.navigate('Libraries')
      },
    },
    {
      title: 'Salir',
      icon: TruckIcon,
      onPress: () => {
        navigation.navigate('Login')
        navigation.toggleDrawer()
      },
    },
  ]

  const renderHeader = (): ReactElement => (
    <SafeAreaLayout insets="top" level="2">
      <Layout style={styles.header} level="2">
        <View style={styles.profileContainer}>
          {/*<Avatar*/}
          {/*  size="giant"*/}
          {/*  source={require('../../assets/images/image-app-icon.png')}*/}
          {/*/>*/}
          <Text style={styles.profileName} category="h6">
            Kitten Tricks
          </Text>
        </View>
      </Layout>
    </SafeAreaLayout>
  )

  const renderFooter = () => (
    <SafeAreaLayout insets="bottom">
      <React.Fragment>
        <Divider />
        <View style={styles.footer}>
          <Text>{`Version X`}</Text>
        </View>
      </React.Fragment>
    </SafeAreaLayout>
  )

  return (
    <Drawer
      header={renderHeader}
      footer={renderFooter}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      {DATA.map((el, index) => (
        <DrawerItem
          key={index}
          title={el.title}
          onPress={el.onPress}
          accessoryLeft={el.icon}
        />
      ))}
    </Drawer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
})
