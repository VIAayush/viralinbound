import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14171c",
          padding: 72,
          position: "relative",
        }}
      >
        {/* faint converging lines, echoing the site's background motif */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path d="M0 80 C 300 40, 900 200, 1200 120" stroke="#3a4a96" strokeWidth="1.5" fill="none" opacity={0.5} />
          <path d="M0 220 C 300 300, 900 120, 1200 260" stroke="#3a4a96" strokeWidth="1.5" fill="none" opacity={0.35} />
          <path d="M0 520 C 300 460, 900 600, 1200 540" stroke="#3a4a96" strokeWidth="1.5" fill="none" opacity={0.4} />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#1d233099",
              border: "1px solid #34406e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32">
              <path
                d="M9 10 L16 21 M23 10 L16 21"
                stroke="#f6f6f3"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="16" cy="23.5" r="1.9" fill="#c98f4a" />
            </svg>
          </div>
          <span style={{ color: "#f6f6f3", fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            Viral Inbound
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <span style={{ color: "#f6f6f3", fontSize: 62, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
            Build. Digitize. Automate. Grow.
          </span>
          <span style={{ color: "#a7b0c4", fontSize: 26, lineHeight: 1.4 }}>
            Strategy, design, technology and digital products for growing businesses.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
