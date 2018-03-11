// import axios from 'axios';
// import SimpleStorageContract from '../../build/contracts/SimpleStorage.json';
// import getWeb3 from '../utils/getWeb3';

export function test() {
    return function (dispatch) {
        // axios.get('/api/poll/create')
        //     .then(function (response) {
        //         dispatch({
        //             type: "TEST_POLL",
        //             payload: response.data
        //         })
        //     }).catch(function (err) {
        //         dispatch({
        //             type: "GET_JAR_REJECTED",
        //             payload: err
        //         })
        //     })
        dispatch({
            type: "TEST_POLL",
            payload: 15
        })
    }
}