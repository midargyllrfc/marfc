import { build } from "esbuild";
import glob from "fast-glob";

(async () => {
  let entryPointsJS = await glob(`website-build/**/*.js`);
  let entryPointsCSS = await glob(`website-build/**/*.css`);
  let entryPoints = [...entryPointsJS, ...entryPointsCSS];
  // let entryPoints = [...entryPointsJS];

  await build({
    allowOverwrite: true,
    bundle: true,
    loader: { '.woff': 'file', '.woff2': 'file' },
    entryPoints,
    external: ["*.jpg", "*.jpeg", "*.png", "*.svg", "*.webp", "*.avif", "*.gif"],
    sourcemap: true,
    minify: true,
    // nodePaths: [`website-build/_shared`],
    outdir: `website-build`
  });
})();