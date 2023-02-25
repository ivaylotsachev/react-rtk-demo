import { configureStore } from '@reduxjs/toolkit';
import toursReducer from '../features/tours/toursSlice';

const store = configureStore({
    reducer: {
        tours: toursReducer,
    },
});

console.log('Store initialized', store.getState());

export default store;
