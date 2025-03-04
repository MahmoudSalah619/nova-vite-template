import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Unfonts({
      custom: {
        families: [
          {
            name: "SF",
            src: "./src/assets/fonts/SF-Pro-Text-Regular.otf",
          },
          { name: "G-normal", src: "./src/assets/fonts/Gotham-Book.otf" },
          { name: "G-thin", src: "./src/assets/fonts/Gotham-Thin.otf" },
          { name: "G-medium", src: "./src/assets/fonts/Gotham-Medium.otf" },
          { name: "G-bold", src: "./src/assets/fonts/Gotham-Bold.otf" },
          { name: "G-black", src: "./src/assets/fonts/Gotham-Black.otf" },
          { name: "N-light", src: "./src/assets/fonts/NeueMachina-Light.otf" },
          {
            name: "N-regular",
            src: "./src/assets/fonts/NeueMachina-Regular.otf",
          },
          {
            name: "N-ultraBold",
            src: "./src/assets/fonts/NeueMachina-Ultrabold.otf",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
