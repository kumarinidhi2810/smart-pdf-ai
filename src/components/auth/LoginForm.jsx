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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    const demoEmail = "admin@smartpdf.ai";
    const demoPassword = "Admin@123";

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    if (
      email.trim().toLowerCase() === demoEmail &&
      password === demoPassword
    ) {
      localStorage.setItem("isLoggedIn", "true");

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box>
      {/* LOGIN ICON */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          bgcolor: "#EFF6FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <LockOutlinedIcon
          sx={{
            color: "#2563EB",
            fontSize: 24,
          }}
        />
      </Box>

      {/* HEADING */}
      <Typography
        sx={{
          fontSize: 27,
          fontWeight: 700,
          color: "#172033",
          letterSpacing: "-0.4px",
        }}
      >
        Welcome Back
      </Typography>

      <Typography
        sx={{
          fontSize: 13.5,
          color: "#64748B",
          mt: 0.8,
          mb: 3.5,
        }}
      >
        Sign in to continue to Smart PDF AI
      </Typography>

      <Stack spacing={2.5}>
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
        />

        {/* REMEMBER + FORGOT */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: -0.5 }}
        >
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
                  fontSize: 12.5,
                  color: "#475569",
                }}
              >
                Remember me
              </Typography>
            }
          />

          <Link
            href="#"
            underline="hover"
            sx={{
              fontSize: 12.5,
              fontWeight: 600,
              color: "#2563EB",
            }}
          >
            Forgot Password?
          </Link>
        </Stack>

        {/* LOGIN BUTTON */}
        <Button
          variant="contained"
          size="large"
          startIcon={<LoginRoundedIcon />}
          onClick={handleLogin}
          fullWidth
          sx={{
            height: 48,
            borderRadius: 1.5,
            textTransform: "none",
            fontSize: 14,
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          Sign In
        </Button>
      </Stack>

      {/* DEMO LOGIN INFO */}
      <Box
        sx={{
          mt: 3,
          p: 1.5,
          borderRadius: 1.5,
          bgcolor: "#F8FAFC",
          border: "1px solid #E2E8F0",
        }}
      >
        <Typography
          sx={{
            fontSize: 11,
            color: "#64748B",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Demo access: admin@smartpdf.ai
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;