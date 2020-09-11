import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <h3> TEMPLO ZAVI</h3>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">TEMPLO ZAVI</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Quienes Somos<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Personal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alumnos">Estudiantes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Trofeos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Torneos</Link>
            </li>

            
          </ul>
        
        </div>
        
        
      </nav>
    )
  }
}

export default withRouter(Landing)
