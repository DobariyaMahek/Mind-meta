import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // MUI ICON COMPONENT

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useFormik } from "formik";
import * as Yup from "yup"; // CUSTOM COMPONENTS
import DropZone from "@/components/dropzone";

import FlexBox from "@/components/flexbox/FlexBox";
import { H6, Paragraph } from "@/components/typography";
export default function CreateTicketPageView() {
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
        <H6 fontSize={18} mb={3}>
          Media
        </H6>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                select
                fullWidth
                slotProps={{
                  select: {
                    native: true,
                    IconComponent: KeyboardArrowDown,
                  },
                }}
              >
                <option value="biponi">Select Relation</option>
                <option value="image">Image</option>
                <option value="audio">Audio</option>
                <option value="video">Video</option>
              </TextField>
              <Grid size={12} mt={2}>
                <DropZone onDrop={() => {}} />
              </Grid>
            </Grid>

            <Grid size={12}>
              <TextField
                multiline
                rows={6}
                fullWidth
                placeholder="Description*"
              />
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
