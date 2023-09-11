import type { MenuProps } from "@mui/material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ChangeEvent } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useEditorStore } from "@/store";

const FileMenu = (): React.ReactNode => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const open = Boolean(anchorEl);
  const setcurrentFiles = useEditorStore((state) => state.setCurrentFiles);
  const setActive = useEditorStore((state) => state.setActive);
  const setCode = useEditorStore((state) => state.setDefaultCode);
  const setLanguage = useEditorStore((state) => state.setLanguage);
  const curentFiles = useEditorStore((state) => state.currentFiles);
  const theme = useEditorStore((state) => state.theme);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setFile(e.target.files[0]);
  }, []);

  const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(() => ({
    "& .MuiPaper-root": {
      "& .MuiMenu-list": {
        backgroundColor: theme === "vs-dark" ? "black" : "white",
        color: theme === "vs-dark" ? "white" : "black",
      },
    },
  }));

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const newLanguage = file.type.split("/").pop();
        const fileName = file.name;
        const fileValue = e.target?.result;
        const language =
          newLanguage === "vnd.trolltech.linguist" ? "typescript" : newLanguage;
        const fileNames = curentFiles.map((f) => f.name);
        if (!fileNames.includes(fileName)) {
          setcurrentFiles({
            //@ts-ignore
            language,
            name: fileName,
            //@ts-ignore
            value: fileValue?.toString(),
          });
        }
        //@ts-ignore
        setCode(fileValue?.toString());
        //@ts-ignore
        setLanguage(language);
        setActive(fileName);
      };
      reader.readAsText(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={onChange}
      />
      <Typography
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        align="center"
        sx={{ cursor: "pointer" }}
        // onMouseLeave={handleClose}
        // onMouseEnter={handleClick}
      >
        File
      </Typography>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // sx={{ backgroundColor: "black", color: "white" }}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>New file</MenuItem>
        <MenuItem
          onClick={() => {
            inputRef.current?.click();
            handleClose();
          }}
        >
          Open file
        </MenuItem>
        <MenuItem onClick={handleClose}>Open folder</MenuItem>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save as</MenuItem>
        <MenuItem onClick={handleClose}>Save all</MenuItem>
        <MenuItem onClick={handleClose}>Share</MenuItem>
        <MenuItem onClick={handleClose}>Auto save</MenuItem>
        <MenuItem onClick={handleClose}>Preferences</MenuItem>
        <MenuItem onClick={handleClose}>Close</MenuItem>
      </StyledMenu>
    </>
  );
};

export default FileMenu;
