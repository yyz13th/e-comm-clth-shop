import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from './root-reducer';

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares)); //spread because number of middlewares could increase in future

export const store = createStore(rootReducer, undefined, composeEnhancers);