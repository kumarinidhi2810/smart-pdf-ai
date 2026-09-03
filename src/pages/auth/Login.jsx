import { Paper } from "@mui/material";
import AuthLayout from "../../components/auth/AuthLayout";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 460,
          p: 5,
          borderRadius: 4,
          border: "1px solid",
          borderColor: "grey.200",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <LoginForm />
      </Paper>
    </AuthLayout>
  );
}

export default Login;