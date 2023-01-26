export const readImageAsync = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64result = reader.result?.toString();
      if (base64result) {
        resolve(base64result);
      } else {
        reject();
      }
    };
    reader.onerror = reject;
    reader.readAsBinaryString(file);
  });

export const convertImageTo64Base = async (file: File) => {
  const picFile = await readImageAsync(file);
  const base64Image = btoa(picFile);

  return base64Image;
};
