export const TickIcon = ({ width = 26, height = 26, color = "#ffff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle
      cx="13"
      cy="13"
      r="12"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 2" 
    />
    <path
      d="M8 13L11 16L18 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrossIcon = ({ width = 26, height = 26, color = "#FF0000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle
      cx="13"
      cy="13"
      r="12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9 9C10 10 11 12 13 14C15 16 17 13 17 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 17C10 16 11 14 13 12C15 10 17 13 17 17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ExclamationIcon = ({
  width = 26,
  height = 26,
  color = "#FFC107",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <rect
      x="3"
      y="3"
      width="20"
      height="20"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="13"
      y1="7"
      x2="13"
      y2="16"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="13" cy="19" r="2" fill={color} />
  </svg>
);

