import './App.css';
import gradient from "gradient-color";
import TurtleCanvas from "./turtlecanvas";
import Configuration from './configuration';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

function App() {
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
