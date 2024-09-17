import React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box className="my-10 max-w-2xl mx-auto space-y-10 px-3 sm:px-6">
      <Typography variant="h4" className="font-bold text-center mb-6">
        Contact Us
      </Typography>

      <form className="space-y-4">
        <TextField fullWidth label="Name" variant="outlined" />
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          className="bg-blue-500 w-full"
        >
          Send Message
        </Button>
      </form>

      <Box className="text-center">
        <Typography variant="body1" className="font-bold mb-2">
          Follow Us
        </Typography>
        <IconButton
          component={Link}
          href="https://www.facebook.com"
          color="primary"
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.twitter.com"
          color="primary"
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com"
          color="primary"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com"
          color="primary"
        >
          <Instagram />
        </IconButton>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" className="font-semibold mb-2">
            Our Office
          </Typography>
          <Typography variant="body1">
            123 Cyber Street, FinCity, CY 12345
          </Typography>
          <Typography variant="body1">Email: support@finlock.com</Typography>
          <Typography variant="body1">Phone: +1 234 567 890</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <iframe
            title="office-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9065041307776!2d144.96305431532095!3d-37.8141079797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d7025c2f5bb!2s123%20Cyber%20Street%2C%20FinCity%20CY%2012345!5e0!3m2!1sen!2sin!4v1633238481204"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
