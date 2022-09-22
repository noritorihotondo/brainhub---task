import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { hideNotification } from '../../../slices';

export const Notification: React.FC = () => {
  const { notification } = useAppSelector(({ notification }) => notification);
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(hideNotification());

  if (!notification) return null;

  return (
    <Snackbar autoHideDuration={5000} open={Boolean(notification)} onClose={onClose}>
      <Alert onClose={onClose} severity={notification.type}>
        {notification.text}
      </Alert>
    </Snackbar>
  );
};
