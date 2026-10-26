import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { projects } from "@/content/projects";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontPath = (file: string) => join(process.cwd(), "src/app/fonts", file);

export default async function OpenGraphImage() {
  const [medium, semiBold] = await Promise.all([
    readFile(fontPath("HostGrotesk-Medium.ttf")),
    readFile(fontPath("HostGrotesk-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0b0c",
          color: "#f2f1ee",
          fontFamily: "Host Grotesk",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 20, fontSize: 40, fontWeight: 500, color: "#a3a19b", letterSpacing: "-0.02em" }}>
            {site.role}
          </div>
        </div>

        {/* Each project in its own product theme, the site's one signature. */}
        <div style={{ display: "flex", gap: 14 }}>
          {projects.map((project) => (
            <div
              key={project.slug}
              style={{
                flex: 1,
                height: 150,
                display: "flex",
                alignItems: "flex-end",
                padding: 18,
                borderRadius: 16,
                background: project.theme.bg,
                border: `1px solid ${project.theme.accent}40`,
              }}
            >
              <div style={{ width: 28, height: 4, borderRadius: 2, background: project.theme.accent }} />
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Host Grotesk", data: medium, weight: 500, style: "normal" },
        { name: "Host Grotesk", data: semiBold, weight: 600, style: "normal" },
      ],
    },
  );
}
