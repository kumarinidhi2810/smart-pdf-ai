import { Drawer, Box } from "@mui/material";

import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import SidebarUser from "./SidebarUser";

const drawerWidth = 270;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          display: "flex",
          borderRight: "1px solid #E5E7EB",
          boxSizing: "border-box",
        },
      }}
    >
      <SidebarLogo />

      <SidebarMenu />

      <SidebarUser />
    </Drawer>
  );
}

export default Sidebar;