export type FileType = {
  name: string;
  language: string;
  value: string;
};

export interface CustomEditor {
  theme: string;
  setTheme(theme: string): void;
  language: string;
  setLanguage(language: string): void;
  defaultCode: string;
  setDefaultCode(code: string): void;
  currentFiles: FileType[];
  setCurrentFiles(files: FileType): void;
  active: string;
  setActive(name: string): void;
}
