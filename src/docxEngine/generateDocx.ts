import { Packer } from "docx";
import { createPreviewDocument } from "./preview/createPreviewDocument";
import { Document } from "docx";
import { getHeader } from "./header/getHeader";
import { createEndDocument } from "./end/createEndDocument";
import { createITSBlank } from "./ITSBlank/createITSBlank";
import { createTableDocument } from "./table/createTableDocument";
import type { ProductRow } from "../types/ProductRowType";

export async function generateDocx(positions: ProductRow[]) {
  const preview = await createPreviewDocument();
  const ITSBlank = await createITSBlank();
  const header = await getHeader();
  const end = await createEndDocument();
  const table = await createTableDocument(positions);

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            size: 24, // 12pt = 24 half-points
            font: "Times New Roman",
          },
        },
      },
    },
    sections: [
      {
        headers: {
          default: header,
        },
        properties: {
          page: {
            /**
            
            margin: {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }, */
          },
        },
        children: [...preview, ...ITSBlank, ...table, ...end],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "MyDocument.docx";
  a.click();

  URL.revokeObjectURL(url);
}
