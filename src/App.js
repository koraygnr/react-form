import './App.css';
import peoplesImg from "./assets/peoples.png"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-md-5 p-3">
          <SignUp />
        </div>
        <div className="col-md-7 p-3">
          <img className='img-fluid w-100 mt-5' src={peoplesImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
