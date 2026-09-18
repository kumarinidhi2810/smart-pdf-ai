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
          backgroundColor: "rgba(15, 32, 45, 0.55)",
        },
      }}
    >
      {/* MAIN LOGIN CONTAINER */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          width: {
            xs: "94%",
            sm: "90%",
            md: "900px",
          },

          minHeight: {
            xs: "auto",
            md: 540,
          },

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "44% 56%",
          },

          bgcolor: "#FFFFFF",
          borderRadius: "14px",
          overflow: "hidden",

          boxShadow: "0 18px 45px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* LEFT - LOGIN SECTION */}
        <Box
          sx={{
            p: {
              xs: 3,
              sm: 4,
              md: 4.5,
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            bgcolor: "#FFFFFF",
          }}
        >
          {children}
        </Box>

        {/* RIGHT - IMAGE SECTION */}
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
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
    </Box>
  );
}

export default AuthLayout;