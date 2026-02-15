import { ImageRun } from "docx";

export const getLKBlankImage = async () => {
  const response = await fetch("/images/LKBlank.png");
  const arrayBuffer = await response.arrayBuffer();

  return new ImageRun({
    type: "png",
    data: arrayBuffer,
    transformation: {
      width: 606, //794
      height: 779, //1120,
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
