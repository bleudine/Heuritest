import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import { fetchListing } from '../store/store';

import CryptoItemList from './CryptoItemList';
import CryptoListActions from './CryptoListActions';
import Loading from './component/Loading';
import { connectedListFetcher } from './container/connectedListFetcher';

import './styles/CryptoList.scss';

class List extends Component {

    state = {
        filter: '',
    };

    filterName (value) {
        this.setState((prevState, prevProps) => ({
            filter: value
        }))
    }

    componentWillMount () {
        const {currency, limit, start} = this.props;
        this.props.fetchList(currency, limit, start);
    }

    render () {
        
        return (
            <div className="CryptoList-container">
                <CryptoListActions filter={this.state.filter} filterName={this.filterName.bind(this)}/>
                {
                    this.props.error &&
                    <div className="CryptoList-errorContainer">
                        <span className="">An error occured. Please try again later.</span>
                    </div>
                }
                {
                    this.props.loading &&
                    <Loading />
                }
                {
                    !this.props.loading &&
                    this.props.list.filter(crypto => crypto.name.includes(this.state.filter)).map((crypto, index) => (
                        <CryptoItemList key={`key-${crypto.id}-${index}`} crypto={crypto}/>
                    ))
                }
            </div>
        )
    }
}

const CryptoList = connectedListFetcher(connect(
    state => ({
        list: state.listing.list,
        error: state.listing.error,
        loading: state.listing.loading,
    })
)(props => <List {...props} />))

export default CryptoList;