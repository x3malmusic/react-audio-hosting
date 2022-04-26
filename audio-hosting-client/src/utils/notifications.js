import { Store } from 'react-notifications-component';

export const notify = (notification) => {
  if(notification.message) {
    Store.addNotification({
      title: notification.title,
      message: notification.message,
      type: notification.type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  }
}