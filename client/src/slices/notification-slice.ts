import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { ApiErrorCode, NotificationsState, NotificationType } from '../types';

const initialState: NotificationsState = {};

const getError = (error: ApiErrorCode) => {
  switch (error) {
    case ApiErrorCode.OtherError:
      return 'Error has occured';
    case ApiErrorCode.CantFindUser:
      return "Couldn't find the user";
    case ApiErrorCode.NoPermissions:
      return 'You have no permissions';
    case ApiErrorCode.BadCredentials:
      return 'Wrong credentials';
    case ApiErrorCode.UserAlreadyExists:
      return 'The user already exists';
    default:
      return 'Error has occured';
  }
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    hideNotification: () => initialState,
    errorNotification: (state, { payload }: PayloadAction<ApiErrorCode>) => {
      state.notification = {
        type: NotificationType.Error,
        id: v4(),
        text: getError(payload),
      };
    },
    infoNotification: (state, { payload }: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.Info,
        id: v4(),
        text: payload,
      };
    },
    successNotification: (state, { payload }: PayloadAction<string>) => {
      state.notification = {
        type: NotificationType.Success,
        id: v4(),
        text: payload,
      };
    },
  },
});

export const { hideNotification, errorNotification, successNotification } =
  notificationSlice.actions;
