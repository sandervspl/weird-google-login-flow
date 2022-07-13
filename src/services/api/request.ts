import * as i from 'types';

import triggerErrorMessage from './triggerErrorMessage';
import handleStatusCodes from './handleStatusCodes';

const request: i.Request = ({
  path, options, file, json, errorConfig = {},
}) => new Promise(async (resolve, reject) => {
  fetch(path, options)
    .then(async (response) => {
      if (await handleStatusCodes(response.status)) return;

      if (response.ok) {
        if (file) return response.blob();
        if (json) return response.json();
        return response.text();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err: i.ApiError) => {
          triggerErrorMessage(errorConfig, err);
          reject(err);
        }).catch((err: i.ApiError) => {
          triggerErrorMessage(errorConfig, err);
          reject(err);
        });
      } catch (err) {
        triggerErrorMessage(errorConfig, json);
        reject(json);
      }
    });
});

export default request;
