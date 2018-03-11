import {
    combineReducers
} from 'redux';

import {
    pollReducer
} from './pollReducer';

import {
    web3Reducer
} from './web3Reducer';

import {
    simpleContract
} from './simpleContractReducer';

export default combineReducers({
    poll: pollReducer,
    web3: web3Reducer,
    simpleContract: simpleContract
});