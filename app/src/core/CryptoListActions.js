import React, { Component } from 'react';
import { connect } from 'react-redux';

class SortButton extends Component {
    state = {
        reversed: true
    };

    render() {
        return (
            <button onClick={this.props.sort.bind(this)}>Cryptocurrencies</button>
        )
    }
}

export const ConnectedSortButton = connect(
    state => ({}),
    dispatch => ({
        sort: () => {}
    })
)(SortButton);
