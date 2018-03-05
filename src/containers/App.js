import React, { Component } from 'react';
import Counter from '../components/Counter'
import InputParam from '../components/InputParam'

export default class App extends Component {

  reqest = () => {  // "Это, конечно, идиотизм, но я просто хотел попробовать сделать запрос
        // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'https://api.hh.ru/vacancies', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      alert( xhr.responseText ); // responseText -- текст ответа.
    }
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
          {this.reqest()}
        </div>
      </div>
    );
  }
}
