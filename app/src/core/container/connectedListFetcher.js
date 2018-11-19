import React            from 'react';
import { connect }      from 'react-redux';
import { sortList }     from "../actions";
import { fetchListing } from "../store/store";


export function connectedListFetcher(Component) {
    return connect(
        state => ({
            currencies: state.listing.currencies,
            limit     : state.listing.limit,
            start     : state.listing.start
        }),
        dispatch => ({
            fetchListing: (limit, start) => (currency) => dispatch(fetchListing(currency, limit, start))
        }),
        (stateProps, dispatchProps, ownProps) => ({
            ...stateProps,
            ...dispatchProps,
            ...ownProps,
            fetchListing: dispatchProps.fetchListing(stateProps.limit, stateProps.start)
        })
    )(Component);
};