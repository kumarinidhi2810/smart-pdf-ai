import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");

  const handleRegister = () => {
    setError("");

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.some(
      (user) =>
        user.email.toLowerCase() ===
        email.trim().toLowerCase()
    );

    if (userExists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, newUser])
    );

    navigate("/");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          width: "100%",
          maxWidth: 460,
          p: 5,
          borderRadius: 4,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          bgcolor: "white",
        }}
      >
        {/* ICON */}
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
          <PersonAddRoundedIcon
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
          Create Account
        </Typography>

        <Typography
          sx={{
            fontSize: 13.5,
            color: "#64748B",
            mt: 0.8,
            mb: 3.5,
          }}
        >
          Create your account to use Smart PDF AI
        </Typography>

        <Stack spacing={2.2}>
          {/* NAME */}
          <TextField
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            fullWidth
            size="small"
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
            fullWidth
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          (prev) => !prev
                        )
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

          {/* CONFIRM PASSWORD */}
          <TextField
            label="Confirm Password"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
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
                        setShowConfirmPassword(
                          (prev) => !prev
                        )
                      }
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? (
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

          {/* REGISTER BUTTON */}
          <Button
            variant="contained"
            size="large"
            startIcon={<PersonAddRoundedIcon />}
            onClick={handleRegister}
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
            Create Account
          </Button>

          {/* BACK TO LOGIN */}
          <Button
            variant="text"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              fontSize: 13,
              color: "#64748B",
            }}
          >
            Back to Sign In
          </Button>
        </Stack>
      </Box>
    </AuthLayout>
  );
}

export default Register;