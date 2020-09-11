import React, { useState} from 'react'
//import { useHistory } from "react-router-dom";
import axios from 'axios'
import Spinner from './Spinner';
function RegisterAlumno() {
  
    //this.onChange = this.onChange.bind(this)
    //this.onSubmit = this.onSubmit.bind(this)
    const [data,setData] = useState({
      CEDULA:"",
      NOMBRE:"",
      APELLIDO:"",
      EDAD:"",
      DIA_PAGO:"2020-08-15",
      DESCUENTO:"0.1",
      PAGO_FINAL:"10"
  })  

  const [bandera,setBandera]=useState(false);
  const [carga,setCarga]=useState(true);
  //const history = useHistory();
  const onChange = e => {
    setData({ ...data,[e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()
setBandera(true)
  axios.post('users/registeralumno', data).
  then(response => {
            console.log('Registered');
            setBandera(false);
          }).catch((err)=>{
              console.log(err)
          })
      
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">cedula</label>
                <input
                  type="text"
                  className="form-control"
                  name="CEDULA"
                  placeholder="ingresa tu cedula"
                  value={data.CEDULA}
                  onChange={onChange}
                />
              </div>
                <div className="form-group">
                <label htmlFor="name">NOMBRE</label>
                <input
                  type="text"
                  className="form-control"
                  name="NOMBRE"
                  placeholder="Enter your first name"
                  value={data.NOMBRE}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">APELLIDO</label>
                <input
                  type="text"
                  className="form-control"
                  name="APELLIDO"
                  placeholder="INGRESA TU APELLIDO"
                  value={data.APELLIDO}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EDAD</label>
                <input
                  type="email"
                  className="form-control"
                  name="EDAD"
                  placeholder="INGRESA TU EDAD "
                  value={data.EDAD}
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
        
    <Spinner cargando={bandera}></Spinner> 
      </div>
    )
  

  
}

export default RegisterAlumno;
