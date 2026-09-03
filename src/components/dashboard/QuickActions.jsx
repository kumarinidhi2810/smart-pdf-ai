import { Grid, Box, Typography } from "@mui/material";

import QuickActionCard from "./QuickActionCard";
import quickActions from "../../data/quickActions";

function QuickActions() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Quick Actions
      </Typography>

      
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3, mt: 1 }}
      >
        Quickly access your most frequently used features.
      </Typography>

      <Grid container spacing={3}>
        {quickActions.map((action) => (
          <Grid
            key={action.id}
            size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
          >
            <QuickActionCard
              title={action.title}
              description={action.description}
              icon={action.icon}
              color={action.color}
              path={action.path}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default QuickActions;