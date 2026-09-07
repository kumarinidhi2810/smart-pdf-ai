import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import RecentDocumentsTable from "./RecentDocumentsTable";

function RecentDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const storedDocuments = JSON.parse(
      localStorage.getItem("smartPdfDocuments") || "[]"
    );

    const recentDocuments = [...storedDocuments]
      .sort(
        (a, b) =>
          new Date(b.processedAt) -
          new Date(a.processedAt)
      )
      .slice(0, 5);

    setDocuments(recentDocuments);
  }, []);

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: "#172033",
            }}
          >
            Recent Documents
          </Typography>

          <Typography
            sx={{
              fontSize: 12.5,
              color: "#64748B",
              mt: 0.3,
            }}
          >
            Recently processed PDF documents
          </Typography>
        </Box>
      </Box>

      <RecentDocumentsTable
        documents={documents}
      />
    </Box>
  );
}

export default RecentDocuments;