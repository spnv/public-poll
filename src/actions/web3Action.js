import getWeb3 from '../utils/getWeb3';

export function initWeb3() {
    return function (dispatch) {
        getWeb3
            .then(results => {
                dispatch({
                    type: "GET_WEB3",
                    payload: results
                })
            })
            .catch(() => {
                dispatch({
                    type: "GET_WEB3_REJECTED",
                    payload: 'Error finding web3.'
                })
            })
    }
}