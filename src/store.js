import { configureStore } from '@reduxjs/toolkit';
import emailreducer from './redux/emailSlice';

export const store = configureStore({
  reducer: emailreducer,
});

// store.js

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import emailReducer from './redux/emailSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, emailReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
