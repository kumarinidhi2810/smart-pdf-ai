import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import DocumentStatusChip from "./DocumentStatusChip";

function RecentDocumentsTable({ documents }) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "#F8FAFC",
            }}
          >
            <TableCell sx={{ fontWeight: 700 }}>Document</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Pages</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Size</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Uploaded</TableCell>
            <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            <TableCell align="right" sx={{ fontWeight: 700 }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {documents.map((doc) => (
            <TableRow
              key={doc.id}
              hover
              sx={{
                "&:last-child td": {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell>
                <Typography fontWeight={600}>
                  {doc.fileName}
                </Typography>
              </TableCell>

              <TableCell>{doc.pages}</TableCell>

              <TableCell>{doc.size}</TableCell>

              <TableCell>{doc.uploadedAt}</TableCell>

              <TableCell>
                <DocumentStatusChip status={doc.status} />
              </TableCell>

              <TableCell align="right">
                <Button
                  size="small"
                  startIcon={<VisibilityRoundedIcon />}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RecentDocumentsTable;