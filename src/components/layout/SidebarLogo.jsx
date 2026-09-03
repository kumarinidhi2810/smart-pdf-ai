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

      <Typography variant="h6" fontWeight={700}>
        Smart PDF AI
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 0.5 }}
      >
        AI Document Assistant
      </Typography>
    </Box>
  );
}

export default SidebarLogo;