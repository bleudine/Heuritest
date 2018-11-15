export const GET_LISTINGS = Symbol('CRYPTO_GET_LISTINGS');
export const getCryptoListings = () => ({
    type: GET_LISTINGS,
});

export const RECEIVED_LISTINGS = Symbol('CRYPTO_RECEIVED_LISTINGS');
export const receivedCryptoListings = list => ({
    type: RECEIVED_LISTINGS,
    list
});

export const GET_CRYPTO = Symbol('CRYPTO_GET_CRYPTO');
export const getCrypto = id => ({
    type: GET_CRYPTO,
    id
});

export const RECEIVED_CRYPTO = Symbol('CRYPTO_RECEIVED_CRYPTO');
export const receivedCrypto = crypto => ({
    type: RECEIVED_CRYPTO,
    crypto
});