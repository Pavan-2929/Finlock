import React from "react";
import { Typography, Card, CardContent, Button, Grid } from "@mui/material";
import PhishingIcon from "@mui/icons-material/Phishing";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import LargeContainer from "../components/LargeContainer";

const Products = () => {
  return (
    <LargeContainer>
      <Typography
        variant="h4"
        className="font-bold text-center py-10 text-gray-800"
      >
        Our AI-Powered Products
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
            <CardContent className="text-center">
              <PhishingIcon
                className="text-blue-500 mb-4"
                style={{ fontSize: 60 }}
              />
              <Typography variant="h5" className="font-semibold">
                Phishing Detector
              </Typography>
              <Typography variant="body2" className="py-3 text-gray-600">
                Identify phishing websites and malicious content using advanced
                AI-driven analysis to protect your personal and business data.
              </Typography>
              <Button
                variant="contained"
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Identity Theft Protection */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
            <CardContent className="text-center">
              <AccountCircleIcon
                className="text-green-500 mb-4"
                style={{ fontSize: 60 }}
              />
              <Typography variant="h5" className="font-semibold">
                Identity Theft Protection
              </Typography>
              <Typography variant="body2" className="py-3 text-gray-600">
                Safeguard your identity and financial data with real-time
                protection and AI-enhanced monitoring of suspicious activities.
              </Typography>
              <Button
                variant="contained"
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Fraud Analytics */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
            <CardContent className="text-center">
              <BarChartIcon
                className="text-orange-500 mb-4"
                style={{ fontSize: 60 }}
              />
              <Typography variant="h5" className="font-semibold">
                Fraud Analytics
              </Typography>
              <Typography variant="body2" className="py-3 text-gray-600">
                Empower your business with real-time AI-powered analytics to
                detect and prevent fraudulent activities across all platforms.
              </Typography>
              <Button
                variant="contained"
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </LargeContainer>
  );
};

export default Products;
