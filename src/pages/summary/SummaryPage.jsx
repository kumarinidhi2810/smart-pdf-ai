import { Container } from "@mui/material";

import DashboardLayout from "../../layouts/DashboardLayout";

import SummaryHeader from "../../components/summary/SummaryHeader";
import SummaryStatus from "../../components/summary/SummaryStatus";

import summary from "../../data/summary";

function SummaryPage() {
  return (
    <DashboardLayout>
      <Container maxWidth="lg">
        <SummaryHeader />

        <SummaryStatus
          fileName={summary.fileName}
          status={summary.status}
          generatedAt={summary.generatedAt}
        />
      </Container>
    </DashboardLayout>
  );
}

export default SummaryPage;