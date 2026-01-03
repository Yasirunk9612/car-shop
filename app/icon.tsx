import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

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
          background: "#000000",
        }}
      >
        <div
          style={{
            width: 420,
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 96,
            border: "2px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            DK
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
