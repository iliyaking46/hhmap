import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number   // Брать эти значения надо не из пересылки от родительского элемента, а из стора
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick = {this.handleIncrement}>Increment</button>
            </div>
        )
    }
    
    handleIncrement = () => {
        console.log('sdffv')
   /*   this.props.dispatch({
            type: 'INCREMENT'
        })*/
        this.props.dispatch(increment())    // Эта строка заменяет то, что закомментированно выше. Работает через папку АС
    }
    
}

function mapStateToProps(state) {   // Функция берёт текущее состояние стора и возвращает то значение из него, которое необходимо здесь
    return {
        counter: state.count
    }
}

const decorator = connect(mapStateToProps)

export default decorator(Counter)