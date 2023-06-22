import './components/stylesandImages/App.css';
import NavBar from './components/Navbar';
import Addemployee from './components/Employee';
import EmployeeList from './components/EmployeeList';
 

function App() {
  return (
    <>
      <NavBar />
      <Addemployee />
      <EmployeeList />
    </>
  );
}

export default App;
