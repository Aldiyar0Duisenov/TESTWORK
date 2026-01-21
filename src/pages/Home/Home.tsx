import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Positions } from "./Positions";
import type { ProductRow } from "../../types/ProductRowType";
import { generateDocx } from "../../docxEngine/generateDocx";
import { Phone } from "../Phone";

const preSet: ProductRow[] = [
  // PP (программные продукты)
  { id: "OneC_UNF_5", name: "1С УНФ (5 пользователей)", count: 0, type: "PP" },
  {
    id: "OneC_Complex",
    name: "1С Комплект прикладных решений (5 пользователей)",
    count: 0,
    type: "PP",
  },
  { id: "OneC_Buh", name: "1С Бухгалтерия", count: 0, type: "PP" },
  { id: "OneC_Dop", name: "1С Доп лиц", count: 0, type: "PP" },
  { id: "OneC_Dop_5", name: "1С Доп лиц 5", count: 0, type: "PP" },
  {
    id: "OneC_Buh_5",
    name: "1С Бухгалтерия (5 пользователей)",
    count: 0,
    type: "PP",
  },
  { id: "OneC_UT", name: "1С Управление торговлей", count: 0, type: "PP" },
  { id: "OneC_Roz", name: "1С Розница", count: 0, type: "PP" },
  {
    id: "OneC_Zup",
    name: "1С Зарплата и управление персоналом",
    count: 0,
    type: "PP",
  },
  { id: "OneC_UNF", name: "1С УНФ", count: 0, type: "PP" },

  // ITS (ИТС)
  { id: "ITS_ECO_12", name: "ИТС Эконом (12 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_ECO_12_CONT",
    name: "ИТС Эконом (12 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  { id: "ITS_ECO_6", name: "ИТС Эконом (6 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_ECO_6_CONT",
    name: "ИТС Эконом (6 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  {
    id: "ITS_ECO_12_ACT",
    name: "ИТС Эконом (12 мес., акция 8+4)",
    count: 0,
    type: "ITS",
  },

  { id: "ITS_PROF_12", name: "ИТС Проф (12 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_PROF_12_CONT",
    name: "ИТС Проф (12 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  { id: "ITS_PROF_6", name: "ИТС Проф (6 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_PROF_6_CONT",
    name: "ИТС Проф (6 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  {
    id: "ITS_PROF_12_ACT",
    name: "ИТС Проф (12 мес., акция 8+4)",
    count: 0,
    type: "ITS",
  },

  { id: "ITS_BUS_12", name: "ИТС Бизнес (12 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_BUS_12_CONT",
    name: "ИТС Бизнес (12 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  { id: "ITS_BUS_6", name: "ИТС Бизнес (6 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_BUS_6_CONT",
    name: "ИТС Бизнес (6 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  {
    id: "ITS_BUS_12_ACT",
    name: "ИТС Бизнес (12 мес., акция 8+4)",
    count: 0,
    type: "ITS",
  },

  { id: "ITS_PREM_12", name: "ИТС Премиум (12 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_PREM_12_CONT",
    name: "ИТС Премиум (12 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  { id: "ITS_PREM_6", name: "ИТС Премиум (6 мес.)", count: 0, type: "ITS" },
  {
    id: "ITS_PREM_6_CONT",
    name: "ИТС Премиум (6 мес., непрерывное)",
    count: 0,
    type: "ITS",
  },
  {
    id: "ITS_PREM_12_ACT",
    name: "ИТС Премиум (12 мес., акция 8+4)",
    count: 0,
    type: "ITS",
  },

  //Fresh_Start_12 Fresh_Opt_12 Fresh_RS_12 Fresh_UNF_12

  { id: "ITS_TECHNO", name: "ИТС Техно", count: 0, type: "ITS" },
  { id: "Fresh_Start_12", name: "Фреш Старт", count: 0, type: "FRESH" },
  { id: "Fresh_Opt_12", name: "Фреш Опт", count: 0, type: "FRESH" },
  { id: "Fresh_RS_12", name: "Фреш Расширенный", count: 0, type: "FRESH" },
  { id: "Fresh_UNF_12", name: "Фреш УНФ", count: 0, type: "FRESH" },

  //Thin_Client Data_Transfer Work_No_Price Work_Price

  { id: "Thin_Client", name: "Тонкий клиент", count: 0, type: "WORK" },
  { id: "Data_Transfer", name: "Перенос данных", count: 0, type: "WORK" },
  { id: "Work_No_Price", name: "Работы оценка", count: 0, type: "WORK" },
  { id: "Work_Price", name: "Работы цена", count: 0, type: "WORK" },
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
        <Phone />
      </Box>
    </div>
  );
};
