import styled from "styled-components"
import React, { TableHTMLAttributes } from "react"

interface TableCellProps extends TableHTMLAttributes<HTMLTableDataCellElement> {
  children: React.ReactNode
}

const StyledCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5em;
`

const TableCell = ({ children, ...rest }: TableCellProps) => (
  <StyledCell {...rest}>{children}</StyledCell>
)
export default TableCell
