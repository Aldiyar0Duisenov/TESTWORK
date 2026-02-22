import {
  PageBreak,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { getTableContent } from "./getTableContent";
import type { ProductRow } from "../../types/ProductRowType";
import { positionsData } from "../dataSet/positionsData";

export const createTableDocument = async (positions: ProductRow[]) => {
  const tableContent = await getTableContent(positions);

  return [
    new Table({
      rows: [
        // header
        new TableRow({
          children: [
            new TableCell({
              shading: { fill: "FF6699" },

              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "Позиция", color: "FFFFFF" })],
                }),
              ],
            }),
            new TableCell({
              shading: { fill: "FF6699" },

              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({ text: "Описание", color: "FFFFFF" }),
                  ],
                }),
              ],
            }),
            new TableCell({
              shading: { fill: "FF6699" },

              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "Кол-во", color: "FFFFFF" })],
                }),
              ],
            }),
            new TableCell({
              shading: { fill: "FF6699" },
              width: {
                size: 800,
                type: WidthType.DXA,
              },

              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "Цена", color: "FFFFFF" })],
                }),
              ],
            }),
            new TableCell({
              shading: { fill: "FF6699" },

              width: {
                size: 800,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "Сумма", color: "FFFFFF" })],
                }),
              ],
            }),
          ],
        }),
        //positionsData
        ...tableContent,
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "" })],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: "ИТОГО" })],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "" })],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [new TextRun({ text: "" })],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun({
                      text: Intl.NumberFormat("ru-RU").format(
                        positions
                          .filter((position) => !!position.count)
                          .reduce((accumulator, currentValue) => {
                            return (
                              accumulator +
                              currentValue.count *
                                Math.floor(positionsData[currentValue.id].price)
                            );
                          }, 0),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun(""),
        new Paragraph({
          //children: [previewImage],
        }),
      ],
    }),
    new Paragraph({
      children: [new PageBreak()],
    }),
  ];
};
