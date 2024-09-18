import React from "react";
import { Button, Typography, Card, CardContent, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BusinessIcon from "@mui/icons-material/Business";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LargeContainer from "../components/LargeContainer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <LargeContainer>
      {/* Hero Section */}
      <motion.div
        className="lg:my-12 text-center space-y-2 w-full py-12 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" className="font-bold text-gray-900">
          Welcome to <span className="text-blue-600">FinLock</span>
        </Typography>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-600 text-white mt-6 py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Features Section */}
      <div className="py-12">
        <Typography
          variant="h4"
          className="font-semibold text-gray-700 text-center pb-8"
        >
          Our Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <SecurityIcon className="text-blue-500" style={{ fontSize: 60 }} />,
              title: "AI-powered Fraud Detection",
              description:
                "Our AI systems constantly monitor online activities to detect and prevent fraudulent behavior.",
            },
            {
              icon: <VerifiedUserIcon className="text-green-500" style={{ fontSize: 60 }} />,
              title: "Personal Protection",
              description:
                "Keep your personal information secure from phishing, identity theft, and other threats.",
            },
            {
              icon: <BusinessIcon className="text-orange-500" style={{ fontSize: 60 }} />,
              title: "Business Solutions",
              description:
                "Tailored fraud prevention systems designed for businesses of all sizes.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
                  <CardContent className="text-center">
                    {feature.icon}
                    <Typography variant="h5" className="font-semibold pt-1 pb-2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="mt-2 text-gray-600">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* More Tools Section */}
      <div className="py-12">
        <Typography
          variant="h4"
          className="font-semibold text-gray-700 text-center pb-8"
        >
          More Tools to Keep You Safe
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <NotificationsActiveIcon className="text-red-500" style={{ fontSize: 60 }} />,
              title: "Real-time Alerts",
              description:
                "Receive instant alerts for any suspicious or fraudulent activity.",
            },
            {
              icon: <AssessmentIcon className="text-purple-500" style={{ fontSize: 60 }} />,
              title: "Analytics & Reports",
              description:
                "Get detailed analytics and reports on fraud activity to stay informed.",
            },
          ].map((tool, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
                  <CardContent className="text-center">
                    {tool.icon}
                    <Typography variant="h5" className="font-semibold pt-1 pb-2">
                      {tool.title}
                    </Typography>
                    <Typography variant="body2" className="mt-2 text-gray-600">
                      {tool.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </LargeContainer>
  );
};

export default Home;
