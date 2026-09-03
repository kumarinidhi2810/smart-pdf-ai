import {
  Paper,
  Box,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function SummaryStatus({ fileName, status, generatedAt }) {
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
    </Paper>
  );
}

export default SummaryStatus;