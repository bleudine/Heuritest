import React, { Component, Fragment }  from 'react'
import { store }             from './store/store'
import { connect, Provider } from 'react-redux'

import CryptoList from './core/CryptoList';

class App extends Component {

    render () {
        return (
            <Provider store={store}>
                <Fragment>
                    <h2>Hello !</h2>
                    <CryptoList/>
                </Fragment>
            </Provider>
        )
    }
}

export default App