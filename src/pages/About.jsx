import React from "react";
import { Typography, Card, CardContent, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import LargeContainer from "../components/LargeContainer";
import { motion } from "framer-motion";

// Hero Section Styling
const HeroBox = styled(Box)({
  background: 'url("/hero-image.jpg") no-repeat center center/cover',
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
});

const SectionTitle = styled(Typography)({
  marginBottom: "2rem",
  fontWeight: 700,
  textAlign: "center",
});

const SectionSubtitle = styled(Typography)({
  marginBottom: "1rem",
  fontWeight: 600,
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <LargeContainer>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-black my-20 mx-auto text-center">
          <Typography variant="h3">
            Protecting You from Cyber Threats with AI
          </Typography>
        </div>
      </motion.div>

      {/* About FinLock */}
      <Box my={8}>
        <SectionTitle variant="h4" color="textPrimary">
          About FinLock
        </SectionTitle>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <SectionSubtitle variant="h5">Our Mission</SectionSubtitle>
                    <Typography variant="body1">
                      FinLock is a cybersecurity startup providing AI-based
                      fraud detection solutions for both individuals and
                      businesses.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                      Our mission is to protect people from online fraud and
                      help businesses detect fraud risks in real-time. We are
                      committed to creating a safer online world by leveraging
                      cutting-edge AI technologies.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <SectionSubtitle variant="h5">Our Journey</SectionSubtitle>
                    <Typography variant="body1">
                      Founded in 2022, FinLock started as a small team of
                      cybersecurity experts. Today, we serve clients worldwide,
                      providing state-of-the-art AI-driven security solutions.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                      Over the past two years, we've developed products that
                      safeguard users from phishing attacks, identity theft, and
                      fraud detection analytics.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      {/* Our Core Values */}
      <Box my={8}>
        <SectionTitle variant="h4" color="textPrimary">
          Our Core Values
        </SectionTitle>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <SectionSubtitle variant="h6" color="primary">
                      Innovation
                    </SectionSubtitle>
                    <Typography variant="body2" color="textSecondary">
                      Leveraging AI and machine learning to provide cutting-edge
                      cybersecurity solutions.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <SectionSubtitle variant="h6" color="success.main">
                      Integrity
                    </SectionSubtitle>
                    <Typography variant="body2" color="textSecondary">
                      We prioritize data security and privacy, ensuring complete
                      transparency in our work.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <SectionSubtitle variant="h6" color="warning.main">
                      Reliability
                    </SectionSubtitle>
                    <Typography variant="body2" color="textSecondary">
                      Providing round-the-clock protection and real-time threat
                      detection for our clients.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>

      {/* Testimonials */}
      <Box my={10}>
        <SectionTitle variant="h4" color="textPrimary">
          What Our Clients Say
        </SectionTitle>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} justifyContent="center">
            {/* Testimonial 1 */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" color="textSecondary">
                      "The phishing detector saved our business from multiple
                      attacks. The AI is accurate, and the system is easy to
                      use. Highly recommend!"
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align="right"
                      mt={2}
                    >
                      - Sarah M., CEO of TechSecure
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            {/* Testimonial 2 */}
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" color="textSecondary">
                      "We were able to detect and prevent fraud on our platform
                      using their analytics. It’s a game-changer for our
                      business security."
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      align="right"
                      mt={2}
                    >
                      - John D., CTO of SecureCorp
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </LargeContainer>
  );
};

export default About;
