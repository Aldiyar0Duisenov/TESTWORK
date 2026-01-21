import React, { type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Count } from "./ui/Count";
import type { ProductRow } from "../../../types/ProductRowType";
interface IProducts {
  positions: ProductRow[];
  setPositions: React.Dispatch<React.SetStateAction<ProductRow[]>>;
}
const getBgColor = (type: string) => {
  switch (type) {
    case "ITS":
      return "#ebcbb3";
    case "PP":
      return "#efcdd8";
    case "FRESH":
      return "#c0c6f5";
    case "WORK":
      return "#bafcf4";

    default:
      return "#ffffff";
  }
};
export const Positions: FC<IProducts> = ({ positions, setPositions }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>наименование</TableCell>
              <TableCell>кол-во</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {positions.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ backgroundColor: getBgColor(row.type) }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Count
                    count={row.count}
                    setCount={(value) => {
                      setPositions((prev) => {
                        const copy = [...prev];
                        copy[idx] = {
                          ...copy[idx],
                          count:
                            value === "+"
                              ? copy[idx].count + 1
                              : copy[idx].count - 1,
                        };
                        return copy;
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
