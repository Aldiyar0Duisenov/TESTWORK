import { Header, Paragraph, ImageRun } from "docx";

export const getEmptyHeader = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}images/white.png`);
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
              height: 150,
            },
            floating: {
              horizontalPosition: {
                relative: "page",
                align: "left",
              },
              verticalPosition: {
                relative: "page",
                align: "top",
              },
              behindDocument: true, // 🔥 ключевое
            },
          }),
        ],
      }),
    ],
  });
};
