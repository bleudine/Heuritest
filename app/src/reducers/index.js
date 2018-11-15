import { GET_LISTINGS, GET_CRYPTO, RECEIVED_LISTINGS } from "../actions";

const defaultState = {
    listing: {
        list: []
    }
};

export const listing = (state = defaultState.listing, action) => {
    switch (action.type) {
        case RECEIVED_LISTINGS:
            return {
                ...state,
                list: action.list
            };
        default:
            return state;
    }
};