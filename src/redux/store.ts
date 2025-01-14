import authReducer from './slices/authSlice';
import userManagementReducer from './slices/admin/userManagementSlice';
import genreManagementReducer from './slices/admin/genreManagementSlice';
import languageManagementReducer from './slices/admin/languageManagementSlice';
// import userInfoReducer from './slices/user/userInfoSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    userManagement: userManagementReducer,
    genreManagement: genreManagementReducer,
    languageManagement: languageManagementReducer,
    // userInfo: userInfoReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userManagement'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/PAUSE',
                    'persist/FLUSH',
                    'persist/PURGE',
                    'persist/REGISTER',
                ],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;



// import {configureStore} from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import userManagementReducer from './slices/admin/userManagementSlice';

// const store = configureStore({
//     reducer:{
//         auth: authReducer,
//         userManagement: userManagementReducer,
//     },
// });
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;


