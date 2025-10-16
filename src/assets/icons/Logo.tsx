const heighLogo = {
  small: "28",
  large: "61",
  middle: "45",
};

export const Logo = ({
  size = "small",
}: {
  size?: "small" | "large" | "middle";
}) => (
  <svg
    height={heighLogo[size]}
    viewBox="0 0 49 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M24.25 0L0 8.06L24.25 60.96L48.5 8.06L24.25 0ZM3.54 9.52L24.25 2.64L45.06 9.56L24.25 54.96V17.64L3.54 9.52Z"
        fill="rgb(17 115 212 / var(--tw-text-opacity, 1))"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_3">
        <rect width="48.5" height="60.96" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
