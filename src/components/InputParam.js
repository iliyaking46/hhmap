import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {viewInput, paramSubmit, loadData } from '../AC'
//, loadData
// import data from '../reducer/data';

class InputParam extends Component {
    static propTypes = {
     //   newParam: PropTypes.string 
    }
    
 /*   componentDidMount() {
  //      this.props.dispatch(loadData('/metro/1'))
        this.props.dispatch(loadData('/dictionaries'))
  //    console.log(typeof(this.props.data.response))
    }*/





    render() {
        console.log(typeof(this.props.data.response))
        const zxc = this.props.newParam
        const xcv = this.props.data.response
                const cvb = typeof(xcv)
        const slct = ['aaaa', 'bbbb', 'cccc']

        const resp = this.props.data.response
    /*    if (resp == undefined) {
            return null    
        } else {*/
            return (
                <div>
                    <p>text:{zxc.vacancies}, schedule:{zxc.schedule}, experience: {zxc.experience}</p>
                    <p>{JSON.stringify(this.props.paramFromUser.vacancies)}</p>
                    <p>text:</p><input value = {zxc.vacancies} onChange = {e => this.handleInput(e.target.value, 'vacancies')}></input>
                    <p>schedule:</p><input value = {zxc.schedule} onChange = {e => this.handleInput(e.target.value, 'schedule')}></input>
                    <p>experience:</p><input value = {zxc.experience} onChange = {e => this.handleInput(e.target.value, 'experience')}></input>

             {
              //                <option value="A">Apple</option>
             //       <option value="B">Banana</option>
               //     <option value="C">Cranberry</option> 
               //        <select options = {slct} >           </select>
               //             <button onClick = {this.dfdf}>sfvsdfgsd</button>
             }   
             
             
                    <p></p><button onClick = {this.handleSubmit}>Отправить запрос</button>
                                 <div>______________________________________________________________________</div>
                    <div>{JSON.stringify(this.props.data.response)}</div>
                </div>
            )
      //  }
    }

    dfdf = () => {
    //    console.log(this.props.data.response)
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
            this.props.dispatch(paramSubmit(this.props.newParam))
            let wer = this.props.paramFromUser.vacancies
           // this.setState()
       
            if (wer != undefined & '') {
                let param = this.props.paramFromUser.vacancies
            let str = '/vacancies?text='
            let adress = str + param
this.props.dispatch(loadData(adress))
            } else {
                console.log('херня')
            }

           
   /*       
            console.log('------------------------', this.props)
            console.log('------------------------', this)
            //.paramFromUser.vacancies*/
        }     
}
/*
function erer(g, t) {
    let str = '/vacancies?text='
 let adress = str +  g
t.props.dispatch(loadData(adress))
 //this.props.dispatch(loadData(adress)) 
}*/
 




function mapStateToProps(state) { 
    return {
        newParam: state.newParam,
        paramFromUser: state.paramFromUser,
        data: state.data
    }
}



 //const decorator = connect(mapStateToProps, {loadData})
 const decorator = connect(mapStateToProps)

export default decorator(InputParam)