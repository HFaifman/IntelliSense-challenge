import React from "react"
import { render, screen } from "@testing-library/react"
import TableRow from "../../components/TableRow"

test("It renders children", () => {
  render(<TableRow>THIS IS A TEST</TableRow>)
  const children = screen.getByText("THIS IS A TEST")
  expect(children).toBeInTheDocument()
})
