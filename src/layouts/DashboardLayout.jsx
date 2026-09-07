import { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Avatar } from "@mui/material";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const drawerWidth = sidebarCollapsed ? 72 : 220;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      {/* TOP HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 70,
          bgcolor: "#fff",
          color: "#172033",
          borderBottom: "1px solid #E5E7EB",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            minHeight: "70px !important",
            px: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* COMPANY */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                fontWeight: 800,
                fontSize: 15,
                color: "#E31E24",
              }}
            >
              DFCCIL
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Dedicated Freight Corridor Corporation of India Limited
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                  mt: 0.3,
                }}
              >
                A Govt. of India (Ministry of Railways) Enterprise
              </Typography>
            </Box>
          </Box>

          {/* EMPLOYEE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#263238",
                fontSize: 16,
              }}
            >
              N
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                NIDHI KUMARI
              </Typography>

              <Typography
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                }}
              >
                Frontend Developer
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* BELOW HEADER */}
      <Box
        sx={{
          display: "flex",
          pt: "70px",
          minHeight: "100vh",
        }}
      >
        {/* SIDEBAR */}
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />

        {/* MAIN */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            ml: 0,
          }}
        >
          <Navbar />

          <Box
            component="main"
            sx={{
              p: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;