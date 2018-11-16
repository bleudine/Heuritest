import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import { getCryptoListings } from "../actions";

import CryptoItemList from './CryptoItemList';
import CryptoListActions from './CryptoListActions';

import './styles/CryptoList.scss';

class CryptoList extends Component {

    state = {
        filter: '',
    };

    filterName (value) {
        this.setState((prevState, prevProps) => ({
            filter: value
        }))
    }

    componentWillMount () {
        this.props.getListings()
    }

    render () {

        return (
            <div className="CryptoList-container">
                <CryptoListActions filter={this.state.filter} filterName={this.filterName.bind(this)}/>
                {
                    this.props.list.filter(crypto => crypto.name.includes(this.state.filter)).map((crypto, index) => (
                        <CryptoItemList key={`key-${crypto.id}-${index}`} crypto={crypto}/>
                    ))
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        list: state.listing.list,
        currency: state.listing.selected,
        limit: state.listing.limit,
        start: state.listing.start
    }),
    dispatch => ({
        getListings: (currency, limit, start) => dispatch(getCryptoListings(currency, limit, start))
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        getListings: () => dispatchProps.getListings(stateProps.currency, stateProps.limit, stateProps.start)
    })
)(CryptoList)