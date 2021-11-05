import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'screens/HomePage/HomePage';
import Login from 'screens/Login/login';
import LogOutPage from 'screens/LogOutPage/LogOutPage';
import SettingsPage from 'screens/SettingsPage/SettingsPage';
import WithdrawPage from 'screens/WithdrawPage/WithdrawPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/withdrawpage" component={WithdrawPage} />
          <Route path="/settingspage" component={SettingsPage} />
          <Route path="/logoutpage" component={LogOutPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
