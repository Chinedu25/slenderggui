import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


const {default: LogOutPage} = require( "../screens/LogOutPage/LogOutPage");
const {default: SettingsPage} = require("../screens/SettingsPage/SettingsPage");
const {default: WithdrawPage} = require("../screens/WithdrawPage/WithdrawPage");
const { default: Login } = require("../screens/Login/login");
const {default: Homepage} = require("../screens/HomePage/HomePage");



const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
         <Route path="/homepage" component={Homepage} />
          <Route path="/withdrawpage" component={WithdrawPage} />
         <Route path="/settingspage" component={SettingsPage} />
          <Route path="/logoutpage" component={LogOutPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
