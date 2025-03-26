import authReducer from './slices/authSlice';
import userManagementReducer from './slices/admin/userManagementSlice';
import genreManagementReducer from './slices/admin/genreManagementSlice';
import languageManagementReducer from './slices/admin/languageManagementSlice';
import genreReducer from './slices/user/genreSlice';
import userReducer from './slices/user/userSlice';
import movieReducer from './slices/user/movieSlice';
import ratingReducer from './slices/user/ratingSlice';
import watchlistReducer from './slices/user/watchlistSlice';
import languageReducer from './slices/user/languageSlice';
import celebrityManagementReducer from './slices/admin/celebrityManagementSlice';
import movieManagementReducer from './slices/admin/movieManagementSlice';
import reviewReducer from './slices/user/reviewSlice';
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
    user: userReducer,
    genre: genreReducer,
    language: languageReducer,
    celebrityManagement: celebrityManagementReducer,
    movieManagement: movieManagementReducer,
    movie: movieReducer,
    rating: ratingReducer,
    watchlist: watchlistReducer,
    review: reviewReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
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
                    'movieManagement/setPoster',
                    'movieManagement/setHorizontalPoster',
                    'movieManagement/setOtherImages',
                ],
                ignoredPaths: [
                    'movieManagement.poster',
                    'movieManagement.horizontalPoster',
                    'movieManagement.otherImages',
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


