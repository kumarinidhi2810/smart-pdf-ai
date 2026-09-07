import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          display: "flex",
          justifyContent: "flex-end",
          px: 3,
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          sx={{
            width: 320,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon
                  sx={{
                    fontSize: 20,
                    color: "text.secondary",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;