import { Box, Button, Typography } from "@mui/material";
import { type FC } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface ICount {
  count: number;
  setCount: (value: "+" | "-") => void;
}
export const Count: FC<ICount> = ({ count, setCount }) => {
  return (
    <Box display={"flex"}>
      <Button onClick={() => setCount("-")} disabled={count === 0}>
        <ArrowLeftIcon />
      </Button>
      <Typography sx={{ my: "auto" }}>{count}</Typography>
      <Button onClick={() => setCount("+")}>
        <ArrowRightIcon />
      </Button>
    </Box>
  );
};
