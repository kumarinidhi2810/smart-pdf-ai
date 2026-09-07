import { Box, Typography } from "@mui/material";

import DashboardLayout from "../../layouts/DashboardLayout";

import QuickActions from "../../components/dashboard/QuickActions";
import RecentDocuments from "../../components/dashboard/RecentDocuments";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Quick Actions */}
      <Box mt={3}>
        <QuickActions />
      </Box>

      {/* Recent Documents */}
      <Box mt={5}>
        <RecentDocuments />
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;