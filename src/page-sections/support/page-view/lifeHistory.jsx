import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // MUI ICON COMPONENT

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS

import FlexBox from "@/components/flexbox/FlexBox";
import { H6, Paragraph } from "@/components/typography";
export default function LifeHistoryPageView() {
  const DATA = [
    "Screenshots/Screen Recording is very helpful.",
    "You can use snipboard.io to share screenshots.",
    "And loom.com for screen recording.",
  ];
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.string().min(9).required("Phone is required!"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    phone: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: () => {},
    });
  return (
    <Box py={3}>
      <Card
        sx={{
          p: 3,
          maxWidth: 900,
          margin: "auto",
        }}
      >
        <H6 fontSize={18}>Life History</H6>

        <Paragraph color="text.secondary" mb={3}>
          Please include as many details as possible about your question or
          problem.
        </Paragraph>

        {/* <Box component="ul" pl={2} mb={4}>
          {DATA.map((item) => (
            <Box key={item} component="li" fontSize={14} pb={0.5}>
              {item}
            </Box>
          ))}
        </Box> */}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField multiline rows={25} fullWidth placeholder="Message*" />
            </Grid>

            <Grid size={12}>
              <FlexBox alignItems="center" gap={2}>
                <Button type="submit">Submit</Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </FlexBox>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
}
