import {showMessage} from 'react-native-flash-message';
import Toast from 'react-native-root-toast';

export const showToast = (type, message) => {
  showMessage({
    message,
    type,
  });
};

// Add a Toast on screen.
export const showNoti = (message, type) => {
  let color;
  switch (type) {
    case 'success':
      color = 'green';
      break;
    case 'error':
      color = 'red';
      break;
    default:
      break;
  }
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: color,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });

  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  setTimeout(function () {
    Toast.hide(toast);
  }, 1500);
};
