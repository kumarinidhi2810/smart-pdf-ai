import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const sidebarMenu = [
  {
    title: "Dashboard",
    icon: DashboardRoundedIcon,
    path: "/dashboard",
  },
  {
    title: "Upload PDF",
    icon: CloudUploadRoundedIcon,
    path: "/upload",
  },
  {
    title: "Summaries",
    icon: DescriptionRoundedIcon,
    path: "/summary",
  },
  {
    title: "History",
    icon: HistoryRoundedIcon,
    path: "/history",
  },
  {
    title: "Profile",
    icon: PersonRoundedIcon,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: SettingsRoundedIcon,
    path: "/settings",
  },
];

export default sidebarMenu;