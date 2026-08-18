import vinext from "vinext";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";

const isCodexSeatbeltSandbox =
  process.env.CODEX_SANDBOX === "seatbelt";

export default defineConfig(({ command }) => {
  return {
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
      ...(isCodexSeatbeltSandbox
        ? {
            watch: {
              useFsEvents: false,
              usePolling: true,
            },
          }
        : {}),
    },

    plugins: [
      tailwindcss(),
      vinext(),

      // Nitro is needed for Vercel builds,
      // but currently causes problems in local dev.
      ...(command === "build" ? [nitro()] : []),
    ],
  };
});