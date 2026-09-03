import { Box, Grid, Typography } from "@mui/material";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

function AuthLayout({ children }) {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Section */}
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: "primary.main",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          p: 8,
        }}
      >
        <Box sx={{ maxWidth: 420 }}>
          <PictureAsPdfRoundedIcon sx={{ fontSize: 72, mb: 3 }} />

          <Typography variant="h3" fontWeight={700} gutterBottom>
            Smart PDF AI
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              lineHeight: 1.7,
            }}
          >
            Summarize smarter. Read faster.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              opacity: 0.8,
              lineHeight: 1.8,
            }}
          >
            Upload PDF documents and generate concise summaries with an elegant
            AI-powered experience.
          </Typography>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default AuthLayout;