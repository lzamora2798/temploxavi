import { BeatLoader } from "react-spinners";
import React from "react";

const Spinner = ({cargando}) => {
 const style = {textAlign: 'center',height:'400px',paddingTop:'100px'};
  return (
    <div style={style}>
      <BeatLoader size={100} color="#009ffc" loading={cargando}/>
    </div>
  );
};

export default Spinner;