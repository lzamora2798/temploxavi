import React ,{useState,useEffect}from 'react';
import {Modal} from 'react-bootstrap'
import Spinner from './Spinner.js';
const ModalAlumno= (props)=>{
    const [carga,setCarga]=useState(false);
    
    const [data,setData] = useState({
      cedula:"",
      nombre:"",
      apellido:"",
      edad:"",
      dia_pago:"",
      descuento:"",
      pago_final:""
  })
    
    useEffect(() => {  //metodo nativo de react necesario para hacer el get de las tablas 
      console.log("ejecuta")
      fetch(`/users/alumn/${props.alumno.cedula}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json) 
        console.log(json)
      }); 
    },[])

    const onChange = e => {
        setData({ ...data,[e.target.name]: e.target.value })
      }
      const onSubmit = e => {
        e.preventDefault()
        console.log(props.alumno.cedula);
       
      }
    return (
       <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>  
          
            <form noValidate onSubmit={onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">cedula</label>
                <input
                  type="text"
                  className="form-control"
                  name="CEDULA"
                  placeholder="ingresa tu cedula"
                  value={data.cedula}
                  onChange={(e)=>onChange(e)}
                />
              </div>
                <div className="form-group">
                <label htmlFor="name">NOMBRE</label>
                <input
                  type="text"
                  className="form-control"
                  name="NOMBRE"
                  placeholder="Enter your first name"
                  value={props.alumno.nombre}
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
                  value={props.alumno.apellido}
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
                  value={props.alumno.edad}
                  onChange={onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          
          </Modal.Body>
          < Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      );
      
}



export default ModalAlumno;

