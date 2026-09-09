import { useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";


function RecentDocumentsTable({ documents }) {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleView = (document) => {
    setSelectedDocument(document);
  };

  const handleClose = () => {
    setSelectedDocument(null);
  };

  if (documents.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #E2E8F0",
          borderRadius: 3,
          py: 5,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#475569",
          }}
        >
          No documents processed yet
        </Typography>

        <Typography
          sx={{
            fontSize: 12.5,
            color: "#94A3B8",
            mt: 0.5,
          }}
        >
          Upload a PDF to see it here.
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #E2E8F0",
          overflow: "hidden",
        }}
      >
        <Table
          size="small"
          sx={{
            "& .MuiTableCell-root": {
              borderColor: "#EEF2F6",
            },
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#F8FAFC",
              }}
            >
              <TableCell
                sx={{
                  py: 1.2,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                Document
              </TableCell>

              <TableCell
                sx={{
                  py: 1.2,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                Uploaded
              </TableCell>

              <TableCell
                sx={{
                  py: 1.2,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                Status
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  py: 1.2,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {documents.map((doc, index) => (
              <TableRow
                key={`${doc.fileName}-${index}`}
                hover
                sx={{
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                }}
              >
                <TableCell sx={{ py: 1.4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 1.5,
                        bgcolor: "#FEF2F2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PictureAsPdfRoundedIcon
                        sx={{
                          fontSize: 19,
                          color: "#E53935",
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#172033",
                        maxWidth: 320,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {doc.fileName}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: 12.5,
                    color: "#64748B",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatDate(doc.processedAt)}
                </TableCell>

                <TableCell>
                  <Chip
                    label={doc.status}
                    size="small"
                    sx={{
                      height: 24,
                      fontSize: 11,
                      fontWeight: 600,
                      borderRadius: 1.5,
                      bgcolor: "#E8F7F3",
                      color: "#059669",
                    }}
                  />
                </TableCell>

                <TableCell align="right">
                  <IconButton
                    size="small"
                    onClick={() => handleView(doc)}
                    aria-label="View document details"
                    sx={{
                      color: "#64748B",
                      "&:hover": {
                        bgcolor: "#EFF6FF",
                        color: "#2563EB",
                      },
                    }}
                  >
                    <VisibilityRoundedIcon
                      sx={{ fontSize: 19 }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Document Details Dialog */}
      <Dialog
        open={Boolean(selectedDocument)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            fontWeight: 700,
            color: "#172033",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          Document Details

          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              color: "#64748B",
            }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 3 }}>
          {selectedDocument && (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
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
                  }}
                >
                  <PictureAsPdfRoundedIcon
                    sx={{
                      color: "#E53935",
                      fontSize: 23,
                    }}
                  />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#172033",
                      wordBreak: "break-word",
                    }}
                  >
                    {selectedDocument.fileName}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "#64748B",
                      mt: 0.3,
                    }}
                  >
                    PDF Document
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #E2E8F0",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#94A3B8",
                      mb: 0.5,
                    }}
                  >
                    Status
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#059669",
                    }}
                  >
                    {selectedDocument.status}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #E2E8F0",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#94A3B8",
                      mb: 0.5,
                    }}
                  >
                    Word Count
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#172033",
                    }}
                  >
                    {selectedDocument.wordCount || 0}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  border: "1px solid #E2E8F0",
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    color: "#94A3B8",
                    mb: 0.5,
                  }}
                >
                  Processed On
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#172033",
                  }}
                >
                  {formatDate(selectedDocument.processedAt)}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>

        <DialogActions
          sx={{
            px: 3,
            py: 2,
            borderTop: "1px solid #E5E7EB",
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 1.5,
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RecentDocumentsTable;