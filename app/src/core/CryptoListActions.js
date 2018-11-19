import React, { Component } from 'react';
import { connect }          from 'react-redux';

import FilterName from './component/FilterName';
import Select from './component/Select';
import ConnectedSortButton from './container/ConnectedSortButton';
import { connectedListFetcher } from './container/connectedListFetcher';

import './styles/CryptoListActions.scss';

const SelectResults = connectedListFetcher((props) => (
    <Select {...props} options={[100, 10, 25, 50]} className="CryptoListActions-limiter" value="limit" />
));


const SelectCurrency = connectedListFetcher(connect(
    state => ({
        currencies: state.listing.currencies,
    })
)((props) => (
    <Select {...props} options={props.currencies} className="CryptoListActions-currency" value="currency"/>
)))

class CryptoListActions extends Component {
    render () {
        return (
            <div className="CryptoListActions">
                <div className="CryptoListActions-actions">
                    <button className="CryptoListActions-buttonTab">Cryptocurrencies</button>
                    <FilterName filterName={this.props.filterName} value={this.props.filter}/>
                    <SelectCurrency/>
                    <SelectResults/>
                </div>
                <div className="CryptoItemList-container">
                    <ConnectedSortButton listKey="rank" label="#" nested={false}/>
                    <ConnectedSortButton listKey="name" label="Name" nested={false}/>
                    <ConnectedSortButton listKey="market_cap" label="Market Cap" nested={true}/>
                    <ConnectedSortButton listKey="price" label="Price" nested={true}/>
                    <ConnectedSortButton listKey="volume_24h" label="Volume (24h)" nested={true}/>
                    <ConnectedSortButton listKey="circulating_supply" label="Cirulating Supply" nested={false}/>
                    <ConnectedSortButton listKey="percent_change_24h" label="Change (24h)" nested={true}/>
                </div>
            </div>
        );
    }
}

export default CryptoListActions;
