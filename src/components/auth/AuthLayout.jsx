import { Box } from "@mui/material";

function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage: "url('/images/dfccil-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(15, 32, 45, 0.62)",
        },
      }}
    >
      {/* Login Card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          width: "min(920px, 92%)",
          minHeight: 470,

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "42% 58%",
          },

          bgcolor: "#FFFFFF",
          borderRadius: 3,
          overflow: "hidden",

          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* LEFT - LOGIN */}
        <Box
          sx={{
            p: {
              xs: 3,
              md: 4,
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            bgcolor: "#FFFFFF",
          }}
        >
          {children}
        </Box>

        {/* RIGHT - DFCCIL IMAGE */}
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },

            minHeight: 470,

            backgroundImage: "url('/images/dfccil-login.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
}

export default AuthLayout;