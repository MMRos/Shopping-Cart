import { Component } from 'react'

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola Capullo</p>
        <button OnClick={() => this.setState({ valor: 2 })}>
          Enviar
        </button>
      </div>
    )
  }
}

export default App;
