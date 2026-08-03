import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  // Keep React a peer; bundle everything else so the package is drop-in
  // (consumers only need react / react-dom installed).
  external: ["react", "react-dom"],
  noExternal: ["clsx", "tailwind-merge", "lucide-react", "radix-ui"],
  injectStyle: false,
  banner: { js: '"use client";' },
});
