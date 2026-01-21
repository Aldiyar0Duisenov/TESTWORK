import { PageBreak, Paragraph, TextRun } from "docx";
import { getITSBlankImage } from "./getITSBlankImage";

export const createITSBlank = async () => {
  const previewImage = await getITSBlankImage();

  return [
    new Paragraph({
      children: [
        new TextRun(""),
        new Paragraph({
          children: [previewImage],
        }),
        new Paragraph({
          children: [new PageBreak()],
        }),
      ],
    }),
  ];
};
