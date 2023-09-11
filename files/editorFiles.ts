import type { FileType } from "@/types";

import { cssFile } from "./css";
import { htmlFile } from "./html";
import { pythonCode } from "./python";
import { typescriptFile } from "./typescript";

export const editorFiles: FileType[] = [
  {
    name: "types.ts",
    language: "typescript",
    value: typescriptFile,
  },
  {
    name: "style.css",
    language: "css",
    value: cssFile,
  },
  {
    name: "index.html",
    language: "html",
    value: htmlFile,
  },
  {
    name: "uncommon.py",
    language: "python",
    value: pythonCode,
  },
];
