import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/CryptoItemList.scss';

const currency = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
};

class CryptoItemList extends Component {

    render() {
        const {crypto, currency, selected} = this.props;

        if (crypto.quotes[selected] === undefined) {
            return null
        }

        const {market_cap, price, percent_change_24h, volume_24h } = crypto.quotes[selected];
        return (
            <div className="CryptoItemList-container" key={'key-' + crypto.id}>
                <span className="CryptoItemList-rank">{crypto.rank}</span>
                <span className="CryptoItemList-name">
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/16x16/${crypto.id}.png`} alt={`crypto_logo_${crypto.id}_png`} />
                    <span>{crypto.name}</span>
                </span>
                <span className="CryptoItemList-cap">{`${currency} ${market_cap}`}</span>
                <span className="CryptoItemList-price">{`${currency} ${price}`}</span>
                <span className="CryptoItemList-volume">{`${currency} ${volume_24h}`}</span>
                <span className="CryptoItemList-circulating">{crypto.circulating_supply + ' ' + crypto.symbol}</span>
                <span className={`CryptoItemList-change ${percent_change_24h > 0 ? 'positive' : ''}`}>{percent_change_24h}%</span>
            </div>
        )
    }
}

export default connect(
    state => ({
        currency: currency[state.listing.selected],
        selected: state.listing.selected,
    })
)(CryptoItemList);