import React, { Component }  from 'react'
import { store }             from './store/store'
import { connect, Provider } from 'react-redux'

class App extends Component {

    render () {
        return (
            <Provider store={store}>
                <h2>Hello !</h2>
            </Provider>
        )
    }
}

export default App