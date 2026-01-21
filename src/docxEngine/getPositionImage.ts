import { ImageRun } from "docx";

export const getPositionImage = async (file: string) => {
  const response = await fetch(`/images/${file}.png`);
  const arrayBuffer = await response.arrayBuffer();

  return new ImageRun({
    type: "png",
    data: arrayBuffer,
    transformation: {
      width: 90,
      height: 90,
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
  });
};
