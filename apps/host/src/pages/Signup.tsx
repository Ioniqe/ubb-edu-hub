import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import { useNavigate } from "react-router-dom";
import { BaseRoute, RouteEnums } from "../enums";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const onRegister = () => navigate("/" + BaseRoute.STUDENT);
  const onLogin = () => navigate("/" + RouteEnums.LOGIN);

  return (
    <Box
      height={"60%"}
      width={"50%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      sx={{
        borderRadius: "16px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant={"h2"}
        color={theme.palette.primary.main}
        fontWeight={300}
      >
        Register
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"60%"}
      >
        <TextField
          label={"Email"}
          variant={"filled"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextField
          label={"Password"}
          variant={"filled"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={"password"}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"end"}
        sx={{ width: "60%" }}
      >
        <Button
          onClick={onRegister}
          variant={"contained"}
          sx={{ width: "100%" }}
          disabled={!email.length || !password.length}
        >
          Register
        </Button>

        <Link
          component="button"
          variant="body2"
          onClick={onLogin}
          color={theme.palette.primary.main}
          sx={{ mt: 2 }}
        >
          Already have an account? Log in
        </Link>
      </Box>
    </Box>
  );
};
