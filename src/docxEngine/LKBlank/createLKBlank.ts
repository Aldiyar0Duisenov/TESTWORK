import { PageBreak, Paragraph, TextRun } from "docx";
import { getLKBlankImage } from "./getLKBlankImage";

export const createLKBlank = async () => {
  const previewImage = await getLKBlankImage();

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
