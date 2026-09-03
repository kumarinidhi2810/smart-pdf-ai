import {
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function UploadTips() {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        p: 2.5,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "grey.50",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-start"
      >
        <InfoOutlinedIcon
          color="primary"
          sx={{ mt: 0.2 }}
        />

        <Box>
          <Typography fontWeight={600}>
            Upload Tips
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Upload one or more PDF documents to generate
            AI-powered summaries.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

export default UploadTips;