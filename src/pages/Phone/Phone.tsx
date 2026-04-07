import { ContentCopy, Launch, TextFields } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { copy } from "../../utils/copyClipBoard";
import { openLink } from "../../utils/openLink";

const formatPhone = (value: string) => {
  const phone = value.replace(/\D/g, "");
  if (phone.length === 10) return `98${phone}`;
  if (phone.length === 11) return `98${phone.slice(1)}`;
  if (phone.length === 12 && phone.startsWith("98")) return phone;
  return "не верный формат";
};

const formatWhatsApp = (value: string, text?: string) => {
  if (value === "не верный формат") return value;
  const phone = value.slice(2);
  if (text) return `https://wa.me/+7${phone}?text=${text}`;
  return `https://wa.me/+7${phone}`;
};

export const Phone = () => {
  const [phone, setPhone] = useState<string>("");

  const mobile = formatPhone(phone);
  const whatsApp = formatWhatsApp(mobile);
  const whatsAppText = formatWhatsApp(
    mobile,
    "Здравствуйте, меня зовут Алдияр, пишу вам от компании TrustMe, сервис электронного документоподписания. От этого номера поступала заявка ранее, не смогли до вас дозвониться. Подскажите как можно с вами связаться?",
  );
  const youNeedHelpText = formatWhatsApp(
    mobile,
    "Еще раз здравствуйте, это Алдияр, компания TrustMe. Сегодня с вами созванивался по вопросу электронного документо подписания, подписание договоров через СМС, ЭЦП и Egov mobile. Направляю вам информацию по программе Trust Contract к ознакомлению.%0A%0AТак же направляю вам видео о работе программы%0A*Как это выглядит со стороны клиента:*%0Ahttps://youtube.com/shorts/jGeTc_hheIM?feature=share%0A%0AКак это выглядит со стороны инициатора:%0Ahttps://www.youtube.com/watch?v=-4rUunakyss",
);

  const copyButton = (value: string) => {
    if (value === "не верный формат") return;
    console.log(value);
    copy(value);
  };

  return (
    <div>
      Phone
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/phone">Phone</Link>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Имя"
          variant="outlined"
          value={phone}
          onChange={(event) => {
            if (!event?.target?.value) return;
            setPhone(event.target.value);
          }}
          fullWidth
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ my: "auto" }}>
            {mobile ? mobile : "mobile"}
          </Typography>
          <Button variant="contained" onClick={() => copyButton(mobile)}>
            <ContentCopy />
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ my: "auto" }}>
            {whatsApp ? whatsApp : "whatsApp"}
          </Typography>
          <Button variant="contained" onClick={() => copyButton(whatsApp)}>
            <ContentCopy />
          </Button>
          <Button variant="contained" onClick={() => openLink(whatsApp)}>
            <Launch />
          </Button>
          <Button variant="contained" onClick={() => openLink(whatsAppText)}>
            <TextFields />
          </Button>
          <Button variant="contained" onClick={() => openLink(youNeedHelpText)}>
            <TextFields />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

/**
 *
 *
 *  + 7 700 404 08 52
 *  +7 700 404 08 52
 *  +7-700-404-08-52
 *      -> 77004040852
 *  87004040852
 *  87004040852
 *
 *  77004040852
 *  87004040852
 *  7004040852
 *
 *
 *
 *
 *
 */
