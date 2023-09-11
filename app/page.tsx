"use client";
import Editor from "@monaco-editor/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

import FileMenu from "@/components/menu/FileMenu";
import LanguageMenu from "@/components/menu/LanguageMenu";
import ThemeMenu from "@/components/menu/ThemeMenu";
import RightSection from "@/components/RightSection";
import { useEditorStore } from "@/store";
const App = (): React.ReactNode => {
  const theme = useEditorStore((state) => state.theme);
  const language = useEditorStore((state) => state.language);
  const code = useEditorStore((state) => state.defaultCode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Stack width="100vw" height="100vh">
      <Box
        bgcolor={theme === "vs-dark" ? "#1e1e1e;" : "white"}
        color={theme === "vs-dark" ? "white" : "#1e1e1e;"}
        width="100%"
        display="flex"
        flexDirection="column"
      >
        <Typography mt={1} align="center">
          Codex editor
        </Typography>
        <Box gap={2} display="flex" flexDirection="row" px={2} mb={2}>
          <FileMenu />
          <Typography align="center" sx={{ cursor: "pointer" }}>
            Edit
          </Typography>
          <LanguageMenu />
          <ThemeMenu />
          <Typography align="center" sx={{ cursor: "pointer" }}>
            Help
          </Typography>
        </Box>
      </Box>

      <Stack display="flex" direction="row">
        <Box
          bgcolor={theme === "vs-dark" ? "#1e1e1e;" : "white"}
          color={theme === "vs-dark" ? "white" : "#1e1e1e;"}
          width={300}
          display="flex"
          flexDirection="column"
        >
          <Typography
            // sx={{ borderBottom: "0.5px solid #ccc" }}
            textAlign="center"
          >
            Open files
          </Typography>
          <RightSection />
        </Box>
        <Box width="100%">
          <Editor
            height="100vh"
            language={language}
            theme={theme}
            value={code}
            defaultValue={code}
            options={{
              // inlineSuggest: true,
              formatOnType: true,
              // autoClosingBrackets: true,
              autoIndent: "full",
              contextmenu: true,
              fontFamily: "monospace",
              // fontSize: 16,
              lineHeight: 24,
              hideCursorInOverviewRuler: true,
              matchBrackets: "always",

              // minimap: {
              //   enabled: true,
              //   // scale: 10,
              // },
              scrollbar: {
                horizontalSliderSize: 4,
                verticalSliderSize: 18,
              },
              selectOnLineNumbers: true,
              roundedSelection: false,
              readOnly: false,
              cursorStyle: "line",
              automaticLayout: true,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
export default App;
