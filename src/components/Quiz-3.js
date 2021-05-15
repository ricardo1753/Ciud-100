import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { datos } from "../datos_mem.json";

class Quiz3 extends Component {
  state = {
    datos: datos,
    respuestaUsuario: "",
    indicePregunta: 0,
    correctCheck: false,
  };
  handleChange = (event) => {
    this.setState({
      respuestaUsuario: event.target.value,
      correctCheck: false,
    });
  };
  checkAnswer = (event) => {
    const { respuestaUsuario, datos, indicePregunta, correctCheck } =
      this.state;
    //si no hay respuesta automaticamente es falso- empty string is falsy
    if (respuestaUsuario) {
      this.setState({ correctCheck: !correctCheck });
    }
  };
  nextQuestion = (event) => {
    const { indicePregunta } = this.state;
    this.setState({
      indicePregunta: indicePregunta + 1,
      respuestaUsuario: "",
      correctCheck: false,
    });
  }
  render() {
    const { datos, indicePregunta, respuestaUsuario, correctCheck } =
      this.state;
    const resp = datos[indicePregunta].respuesta.split(".");
    //sacamos de datos[indicePregunta] correcta y lo ponemos en la variable que creamos de nombre 'correcta'
    //const correcta = datos[indicePregunta].correcta (destructuring)
    const { correcta } = datos[indicePregunta];
    console.log({ state: this.state });
    return (
      <div>
        <p className="pregunta">{datos[indicePregunta].pregunta}</p>
        <RadioGroup
          aria-label="Lista De Respuestas"
          name="respuestas"
          value={respuestaUsuario}
          onChange={this.handleChange}
        >
          {resp.map((value, index) => {
            let label = value;
            let root = "respuesta";
            if (
              correctCheck &&
              value === correcta &&
              correcta === respuestaUsuario
            ) {
              label = label + " (Correct!)";
              console.log({ label, check: value === correcta });
            } else if (
              correctCheck &&
              correcta !== respuestaUsuario &&
              value === respuestaUsuario
            ) {
              root = "respuesta-incorrecta";
            }
            if (correctCheck && value === correcta) {
              root = "respuesta-correcta";
            }
            return (
              <FormControlLabel
                key={label}
                classes={{ root }}
                value={value}
                control={<Radio />}
                label={label}
              />
            );
          })}
        </RadioGroup>
        <div className="flex right p1">
          <Button
            disabled={!respuestaUsuario}
            variant="contained"
            color="primary"
            onClick={this.checkAnswer}
          >
            Check Answer
          </Button>
          <div className={correctCheck?"m1":""}/>
          {correctCheck && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.nextQuestion}
            >
              Next Question
            </Button>
          )}{" "}
        </div>
      </div>
    );
  }
}
export default Quiz3;
