import {
  Paper,
  Box,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

function SelectedFileCard({
  files = [],
  onRemove = () => {},
  onGenerateSummary = () => {},
}) {
  if (files.length === 0) {
    return null;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {files.map((file, index) => {
        const fileSize = (
          file.size /
          (1024 * 1024)
        ).toFixed(2);

        return (
          <Box key={`${file.name}-${index}`}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <PictureAsPdfRoundedIcon
                sx={{
                  fontSize: 50,
                  color: "#E53935",
                }}
              />

              <Box flex={1}>
                <Typography fontWeight={600}>
                  {file.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {fileSize} MB • PDF Document
                </Typography>
              </Box>

              <Button
                color="error"
                startIcon={
                  <DeleteOutlineRoundedIcon />
                }
                onClick={() => onRemove(index)}
              >
                Remove
              </Button>
            </Stack>

            {index !== files.length - 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </Box>
        );
      })}

      <Divider sx={{ my: 3 }} />

      <Box textAlign="right">
        <Button
          variant="contained"
          startIcon={<AutoAwesomeRoundedIcon />}
          size="large"
           onClick={onGenerateSummary}
        >
          Generate AI Summary
        </Button>
      </Box>
    </Paper>
  );
}

export default SelectedFileCard;