import { Box, Toolbar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFetch } from "../hook/useFetch";
import { MainLayout } from "../layout/MainLayout";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AppPromedio() {
  const { data, isLodiang, hasError } = useFetch(
    "https://backend-node-mdp.herokuapp.com/api/cliente/promedio"
  );

  return (
    <MainLayout>
      {isLodiang ? (
        <p>CARGANDO</p>
      ) : (
        <Box sx={{ display: "flex" }}>
          <p>{`PROMEDIO DE EDAD DE LOS CLIENTES:`}</p>
          <br />
          <p>{`${data.promedio} años`}</p>
        </Box>
      )}
    </MainLayout>
  );
}

/* <Grid container>
      <Grid item>
        
      </Grid>
    </Grid> */
