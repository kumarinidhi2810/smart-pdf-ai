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

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const demoEmail = "admin@smartpdf.ai";
    const demoPassword = "Admin@123";

    if (email === demoEmail && password === demoPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Welcome Back
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Sign in to continue to Smart PDF AI
      </Typography>

      <Stack spacing={3}>
        <TextField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          fullWidth
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          fullWidth
          error={Boolean(error)}
          helperText={error}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />

          <Link
            href="#"
            underline="hover"
            sx={{ fontWeight: 600 }}
          >
            Forgot Password?
          </Link>
        </Stack>

        <Button
          variant="contained"
          size="large"
          startIcon={<LoginRoundedIcon />}
          sx={{ height: 52 }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;