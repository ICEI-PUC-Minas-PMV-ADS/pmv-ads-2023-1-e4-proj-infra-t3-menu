import React, { useState } from "react";
import { StyledTableCell, StyledTableRow } from "./styles";

export default function Row({
  row,
  columns,
  acoes,
  lineCollapsable,
}) {
  const [open, setOpen] = useState(false);

  function quebra(column) {
    const fieldPath = column.field.split("."); // Divide a string em partes separadas por "."
    let value = row;
    for (const field of fieldPath) {
      value = value[field]; // Acessa a propriedade do objeto
    }

    if (column.type === "money")
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

    if (column.type === "dateTime") {
      const date = new Date(value);
      return date.toLocaleString("pt-BR");

    }

    return value;
  }

  return (
    <>
      <StyledTableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {columns.map((column) => {
          return (
            <StyledTableCell key={column.field} align={column.align}>
              {quebra(column)}
            </StyledTableCell>
          );
        })}
        {/* <StyledTableCell component="th" scope="row">
          {row.produto.nome}
        </StyledTableCell>
        <StyledTableCell align="right">{row.quantidade}</StyledTableCell>
        <StyledTableCell align="right">
          {row.produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledTableCell>*/}
        {acoes && (
          acoes(open, setOpen)
        )}
      </StyledTableRow>
      {lineCollapsable && (
        <StyledTableRow>
          <StyledTableCell
            style={{ paddingBottom: 0, paddingTop: 0 }}
            colSpan={6}
          >
            {lineCollapsable(row, open, setOpen)}
          </StyledTableCell>
        </StyledTableRow>
      )}
    </>
  );
}
