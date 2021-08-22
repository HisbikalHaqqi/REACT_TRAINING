import Dashboard from './page/Dashboard'
import Login from './page/Login';

function App(props) {
    let logged = props.isLogged;
    return(
        logged ? <Login/> : <Dashboard/>
   )
}

export default App;
