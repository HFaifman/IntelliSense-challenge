import React from "react"
import { render, screen } from "@testing-library/react"
import TableCell from "../../components/TableCell"

test("It renders children", () => {
  render(<TableCell>THIS IS A TEST</TableCell>)
  const children = screen.getByText("THIS IS A TEST")
  expect(children).toBeInTheDocument()
})
