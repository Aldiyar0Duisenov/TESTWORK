import { Header, Paragraph, ImageRun } from "docx";

export const getHeader = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}images/header.png`);
  const buffer = await response.arrayBuffer();

  return new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({
            type: "png",
            data: buffer,
            transformation: {
              width: 200,
              height: 100,
            },
            floating: {
              horizontalPosition: {
                relative: "page",
                offset: 2000,
              },
              verticalPosition: {
                relative: "page",
                offset: 2000,
              },
              behindDocument: true, // 🔥 ключевое
            },
          }),
        ],
      }),
    ],
  });
};
