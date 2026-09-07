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
} from "@mui/material";

import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";


function RecentDocumentsTable({ documents }) {
  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
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
  );
}

export default RecentDocumentsTable;