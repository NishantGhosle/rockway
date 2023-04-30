import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Grid,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Navbar from "../navbar";

const Contact = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    message: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Too short")
      .max(10, "Too long"),
    address: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = async (values) => {
    const res = await axios
      .post("http://localhost:5000/api/Contact", values)
      .then(() => navigate("/business-loan"))
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  return (
    <>
      <Navbar />{" "}
      <Box
        sx={{
          my: { xs: 10, sm: 10, md: 16 },
          mx: { xs: 2, sm: 4.5, md: 20 },
        }}
      >
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={24}
              sx={{
                width: "100%",
                borderRadius: 5,
                p: 5,
              }}
            >
              <Typography
                align="center"
                component="h1"
                variant="h4"
                sx={{ fontWeight: "bold", my: 1 }}
              >
                Contact Form
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Grid container columnSpacing={{ sx: 1, sm: 2, md: 5 }}>
                      <Grid item md={6} sm={12}>
                        <Field name="firstname">
                          {({ field, meta }) => (
                            <TextField
                              fullWidth
                              label="First Name"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              {...field}
                              error={meta.touched && meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Field name="lastname">
                          {({ field, meta }) => (
                            <TextField
                              fullWidth
                              label="Last Name"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              {...field}
                              error={meta.touched && meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Field name="phone">
                          {({ field, meta }) => (
                            <TextField
                              fullWidth
                              label="Phone"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              {...field}
                              error={meta.touched && meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Field name="address">
                          {({ field, meta }) => (
                            <TextField
                              fullWidth
                              label="Address"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              {...field}
                              error={meta.touched && meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item md={6} sm={12}>
                        <Field name="message">
                          {({ field, meta }) => (
                            <TextField
                              fullWidth
                              label="Message"
                              variant="outlined"
                              margin="normal"
                              size="small"
                              {...field}
                              error={meta.touched && meta.error}
                              helperText={meta.touched && meta.error}
                            />
                          )}
                        </Field>
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="small"
                      sx={{
                        margin: "0 auto",
                        display: "flex",
                        width: 150,
                        mt: 2,
                        padding: 1,
                        background: "#FF0103",
                        color: "#fff",
                        borderRadius: "10px",
                        transition: "all 0.3s ease-out",
                        "&:hover": {
                          color: "#fff",
                          background: "#FF0103",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
