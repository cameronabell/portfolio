import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigPaths from "vite-jsconfig-paths";
import dotenv from "dotenv";
import env from "vite-plugin-env-compatible";
import svgr from "vite-plugin-svgr";

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [jsconfigPaths(), react(), env(), svgr()],
});
