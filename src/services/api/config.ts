import * as i from 'types';
import { toast } from 'react-toastify';

import { getApiUrl } from './getApiUrl';

const apiConfig: i.ApiConfigType = {
  /**
   * API base urls
   * @see generateOptions.js
   */
  apiUrls: {
    default: getApiUrl(),
  },

  /**
   * Login path of the app
   * Used to redirect for unauthorized calls
   * @see redirectToLogin.js
    */
  loginPath: '/auth/login',

  /**
   * Not found page of the app
   * Used to redirect if the client does not have access rights to the content
    */
  notFoundPath: '/niet-gevonden',

  /**
   * If the app isn't depended on authorization put this to false
   * @see generateOptions.js
   */
  defaultWithAuth: true,

  /**
   * Default API to choose if no option is given
   * @see generateOptions.js
   */
  defaultApi: 'default',

  /**
   * Trigger general error message for api failures
   * @param {string} message - generated error message
   *
   * Enter null to disable general error messages
   * @see errorMessages.js
   */
  errorMessageFunction: (message) => toast.error(message),
};

export default apiConfig;
