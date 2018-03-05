import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {viewInput, paramSubmit} from '../AC'

class InputParam extends Component {
    static propTypes = {
     //   newParam: PropTypes.string   // Брать эти значения надо не из пересылки от родительского элемента, а из стора
    }

    render() {
        return (
            <div>
                <h1>{this.props.newParam}</h1>
                <input value = {this.props.newParam} onChange = {e => this.handleInput(e.target.value)}></input>
                <button onClick = {this.handleSubmit}>Отправить запрос</button>
                <h1>{this.props.paramFromUser}</h1>
            </div>
        )
    }

    handleInput = e => {
       /*   this.props.dispatch({
            type: 'INPUTPARAM',
            payload: e
        })*/
      this.props.dispatch(viewInput(e)) 
    }

    handleSubmit = () => {  
        this.props.dispatch(paramSubmit(this.props.newParam))  
    }
    
}

function mapStateToProps(state) {   // Функция берёт текущее состояние стора и возвращает то значение из него, которое необходимо здесь
    return {
        newParam: state.newParam,
        paramFromUser: state.paramFromUser
    }
}

const decorator = connect(mapStateToProps)

export default decorator(InputParam)