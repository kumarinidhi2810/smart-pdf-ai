import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";

import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );

    localStorage.setItem("isLoggedIn", "true");

    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    navigate("/dashboard");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 390,
        mx: "auto",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          mb: 3,
        }}
      >
        {/* FORGOT PASSWORD */}
        <Link
          href="#"
          underline="none"
          sx={{
            position: "absolute",
            right: 0,
            top: 2,
            fontSize: 12,
            fontWeight: 600,
            color: "#D32F2F",

            "&:hover": {
              color: "#B71C1C",
              textDecoration: "underline",
            },
          }}
        >
          Forgot Password?
        </Link>

        {/* LOGIN */}
        <Typography
          sx={{
            fontSize: 27,
            fontWeight: 700,
            color: "#D32F2F",
            letterSpacing: "-0.4px",
          }}
        >
          Login
        </Typography>

        {/* UNDERLINE */}
        <Box
          sx={{
            width: 90,
            height: 3,
            borderRadius: 2,
            backgroundColor: "#D32F2F",
            mx: "auto",
            mt: 0.8,
          }}
        />
      </Box>

      <Stack spacing={1.8}>
        {/* EMAIL */}
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          fullWidth
          size="small"
          error={Boolean(error)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              backgroundColor: "#FAFAFA",
            },
          }}
        />

        {/* PASSWORD */}
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          fullWidth
          size="small"
          error={Boolean(error)}
          helperText={error}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    edge="end"
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOffRoundedIcon fontSize="small" />
                    ) : (
                      <VisibilityRoundedIcon fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              backgroundColor: "#FAFAFA",
            },
          }}
        />

        {/* REMEMBER ME */}
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
            />
          }
          label={
            <Typography
              sx={{
                fontSize: 12,
                color: "#64748B",
              }}
            >
              Remember me
            </Typography>
          }
          sx={{
            mt: -0.5,
            mb: -0.5,
          }}
        />

        {/* LOGIN BUTTON */}
        <Button
          variant="contained"
          size="large"
          startIcon={<LoginRoundedIcon />}
          onClick={handleLogin}
          fullWidth
          sx={{
            height: 44,
            borderRadius: 1,
            backgroundColor: "#D32F2F",
            textTransform: "uppercase",
            fontSize: 13,
            fontWeight: 700,
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#B71C1C",
              boxShadow: "none",
            },
          }}
        >
          Login
        </Button>

        {/* OR */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            my: 0.5,
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "#E2E8F0",
            }}
          />

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: "#64748B",
            }}
          >
            OR
          </Typography>

          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "#E2E8F0",
            }}
          />
        </Box>

        {/* QR LOGIN SECTION */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: 0.5,
          }}
        >
          {/* QR BOX */}
          <Box
            sx={{
              width: 82,
              height: 82,
              border: "1px solid #CBD5E1",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
              flexShrink: 0,
            }}
          >
            <QrCode2RoundedIcon
              sx={{
                fontSize: 68,
                color: "#172033",
              }}
            />
          </Box>

          {/* QR INFORMATION */}
          <Box>
            <Typography
              sx={{
                fontSize: 12.5,
                fontWeight: 700,
                color: "#334155",
                mb: 0.5,
              }}
            >
              Scan to Login
            </Typography>

            <Typography
              sx={{
                fontSize: 11,
                lineHeight: 1.5,
                color: "#64748B",
              }}
            >
              Open the Smart PDF AI app
              <br />
              and scan this QR code
              <br />
              to continue securely.
            </Typography>
          </Box>
        </Box>

        {/* BOTTOM LINKS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 1.5,
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "#0EA5C9",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Help
          </Link>

          <Button
            variant="text"
            onClick={() => navigate("/register")}
            sx={{
              minWidth: 0,
              p: 0,
              textTransform: "none",
              fontSize: 12,
              fontWeight: 600,
              color: "#0EA5C9",

              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}
          >
            Create Account
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default LoginForm;