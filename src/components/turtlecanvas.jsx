import Turtle from "react-turtle";
import gradient from "gradient-color";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const colors = gradient([
  '#f102b7', // pink
  '#03dbfd', // blue
  '#39ff14', // green
  '#dff405', // yellow
  '#f85a01', // orange
  '#f102b7' // pink
], 250)


function TurtleCanvas() {
  const settings = useSelector(state => {
    return state.settings
  });

  const dispatch = useDispatch();

  if (settings) {
    const { lowerBound, upperBound, zoom, numRuns, angle, startSeed, growth, strandSize, alpha } = settings;
    return (<Turtle
      animated={true}
      width={1400}
      height={880}
      pixelated={true}
      draw={turtle => {

        turtle.home = () => turtle.goto(0, 0)

        return (i) => {
          turtle._ctx.globalAlpha = alpha;
          const logistic = ({ r, x }) => r * x * (1 - x)

          const logisticRun = ({ r }) => {
            dispatch({
              type: "SET_R",
              r
            });
            turtle.setcolor(colors[i % colors.length]);
            let x = startSeed;
            const percentageRun = 1 - (numRuns - i) / numRuns;
            const growthModifier = 1 + (growth - 1) * percentageRun;
            for (let j = 0; j < strandSize; j++) {
              x = logistic({ r, x });
              turtle.forward(zoom * x * growthModifier);
              turtle.right(angle * x);
            }
          }

          turtle.penup();
          turtle.home();
          turtle.pendown();
          logisticRun({
            r: ((upperBound - lowerBound) / numRuns) * i + lowerBound
          })
          turtle.stroke();
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
