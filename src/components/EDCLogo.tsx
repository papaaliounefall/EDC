import React from 'react';

interface EDCLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'monochrome';
  showSubtitle?: boolean;
}

export const EDCLogo: React.FC<EDCLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'dark', // 'dark' = for dark backgrounds (white text), 'light' = for light backgrounds (charcoal text)
  showSubtitle = false,
}) => {
  const textColor = variant === 'light' ? '#1C1E22' : '#FFFFFF';
  const leftRoofColor = variant === 'light' ? '#2D3E4E' : '#4A6275';
  const rightRoofColor = '#F2A115';
  const windowFrameColor = variant === 'light' ? '#1C1E22' : '#FFFFFF';
  const _windowDividerColor = variant === 'light' ? '#FFFFFF' : '#1F1F1B';

  return (
    <div className="inline-flex items-center gap-3">
      <svg
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Logo EDC — Entreprise Dia Construction"
      >
        {/* ========================================================
            LEFT HOUSE ROOF (SLATE / DARK BLUE-GREY)
            ======================================================== */}
        {/* Left Roof Chevron */}
        <path
          d="M48 15 L21 34.5 H28 L48 20.5 L67 34.5 H74 L48 15Z"
          fill={leftRoofColor}
        />
        {/* Left House Window (4 panes) */}
        <g transform="translate(43, 23)">
          {/* Top-Left Pane */}
          <rect x="0" y="0" width="4" height="4" fill={windowFrameColor} />
          {/* Top-Right Pane */}
          <rect x="5.5" y="0" width="4" height="4" fill={windowFrameColor} />
          {/* Bottom-Left Pane */}
          <rect x="0" y="5.5" width="4" height="4" fill={windowFrameColor} />
          {/* Bottom-Right Pane */}
          <rect x="5.5" y="5.5" width="4" height="4" fill={windowFrameColor} />
        </g>

        {/* ========================================================
            RIGHT HOUSE ROOF (GOLDEN / OCHRE YELLOW)
            ======================================================== */}
        {/* Right Roof Chevron */}
        <path
          d="M89 6.5 L53 34.5 H62 L89 13.5 L117 34.5 H126 L89 6.5Z"
          fill={rightRoofColor}
        />
        {/* Right House Window (4 panes) */}
        <g transform="translate(83.5, 17.5)">
          {/* Top-Left Pane */}
          <rect x="0" y="0" width="4.5" height="4.5" fill={windowFrameColor} />
          {/* Top-Right Pane */}
          <rect x="6" y="0" width="4.5" height="4.5" fill={windowFrameColor} />
          {/* Bottom-Left Pane */}
          <rect x="0" y="6" width="4.5" height="4.5" fill={windowFrameColor} />
          {/* Bottom-Right Pane */}
          <rect x="6" y="6" width="4.5" height="4.5" fill={windowFrameColor} />
        </g>

        {/* ========================================================
            TYPOGRAPHY: "EDC"
            Precise vector geometry matching the official bold font
            ======================================================== */}
        {/* Letter E */}
        <path
          d="M21 38 H69 V49 H36 V61 H64 V71 H36 V84 H69 V95 H21 V38Z"
          fill={textColor}
        />

        {/* Letter D */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74 38 H96 C110.5 38 120 46.5 120 66.5 C120 86.5 110.5 95 96 95 H74 V38ZM89 49 H95 C102.5 49 105.5 54.5 105.5 66.5 C105.5 78.5 102.5 84 95 84 H89 V49Z"
          fill={textColor}
        />

        {/* Letter C */}
        <path
          d="M176 50.5 L164.5 56.5 C161.5 49 155 47.5 149 47.5 C139 47.5 133 55 133 66.5 C133 78 139 85.5 149 85.5 C155 85.5 161.5 84 164.5 76.5 L176 82.5 C171 92.5 161 97 149 97 C129 97 118 84.5 118 66.5 C118 48.5 129 36 149 36 C161 36 171 40.5 176 50.5Z"
          fill={textColor}
        />
      </svg>

      {showSubtitle && (
        <div className="flex flex-col">
          <span
            className={`font-display text-sm font-bold tracking-tight leading-none ${
              variant === 'light' ? 'text-[#1C1E22]' : 'text-white'
            }`}
          >
            EDC
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#F2A115] uppercase leading-tight mt-0.5">
            Entreprise Dia Construction
          </span>
        </div>
      )}
    </div>
  );
};
