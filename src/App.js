import './App.css';
import Title from './title.js'

const Description = () => {
  return (
    <p>La aplicacion esta siendo trabajada ahora mismo</p>
  )
}

const App = () => {
  return (
    <div className="App">
      <Title color='blue' msg='Estoy aprendiendo'/>
      <Title color='green' msg='Ha utilizar React'/>
      <Title color='Red' msg='Que emoción'/>
      <Description />
    </div>
  );
}

export default App;