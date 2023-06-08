import store from "../store";

const fetchDataRequest = () => {
    return {
        type: "CHECK_DATA_REQUEST",
    };
};

const fetchDataSuccess = (payload) => {
    return {
        type: "CHECK_DATA_SUCCESS",
        payload: payload,
    };
};

const fetchDataFail = (payload) => {
    return {
        type: "CHECK_DATA_FAILED",
        payload: payload,
    };
};


export const fetchData = (account) => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try{
            let allOwnerLips = await store.getState().blockchain.lipToken.methods.getOwnerLips(account).call();
            let allLips = await store.getState().blockchain.lipToken.methods.getLips().call();
            dispatch(fetchDataSuccess({allLips, allOwnerLips}));
        } catch(err) {
            console.log(err);
            dispatch(fetchDataFail("No se ha podido cargar los datos del Smart Contract!"));
        };
    };
};