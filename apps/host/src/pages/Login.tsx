import React, { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { useNavigate } from "react-router-dom";
import { BaseRoute, RouteEnums } from "../enums";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const onLogin = () => navigate("/" + BaseRoute.STUDENT);
  const onRegister = () => navigate("/" + RouteEnums.SIGN_UP);

  return (
    <CustomAppThemeProvider>
      <Box display={"flex"} width={"100vw"} height={"100vh"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          height={"100%"}
          width={"40%"}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Typography variant={"h1"} fontWeight={200}>
              Welcome to
            </Typography>
            <Typography variant={"h1"} fontWeight={500}>
              {`UBB's Edu Hub`}
            </Typography>
          </Box>

          <Box
            component={"img"}
            src={"/images/login.png"}
            alt={"Login Image"}
            width={"70%"}
          />
        </Box>

        <Box
          width={"60%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: theme.palette.background.default }}
        >
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
              Log in
            </Typography>

            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              width={"60%"}
              sx={{ pt: 5 }}
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
                onClick={onLogin}
                variant={"contained"}
                sx={{ width: "100%" }}
                disabled={!email.length || !password.length}
              >
                Log in
              </Button>

              <Link
                component="button"
                variant="body2"
                onClick={onRegister}
                color={theme.palette.primary.main}
                sx={{ mt: 1 }}
              >
                Register
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Login;
