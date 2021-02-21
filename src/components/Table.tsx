import { TableHTMLAttributes } from "react"
import styled from "styled-components"

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode
  tableHeader?: string[]
}

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`
const StyledTableHeader = styled.tr`
  text-align: left;
`

const Table = ({ children, tableHeader, ...rest }: TableProps) => (
  <StyledTable {...rest}>
    <thead>
      <StyledTableHeader>
        {tableHeader?.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </StyledTableHeader>
    </thead>
    <tbody>{children}</tbody>
  </StyledTable>
)
export default Table
