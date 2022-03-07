import { Component } from "react";
import './App.css';

class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultAdicao: 0,
      resultSubtracao: 0,
      resultMultiplicacao: 0,
      resultDivisao: 0,
      numberA: 0,
      numberB: 0
    }
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleCalcular = this.handleCalcular.bind(this);
  }

  handleChangeA(event) {
    this.setState({numberA: event.target.value});
  }
  handleChangeB(event) {
    this.setState({numberB: event.target.value});
  }
  handleCalcular(){
    this.setState({
        resultAdicao: (this.state.numberA*1 + this.state.numberB*1),
        resultSubtracao: (this.state.numberA - this.state.numberB),
        resultMultiplicacao: (this.state.numberA * this.state.numberB),
        resultDivisao: (this.state.numberA / this.state.numberB),
      })
  }
  render(){
    return (
      <div className="App" >
        <div class="row d-flex p-2">
          <form>
              <div class="row  d-flex justify-content-center">
                <div class="col-4">
                  <label  class="form-label">Primeiro Numero</label>
                  <input type="number" class="form-control" name='numberA' id='numberA' onChange={this.handleChangeA} value={this.state.numberA}/>
                  <label class="form-label">Segundo Numero</label>
                  <input type="number" class="form-control"  name='numberB' id='numberB' onChange={this.handleChangeB}  value={this.state.numberB}/>
                  <button type="button"class="form-control btn btn-primary mt-3" id='btnCalcular' onClick={this.handleCalcular}>Calcular</button>  
                </div>
              </div>
            </form>
        </div>
         
          <div class="row d-flex justify-content-center">
            <div class="col-2">
              <h4>Resultado</h4>
              <p>Adicao: {this.state.resultAdicao}</p>
              <p>Subtracao: {this.state.resultSubtracao}</p>
              <p>Mulplicacao: {this.state.resultMultiplicacao}</p>
              <p>Divisao: {this.state.resultDivisao}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
