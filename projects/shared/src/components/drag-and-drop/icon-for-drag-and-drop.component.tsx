import { Icon } from "@chakra-ui/react";

type TIconForDragAndDrop = {
  color: string;
};

export function IconForDragAndDrop({
  color,
}: TIconForDragAndDrop): JSX.Element {
  return (
    <Icon viewBox="0 0 220 220" color={color} boxSize="60%">
      <defs>
        <linearGradient x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="currentColor"
          d="M110 0c34.242 0 62 27.758 62 62 0 34.242-27.758 62-62 62-34.242 0-62-27.758-62-62 0-34.242 27.758-62 62-62Zm0 2C76.863 2 50 28.863 50 62s26.863 60 60 60 60-26.863 60-60-26.863-60-60-60Z"
        />
        <path
          fill="currentColor"
          d="M103.622 147c47.77 0 88.427 30.45 103.622 72.999h-2.031C190.1 178.577 150.34 149 103.67 149s-86.43 29.576-101.542 71L0 219.999C15.195 177.449 55.852 147 103.622 147Z"
          transform="translate(5)"
        />
      </g>
    </Icon>
  );
}
