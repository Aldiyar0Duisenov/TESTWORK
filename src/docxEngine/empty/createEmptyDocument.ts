import { PageBreak, Paragraph, TextRun } from "docx";

export const createEmptyDocument = async () => {
  return [
    new Paragraph({
      children: [new TextRun("")],
    }),
    new Paragraph({
      children: [new PageBreak()],
    }),
  ];
};
