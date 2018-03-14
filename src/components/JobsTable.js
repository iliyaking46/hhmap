//  import React from 'react';
import { Link, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPage } from '../actions/main'
//  export const JobsTable = ({ data, paramOfData }) => {
  
class JobsTable extends Component {

  paginFunc = () => {
    if (this.props.paramOfData.page == 1 && this.props.paramOfData.pages == 1) {
      return null
    } else if (this.props.paramOfData.page == 1 ) {
        let df = this.props.paramOfData
        //  console.log(this.props.paramOfData.pages)
        return <button onClick={() => this.props.loadPage(df, 0)}>Дальше</button> 
    } else if (this.props.paramOfData.page == this.props.paramOfData.pages) {
        let df = this.props.paramOfData
        return <button onClick={() => this.props.loadPage(df, 2)}>Назад</button>
    } else {
        let df = this.props.paramOfData
        return (
          <div>
            <button onClick={() => this.props.loadPage(df, 2)}>Назад</button>
            <button  onClick={() => this.props.loadPage(df, 0)}>Дальше</button>
          </div>
        )
    }      
  }

  paginButton = (e) => {
    //  console.log('_______________components/JobsTable.js(line 33)_______________', e)
    let df = this.props.paramOfData
    df.page = e
    this.props.loadPage(df, 1)  
  } 
/*
  button = () => {
    const listOfPages = []
    if (this.props.paramOfData.pages == 1) {
      listOfPages[1] = null
    } else {
      for (let i = 1 ; i <= this.props.paramOfData.pages; i++ ) {
        listOfPages[i] = {page: i, }
      }
    }
    for (let i = 1 ; i <= this.props.paramOfData.pages; i++ ) {
      listOfPages[i] = {page: i, }
    }
    listOfPages.map(item => {
      console.log(item)
      return (
        <div>
     {   console.log('5285285285285')}
        <button style={{display:'inline-block'}} key={item.page} onClick={() => this.paginButton(item.page)}>{item.page}</button>
        </div>
      )
    })
  }*/

  render() {

    const listOfPages = []
    if (this.props.paramOfData.pages == 1) {
      listOfPages[1] = null
    } else {
      for (let i = 1 ; i <= this.props.paramOfData.pages; i++ ) {
        listOfPages[i] = {page: i, }
      }
    }
    

    //  console.log('_______________components/JobsTable.js(line 54)_______________', listOfPages)
    return (
      <div className="mt-3" >
        <h2 className="text-center" >Найдено {this.props.paramOfData.found} вакансий</h2>
        <table className="table table-bordered">
          <thead>
            <tr className="thead-light">
              <th>Название</th>
              <th>Работодатель</th>
              <th>Зарплата от</th>
              <th>Зарплата до</th>
              <th>Создана</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map(item => {
                return (
                  <tr key={item.id}>
                    <td><Link to={`vacancies/${item.id}`}>{item.name}</Link></td>
                    <td>{item.employer.name}</td>
                    <td>
                      {
                        (item.salary != null && item.salary.from != null &&
                        `от ${item.salary.from} ${item.salary.currency}`) || 
                        'не указана'
                      }
                    </td>
                    <td>
                      {
                        (item.salary != null && item.salary.to != null &&
                        `до ${item.salary.to} ${item.salary.currency}`) || 
                        'не указана'
                      }
                    </td>
                    <td>{new Date(item.created_at).toLocaleString()}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div>
          <p>Страница: {this.props.paramOfData.page}</p>
          { this.paginFunc() /* Туда-сюда-кнопки  */}
          <div style={{whiteSpace:'nowrap', width:200, owerflow:'hidden', owerflowX:'scroll'}/* Не знаю, какого хрена скролл не появляется в этом блоке, но это и не важно */}> 
            { 
              listOfPages.map(item => {
                if (item == null) {
                  return null
                } else {
                    return (
                      <button style={{display:'inline-block'}} key={item.page} onClick={() => this.paginButton(item.page)}>{item.page}</button>
                    )
                }
              })
           //   this.button()
            }
          </div>
        </div>
      </div>
    )
  } 
}

// export default JobsTable;
export default connect(state => ({
  table: state,
}), { loadPage })(JobsTable)
