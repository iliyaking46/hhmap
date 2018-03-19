import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {viewInput, paramSubmit, loadData } from '../AC'

class InputParam extends Component {
    static propTypes = {
     //   newParam: PropTypes.string 
    }

    render() {
    //  console.log('___________ImputParam.js___________(line 24)', this.props.data)
        const zxc = this.props.newParam
        const xcv = this.props.data.response
                const cvb = typeof(xcv)
        const slct = ['aaaa', 'bbbb', 'cccc']

        const resp = this.props.data.response
            return (
                <div>
                    <p>text:{zxc.vacancies}, schedule:{zxc.schedule}, experience: {zxc.experience}</p>
                    <p>{JSON.stringify(this.props.paramFromUser.vacancies)}</p>
                    <p>text:</p><input value = {zxc.vacancies} onChange = {e => this.handleInput(e.target.value, 'vacancies')}></input>
                    <p>schedule:</p><input value = {zxc.schedule} onChange = {e => this.handleInput(e.target.value, 'schedule')}></input>
                    <p>experience:</p><input value = {zxc.experience} onChange = {e => this.handleInput(e.target.value, 'experience')}></input>
                    <p></p><button onClick = {this.handleSubmit}>Отправить запрос</button>
                                <div>______________________________________________________________________</div>
                    <div>{JSON.stringify(this.props.data.response)}</div>
                </div>
            )
    }
   
    handleInput = (e, n) => {
            let fd = {}
            fd[n] = e
            this.props.dispatch({
            type: 'INPUTPARAM',
            payload: fd
        })
    }

    handleSubmit = () => {  
        /*      this.props.dispatch({
                    type: 'PARAMSUBMIT', 
                    payload: this.props.newParam
                })*/

        let download = new Promise((resolve, reject) => {
            resolve(this.props.dispatch(paramSubmit(this.props.newParam)))     
        })

        download.then(() => {
            let param = this.props.paramFromUser.vacancies
            
            let str = '/vacancies?text='
            let adress = str + param
            this.props.dispatch(loadData(adress))
        })
    }     
}

function mapStateToProps(state) { 
    return {
        newParam: state.newParam,
        paramFromUser: state.paramFromUser,
        data: state.data
    }
}

const decorator = connect(mapStateToProps)
export default decorator(InputParam)