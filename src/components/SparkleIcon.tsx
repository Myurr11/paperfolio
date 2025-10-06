interface SparkleIconProps {
  className?: string;
}

export const SparkleIcon = ({ className = "" }: SparkleIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="currentColor"
      />
      <path
        d="M18 16L18.75 18.25L21 19L18.75 19.75L18 22L17.25 19.75L15 19L17.25 18.25L18 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
