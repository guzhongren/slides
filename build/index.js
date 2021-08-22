import ls from "ls";
import execa from "execa";

const dir = "./05.Slides/*";


(async () => {
  const fileList = ls(dir);
  fileList.forEach((file) => {
    execa("node_modules/.bin/slidev", [
      "build",
      `${file.full}`,
      "--base",
      `/talks/${file.name}/`,
      "--out",
      `dist/${file.name}/`,
    ]);
  });
})();
