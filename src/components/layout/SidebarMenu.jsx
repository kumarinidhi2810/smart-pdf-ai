import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import sidebarMenu from "../../constants/sidebarMenu";

function SidebarMenu({ collapsed }) {
  return (
    <List
      sx={{
        px: collapsed ? 1 : 1.5,
        pt: 1,
      }}
    >
      {sidebarMenu.map((item) => {
        const Icon = item.icon;

        const menuItem = (
          <ListItemButton
            key={item.title}
            component={NavLink}
            to={item.path}
            sx={{
              minHeight: 46,
              justifyContent: collapsed ? "center" : "flex-start",
              px: collapsed ? 1 : 1.5,
              borderRadius: 1.5,
              mb: 0.7,

              transition: "all 0.2s ease",

              "&:hover": {
                bgcolor: "#F1F5F9",
              },

              "&.active": {
                bgcolor: "primary.main",
                color: "#fff",
              },

              "&.active .MuiListItemIcon-root": {
                color: "#fff",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: collapsed ? 0 : 40,
                justifyContent: "center",
                color: "#64748B",
              }}
            >
              <Icon fontSize="small" />
            </ListItemIcon>

            {!collapsed && (
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              />
            )}
          </ListItemButton>
        );

        return collapsed ? (
          <Tooltip
            key={item.title}
            title={item.title}
            placement="right"
          >
            {menuItem}
          </Tooltip>
        ) : (
          menuItem
        );
      })}
    </List>
  );
}

export default SidebarMenu;