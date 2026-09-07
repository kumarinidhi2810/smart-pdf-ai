import { Box, Typography } from "@mui/material";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

function SidebarLogo() {
  return (
    <Box
      sx={{
        px: 3,
        py: 4,
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          bgcolor: "primary.main",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <PictureAsPdfRoundedIcon
          sx={{
            color: "#fff",
            fontSize: 32,
          }}
        />
      </Box>
     
    </Box>
  );
}

export default SidebarLogo;