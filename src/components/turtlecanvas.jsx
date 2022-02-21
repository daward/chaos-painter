import Turtle from "react-turtle";
import gradient from "gradient-color";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as StackBlur from 'stackblur-canvas';
import algorithms from "../algorithms.js";
import canvasRecord from "canvas-record";

const colors = gradient([
  '#f102b7', // pink
  '#03dbfd', // blue
  '#39ff14', // green
  '#dff405', // yellow
  '#f85a01', // orange
  '#f102b7' // pink
], 250)

const margin = 0.05
const getModeValues = ({ i, growth, numRuns, mode }) => {
  const percentageRun = 1 - (numRuns - i) / numRuns;
  if (mode === "centered") {
    return {
      xCoord: 0,
      growthModifier: 1 + (growth - 1) * percentageRun
    }
  } else {
    return {
      xCoord: 1400 * (1 - margin) * percentageRun - 700 * (1 - margin),
      growthModifier: 1 + (growth - 1) * Math.abs(percentageRun * 2 - 1)
    }
  }
}

function TurtleCanvas() {
  const settings = useSelector(state => {
    return state.settings
  });

  const dispatch = useDispatch();

  let canvasRecorder;

  if (settings) {
    const { numRuns, growth, alpha, mode, blur, recording } = settings;
    const algorithm = algorithms(settings);

    return (<Turtle
      animated={true}
      width={1400}
      height={880}
      pixelated={true}
      draw={turtle => {
        return (i) => {
          if (i === 0) {
            console.log(recording);
            canvasRecorder = canvasRecord(turtle._ctx.canvas, { download: recording });
            canvasRecorder.start();
          }
          const { xCoord, growthModifier } = getModeValues({ i, growth, numRuns, mode });
          turtle._ctx.globalAlpha = alpha;

          turtle.home = () => {
            turtle.penup();
            turtle.goto(xCoord, 0);
            turtle.pendown();
          }

          turtle.home();
          turtle.setcolor(colors[i % colors.length]);
          algorithm({ turtle, i, growthModifier, dispatch });

          turtle.stroke();
          StackBlur.canvasRGB(turtle._ctx.canvas, 0, 0, 1400, 880, blur);
          if (i === numRuns) {
            canvasRecorder.stop();
            canvasRecorder.dispose();
          }
          return i < numRuns;
        };
      }}
    />
    );
  } else {
    return <div style={{ minHeight: 800 }} />
  }
}

export default TurtleCanvas;
