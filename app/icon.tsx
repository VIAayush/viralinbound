import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14171c",
          borderRadius: 18,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 32 32">
          <path
            d="M9 10 L16 21 M23 10 L16 21"
            stroke="#f6f6f3"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="16" cy="23.5" r="1.9" fill="#9c6a2e" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
