import SimpleStorageContract from '../../build/contracts/SimpleStorage.json';
import contract from 'truffle-contract';

const simpleStorage = contract(SimpleStorageContract);

export function setValue(web3) {
    return function (dispatch) {
        simpleStorage.setProvider(web3.currentProvider);
        let simpleStorageInstance

        web3.eth.getAccounts((error, accounts) => {
            simpleStorage.deployed().then((instance) => {
                simpleStorageInstance = instance
                // Stores a given value, 5 by default.
                return simpleStorageInstance.set(15, { from: accounts[0] })
            }).then((result) => {
                // Get the value from the contract to prove it worked.
                return simpleStorageInstance.get.call(accounts[0])
            }).then((result) => {
                // Update state with the result.
                dispatch({
                    type: "UPDATE_SC",
                    payload: result.c[0]
                })
            })
        })

    }
}