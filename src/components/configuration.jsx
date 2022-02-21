import React from 'react'
import { useSelector } from 'react-redux'
import { Formik } from "formik";
import { Form, Input, SubmitButton, Select, Checkbox } from "formik-semantic-ui-react";
import { useDispatch } from 'react-redux';
import { Grid, Header, Icon } from "semantic-ui-react";
import Explain from "./explain";

const Configuration = () => {

  const initialValues = useSelector(state => state.settings);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "left" }}>
      <Header size="small">
        <Icon name="wrench" size="small" />
        Configuration
      </Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(settings) => dispatch({
          type: "SET_SETTINGS",
          settings
        })}
      >
        <Form size="tiny" style={{ width: "300px", margin: "20px", textAlign: "left" }}>
          <Select
            id="select-mode"
            errorPrompt
            name="mode"
            selectOnBlur={false}
            clearable
            options={[
              { key: "Centered", value: "centered", text: "Centered" },
              { key: "Linear", value: "linear", text: "Linear" }
            ]}
          />
          <Select
            id="select-algorithm"
            errorPrompt
            name="algorithm"
            selectOnBlur={false}
            clearable
            options={[
              { key: "Logistic", value: "logistic", text: "Logistic" },
              { key: "Gingerbread", value: "gingerbread", text: "Gingerbread" },
              { key: "Standard", value: "standard", text: "Standard" }
            ]}
          />
          <Input
            id="input-numRuns"
            inputLabel="# of strands"
            name="numRuns"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-lowerBound"
            inputLabel="Lower Bound of R"
            name="lowerBound"
            type="number"
            step={0.01}
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-upperBound"
            inputLabel="Upper Bound of R"
            name="upperBound"
            step={0.01}
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-rstart"
            inputLabel="Start seed"
            name="startSeed"
            type="number"
            step={0.1}
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-angle"
            inputLabel="Angle"
            name="angle"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-zoom"
            inputLabel="Zoom"
            name="zoom"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-growth"
            inputLabel="Growth target"
            name="growth"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-strand"
            inputLabel="Strand size"
            name="strandSize"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-alpha"
            inputLabel="Strand opacity"
            name="alpha"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Input
            id="input-blur"
            inputLabel="Blur Amount"
            name="blur"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <Checkbox 
            id="input-record"
            inputLabel="Save Recording"
            name="recording"
            label={
              <label>
                Record as a movie
              </label>
            }
          />
          <Grid>
            <Grid.Column width={8}>
              <SubmitButton fluid primary loading={false} labelPosition='right' icon>
                <Icon name='play' />
                Run
              </SubmitButton>
            </Grid.Column>
            <Grid.Column width={8}>
              <Explain />
            </Grid.Column>
          </Grid>
        </Form>
      </Formik>

    </div>
  )
}

export default Configuration;