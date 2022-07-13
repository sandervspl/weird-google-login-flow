import ApiHelper from './api';
import * as middlewares from './middleware';

const api = new ApiHelper();
api.applyMiddleware(middlewares);

export default api;
