import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Layout, Text } from '@ui-kitten/components'

const BasesContainer = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">HOME</Text>
      <Button onPress={() => setCounter(counter + 1)}>BUTTON</Button>

      <Text style={styles.text}>Pressed {counter} times</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
})

export default BasesContainer
