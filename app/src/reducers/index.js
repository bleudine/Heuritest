import {
    GET_LISTINGS,
    GET_CRYPTO,
    RECEIVED_LISTINGS,
    REVERSE_LIST_ORDER,
    SORT_LIST,
    RECEIVED_NEW_CURRENCY, CONVERT_CURRENCY, SET_CURRENCY, SET_LIMIT
} from "../actions";

const defaultState = {
    listing: {
        list      : [],
        sortedKey : 'rank',
        ascending : true,
        limit     : 100,
        start     : 1,
        currencies: ['USD', 'GBP', 'EUR'],
        selected  : 'USD'
    }
};

export const listing = (state = defaultState.listing, action) => {
    switch (action.type) {
        case RECEIVED_LISTINGS:
            return {
                ...state,
                list: action.list.sort((a, b) => a.rank - b.rank)
            };
        case REVERSE_LIST_ORDER:
            let reversed = [];
            for (let i in state.list) {
                reversed = [state.list[i], ...reversed]
            }
            return {
                ...state,
                list: reversed
            };
        case SORT_LIST:
            return {
                ...state,
                list     : [
                    ...state.list.sort(function (a, b) {
                        const isAscending = (state.ascending ? 1 : -1) * (state.sortedKey === action.key ? 1 : -1);
                        if (action.nested) {
                            if (a.quotes[state.selected][action.key] < b.quotes[state.selected][action.key]) return -1 * isAscending;
                            if (a.quotes[state.selected][action.key] > b.quotes[state.selected][action.key]) return isAscending;
                        }
                        if (a[action.key] < b[action.key]) return -1 * isAscending;
                        if (a[action.key] > b[action.key]) return isAscending;
                        return 0;
                    })
                ],
                sortedKey: action.key,
                ascending: action.key === state.sortedKey ? !state.ascending : state.ascending,
            };
        case SET_CURRENCY:
            return {
                ...state,
                selected: action.currency
            };
        case SET_LIMIT:
            return {
                ...state,
                limit: action.limit,
            };
        default:
            return state;
    }
};