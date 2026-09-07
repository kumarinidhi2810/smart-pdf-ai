import {
  Paper,
  Box,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function SummaryStatus({ fileName, status, generatedAt,summary }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        mb: 4,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <PictureAsPdfRoundedIcon
            sx={{
              fontSize: 42,
              color: "#E53935",
            }}
          />

          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
            >
              {fileName}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Generated on {generatedAt}
            </Typography>
          </Box>
        </Box>

        <Chip
          icon={<CheckCircleRoundedIcon />}
          label={status}
          color="success"
          sx={{
            fontWeight: 600,
            borderRadius: 2,
          }}
        />
      </Stack>
      {summary && (
  <Box
    sx={{
      mt: 3,
      pt: 3,
      borderTop: "1px solid",
      borderColor: "divider",
    }}
  >
    <Typography
      variant="subtitle1"
      fontWeight={600}
      sx={{ mb: 1 }}
    >
      AI Generated Summary
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      sx={{
        lineHeight: 1.8,
      }}
    >
      {summary}
    </Typography>
  </Box>
)}
    </Paper>
  );
}

export default SummaryStatus;