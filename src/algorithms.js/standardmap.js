const standard = ({ p, theta, k }) => {
  return {
    p: (p + k * Math.sin(theta)) % 360,
    theta: (theta + p) % 360
  }
}

const standardMap = ({ upperBound, lowerBound, numRuns, startSeed, strandSize, zoom, angle }) => {
  return ({ turtle, i, growthModifier, dispatch }) => {
    const k = ((upperBound - lowerBound) / numRuns) * i + lowerBound;

    dispatch({
      type: "SET_R",
      r: k
    });

    let p = startSeed;
    let theta = startSeed
    for (let j = 0; j < strandSize; j++) {
      const s = standard({ p, theta, k });
      p = s.p;
      theta = s.theta;
      turtle.forward(zoom * p * growthModifier);
      turtle.right(angle * p)
    }
  }
}

export default standardMap;