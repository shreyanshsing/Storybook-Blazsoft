import Page1 from "./components/Announcement/Page1";
import Page2 from "./components/Announcement/Page2";
import Page3 from "./components/Announcement/Page3";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Main from "./components/Main/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/announcement-page-1" component={Page1}/>
            <Route path="/announcement-page-2" component={Page2}/>
            <Route path="/announcement-page-3" component={Page3}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
