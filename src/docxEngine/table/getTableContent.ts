import { Paragraph, TableCell, TableRow, TextRun, WidthType } from "docx";
import type { ProductRow } from "../../types/ProductRowType";
import { getPositionImage } from "../getPositionImage";
import { positionsData } from "../dataSet/positionsData";
import { getPriceLabel, getSumLabel } from "../../utils/getNumericLabel";

export const getTableContent = async (positions: ProductRow[]) => {
  const createPositionImage = async (file: string) => {
    const positionImage = await getPositionImage(file);
    return new Paragraph({
      children: [positionImage],
    });
  };
  return await Promise.all(
    positions
      .filter((position) => !!position.count)
      .map(async (row) => {
        const positionImage = await createPositionImage(
          positionsData?.[row.id]?.image ?? "",
        );

        return new TableRow({
          children: [
            new TableCell({
              verticalAlign: "center",
              width: {
                size: 1500,
                type: WidthType.DXA,
              },
              children: [positionImage],
            }),
            new TableCell({
              children: positionsData[row.id].description,
            }),
            new TableCell({
              verticalAlign: "center",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun(Intl.NumberFormat("ru-RU").format(row.count)),
                  ],
                }),
              ],
            }),
            new TableCell({
              verticalAlign: "center",
              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun(getPriceLabel(positionsData[row.id].price)),
                  ],
                }),
              ],
            }),
            new TableCell({
              verticalAlign: "center",

              children: [
                new Paragraph({
                  alignment: "center",
                  children: [
                    new TextRun(
                      getSumLabel(positionsData[row.id].price, row.count),
                    ),
                  ],
                }),
              ],
            }),
          ],
        });
      }),
  );
};
