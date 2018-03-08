import React, { Component } from 'react';
import Counter from '../components/Counter'
import InputParam from '../components/InputParam'
import {connect} from 'react-redux'
import {loadData} from '../AC'

// export default 
class App extends Component {

 /* reqest = () => {  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.hh.ru/vacancies', false);
    xhr.send();
    if (xhr.status != 200) {
      alert( xhr.status + ': ' + xhr.statusText );
    } else {
      const data = JSON.parse(xhr.responseText)
      console.log(data.items)
      return (
        <div>
        {Object.keys(data.items)}
      </div>
      )
    }
  }*/

  componentDidMount() {
         this.props.loadData()
    //     console.log(this.props.loadData())
   }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <Counter />
          <InputParam />
          <h1 className="text-center">https://api.hh.ru/vacancies</h1>
        </header>
        <div>
      {
       //   {this.reqest()}
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {   // Функция берёт текущее состояние стора и возвращает то значение из него, которое необходимо здесь
  return {}
}

const decorator = connect(mapStateToProps, {loadData})
export default decorator(App)