import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { fetchListing }                 from "../../store/store";


export function connectedListFetcher(WrappedComponent) {

    class ConnectedListFetcher extends Component {

        fetchList(defaultValues) {
            const { currency, limit, start } = defaultValues;
            this.props.fetchList(currency, limit, start);
        }

        render() {
            const {currency, limit, start} = this.props;

            return <WrappedComponent
                        {...this.props}
                        action={this.fetchList.bind(this)} 
                        defaultValues={{currency, limit, start}} />
        }

    }

    const ListFetcher = connect(
        state => ({
            currency  : state.listing.selected,
            limit     : state.listing.limit,
            start     : state.listing.start
        }),
        dispatch => ({
            fetchList: (currency, limit, start) => dispatch(fetchListing(currency, limit, start))
        })
    )(ConnectedListFetcher);

    return ListFetcher;
};