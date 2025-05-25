import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    alert("Login submitted!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Paper elevation={4} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} align="center">
          Club House Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            autoFocus
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.2, fontWeight: "bold" }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
