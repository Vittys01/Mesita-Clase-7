import './App.css';
import Container from './components/Container';

function App() {
  
  const perros = [
    {id: 1, name: "Firualis", age: 11, sex: "Macho", breed: "Pastor aleman", size: "Grande"},
    {id: 2, name: "Maya", age: 13, sex: "Hembra", breed: "Pitbul", size: "Mediano"},
    {id: 3, name: "Pipo", age:5, sex: "Macho", breed: "Schnauzer", size: "Mediano"},
    {id: 4, name: "Pacha", age:2, sex: "Hembra", breed: "Mestizo", size: "Chico"}
  ]
  
  return (
    <>
    <Container animals={perros}></Container>
    </>
  );
}

export default App;
