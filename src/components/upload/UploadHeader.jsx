import { Box, Typography } from "@mui/material";

function UploadHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        Upload PDF
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Upload a PDF document to generate an AI-powered summary.
      </Typography>
    </Box>
  );
}

export default UploadHeader;