import { ImageRun } from "docx";

export const getPreviewImage = async () => {
  const response = await fetch("/images/preview.png");
  const arrayBuffer = await response.arrayBuffer();

  return new ImageRun({
    type: "png",
    data: arrayBuffer,
    transformation: {
      width: 794,
      height: 1120, //1120,
    },
    floating: {
      horizontalPosition: {
        relative: "page",
        align: "center",
      },
      verticalPosition: {
        relative: "page",
        align: "bottom",
      },
      behindDocument: true, // 🔥 ключевое
    },
  });
};
