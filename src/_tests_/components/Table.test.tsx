import React from "react"
import { render, screen } from "@testing-library/react"
import Table from "../../components/Table"
import { tableHeaders } from "../../constants/tableHeaders"

test("It renders children", () => {
  render(
    <Table>
      <tr>
        <td>THIS IS A TEST</td>
      </tr>
    </Table>
  )
  const children = screen.getByText("THIS IS A TEST")
  expect(children).toBeInTheDocument()
})
test("It renders table headers", () => {
  render(
    <Table tableHeader={tableHeaders}>
      <tr>
        <td>THIS IS A TEST</td>
      </tr>
    </Table>
  )
  tableHeaders.map((header) =>
    expect(screen.getByText(header)).toBeInTheDocument()
  )
})
