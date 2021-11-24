import './App.css';
import TurtleCanvas from "./turtlecanvas";
import Configuration from './configuration';
import Favorites from './favorites';
import {
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import Progress from "./progress";

function App() {
  const dispatch = useDispatch();
  dispatch({
    type: "SET_SETTINGS_FROM_URL",
    querystring: window.location.search
  });
  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          visible
          width="wide"
        >
          <div>
            <Segment vertical color="blue" basic>
              <Configuration />
            </Segment>
            <Segment vertical color="green" basic>
              <Progress />
            </Segment>
            <Segment vertical color="red" textAlign="left" basic padded>
              <Favorites />
            </Segment>
          </div>
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
