import { useState, Fragment } from 'react'
import './App.css'
import { Heading, Divider, Button, Box } from "react-ui-essentials"

function App() {

  return (
    <Box padding="10px">
      <Heading type="h1" variant="primary">
        Rue-Playground
      </Heading>
      <Divider />
      <Box style={{ display: "flex", flexWrap: "wrap" }} padding="10px">
        {["sm", "md", "lg", "xl", "xxl"].map((item) => (
          <Button size={item} variant="primary" style={{ margin: "3px 4px" }}>
            <Button.Text>Button {item}</Button.Text>
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default App
