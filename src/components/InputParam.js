import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {viewInput, paramSubmit} from '../AC'

class InputParam extends Component {
    static propTypes = {
     //   newParam: PropTypes.string   // Брать эти значения надо не из пересылки от родительского элемента, а из стора
    }

    
    render() {
        const zxc = this.props.newParam
        return (
            <div>
                <h1>{zxc.vacancies}</h1>
                <h1>{zxc.area}</h1>
                <input value = {zxc.vacancies} onChange = {e => this.handleInput(e.target.value, 'vacancies')}></input>
                <input value = {zxc.area} onChange = {e => this.handleInput(e.target.value, 'area')}></input>
                <button onClick = {this.handleSubmit}>Отправить запрос</button>
                <h1>{JSON.stringify(this.props.paramFromUser)}</h1>
            </div>
        )
    }

    handleInput = (e, n) => {
          //  console.log({n: e})
          //  let st = this.props.paramFromUser
            let fd = {}
            fd[n] = e
            this.props.dispatch({
            type: 'INPUTPARAM',
         //   payload: [fd, st]
            payload: fd
        })
     // this.props.dispatch(viewInput(e)) 
    }

    handleSubmit = () => {  
            this.props.dispatch({
                type: 'PARAMSUBMIT',
                payload: this.props.newParam
            })
        }
     //   this.props.dispatch(paramSubmit(this.props.newParam))  

    
}

function mapStateToProps(state) {   // Функция берёт текущее состояние стора и возвращает то значение из него, которое необходимо здесь
    return {
        newParam: state.newParam,
        paramFromUser: state.paramFromUser
    }
}

const decorator = connect(mapStateToProps)

export default decorator(InputParam)