import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { courses: []}
  }

  componentWillMount() {
    //fetch('https://canvas-api-wquesada.c9users.io/api/courses/')
    fetch('https://canvas-api-wquesada.c9users.io/api/courses/'
    //,{mode: 'no-cors'}
    )
      .then((response) => {
        return response.json()
      })
      .then((courses) => {
        this.setState({ courses: courses })
      })
  }

  render() {
    if (this.state.courses.length>0)
      return this.mostrarTabla()
    else
      return (<div>recuperando datos...</div>)
  }


  mostrarTabla() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>                 
          </tr>
        </thead>
        <tbody>  
          {this.state.courses.map(course => {
            return (
              <tr key={ course.id}>
                <td>{ course.id}</td>
                <td>{ course.name}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }

}

export default App;
