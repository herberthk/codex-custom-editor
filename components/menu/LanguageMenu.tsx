import type { MenuProps } from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

import { useEditorStore } from "@/store";
const lang: string[] = [
  "TypeScript",
  "JavaScript",
  "CSS",
  "LESS",
  "HTML",
  "Python",
  "PHP",
  "Java",
  "Lua",
  "F#",
  "Powershell",
  "Ruby",
  "Objective-C",
  "R",
  "C++",
  "Markdown",
  "Pug",
  "Handlebars",
  "Batch",
];

const LanguageMenu = (): React.ReactNode => {
  const setLanguage = useEditorStore((state) => state.setLanguage);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useEditorStore((state) => state.theme);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const changeLanguage = (language: string) => {
    setLanguage(language);
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
        id="language-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        align="center"
        sx={{ cursor: "pointer" }}
      >
        Language
      </Typography>
      <StyledMenu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {lang.map((v, i) => (
          <MenuItem
            key={i}
            onClick={() => changeLanguage(v.toLocaleLowerCase())}
          >
            {v}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default LanguageMenu;
