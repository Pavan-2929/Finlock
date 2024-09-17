import React from "react";
import { Button, Typography, Card, CardContent, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BusinessIcon from "@mui/icons-material/Business";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LargeContainer from "../components/LargeContainer";

const Home = () => {
  return (
    <LargeContainer>
      <div className="lg:my-12 text-center space-y-2 w-full py-12 bg-gray-50">
        <Typography variant="h2" className="font-bold text-gray-900">
          Welcome to <span className="text-blue-600">FinLock</span>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="bg-blue-600 text-white mt-6 py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Button>
      </div>

      <div className="py-12">
        <Typography
          variant="h4"
          className="font-semibold text-gray-700 text-center pb-8"
        >
          Our Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
              <CardContent className="text-center">
                <SecurityIcon
                  className="text-blue-500"
                  style={{ fontSize: 60 }}
                />
                <Typography variant="h5" className="font-semibold pt-1 pb-2">
                  AI-powered Fraud Detection
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  Our AI systems constantly monitor online activities to detect
                  and prevent fraudulent behavior.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
              <CardContent className="text-center">
                <VerifiedUserIcon
                  className="text-green-500"
                  style={{ fontSize: 60 }}
                />
                <Typography variant="h5" className="font-semibold pt-1 pb-2">
                  Personal Protection
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  Keep your personal information secure from phishing, identity
                  theft, and other threats.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
              <CardContent className="text-center">
                <BusinessIcon
                  className="text-orange-500"
                  style={{ fontSize: 60 }}
                />
                <Typography variant="h5" className="font-semibold pt-1 pb-2">
                  Business Solutions
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  Tailored fraud prevention systems designed for businesses of
                  all sizes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="py-12">
        <Typography
          variant="h4"
          className="font-semibold text-gray-700 text-center pb-8"
        >
          More Tools to Keep You Safe
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
              <CardContent className="text-center">
                <NotificationsActiveIcon
                  className="text-red-500"
                  style={{ fontSize: 60 }}
                />
                <Typography variant="h5" className="font-semibold pt-1 pb-2">
                  Real-time Alerts
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  Receive instant alerts for any suspicious or fraudulent
                  activity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card className="shadow-md transition-all duration-300 hover:shadow-xl border border-gray-200">
              <CardContent className="text-center">
                <AssessmentIcon
                  className="text-purple-500"
                  style={{ fontSize: 60 }}
                />
                <Typography variant="h5" className="font-semibold pt-1 pb-2">
                  Analytics & Reports
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  Get detailed analytics and reports on fraud activity to stay
                  informed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>


    </LargeContainer>
  );
};

export default Home;
