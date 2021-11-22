import React from 'react'
import { useSelector } from 'react-redux'
import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-semantic-ui-react";
import { useDispatch } from 'react-redux';

const Configuration = () => {

  const { r } = useSelector(state => state.logistic);
  const initialValues = useSelector(state => state.settings);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "left" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(settings) => dispatch({
          type: "SET_SETTINGS",
          settings
        })}
      >
        <Form size="tiny" style={{ width: "300px", margin: "20px", textAlign: "left" }}>
          <Input
            id="input-numRuns"
            inputLabel="# of runs"
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
            inputLabel="Strand alpha"
            name="alpha"
            type="number"
            focus
            fluid
            errorPrompt
          />
          <SubmitButton fluid primary loading={false}>
            Run
          </SubmitButton>
        </Form>
      </Formik>
      R: {Math.round(r * 10000) / 10000}
    </div>
  )
}

export default Configuration;