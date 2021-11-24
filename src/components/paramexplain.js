import React from 'react'
import { Label, Grid } from "semantic-ui-react";

const ParamExplain = ({ title, children}) => {

  return (
    <Grid>
      <Grid.Column width={3}>
        <Label color='black' horizontal>
          {title}
        </Label>
      </Grid.Column>

      <Grid.Column width={13}>
        {children}
      </Grid.Column>
    </Grid >
  )
}

export default ParamExplain;
