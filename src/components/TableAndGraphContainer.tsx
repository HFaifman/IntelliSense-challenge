import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Table from "./Table"
import TableCell from "./TableCell"
import TableRow from "./TableRow"
import mapFetchedData from "../utils/mapFetchedData"
import LineChart from "./LineChart"
import { tableHeaders } from "../constants/tableHeaders"
import useFetch from "../hooks/useFetch"
import { MappedMeasurements } from "../types/MappedMeasurements"
import { FETCH_ADDRESS } from "../api/constants"

const StyledContainer = styled.div`
  display: "flex";
  justify-content: center;
  margin: 2rem;
  height: 100vh;
`
const TableAndGraphContainer = () => {
  const [mappedData, setMappedData] = useState<MappedMeasurements[]>([])
  const { data, error, loading } = useFetch(FETCH_ADDRESS)

  const handleRowRemoval = (id: string) => {
    const newData = mappedData.filter((item) => item.id !== id)
    setMappedData(newData)
  }

  useEffect(() => {
    if (data?.current.data.TK1) {
      const mappedFetchedData = mapFetchedData(data.current.data.TK1)
      setMappedData(mappedFetchedData)
    }
  }, [data])

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>Something went wrong, please try again</p>
  }

  return (
    <StyledContainer>
      <Table tableHeader={tableHeaders}>
        {mappedData.map((row) => {
          const { id, values } = row
          const lastValue = values[values.length - 1]
          return (
            <React.Fragment key={id}>
              <TableRow onClick={() => handleRowRemoval(id)}>
                <TableCell>{id}</TableCell>
                <TableCell>{lastValue}</TableCell>
              </TableRow>
            </React.Fragment>
          )
        })}
      </Table>
      <LineChart data={mappedData} />
    </StyledContainer>
  )
}

export default TableAndGraphContainer
