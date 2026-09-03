import { Box, Grid, Typography } from "@mui/material";

import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentDocuments from "../../components/dashboard/RecentDocuments";
import dashboardStats from "../../data/dashboardStats";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <Box mb={4}>
        <Typography variant="h4" fontWeight={700}>
          Welcome Back 
        </Typography>

        <Typography color="text.secondary">
          Here's an overview of your Smart PDF AI workspace.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        {dashboardStats.map((item) => (
          <Grid
            key={item.title}
            size={{ xs: 12, sm: 6, lg: 3 }}
          >
            <StatCard {...item} />
          </Grid>
        ))}
      </Grid>

      {/* Quick Actions */}
    <Box mt={5}>
  <QuickActions />
</Box>
<Box mt={6}>
<RecentDocuments />
</Box>
    </DashboardLayout>
  );
}

export default Dashboard;