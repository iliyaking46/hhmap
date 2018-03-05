import React from 'react'
import propTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'

function Root(props) {
    return (
        <Provider store = {store}> 
            <App {...props} />
        </ Provider>
    )
}

Root.propTypes = {}

export default Root