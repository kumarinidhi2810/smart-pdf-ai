import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

function UploadBox({ onFileSelect }) {
  const handleChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
 console.log("SELECTED:", selectedFiles);
    const pdfFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf"||
        file.name.toLowerCase().endsWith(".pdf")
    );

    console.log("PDF FILES:", pdfFiles);

    if (pdfFiles.length > 0) {
      console.log("CALLING PARENT FUNCTION");
      onFileSelect(pdfFiles);
    }

    event.target.value = "";
  };

  return (
    <Paper
      elevation={0}
      sx={{
        border: "2px dashed",
        borderColor: "divider",
        borderRadius: 4,
        p: 6,
        textAlign: "center",
      }}
    >
      <Stack spacing={3} alignItems="center">

        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            bgcolor: "primary.main",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CloudUploadOutlinedIcon sx={{ fontSize: 40 }} />
        </Box>

        <Box>
          <Typography variant="h5" fontWeight={700}>
            Drag & Drop your PDF
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            or choose PDFs from your computer
          </Typography>
        </Box>

        <Button
          variant="contained"
          component="label"
          size="large"
          sx={{
            px: 4,
            py: 1.3,
            borderRadius: 2,
          }}
        >
          Browse PDFs

          <input
            hidden
            type="file"
            accept=".pdf,application/pdf"
            multiple
            onChange={handleChange}
          />
        </Button>

        <Typography variant="body2" color="text.secondary">
          PDF files only • Maximum size 20 MB each
        </Typography>

      </Stack>
    </Paper>
  );
}

export default UploadBox;