import Turtle from "react-turtle";
import gradient from "gradient-color";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as StackBlur from 'stackblur-canvas';

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

  if (settings) {
    const { lowerBound, upperBound, zoom, numRuns, angle, startSeed, growth, strandSize, alpha, mode, blur } = settings;
    return (<Turtle
      animated={true}
      width={1400}
      height={880}
      pixelated={true}
      draw={turtle => {
        const logistic = ({ r, x }) => r * x * (1 - x)

        return (i) => {
          const { xCoord, growthModifier } = getModeValues({ i, growth, numRuns, mode });
          turtle._ctx.globalAlpha = alpha;

          turtle.home = () => turtle.goto(xCoord, 0);

          const turn = (angleTurn) => {
            let realAngle = angleTurn % 360;
            const smoothFactor = 1;
            let turner = realAngle >= 180 ?
              () => turtle.left((360 - realAngle) / smoothFactor) :
              () => turtle.right(realAngle / smoothFactor);


            for (let smoothness = 0; smoothness < smoothFactor - 1; smoothness++) {
              turner();
              turtle.forward(0.3);
            }
            turner();
          }

          const logisticRun = ({ r }) => {
            dispatch({
              type: "SET_R",
              r
            });
            turtle.setcolor(colors[i % colors.length]);
            let x = startSeed;
            for (let j = 0; j < strandSize; j++) {
              x = logistic({ r, x });
              turtle.forward(zoom * x * growthModifier);
              turn(angle * x)

            }
          }

          turtle.penup();
          turtle.home();
          turtle.pendown();
          logisticRun({
            r: ((upperBound - lowerBound) / numRuns) * i + lowerBound
          })
          turtle.stroke();
          // if(i === numRuns) {
            StackBlur.canvasRGB(turtle._ctx.canvas, 0, 0, 1400, 880, blur)
          // }
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
