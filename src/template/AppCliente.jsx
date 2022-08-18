import { useFetch } from "../hook/useFetch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MainLayout } from "../layout/MainLayout";

export default function AppCliente() {
  const { data, isLodiang, hasError } = useFetch(
    "https://backend-node-mdp.herokuapp.com/api/cliente"
  );

  return (
    <MainLayout>
      {isLodiang ? (
        <p>CARGANDO</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ITEM</TableCell>
                <TableCell align="center">Cliente</TableCell>
                <TableCell align="center">Edad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.cliente}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.edad}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </MainLayout>
  );
}