import { TableHTMLAttributes } from "react"
import styled from "styled-components"

interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

const StyledRow = styled.tr`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    background: #d3d3d3;
  }
`

const TableRow = ({ children, ...rest }: TableRowProps) => (
  <StyledRow {...rest}>{children}</StyledRow>
)
export default TableRow
