import React, { Component }                                         from 'react';
import { connect }                                                  from 'react-redux';
import { reverseListOrder, sortList, convertCurrency, limitResult } from "../actions";

/*
*
* Sort button to sort each columns in ascending or descending order
*
* */

const SortButton = connect(
    state => ({}),
    dispatch => ({
        sort: (key, nested) => dispatch(sortList(key, nested))
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        sort: () => dispatchProps.sort(ownProps.listKey, ownProps.nested)
    })
)(({ sort, label }) => (
    <button onClick={sort}>{label}</button>
));

/*
*
* Currency selector to convert currency in the table
*
* */

const SelectCurrency = connect(
    state => ({
        currencies: state.listing.currencies,
        limit     : state.listing.limit,
        start     : state.listing.start
    }),
    dispatch => ({
        convertCurrency: (currency, limit, start) => dispatch(convertCurrency(currency, limit, start))
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        convertCurrency: currency => dispatchProps.convertCurrency(currency, stateProps.limit, stateProps.start)
    })
)(({ convertCurrency, currencies }) => (
    <select onChange={e => convertCurrency(e.target.value)}>
        {
            currencies.map((currency, index) => (
                <option value={currency} key={`${currency}-${index}`}>{currency}</option>
            ))
        }
    </select>
));

/*
*
* Search field
*
* */

const FilterName = ({ filterName, value }) => (
    <input placeholder="Search" type="text" onChange={(e) => filterName(e.target.value)} value={value}/>
);

/*
*
* Button to limit results per page
*
* */

const ResultNumber = connect(
    state => ({
        currency: state.listing.selected,
        limit   : state.listing.limit,
        start   : state.listing.start
    }),
    dispatch => ({
        limitResult: (currency, limit, start) => dispatch(limitResult(currency, limit, start))
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        limitResult: limit => dispatchProps.limitResult(stateProps.currency, limit, stateProps.start)
    })
)(({ limitResult }) => (
    <select onChange={e => limitResult(e.target.value)}>
        {
            [100, 10, 25, 50].map((number, index) => (
                <option key={`key-${number}-${index}`} value={number}>{number}</option>
            ))
        }
    </select>
));

class CryptoListActions extends Component {
    render () {
        return (
            <div className="CryptoListActions">
                <SelectCurrency/>
                <FilterName filterName={this.props.filterName} value={this.props.filter}/>
                <ResultNumber/>
                <div className="CryptoItemList-container">
                    <SortButton listKey="rank" label="#" nested={false}/>
                    <SortButton listKey="name" label="Name" nested={false}/>
                    <SortButton listKey="market_cap" label="Market Cap" nested={true}/>
                    <SortButton listKey="price" label="Price" nested={true}/>
                    <SortButton listKey="volume_24h" label="Volume (24h)" nested={true}/>
                    <SortButton listKey="circulating_supply" label="Cirulating Supply" nested={false}/>
                    <SortButton listKey="percent_change_24h" label="Change (24h)" nested={true}/>
                </div>
            </div>
        );
    }
}

export default CryptoListActions;
