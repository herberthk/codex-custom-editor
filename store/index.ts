import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { editorFiles } from "@/files/editorFiles";
import { typescriptFile } from "@/files/typescript";
import type { CustomEditor, FileType } from "@/types";

export const useEditorStore = create<CustomEditor>()(
  devtools(
    persist(
      (set) => ({
        // initial state
        theme: "vs-dark",
        language: "typescript",
        defaultCode: typescriptFile,
        currentFiles: editorFiles,
        active: "types.ts",
        // methods for manipulating state
        setTheme: (theme: string) => {
          set(() => ({
            theme,
          }));
        },
        setLanguage: (language: string) => {
          set(() => ({
            language,
          }));
        },
        setActive: (active: string) => {
          set(() => ({
            active,
          }));
        },
        setDefaultCode: (code: string) => {
          set(() => ({
            defaultCode: code,
          }));
        },
        setCurrentFiles: (file: FileType) => {
          set((state) => ({
            currentFiles: [
              { language: file.language, name: file.name, value: file.value },
              ...state.currentFiles,
            ],
          }));
        },
      }),
      {
        name: "custom editor",
        // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  ),
);
