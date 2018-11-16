export const GET_LISTINGS = Symbol('GET_LISTINGS');
export const getCryptoListings = (currency, limit, start) => ({
    type: GET_LISTINGS,
    currency,
    limit,
    start
});

export const RECEIVED_LISTINGS = Symbol('RECEIVED_LISTINGS');
export const receivedCryptoListings = list => ({
    type: RECEIVED_LISTINGS,
    list
});

export const GET_CRYPTO = Symbol('GET_CRYPTO');
export const getCrypto = id => ({
    type: GET_CRYPTO,
    id
});

export const RECEIVED_CRYPTO = Symbol('RECEIVED_CRYPTO');
export const receivedCrypto = crypto => ({
    type: RECEIVED_CRYPTO,
    crypto
});

export const REVERSE_LIST_ORDER = Symbol('REVERSE_LIST_ORDER');
export const reverseListOrder = () => ({
    type: REVERSE_LIST_ORDER,
});

export const SORT_LIST = Symbol('SORT_LIST');
export const sortList = (key, nested) => ({
    type: SORT_LIST,
    key,
    nested
});

export const CONVERT_CURRENCY = Symbol('CONVERT_CURRENCY');
export const convertCurrency = (currency, limit, start) => ({
    type: CONVERT_CURRENCY,
    currency,
    limit,
    start,
});

export const SET_CURRENCY = Symbol('SET_CURRENCY');
export const setCurrency = currency => ({
    type: SET_CURRENCY,
    currency
});

export const SET_LIMIT = Symbol('SET_LIMIT');
export const setLimit = limit => ({
    type: SET_LIMIT,
    limit,
});

export const LIMIT_RESULT = Symbol('LIMIT_RESULT');
export const limitResult = (currency, limit, start) => ({
    type: LIMIT_RESULT,
    currency,
    limit,
    start,
});