import React ,{useEffect,useState} from 'react';
import RegisterAlumno from '../registros/registroalumno';
import axios from 'axios'
import ModalAlumno from '../updateModals/alumnoModal.jsx';
function Alumnos() {
  const [titulo,setTitulos]=useState([]);
  const [alumnos,setAlumnos]=useState([]);
  const [bandera,setBandera]=useState(false);
  const [bandera2,setBandera2]=useState(false);
    const [alumnotemporal,setAlumnoTemporal] = useState({
        cedula:"",
        nombre:"",
        apellido:"",
        edad:"",
        dia_pago:"",
        descuento:"",
        pago_final:""
    })
  const [modalShow,setModalShow] = useState(false);
  const showModal = (indice) =>{
    setAlumnoTemporal(alumnos[indice])  
    setModalShow(true);
  }

  useEffect(() => {  //metodo nativo de react necesario para hacer el get de las tablas 
    fetch("users/alumno")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setTitulos(Object.keys(json[1]))
      setAlumnos(json) 
    });
      
  }, [titulo,alumnos,alumnotemporal])

  const deleteAlumno = (e,val) =>{  // metodo para cada elemento de las tablas
    const data = {"cedula":e};
    axios
    .delete(`/users/borraralumno/${e}`,data)
    .then(response => {
      console.log(data)
      console.log('delated');
    }).catch((err)=>{
        console.log(err)
    })
  }

  const header = titulo.map((item,index)=>{
    return(
          <th scope="col" key={index}>{item}</th>                
    )
  })

  const estudiantes = alumnos.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.cedula}</td>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.edad}</td>
        <td>
          <button className="btn btn-primary" onClick={e=>{ return showModal(index)}} >edit</button> {" "}
          <button className="btn btn-danger" onClick={e=>{
            return deleteAlumno(item.cedula);
          }}>remove</button>
        </td>
      </tr>
    )
  });
    
      if(!bandera){
          return(
            <div className="container mt-5">
            <div className="row" style={{ textAlign: "center" ,paddingTop:"30px",marginRight:"100px"}}>
              <h1>Registro de Estudiantes</h1>
              <div style={{paddingLeft:"400px"}} >
              <button className="btn btn-success" onClick={()=>{setBandera(true)}}>Agregar alumno</button>
              </div>
              
            </div>
            <table className="table table-striped">
              <thead>
              <tr>
                {header}
                <th scope="col">acciones </th>  
              </tr>
              </thead>
              <tbody>
               {estudiantes}
              </tbody>
            </table>            
            <ModalAlumno
                show={modalShow}
                alumno={alumnotemporal}
                onHide={()=>setModalShow(false)}        
            />            
          </div>
          );
      }else{
        return(
          <RegisterAlumno ></RegisterAlumno>
        );

      }
      

    
  
}

export default Alumnos;
