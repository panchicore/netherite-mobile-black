import React, { ReactElement, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Divider,
  Drawer,
  DrawerElement,
  DrawerItem,
  IndexPath,
  Layout,
  Text,
} from '@ui-kitten/components'
import { SafeAreaLayout } from '@/Components/SafeAreaLayout'
import { useDispatch } from 'react-redux'
import { resetAccounts } from '@/Store/Accounts'
import { TruckIcon } from '@/Assets/Icons/icons'

export const HomeDrawer = ({
  navigation,
}: {
  navigation: any
}): DrawerElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | undefined>(
    undefined,
  )
  const dispatch = useDispatch()

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
        dispatch(resetAccounts)
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
