import { Drawer, Box, IconButton, Tooltip } from "@mui/material";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import SidebarMenu from "./SidebarMenu";

function Sidebar({ collapsed, setCollapsed }) {
  const drawerWidth = collapsed ? 72 : 220;

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

          transition: "width 0.25s ease",
        },
      }}
    >
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
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
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

      <SidebarMenu collapsed={collapsed} />
    </Drawer>
  );
}

export default Sidebar;