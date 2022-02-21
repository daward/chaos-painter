const logistic = ({ r, x }) => r * x * (1 - x)

const logisticMap = ({ numRuns, startSeed, strandSize, upperBound, lowerBound, zoom, angle }) => {
  return ({ turtle, i, growthModifier, dispatch }) => {
    const r = ((upperBound - lowerBound) / numRuns) * i + lowerBound;

    dispatch({
      type: "SET_R",
      r
    });

    let x = startSeed;
    for (let j = 0; j < strandSize; j++) {
      x = logistic({ r, x });
      turtle.forward(zoom * x * growthModifier);
      turtle.right(angle * x)

    }
  }
}

export default logisticMap;



