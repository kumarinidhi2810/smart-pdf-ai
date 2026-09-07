import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Divider,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import DashboardLayout from "../../layouts/DashboardLayout";

function History() {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = () => {
    const storedDocuments = JSON.parse(
      localStorage.getItem("smartPdfDocuments") || "[]"
    );

    const sortedDocuments = [...storedDocuments].sort(
      (a, b) =>
        new Date(b.processedAt) -
        new Date(a.processedAt)
    );

    setDocuments(sortedDocuments);
  };

  const filteredDocuments = documents.filter((document) =>
    document.fileName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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

  // Open action menu
  const handleMenuOpen = (event, document) => {
    setAnchorEl(event.currentTarget);
    setSelectedDocument(document);
  };

  // Close action menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // View details
  const handleViewDetails = () => {
    setDetailsOpen(true);
    setAnchorEl(null);
  };

  // View related summary
  const handleViewSummary = () => {
    if (!selectedDocument) return;

    const summaries = JSON.parse(
      localStorage.getItem("smartPdfSummaries") || "[]"
    );

    const relatedSummary = [...summaries]
      .reverse()
      .find((item) =>
        item.fileNames?.includes(
          selectedDocument.fileName
        )
      );

    setAnchorEl(null);

    if (relatedSummary) {
      navigate("/summary", {
        state: {
          summaries: relatedSummary,
        },
      });
    } else {
      alert("No summary found for this document.");
    }
  };

  // Delete document
  const handleDelete = () => {
    if (!selectedDocument) return;

    const updatedDocuments = documents.filter(
      (document) =>
        !(
          document.fileName ===
            selectedDocument.fileName &&
          document.processedAt ===
            selectedDocument.processedAt
        )
    );

    localStorage.setItem(
      "smartPdfDocuments",
      JSON.stringify(updatedDocuments)
    );

    setDocuments(updatedDocuments);

    setAnchorEl(null);
    setSelectedDocument(null);
  };

  return (
    <DashboardLayout>
      <Box>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >

        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            border: "1px solid #E2E8F0",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#F8FAFC",
                }}
              >
                <TableCell
                  sx={{
                    py: 1.5,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  Document
                </TableCell>

                <TableCell
                  sx={{
                    py: 1.5,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  Words
                </TableCell>

                <TableCell
                  sx={{
                    py: 1.5,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#475569",
                  }}
                >
                  Processed On
                </TableCell>

                <TableCell
                  sx={{
                    py: 1.5,
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
                    py: 1.5,
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
              {filteredDocuments.map((document, index) => (
                <TableRow
                  key={`${document.fileName}-${document.processedAt}-${index}`}
                  hover
                  sx={{
                    "&:last-child td": {
                      borderBottom: 0,
                    },
                  }}
                >
                  {/* Document */}
                  <TableCell sx={{ py: 1.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 1.5,
                          bgcolor: "#FEF2F2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <PictureAsPdfRoundedIcon
                          sx={{
                            fontSize: 20,
                            color: "#E53935",
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#172033",
                          maxWidth: 350,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {document.fileName}
                      </Typography>
                    </Box>
                  </TableCell>

                  {/* Words */}
                  <TableCell
                    sx={{
                      fontSize: 12.5,
                      color: "#64748B",
                    }}
                  >
                    {document.wordCount || 0}
                  </TableCell>

                  {/* Date */}
                  <TableCell
                    sx={{
                      fontSize: 12.5,
                      color: "#64748B",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {formatDate(document.processedAt)}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Chip
                      label="Processed"
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

                  {/* Actions */}
                  <TableCell align="right">
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleMenuOpen(
                          event,
                          document
                        )
                      }
                      sx={{
                        color: "#64748B",
                        "&:hover": {
                          bgcolor: "#F1F5F9",
                        },
                      }}
                    >
                      <MoreVertRoundedIcon
                        sx={{ fontSize: 20 }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {/* Empty State */}
              {filteredDocuments.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    align="center"
                    sx={{ py: 7 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#475569",
                      }}
                    >
                      {searchTerm
                        ? "No matching documents found"
                        : "No processed documents yet"}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12.5,
                        color: "#94A3B8",
                        mt: 0.5,
                      }}
                    >
                      {searchTerm
                        ? "Try a different document name."
                        : "Upload and process a PDF to see it here."}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Action Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            elevation: 3,
            sx: {
              mt: 1,
              minWidth: 180,
              borderRadius: 2,
            },
          }}
        >
          <MenuItem onClick={handleViewDetails}>
            <ListItemIcon>
              <VisibilityRoundedIcon fontSize="small" />
            </ListItemIcon>

            View Details
          </MenuItem>

          <MenuItem onClick={handleViewSummary}>
            <ListItemIcon>
              <AutoAwesomeRoundedIcon fontSize="small" />
            </ListItemIcon>

            View Summary
          </MenuItem>

          <Divider />

          <MenuItem
            onClick={handleDelete}
            sx={{
              color: "#DC2626",
            }}
          >
            <ListItemIcon>
              <DeleteOutlineRoundedIcon
                fontSize="small"
                sx={{ color: "#DC2626" }}
              />
            </ListItemIcon>

            Delete
          </MenuItem>
        </Menu>

        {/* Details Dialog */}
        <Dialog
          open={detailsOpen}
          onClose={() => setDetailsOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle
            sx={{
              fontWeight: 700,
              color: "#172033",
            }}
          >
            Document Details
          </DialogTitle>

          <DialogContent dividers>
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
                      width: 44,
                      height: 44,
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
                        fontSize: 24,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: 15,
                      wordBreak: "break-word",
                    }}
                  >
                    {selectedDocument.fileName}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "140px 1fr",
                    rowGap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#64748B",
                    }}
                  >
                    Status
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    Processed
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#64748B",
                    }}
                  >
                    Word Count
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {selectedDocument.wordCount || 0}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#64748B",
                    }}
                  >
                    Processed On
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {formatDate(
                      selectedDocument.processedAt
                    )}
                  </Typography>
                </Box>
              </Box>
            )}
          </DialogContent>

          <DialogActions>
            <Button
              onClick={() => setDetailsOpen(false)}
              sx={{
                textTransform: "none",
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
}

export default History;