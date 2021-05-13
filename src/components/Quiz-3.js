import React, { Component } from "react";
import { datos } from "../datos_mem.json";

class Quiz3 extends Component {
  state = {
    datos: datos,
  };
  render() {
    const { datos } = this.state;
    var resp = datos[1].respuesta.split(".");
    return (
      <div>
        <p className="pregunta">{datos[1].pregunta}</p>
        <ul>
          {resp.map((value, index) => {
            return <li className="respuesta" key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Quiz3;
