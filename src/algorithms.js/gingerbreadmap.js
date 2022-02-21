const gingerbread = ({ x, y, a }) => {
  return {
    x: 1 - a * y + Math.abs(x),
    y: x
  }
}

const gingerbreadMap = ({ upperBound, lowerBound, numRuns, startSeed, strandSize, zoom, angle }) => {
  return ({ turtle, i, growthModifier, dispatch }) => {
    const a = ((upperBound - lowerBound) / numRuns) * i + lowerBound;

    dispatch({
      type: "SET_R",
      r: a
    });

    let x = startSeed;
    let y = startSeed
    for (let j = 0; j < strandSize; j++) {
      const g = gingerbread({ a, x, y });
      x = g.x;
      y = g.y;
      turtle.forward(zoom * x * growthModifier);
      turtle.right(angle * x)
    }
  }
}

export default gingerbreadMap;