import { Box, Typography } from "@mui/material";

function SummaryHeader() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" fontWeight={700}>
        AI Summary
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Review the AI-generated summary of your uploaded PDF.
      </Typography>
    </Box>
  );
}

export default SummaryHeader;