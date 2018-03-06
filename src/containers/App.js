import React, { Component } from 'react';
import Counter from '../components/Counter'
import InputParam from '../components/InputParam'

export default class App extends Component {

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
