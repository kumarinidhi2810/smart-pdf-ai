
import {
  Drawer,
  Box,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { useNavigate } from "react-router-dom";

import SidebarMenu from "./SidebarMenu";

function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate();

  const drawerWidth = collapsed ? 72 : 220;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberMe");

    navigate("/");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid #E5E7EB",
          top: "70px",
          height: "calc(100vh - 70px)",
          overflowX: "hidden",

          display: "flex",
          flexDirection: "column",

          transition: "width 0.25s ease",
        },
      }}
    >
      {/* TOP SECTION */}
      <Box>
        {/* COLLAPSE BUTTON */}
        <Box
          sx={{
            display: "flex",
            justifyContent: collapsed ? "center" : "flex-end",
            alignItems: "center",
            px: collapsed ? 0 : 1,
            py: 1,
          }}
        >
          <Tooltip
            title={
              collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
            }
            placement="right"
          >
            <IconButton
              onClick={() => setCollapsed(!collapsed)}
              size="small"
              sx={{
                color: "#64748B",

                "&:hover": {
                  bgcolor: "#F1F5F9",
                  color: "primary.main",
                },
              }}
            >
              {collapsed ? (
                <ChevronRightRoundedIcon />
              ) : (
                <ChevronLeftRoundedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Box>

        {/* MENU */}
        <SidebarMenu collapsed={collapsed} />
      </Box>

      {/* BOTTOM LOGOUT */}
      <Box
        sx={{
          mt: "auto",
          p: collapsed ? 1 : 1.5,
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <Tooltip
          title={collapsed ? "Logout" : ""}
          placement="right"
        >
          <Button
            onClick={handleLogout}
            fullWidth
            startIcon={<LogoutRoundedIcon />}
            sx={{
              minWidth: 0,
              height: 42,
              justifyContent: collapsed
                ? "center"
                : "flex-start",
              px: collapsed ? 0 : 1.5,

              color: "#64748B",
              textTransform: "none",
              fontSize: 13.5,
              fontWeight: 600,

              "& .MuiButton-startIcon": {
                margin: collapsed ? 0 : undefined,
              },

              "&:hover": {
                bgcolor: "#FEF2F2",
                color: "#DC2626",
              },
            }}
          >
            {!collapsed && "Logout"}
          </Button>
        </Tooltip>
      </Box>
    </Drawer>
  );
}

export default Sidebar;

