export const GET_LISTINGS      = Symbol('GET_LISTINGS');
export const getCryptoListings = (currency, limit, start) => ({
    type: GET_LISTINGS,
    currency,
    limit,
    start
});

export const RECEIVED_LISTINGS      = Symbol('RECEIVED_LISTINGS');
export const receivedCryptoListings = list => ({
    type: RECEIVED_LISTINGS,
    list
});

export const RECEIVED_LISTINGS_ERROR = Symbol('RECEIVED_LISTINGS_ERROR');
export const receivedListingsError   = error => ({
    type: RECEIVED_LISTINGS_ERROR,
    error
});

export const SORT_LIST = Symbol('SORT_LIST');
export const sortList  = (key, nested) => ({
    type: SORT_LIST,
    key,
    nested
});

export const SET_CURRENCY = Symbol('SET_CURRENCY');
export const setCurrency  = currency => ({
    type: SET_CURRENCY,
    currency
});

export const SET_LIMIT = Symbol('SET_LIMIT');
export const setLimit  = limit => ({
    type: SET_LIMIT,
    limit,
});