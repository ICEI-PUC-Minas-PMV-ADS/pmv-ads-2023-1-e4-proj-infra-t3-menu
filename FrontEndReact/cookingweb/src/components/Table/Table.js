import { TableHead, TableContainer, TableBody, Table } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './styles';
import Paper from '@mui/material/Paper';

import Row from './Row';

export default function CustomTable({ columns, rows, acoes, lineCollapsable }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.field} align={column.align}>
                {column.headerName}
              </StyledTableCell>
            ))}
            {acoes && <StyledTableCell align="right">Ações</StyledTableCell>}
          </StyledTableRow>
        </TableHead>
        <TableBody>          
          {rows&&
           rows.map((row) => (
            <Row 
              key={row.id} 
              row={row}
              acoes={acoes}
              columns={columns}
              lineCollapsable={lineCollapsable}
            />
          ))}

        </TableBody>
      </Table>
    </TableContainer>

  )
} 