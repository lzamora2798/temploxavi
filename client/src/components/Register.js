import React, { Component ,useState} from 'react'
//import { useHistory } from "react-router-dom";
import { register } from './UserFunctions'

function Register() {
  
    //this.onChange = this.onChange.bind(this)
    //this.onSubmit = this.onSubmit.bind(this)
    const [data,setData] = useState({
      name:"",
      address:"",
      phone:""
  })  
  //const history = useHistory();
  const onChange = e => {
    setData({ ...data,[e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()

    register(data).then(res => {
     // history.push("/login");
    })
  }

  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your first name"
                  value={data.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter your lastname name"
                  value={data.address}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="phone"
                  placeholder="Enter email"
                  value={data.phone}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  
                  
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  
}

export default Register
