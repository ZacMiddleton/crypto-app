import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import theme from "./theme/themeReducer";
import currency from './currency/currencyReducer';
import coinData from './coinData';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'currency'],
}

const reducers = combineReducers({
  theme,
  currency,
  coinData,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
