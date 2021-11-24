import React, { useState } from 'react'
import { Button, Modal, List, Header, Label, Icon } from "semantic-ui-react";
import ParamExplain from './paramexplain';

const Explain = () => {

  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button fluid secondary labelPosition='right' icon>
        <Icon name='help' />
        Explain...
      </Button>}
    >
      <Modal.Header>How Chaos Painter works</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>What am I looking at?</Header>
          <p>
            This is a graphical rendering of the <a href="https://en.wikipedia.org/wiki/Logistic_map">logistic map function</a>.
          </p>
          <p>
            <Label size="big">x = rx(1 - x)</Label>
          </p>
          <p>
            Chaos painter iterates this function for different values of R (as determined by the <b># of runs</b>, <b>lower bound</b> and <b>upper bound</b>)
            The more chaotic the output of the function, the more wildly jagged the "<b>strands</b>" will be.
            Importantly though, chaos is not randomness. The same input parameters will always produce the same image.
          </p>
          <Header>What do the parameters mean?</Header>
          <p>
            <List divided selection>
              <List.Item>
                <ParamExplain title="Mode">
                  Circular draws all strands from the middle of the screen. Linear draws strands while moving across the screen, reaching the growth target by the center of the screen.
                </ParamExplain>
              </List.Item>
              <List.Item>
                <ParamExplain title="# of strands">
                  The number of strands to draw between the upper bound and the lower bound
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Lower Bound of R">
                  R (also called the growth rate) is the parameter of the logistic map that can cause chaos or oscillation. On the lower end of R's range, oscillation and convergence is common.
                  For higher numbers, the output will produce wildly different and non convergent results. The lower bound cannot be less than 0.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Upper Bound of R">
                  The highest value of R to try. Chaotic results are more likely at higher values (especially those higher than 3.57). This value cannot exceed 4.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Start seed">
                  X has to start somewhere. For non-chaotic functions, X has little impact as they will converge to a value independent of X.
                  For chaotic values though, X can make a big difference. X should be between 0 and 1.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Angle">
                  The output of the the logistics map is multipled by this value to determine each bend in the strands drawn. For wild shapes, use extremely high angles and favor prime numbers.
                </ParamExplain>
              </List.Item>


              <List.Item>
                <ParamExplain title="Zoom">
                  It can't all fit in the screen. Lower zooms will fit more in with less detail, higher will fill up the screen and let you see the nuances of the drawing.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Growth Target">
                  This can inflate or deflate the zoom as the drawing continues.
                  Using a growth target of 1 does nothing, while numbers between 1 and 0 will shrink the drawing over time and numnbers above 1 will expand it.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Strand Size">
                  Determines how many times the logistic map is run for each value of R. For long sinuous strands, use high values. For tidy orderly output, use small numbers.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Strand Opacity">
                  Particularly when drawing many strands, it is likely they will overlap, leaving the first drawn invisible. If you want to see a more cumulative effect, lower the opacity.
                  This number should be betweeen 0 and 1.
                </ParamExplain>
              </List.Item>

              <List.Item>
                <ParamExplain title="Blur Amount">
                  In particularly chaotic renderings, bluring the picture can provide a better idea of what has happened. Use 0 for no blur, and higher numbers will blur across more pixels.
                </ParamExplain>
              </List.Item>
            </List>
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Thanks"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>)
}

export default Explain;