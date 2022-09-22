export enum NotificationType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
}

export interface Notification {
  type: NotificationType;
  text: string;
  id: string;
}

export interface NotificationsState {
  notification?: Notification;
}
