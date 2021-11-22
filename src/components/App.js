import './App.css';
import TurtleCanvas from "./turtlecanvas";
import Configuration from './configuration';
import {
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  dispatch({
    type: "SET_SETTINGS_FROM_URL",
    querystring: window.location.search
  });
  return (
    <div className="App">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          visible
          width="wide"
        >
          <Configuration/>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic style={{ backgroundColor: "black" }}>
            <TurtleCanvas />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default App;
