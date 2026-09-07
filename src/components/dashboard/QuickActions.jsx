import { Box, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const actions = [
  {
    title: "Upload PDF",
    description: "Upload a new PDF document",
    icon: PictureAsPdfRoundedIcon,
    iconBg: "#EAF2FF",
    iconColor: "#2563EB",
    path: "/upload",
  },
  {
    title: "AI Summaries",
    description: "View generated summaries",
    icon: AutoAwesomeRoundedIcon,
    iconBg: "#F3EAFF",
    iconColor: "#7C3AED",
    path: "/summary",
  },
  {
    title: "History",
    description: "Previously processed files",
    icon: HistoryRoundedIcon,
    iconBg: "#E8F7F3",
    iconColor: "#059669",
    path: "/history",
  },
  {
    title: "Profile",
    description: "Manage your account",
    icon: PersonRoundedIcon,
    iconBg: "#FFF1EA",
    iconColor: "#EA580C",
    path: "/profile",
  },
];

function QuickActions() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 2,
      }}
    >
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Paper
            key={action.title}
            elevation={0}
            onClick={() => navigate(action.path)}
            sx={{
              height: 108,
              px: 2,
              py: 2,
              border: "1px solid #E2E8F0",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 1.8,
              cursor: "pointer",
              transition: "all 0.2s ease",
              backgroundColor: "#FFFFFF",

              "&:hover": {
                transform: "translateY(-2px)",
                borderColor: "#CBD5E1",
                boxShadow:
                  "0 8px 20px rgba(15, 23, 42, 0.08)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: 48,
                height: 48,
                minWidth: 48,
                borderRadius: "50%",
                backgroundColor: action.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                sx={{
                  fontSize: 24,
                  color: action.iconColor,
                }}
              />
            </Box>

            {/* Content */}
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#172033",
                  mb: 0.5,
                  whiteSpace: "nowrap",
                }}
              >
                {action.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 12.5,
                  lineHeight: 1.4,
                  color: "#64748B",
                }}
              >
                {action.description}
              </Typography>
            </Box>

            {/* Arrow */}
            <ArrowForwardRoundedIcon
              sx={{
                fontSize: 21,
                color: "#64748B",
                flexShrink: 0,
              }}
            />
          </Paper>
        );
      })}
    </Box>
  );
}

export default QuickActions;