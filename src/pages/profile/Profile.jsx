
import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import DashboardLayout from "../../layouts/DashboardLayout";

function Profile() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "",
          email: "",
        };
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 700,
              color: "#172033",
            }}
          >
            My Profile
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#64748B",
              mt: 0.7,
            }}
          >
            Manage your account information
          </Typography>
        </Box>

        {/* Profile Card */}
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {/* Profile Top */}
          <Box
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              bgcolor: "#F8FAFC",
            }}
          >
            <Avatar
              sx={{
                width: 72,
                height: 72,
                bgcolor: "#2563EB",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#172033",
                }}
              >
                {user.name || "User"}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13.5,
                  color: "#64748B",
                  mt: 0.4,
                }}
              >
                {user.email || "No email available"}
              </Typography>
            </Box>
          </Box>

          <Divider />

          {/* Account Details */}
          <Box sx={{ p: 4 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "#172033",
                mb: 3,
              }}
            >
              Account Information
            </Typography>

            <Stack spacing={2.5}>
              <TextField
                label="Full Name"
                value={user.name || ""}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                fullWidth
                disabled={!isEditing}
                InputProps={{
                  startAdornment: (
                    <PersonOutlineRoundedIcon
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />

              <TextField
                label="Email Address"
                value={user.email || ""}
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <EmailOutlinedIcon
                      sx={{
                        mr: 1,
                        color: "#64748B",
                      }}
                    />
                  ),
                }}
              />
            </Stack>

            {/* Actions */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 4,
              }}
            >
              {!isEditing ? (
                <Button
                  variant="contained"
                  startIcon={<EditRoundedIcon />}
                  onClick={() => setIsEditing(true)}
                  sx={{
                    textTransform: "none",
                    borderRadius: 1.5,
                    px: 3,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<SaveRoundedIcon />}
                  onClick={handleSave}
                  sx={{
                    textTransform: "none",
                    borderRadius: 1.5,
                    px: 3,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                >
                  Save Changes
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default Profile;

