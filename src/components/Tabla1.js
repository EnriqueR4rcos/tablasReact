import React from "react";

const Tabla1 = (props) => {
  if(props.valor !== null){
    var calcula = []
    for(var i=1; i<11;i++){
      calcula.push(props.valor*i);
    }
    return ( 
      <div>
        <table className="table table-success table-striped" >
            <thead>
              <tr>
              <th  colSpan = "5">Tabla del {props.valor}</th>
              </tr>
            </thead>
            <tbody>
              {calcula.map((value,index)=>{
                return(
               <tr key={index}>
                <td>{props.valor}</td>
                <td>x</td>
                <td>{index+1}</td>
                <td>=</td>
                <td>{value}</td>
               </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    );

  }else {
    return(null);
  }
};

export default Tabla1;
