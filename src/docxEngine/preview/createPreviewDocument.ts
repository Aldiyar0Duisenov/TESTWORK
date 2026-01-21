import { FrameAnchorType, PageBreak, Paragraph, TextRun } from "docx";
import { getPreviewImage } from "./getPreviewImage";

export const createPreviewDocument = async () => {
  const previewImage = await getPreviewImage();

  return [
    new Paragraph({
      frame: {
        type: "absolute",
        position: {
          x: 6000,
          y: 9000,
        },
        width: 4000,
        height: 1000,
        anchor: {
          horizontal: FrameAnchorType.MARGIN,
          vertical: FrameAnchorType.MARGIN,
        },
      },
      children: [
        new TextRun({
          text: "Менеджер по продажам",
          size: 24,
        }),
        new TextRun({
          text: "ТОО «Бит Астана»",
          size: 24,
          break: 1,
        }),
        new TextRun({
          text: "БИН: 190140007097",
          size: 24,
          break: 1,
        }),
        new TextRun({
          text: "Дуйсенов Алдияр",
          size: 24,
          break: 1,
        }),
        new TextRun({
          text: "Тел.: +77079462817",
          size: 24,
          break: 1,
        }),
        new TextRun({
          text: "Почта: AADuysenov@1cbit.ru",
          size: 24,
          break: 1,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun(""),
        new Paragraph({
          children: [previewImage],
        }),
      ],
    }),
    new Paragraph({
      children: [new PageBreak()],
    }),
  ];
};
