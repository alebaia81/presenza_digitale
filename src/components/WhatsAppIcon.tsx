import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  style?: React.CSSProperties;
}

/** Official WhatsApp logo SVG — inline, zero network request */
export default function WhatsAppIcon({ className = 'w-5 h-5', style }: WhatsAppIconProps) {
  // Extract width/height based on className to set HTML attributes as fallback
  let width = "20";
  let height = "20";
  
  if (className.includes('w-4')) { width = "16"; height = "16"; }
  else if (className.includes('w-5')) { width = "20"; height = "20"; }
  else if (className.includes('w-6')) { width = "24"; height = "24"; }
  else if (className.includes('w-7')) { width = "28"; height = "28"; }
  else if (className.includes('w-8')) { width = "32"; height = "32"; }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      style={{ minWidth: `${width}px`, minHeight: `${height}px`, ...style }}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 1C7.729 1 1 7.729 1 16c0 2.641.686 5.198 1.99 7.459L1 31l7.74-2.03A14.944 14.944 0 0016 31c8.271 0 15-6.729 15-15S24.271 1 16 1z"
        fill="currentColor"
      />
      <path
        d="M16 3.5c-6.893 0-12.5 5.607-12.5 12.5 0 2.33.645 4.58 1.867 6.533L4 28l5.633-1.48A12.46 12.46 0 0016 28.5c6.893 0 12.5-5.607 12.5-12.5S22.893 3.5 16 3.5z"
        fill="#25D366"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.084 10.5c-.28-.625-.576-.638-.842-.648-.218-.009-.468-.008-.717-.008-.25 0-.656.094-.999.469s-1.312 1.281-1.312 3.124c0 1.844 1.343 3.626 1.53 3.876.188.25 2.594 4.125 6.376 5.625 3.151 1.243 3.793 1.002 4.48.939.687-.063 2.218-.906 2.53-1.782.313-.875.313-1.625.22-1.781-.094-.157-.344-.25-.72-.438-.374-.187-2.218-1.094-2.561-1.219-.344-.124-.594-.187-.844.188-.25.374-.968 1.218-1.187 1.468-.219.25-.438.281-.813.094-.374-.187-1.58-.582-3.01-1.857-1.113-.993-1.863-2.218-2.082-2.593-.219-.376-.023-.578.164-.766.169-.17.374-.438.562-.657.187-.218.25-.374.375-.624.125-.25.063-.47-.031-.657-.094-.187-.844-2.031-1.155-2.78l-.001-.003z"
        fill="white"
      />
    </svg>
  );
}
