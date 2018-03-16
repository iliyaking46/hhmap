import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loader } from '../helpers'
import { loadData, loadPage } from '../actions/table'
import { changePage } from '../actions/main'

class JobsTable extends Component {
  componentDidMount() {
    this.props.changePage('home')
    // этот код для сверки с текущим состоянием, если есть какая то дата, которая уже была загружена, то не надо грузить еще раз
    const { searchText, searchMetroId } = this.props.app
    if (
      searchText !== this.props.table.paramOfData.searchText ||
      searchMetroId !== this.props.table.paramOfData.searchMetroId
    ) {
      this.props.loadData(searchText, searchMetroId)
    }
  }

  paginFunc = () => {
    console.log(this.props.table)
    const { paramOfData } = this.props.table
    const { loadPage } = this.props
    //  if (paramOfData.found === 0 || paramOfData.pages === 1) return null
    if (paramOfData.pages === 0 || paramOfData.pages === 1) return null
    switch (paramOfData.page) {
      case 1:
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={() => loadPage(paramOfData, 0)}>
                Вперед
              </button>
            </li>
          </ul>
        )
      case paramOfData.pages:
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={() => loadPage(paramOfData, 2)}>
                Назад
              </button>
            </li>
          </ul>
        )
      default:
        return (
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" onClick={() => loadPage(paramOfData, 2)}>
                Назад
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={() => loadPage(paramOfData, 0)}>
                Вперед
              </button>
            </li>
          </ul>
        )
    }
  }

  paginButton = e => {
    //  console.log('_______________components/JobsTable.js(line 67)_______________', e)
    const df = this.props.table.paramOfData
    df.page = e
    this.props.loadPage(df, 1)
  }

  render() {
    const { data, isLoadData, paramOfData } = this.props.table

    const listOfPages = []
    if (paramOfData.pages === 1) {
      listOfPages[1] = null
    } else {
      for (let i = 1; i <= paramOfData.pages; i++) {
        listOfPages[i] = { page: i }
      }
    }

    return isLoadData ? (
      <div className="mt-3">
        <h2 className="text-center">Найдено {paramOfData.found} вакансий</h2>
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
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link to={`vacancies/${item.id}`}>{item.name}</Link>
                </td>
                <td>{item.employer.name}</td>
                <td>
                  {(item.salary != null &&
                    item.salary.from != null &&
                    `от ${item.salary.from} ${item.salary.currency}`) ||
                    'не указана'}
                </td>
                <td>
                  {(item.salary != null && item.salary.to != null && `до ${item.salary.to} ${item.salary.currency}`) ||
                    'не указана'}
                </td>
                <td>{new Date(item.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Страница: {paramOfData.page}</p>
        <div>{this.paginFunc()}</div>
        <div>
          {listOfPages.map(item => {
            if (item == null) {
              return null
            }
            return (
              <button style={{ display: 'inline-block' }} key={item.page} onClick={() => this.paginButton(item.page)}>
                {item.page}
              </button>
            )
          })
          //   this.button()
          }
        </div>
      </div>
    ) : (
      loader
    )
  }
}

export default connect(
  state => ({
    table: state.table,
    app: state.app,
  }),
  { loadData, loadPage, changePage }
)(JobsTable)
