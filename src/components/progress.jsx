import React from 'react'
import { useSelector } from 'react-redux'
import { Progress, Header, Icon } from "semantic-ui-react";

const ProgressBar = () => {

  const { r } = useSelector(state => state.logistic);
  const { lowerBound, upperBound } = useSelector(state => state.settings);

  return (
    <div style={{ textAlign: "left" }}>
      <Header size="small">
        <Icon name="wrench" size="small"/>
        Painting Progress
      </Header>
      <Progress percent={((r -lowerBound) / (upperBound - lowerBound)) * 100} indicating={r !== upperBound} >R: {Math.round(r * 10000) / 10000}</Progress>
    </div>
  )
}

export default ProgressBar;