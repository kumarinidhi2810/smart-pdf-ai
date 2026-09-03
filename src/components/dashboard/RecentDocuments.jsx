import { Box, Typography } from "@mui/material";

import RecentDocumentsTable from "./RecentDocumentsTable";
import recentDocuments from "../../data/recentDocuments";

function RecentDocuments() {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Recent Documents
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1, mb: 3 }}
      >
        View your recently uploaded PDF documents and their AI processing status.
      </Typography>

      <RecentDocumentsTable documents={recentDocuments} />
    </Box>
  );
}

export default RecentDocuments;