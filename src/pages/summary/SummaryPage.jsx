import { useEffect, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import SummaryStatus from "../../components/summary/SummaryStatus";

function SummaryPage() {
  const location = useLocation();

  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const storedSummaries = JSON.parse(
      localStorage.getItem("smartPdfSummaries") || "[]"
    );
    console.log("STORED SUMMARIES:", storedSummaries);

    // Newest summary first
    const sortedSummaries = [...storedSummaries].reverse();

    setSummaries(sortedSummaries);
  }, [location.state]);

  return (
    <DashboardLayout>
      <Container maxWidth="lg">
      

        {summaries.length === 0 ? (
          <Box
            sx={{
              mt: 3,
              p: 5,
              textAlign: "center",
              border: "1px solid #E2E8F0",
              borderRadius: 3,
              bgcolor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 600,
                color: "#475569",
              }}
            >
              No AI summaries available
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "#94A3B8",
                mt: 0.5,
              }}
            >
              Upload PDFs and generate a summary to see it here.
            </Typography>
          </Box>
        ) : (
          summaries.map((item, index) => (
            <SummaryStatus
              key={`${item.generatedAt}-${index}`}
              fileName={
  item.fileNames?.length
    ? item.fileNames.join(" • ")
    : "Generated Summary"
}
              status="Completed"
              generatedAt={
                item.generatedAt
                  ? new Date(
                      item.generatedAt
                    ).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "-"
              }
              summary={item.summary}
            />
          ))
        )}
      </Container>
    </DashboardLayout>
  );
}

export default SummaryPage;