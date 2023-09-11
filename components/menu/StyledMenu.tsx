import type { MenuProps } from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import React from "react";

import { useEditorStore } from "@/store";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const StyledMenu = () => {
  const theme = useEditorStore((state) => state.theme);
  const Wrapper = styled((props: MenuProps) => <Menu {...props} />)(() => ({
    "& .MuiPaper-root": {
      "& .MuiMenu-list": {
        backgroundColor: theme === "vs-dark" ? "black" : "white",
        color: theme === "vs-dark" ? "white" : "black",
      },
    },
  }));
  return Wrapper;
};

export default StyledMenu;
