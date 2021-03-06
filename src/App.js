import Page1 from "./components/Announcement/Page1";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from "./components/Main/MainPage";
import Class from "./components/Class/Class";
import Notifscreen from "./components/Notifications/Notifscreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/announcement-page-1" component={Page1}/>
            <Route path="/class" component={Class}/>
            <Route path="/notif" component={Notifscreen}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
