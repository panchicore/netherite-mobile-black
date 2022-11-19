import AsyncStorage from '@react-native-async-storage/async-storage'
import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

import { api } from '@/Services/api'
import theme from './Theme'
import account from './Accounts'

const reducers = combineReducers({
  theme,
  account,
  api: api.reducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'user', 'account'],
}

const rootReducer = (
  state: ReturnType<typeof reducers> | undefined,
  action: AnyAction,
) => {
  if (action.type === 'RESET') {
    // helper to quickly reset redux storage by sending this action via flipper.
    return reducers(undefined, { type: undefined })
  }
  return reducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware)

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default
      middlewares.push(createDebugger())
    }

    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
