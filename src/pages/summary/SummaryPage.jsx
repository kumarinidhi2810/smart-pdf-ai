import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import SummaryHeader from "../../components/summary/SummaryHeader";
import SummaryStatus from "../../components/summary/SummaryStatus";

function SummaryPage() {
  const location = useLocation();

  const summaries = location.state?.summaries || [];

  return (
    <DashboardLayout>
      <Container maxWidth="lg">
        <SummaryHeader />

        {summaries.map((item, index) => (
          <SummaryStatus
            key={index}
            fileName={item.fileName}
            status="Completed"
            generatedAt="Just now"
            summary={item.summary}
          />
        ))}
      </Container>
    </DashboardLayout>
  );
}

export default SummaryPage;