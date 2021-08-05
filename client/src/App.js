import {BrowserRouter,Route,Switch} from "react-router-dom"
import Navbarhead from './components/Navbarhead';
import Home from "./components/Home";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import PageError from "./components/PageError";
import EditUser from "./components/EditUser";
import Crudpage from "./components/Crudpage";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbarhead/>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/alluser" exact component={AllUser}></Route>
      <Route path="/adduser" exact component={AddUser}></Route>
      <Route path="/edituser/:id" exact component={EditUser}></Route>
      <Route path="/crudpage" component={Crudpage}></Route>
      <Route component={PageError}></Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
