import React, { Component } from 'react';

import './styles/CryptoItemList.scss';
class CryptoItemList extends Component {

    render() {
        console.log(this.props.crypto);
        const {crypto} = this.props;
        const {market_cap, price, percent_change_24h, volume_24h } = this.props.crypto.quotes.USD;
        return (
            <div className="CryptoItemList-container" key={'key-' + crypto.id}>
                <span className="CryptoItemList-rank">{crypto.rank}</span>
                <span className="CryptoItemList-name">{crypto.name}</span>
                <span className="CryptoItemList-cap">${market_cap}</span>
                <span className="CryptoItemList-price">${price}</span>
                <span className="CryptoItemList-volume">${volume_24h}</span>
                <span className="CryptoItemList-circulating">{crypto.circulating_supply + ' ' + crypto.symbol}</span>
                <span className={`CryptoItemList-change ${percent_change_24h > 0 ? 'positive' : ''}`}>{percent_change_24h}%</span>
            </div>
        )
    }
}

export default CryptoItemList;