type TFilterFilesByType = {
  type?: RegExp;
  files: FileList;
};

export const filterFilesByType = ({
  type = /^image/,
  files,
}: TFilterFilesByType) => {
  const images: File[] = [];

  for (let i = 0; i < files.length; i += 1) {
    const file = files.item(i);
    if (file && type.test(file.type)) {
      images.push(file);
    }
  }

  return images;
};
