import {
  Avatar,
  Box,
  Divider,
  Typography,
} from "@mui/material";

function SidebarUser() {
  return (
    <Box sx={{ mt: "auto", p: 3 }}>
      <Divider sx={{ mb: 3 }} />

      <Box display="flex" alignItems="center" gap={2}>
        <Avatar>N</Avatar>

        <Box>
          <Typography fontWeight={600}>
            Nidhi Kumari
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Frontend Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarUser;