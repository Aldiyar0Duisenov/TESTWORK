import { ImageRun } from "docx";

export const getEndImage = async () => {
  const response = await fetch("/images/end.png");
  const arrayBuffer = await response.arrayBuffer();

  return new ImageRun({
    type: "png",
    data: arrayBuffer,
    transformation: {
      width: 794, //794
      height: 1120, //1120,
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
