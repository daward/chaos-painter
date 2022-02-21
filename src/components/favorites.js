import React from 'react'
import { Icon, Header, List } from "semantic-ui-react";

const Favorites = () => {

  return (
    <div style={{ textAlign: "left" }}>
      <Header size="small">
        <Icon name="heart" size="small" color="red" />  
        Favorites
      </Header>
      <List divided selection>

        <List.Item>
          <a href="index.html?lowerBound=3.5&upperBound=3.55&numRuns=500&zoom=3&angle=54123&startSeed=0.1&growth=10&strandSize=300&alpha=0.12&mode=centered">Exploding Star</a>
        </List.Item>
        <List.Item>
          <a href="index.html?lowerBound=3.5&upperBound=3.55&numRuns=1000&zoom=2&angle=54123&startSeed=0.9&growth=5&strandSize=200&alpha=0.7&mode=linear&blur=0">Squid Tower</a>
        </List.Item>
        <List.Item>
          <a href="index.html?lowerBound=3.825&upperBound=3.826&numRuns=500&zoom=270&angle=54123&startSeed=0.1&growth=0.1&strandSize=10&alpha=0.5&mode=linear&blur=50">Open Tube</a>
        </List.Item>
        <List.Item>
          <a href="index.html?lowerBound=2.74&upperBound=2.772&numRuns=1000&zoom=240&angle=5400&startSeed=0.5&growth=0.1&strandSize=75&alpha=0.2&mode=centered&blur=2">Black Hole</a>
        </List.Item>
      </List>


    </div>
  )
}

export default Favorites;