import { notice, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default {
  showNotice() {
    notice({
      title: 'Nothing, write something!',
      delay: 1000,
    });
  },

  showSuccess() {
    success({
      title: 'Success!',
      delay: 1000,
    });
  },

  showError() {
    error({
      title: `Found nothing`,
      delay: 1000,
    });
  },
};
