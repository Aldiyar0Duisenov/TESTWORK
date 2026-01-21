import { Paragraph, TextRun } from "docx";
import { getEndImage } from "./getEndImage";

export const createEndDocument = async () => {
  const previewImage = await getEndImage();

  return [
    new Paragraph({
      children: [
        new TextRun(""),
        new Paragraph({
          children: [previewImage],
        }),
      ],
    }),
  ];
};
