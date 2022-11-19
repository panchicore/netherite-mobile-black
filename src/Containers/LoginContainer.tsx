import { Button, Input, Text } from '@ui-kitten/components'
import { KeyboardAvoidingView } from '@/Components/extras/KeyboardAvoidingView'
import { ImageOverlay } from '@/Components/extras/ImageOverlay'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '@/Navigators/Application'
import { ArrowForwardIcon } from '@/Assets/Icons/icons'
import { useLoginMutation } from '@/Services/modules/auth'
import { useDispatch } from 'react-redux'
import ButtonLoadingIndicator from '@/Components/ButtonLoadingIndicator'
import { setUser } from '@/Store/Accounts'

interface LoginContainerProps {
  navigation: StackNavigationProp<RootStackParams, 'Login'>
}

const LoginContainer = ({
  navigation,
}: LoginContainerProps): React.ReactElement => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState<string>('c1logistics')
  const [password, setPassword] = useState<string>('C1?holamundo')

  const [login, { data, isSuccess, isLoading, isError, error }] =
    useLoginMutation()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data))
    }
  }, [data, isSuccess, dispatch])

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate('Main')
  }

  const onSignInButtonPress = async () => {
    await login({ username, password })
      .unwrap()
      .then(response => navigation.navigate('AccountsSelect'))
      .catch(e => console.log(e))
  }

  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require('@/Assets/Images/login-background.jpg')}
      >
        <View style={styles.signInContainer}>
          <Text style={styles.signInLabel} status="control" category="h4">
            BIENVENIDO
          </Text>

          <Button
            style={styles.signUpButton}
            appearance="ghost"
            status="control"
            size="small"
            accessoryLeft={ArrowForwardIcon}
            onPress={onSignUpButtonPress}
          >
            Registro
          </Button>
        </View>
        <View style={styles.formContainer}>
          <Input
            label="USUARIO"
            placeholder="Correo"
            status="control"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder="Password"
            label="PASSWORD"
            status="control"
            value={password}
            onChangeText={setPassword}
          />
          {isError && <Text style={styles.errorMessage}>{error.error}</Text>}
        </View>

        <Button
          status="control"
          size="large"
          onPress={onSignInButtonPress}
          accessoryLeft={isLoading ? ButtonLoadingIndicator : undefined}
        >
          INGRESAR
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  signInLabel: {
    flex: 1,
  },
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  passwordInput: {
    marginTop: 16,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#000000',
    backgroundColor: '#ff9e9e',
    borderColor: '#ff6969',
    padding: 10,
    borderWidth: 2,
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 6,
  },
})

export default LoginContainer
