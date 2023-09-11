import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import React from "react";

import { useEditorStore } from "@/store";
const RightSection = (): React.ReactNode => {
  const setCode = useEditorStore((state) => state.setDefaultCode);
  const setLanguage = useEditorStore((state) => state.setLanguage);
  const active = useEditorStore((state) => state.active);
  const setActive = useEditorStore((state) => state.setActive);
  const currentFiles = useEditorStore((state) => state.currentFiles);
  // const theme = useEditorStore((state) => state.theme);
  return (
    <Box display="flex" flexDirection="column" gap={1} mt={2}>
      {currentFiles.map((el) => (
        <Typography
          key={el.name}
          sx={{
            "&:hover": {
              backgroundColor: "#636e72",
              color: "black",
            },
            cursor: "pointer",
          }}
          p={1}
          //   color="white"
          className={classNames({
            "active-file": active === el.name,
          })}
          //   className="active-file"
          onClick={() => {
            setCode(el.value);
            setLanguage(el.language);
            setActive(el.name);
          }}
        >
          {el.name}
        </Typography>
      ))}
    </Box>
  );
};

export default RightSection;
