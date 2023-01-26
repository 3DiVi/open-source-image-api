import { useState } from 'react';

type TUseFilesDragAndDropLogic = {
  onFileAction: (file: FileList) => void;
  isLoading: boolean;
};

export function useFilesDragAndDropLogic({
  onFileAction,
  isLoading,
}: TUseFilesDragAndDropLogic) {
  const [isHover, setIsHover] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHover(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHover(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHover(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    if (isLoading) return;

    e.preventDefault();
    e.stopPropagation();

    onFileAction(e.dataTransfer.files);
    setIsHover(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || isLoading) return;

    onFileAction(e.target.files);
    e.target.value = '';
    setIsHover(false);
  };

  return {
    isHover,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleFileUpload,
    handleDrop,
  };
}
