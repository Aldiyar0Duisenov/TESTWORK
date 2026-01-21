import { ImageRun } from "docx";

export const getImageRun = async (file: string) => {
  const response = await fetch(`/images/${file}`); // public/images/pizza.gif
  console.log(response);
  const arrayBuffer = await response.arrayBuffer();

  return new ImageRun({
    type: "png",
    data: arrayBuffer,
    transformation: {
      width: 794,
      height: 1120,
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
