import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import packageJSON from "./package.json";

const proxy = {};

["/quality-assessment-estimator", "/face-detector-face-fitter"].forEach(
  (endpoint) => {
    proxy[endpoint] = {
      target: packageJSON.proxy,
      changeOrigin: true,
    };
  }
);

export default {
  plugins: [react(), checker({ typescript: true })],
  server: {
    open: true,
    proxy,
  },
  build: {
    outDir: "./build",
  },
  publicDir: "./public",
};
