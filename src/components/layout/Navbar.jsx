import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Badge,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid",
        borderColor: "grey.200",
        bgcolor: "#fff",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1,
        }}
      >
        {/* Left */}
        <Typography variant="h5" fontWeight={700}>
          Dashboard
        </Typography>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            size="small"
            placeholder="Search documents..."
            sx={{
              width: 280,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />

          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "primary.main",
            }}
          >
            N
          </Avatar>

          <Box>
            <Typography fontWeight={600}>
              Nidhi
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              Frontend Developer
            </Typography>
          </Box>

          <IconButton>
            <KeyboardArrowDownRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;