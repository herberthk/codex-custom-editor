import type { MenuProps } from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

import { useEditorStore } from "@/store";

const ThemeMenu = (): React.ReactNode => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const setThem = useEditorStore((state) => state.setTheme);
  const theme = useEditorStore((state) => state.theme);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const changeTheme = (theme: string) => {
    setThem(theme);
    setAnchorEl(null);
  };

  const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(() => ({
    "& .MuiPaper-root": {
      "& .MuiMenu-list": {
        backgroundColor: theme === "vs-dark" ? "black" : "white",
        color: theme === "vs-dark" ? "white" : "black",
      },
    },
  }));
  return (
    <>
      <Typography
        id="theme-menu-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        align="center"
        sx={{ cursor: "pointer" }}
        // onMouseLeave={handleClose}
        // onMouseEnter={handleClick}
      >
        Theme
      </Typography>
      <StyledMenu
        id="them-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "theme-menu-button",
        }}
      >
        <MenuItem onClick={() => changeTheme("vs-light")}>Light theme</MenuItem>
        <MenuItem onClick={() => changeTheme("vs-dark")}>Dark theme</MenuItem>
      </StyledMenu>
    </>
  );
};

export default ThemeMenu;
