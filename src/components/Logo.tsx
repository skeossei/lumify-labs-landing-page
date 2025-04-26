type LogoProps = {
  className?: string;
  size?: number;
  variant?: "default" | "monochrome" | "white";
};

export default function Logo({
  className = "",
  size = 40,
  variant = "default",
}: LogoProps) {
  // Define colors based on variant
  let primaryColor = "#0ea5e9"; // sky-500
  let secondaryColor = "#0284c7"; // sky-600
  let textColor = "#0c4a6e"; // sky-900

  if (variant === "monochrome") {
    primaryColor = "#0c4a6e";
    secondaryColor = "#0c4a6e";
    textColor = "#0c4a6e";
  } else if (variant === "white") {
    primaryColor = "#ffffff";
    secondaryColor = "#f0f9ff";
    textColor = "#ffffff";
  }

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke={primaryColor}
          strokeWidth="4"
          fill="none"
        />

        {/* Inner hexagon representing automation/AI */}
        <path
          d="M50 20L75 35V65L50 80L25 65V35L50 20Z"
          fill={primaryColor}
          fillOpacity="0.2"
          stroke={secondaryColor}
          strokeWidth="3"
        />

        {/* Central node */}
        <circle cx="50" cy="50" r="10" fill={primaryColor} />

        {/* Connection lines */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="40"
          stroke={secondaryColor}
          strokeWidth="3"
        />
        <line
          x1="75"
          y1="35"
          x2="60"
          y2="50"
          stroke={secondaryColor}
          strokeWidth="3"
        />
        <line
          x1="75"
          y1="65"
          x2="60"
          y2="50"
          stroke={secondaryColor}
          strokeWidth="3"
        />
        <line
          x1="50"
          y1="80"
          x2="50"
          y2="60"
          stroke={secondaryColor}
          strokeWidth="3"
        />
        <line
          x1="25"
          y1="65"
          x2="40"
          y2="50"
          stroke={secondaryColor}
          strokeWidth="3"
        />
        <line
          x1="25"
          y1="35"
          x2="40"
          y2="50"
          stroke={secondaryColor}
          strokeWidth="3"
        />
      </svg>

      <span
        className="font-bold text-xl tracking-tight"
        style={{ color: textColor }}
      >
        AutomateAI
      </span>
    </div>
  );
}
