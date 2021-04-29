import React, { Component } from "react";
import { datos } from "../datos.json";
import Toca from "../components/Toca";

class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datos,
      sonidos: [],
      preguntas: [],
      respuestas: [],
      contador: 0,
      btoca: false,
      cartel: "Play",
    };
    this.onSuena = this.onSuena.bind(this);
    this.state.preguntas = this.state.data.map((dat, i) => {
      return dat.pregunta;
    });
    this.state.respuestas = this.state.data.map((dat, i) => {
      return dat.respuesta;
    });
    this.state.sonidos = this.state.data.map((dat, i) => {
      return dat.sonido;
    });
  }
  onSuena = () => {
    this.setState({ btoca: !this.state.btoca });
    if (this.state.btoca) {
      if (this.state.contador < this.state.sonidos.length) {
        this.setState({ contador: this.state.contador + 1 });
        this.setState({ cartel: "Play" })
      }
    } else {
      this.setState({ cartel: "Statement" });
    }
  }
  render() {
    return (
      <div>
        <button style={{ color: "blue" }} onClick={this.onSuena}>
          {this.state.cartel}
        </button>
        <p className="pregunta">{this.state.preguntas[this.state.contador]}</p>
        <p className="respuesta">
          {this.state.respuestas[this.state.contador]}
        </p>
        {this.state.btoca && (
          <Toca fuente={this.state.sonidos[this.state.contador]} />
        )}
      </div>
    );
  }
}

export default Listen;
