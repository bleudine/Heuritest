import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {getCryptoListings}          from "../actions";

import CryptoItemList from './CryptoItemList';

import './styles/CryptoList.scss';

class CryptoList extends Component {
    componentWillMount() {
        this.props.getListings()
    }
    render() {
        return (
            <div className="CryptoList-container">
                {
                    this.props.list.map(crypto => (
                        <CryptoItemList crypto={crypto}/>
                    ))
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        list: state.listing.list,
    }),
    dispatch => ({
        getListings: () => dispatch(getCryptoListings())
    })
)(CryptoList)