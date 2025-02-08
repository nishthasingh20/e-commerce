import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import logo from '../src/logo.jpg';


function App() {
  return (
    <>
    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'>
            <img src={logo} />
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default App;
