import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {viewInput, paramSubmit} from '../AC'
//, loadData
// import forSelector from '../reducer/forSelector';

class InputParam extends Component {
    static propTypes = {
     //   newParam: PropTypes.string 
    }
    
 /*   componentDidMount() {
     //     this.props.loadData()
     //     console.log(this.props.loadData())
    }*/


    render() {
        const zxc = this.props.newParam
        const xcv = this.props.forSelector.response
                const cvb = typeof(xcv)

        return (
            <div>
                <h1>{zxc.vacancies}</h1>
                <h1>{zxc.area}</h1>
                <h1>{console.log(cvb)}</h1>
                <input value = {zxc.vacancies} onChange = {e => this.handleInput(e.target.value, 'vacancies')}></input>
                <input value = {zxc.area} onChange = {e => this.handleInput(e.target.value, 'area')}></input>
         {
          //      <select options = {this.dfdf}></select>
         }  
                <button onClick = {this.handleSubmit}>Отправить запрос</button>
                <button onClick = {this.dfdf}>Какой-то запрос</button>
                <div>______________________________________________________________________</div>
                <div>{JSON.stringify(this.props.forSelector.response)}</div>
            </div>
        )
    }

    dfdf = () => {
        console.log(this.props.forSelector.response)
        const xcv = this.props.forSelector.response.lines
        //.metro.response.lines         .metro.response.lines[0].stations
     /*   const stations = xcv.map(line =>
            [{ label: line.name, value: line.id }, ...line.stations.map(station => (
              {
                label: station.name,
                value: station.id
              }
            ))]
          ).reduce((newArr, nextArr) => [...newArr, ...nextArr], [])*/
          const qwqw = xcv.map(x => {
       //      return console.log(x.name)
       return x.name
            })
          return console.log(qwqw)
    }
//   
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
      /*      this.props.dispatch({
                type: 'PARAMSUBMIT', 
                payload: this.props.newParam
            })*/
            this.props.dispatch(paramSubmit(this.props.newParam)) 
        }
             
}

function mapStateToProps(state) { 
    return {
        newParam: state.newParam,
        paramFromUser: state.paramFromUser,
        forSelector: state.forSelector
    }
}



 //const decorator = connect(mapStateToProps, {loadData})
 const decorator = connect(mapStateToProps)

export default decorator(InputParam)