import Dashboard from './page/Dashboard'
import Login from './page/Login';

function App(props) {

    if(props.isLogged){
        return (
            <div className="App">
                <Dashboard/>
            </div>
        );
    }
    else{
        return (
            <div className="App">
                <Login/>
            </div>
        );
    }
  
}

export default App;
