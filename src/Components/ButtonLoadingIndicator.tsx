import { StyleSheet, View } from 'react-native'
import { Spinner } from '@ui-kitten/components'
import React from 'react'

const ButtonLoadingIndicator = () => (
  <View style={styles.indicator}>
    <Spinner size="small" />
  </View>
)

const styles = StyleSheet.create({
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ButtonLoadingIndicator
