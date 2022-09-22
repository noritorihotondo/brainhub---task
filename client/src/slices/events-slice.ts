import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventState, EventEntity, HttpMethod } from '../types';
import { api } from '../services';

const initialState: EventState = [];

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_u, { dispatch }) =>
  api<EventEntity[]>(dispatch, HttpMethod.Get, '/events'),
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
      if (!Array.isArray(payload)) return state;

      return payload;
    }),
});

export const {} = eventsSlice.actions;
