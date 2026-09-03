import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import sidebarMenu from "../../constants/sidebarMenu";

function SidebarMenu() {
  return (
    <List sx={{ px: 2 }}>
      {sidebarMenu.map((item) => {
        const Icon = item.icon;

        return (
          <ListItemButton
            key={item.title}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 2,
              mb: 1,

              "&.active": {
                bgcolor: "primary.main",
                color: "#fff",
              },

              "&.active .MuiListItemIcon-root": {
                color: "#fff",
              },
            }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        );
      })}
    </List>
  );
}

export default SidebarMenu;