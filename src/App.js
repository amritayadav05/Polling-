
import './App.css';
import FirstPage from './Components/FirstPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Voting from './Components/Voting';

function App() {
  return (
    <div className="App">
        <FirstPage/>
        <SignUp/>
        <Login/>
        <Voting/>
        

    </div>
  );
}

export default App;
