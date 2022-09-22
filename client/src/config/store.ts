import { configureStore } from '@reduxjs/toolkit';
import { notificationSlice, eventsSlice } from '../slices';

export const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
