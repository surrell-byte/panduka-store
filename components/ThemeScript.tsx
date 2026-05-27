"use client";

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const theme = localStorage.getItem("panduka-theme");
            if (theme) {
              document.documentElement.setAttribute("data-theme", theme);
            }
          } catch (e) {}
        `,
      }}
    />
  );
}