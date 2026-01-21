import { Header, Paragraph, ImageRun } from "docx";

export const createBackground = async (file: string) => {
  const response = await fetch(`${import.meta.env.BASE_URL}images/${file}`);
  const buffer = await response.arrayBuffer();
  console.log("yoy", response, buffer);

  return new Header({
    children: [
      new Paragraph({
        children: [
          new ImageRun({
            type: "png",
            data: buffer,
            transformation: {
              width: 794,
              height: 1100,
            },
            floating: {
              horizontalPosition: {
                relative: "page",
                align: "center",
              },
              verticalPosition: {
                relative: "page",
                align: "center",
              },
              behindDocument: true, // 🔥 ключевое
            },
          }),
        ],
      }),
    ],
  });
};
