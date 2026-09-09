import { useState } from "react";

import {
  Paper,
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import jsPDF from "jspdf";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";


function SummaryStatus({
  fileName,
  status,
  generatedAt,
  summary,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!summary) return;

    try {
      await navigator.clipboard.writeText(summary);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

 const handleDownload = () => {
  if (!summary) return;

  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("AI Generated Summary", margin, 20);

  // Documents
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Source Documents:", margin, 35);

  doc.setFont("helvetica", "normal");

  const documentsText = doc.splitTextToSize(
    fileName,
    contentWidth
  );

  doc.text(documentsText, margin, 42);

  // Generated date
  const dateY = 42 + documentsText.length * 6 + 8;

  doc.setFont("helvetica", "bold");
  doc.text("Generated On:", margin, dateY);

  doc.setFont("helvetica", "normal");
  doc.text(generatedAt, margin + 28, dateY);

  // Summary heading
  const summaryHeadingY = dateY + 15;

  doc.setFont("helvetica", "bold");
  doc.text("Summary", margin, summaryHeadingY);

  // Summary text
  doc.setFont("helvetica", "normal");

  const summaryText = doc.splitTextToSize(
    summary,
    contentWidth
  );

  let currentY = summaryHeadingY + 10;

  summaryText.forEach((line) => {
    if (currentY > 275) {
      doc.addPage();
      currentY = 20;
    }

    doc.text(line, margin, currentY);
    currentY += 6;
  });

  // Download
  doc.save("AI-Summary.pdf");
};

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid #E2E8F0",
        mb: 3,
        bgcolor: "#FFFFFF",
      }}
    >
      {/* HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 2,
              bgcolor: "#FEF2F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <PictureAsPdfRoundedIcon
              sx={{
                fontSize: 23,
                color: "#E53935",
              }}
            />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "#172033",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {fileName}
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
                mt: 0.3,
              }}
            >
              Generated on {generatedAt}
            </Typography>
          </Box>
        </Box>

        <Chip
          icon={<CheckCircleRoundedIcon />}
          label={status}
          size="small"
          sx={{
            height: 28,
            bgcolor: "#E8F7F3",
            color: "#059669",
            fontSize: 11.5,
            fontWeight: 700,
            borderRadius: 1.5,
            "& .MuiChip-icon": {
              color: "#059669",
              fontSize: 17,
            },
          }}
        />
      </Stack>

      {/* SUMMARY */}
      {summary && (
        <>
          <Divider sx={{ my: 2.5 }} />

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                mb: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#172033",
                  }}
                >
                  AI Generated Summary
                </Typography>

                <Typography
                  sx={{
                    fontSize: 11.5,
                    color: "#94A3B8",
                    mt: 0.3,
                  }}
                >
                  Key information extracted from the uploaded documents
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={
                    <ContentCopyRoundedIcon
                      sx={{ fontSize: 16 }}
                    />
                  }
                  onClick={handleCopy}
                  sx={{
                    textTransform: "none",
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 1.5,
                    borderColor: "#CBD5E1",
                    color: "#475569",
                    minWidth: 90,
                    "&:hover": {
                      borderColor: "#94A3B8",
                      bgcolor: "#F8FAFC",
                    },
                  }}
                >
                  {copied ? "Copied" : "Copy"}
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  startIcon={
                    <DownloadRoundedIcon
                      sx={{ fontSize: 16 }}
                    />
                  }
                  onClick={handleDownload}
                  sx={{
                    textTransform: "none",
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: 1.5,
                    borderColor: "#CBD5E1",
                    color: "#475569",
                    "&:hover": {
                      borderColor: "#94A3B8",
                      bgcolor: "#F8FAFC",
                    },
                  }}
                >
                  Download
                </Button>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#F8FAFC",
                border: "1px solid #EEF2F6",
                borderRadius: 2,
                p: 2.2,
              }}
            >
              <Typography
                sx={{
                  fontSize: 13.5,
                  color: "#475569",
                  lineHeight: 1.8,
                }}
              >
                {summary}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
}

export default SummaryStatus;