import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const quickActions = [
  {
    id: 1,
    title: "Upload PDF",
    description: "Upload a new PDF document",
    icon: UploadFileRoundedIcon,
    color: "#2563EB",
    path: "/upload",
  },
  {
    id: 2,
    title: "AI Summaries",
    description: "View generated summaries",
    icon: AutoAwesomeRoundedIcon,
    color: "#7C3AED",
    path: "/summaries",
  },
  {
    id: 3,
    title: "History",
    description: "Previously processed files",
    icon: HistoryRoundedIcon,
    color: "#059669",
    path: "/history",
  },
  {
    id: 4,
    title: "Profile",
    description: "Manage your account",
    icon: PersonRoundedIcon,
    color: "#EA580C",
    path: "/profile",
  },
];

export default quickActions;