import React, { useCallback, useMemo, useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import { useNavigate } from "react-router-dom";
import { RouteEnums } from "../enums";
import { FormResults, InitialForm } from "../components";
import useAuthStore from "../hooks/useAuth";
import api from "ui/util/api";
import { useMutation } from "@tanstack/react-query";

//TODO move
enum AuthStep {
  REGISTER = "REGISTER",
  FORM = "FORM",
  RESULTS = "RESULTS",
}

export const Signup = () => {
  const { register } = useAuthStore();
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentAuthStep, setCurrentAuthStep] = useState<AuthStep>(
    AuthStep.REGISTER
  );

  const createUserMutation = useMutation(["createUser"], () =>
    api({
      url: "/users/createUser",
      method: "POST",
      data: {
        firstName: "",
        lastName: "",
        email,
      },
    })
  );

  const onRegister = async () => {
    try {
      await register(email, password);

      // TODO post to back with email
      createUserMutation.mutate();
      setError(null);
      setCurrentAuthStep(AuthStep.FORM);
    } catch (e) {
      console.log(e);
      setError(e as string);
    }
  };

  const onLogin = () => navigate("/" + RouteEnums.LOGIN);

  const gotoNextStep = useCallback(() => {
    switch (currentAuthStep) {
      case AuthStep.REGISTER:
        return setCurrentAuthStep(AuthStep.FORM);
      case AuthStep.FORM:
        return setCurrentAuthStep(AuthStep.RESULTS);
      default:
        return undefined;
    }
  }, [currentAuthStep, setCurrentAuthStep]);

  const currentContent = useMemo(() => {
    switch (currentAuthStep) {
      case AuthStep.FORM:
        return <InitialForm gotoNextStep={gotoNextStep} />;
      case AuthStep.RESULTS:
        return <FormResults />;
      default:
        return undefined;
    }
  }, [currentAuthStep, gotoNextStep]);

  return (
    currentContent ?? (
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

          <Typography variant={"h4"} color={theme.palette.error.main}>
            {error}
          </Typography>
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
    )
  );
};
