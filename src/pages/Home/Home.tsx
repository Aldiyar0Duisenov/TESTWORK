import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Positions } from "./Positions";
import type { ProductRow } from "../../types/ProductRowType";
import { generateDocx } from "../../docxEngine/generateDocx";
import { Phone } from "../Phone";

import { workProducts } from "./Data/workProducts";
import { licenseProducts } from "./Data/licenseProducts";
import { freshProducts } from "./Data/freshProducts";
import { itsProducts } from "./Data/itsProducts";
import { addonsProducts } from "./Data/addonsProducts";
import { deviceProducts } from "./Data/deviceProducts";

const preSet: ProductRow[] = [
  ...licenseProducts,
  ...freshProducts,
  ...itsProducts,
  ...workProducts,
  ...addonsProducts,
  ...deviceProducts,
];

export const Home = () => {
  const [positions, setPositions] = useState<ProductRow[]>(preSet);

  const handleSubmit = () => {
    generateDocx(positions);
  };
  return (
    <div>
      <Box>
        Home
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/phone">Phone</Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Button variant="contained" onClick={handleSubmit}>
            сгенерировать
          </Button>
          <Positions positions={positions} setPositions={setPositions} />
        </Box>
        <Box sx={{ position: "fixed", bottom: "10px", right: "10px" }}>
          <Box
            sx={{
              backgroundColor: "#fffdc3",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "14px" }}>
              Количество: {positions.reduce((sum, pos) => sum + pos.count, 0)}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "14px" }}>
              Цена:{" "}
              {positions
                .reduce((sum, pos) => sum + pos.count * pos.price, 0)
                .toLocaleString()}{" "}
            </Typography>
          </Box>
        </Box>
        <Phone />
      </Box>
    </div>
  );
};
