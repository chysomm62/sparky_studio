import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DashboardCard from "./DashboardCard";
import Typography from "@mui/material/Typography";

import PieChart from "./Pie";
import BarChart from "./Bar";

const TestChart = () => {
  return (
    <Box py={5}>
      <Typography
        variant="h3"
        noWrap
        gutterBottom
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          color: "primary.main",
          textDecoration: "none",
          fontSize: "24px",
          alignItems: "center",
        }}
      >
        Analytics
      </Typography>
      <Grid
        sx={{ maxWidth: "100%" }}
        alignItems="stretch"
        spacing={2}
        container
      >
        {Cards.map((card, index) => (
          <Grid key={`card-${index}`} xs={12} md={4} item>
            <DashboardCard header={card.title}>{card.component}</DashboardCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestChart;

const Cards = [
  {
    title: "Data Usage",
    component: <PieChart />,
  },
  {
    title: "Data Usage",
    component: <BarChart />,
  },
  {
    title: "Purchase",
    component: <PieChart />,
  },
  {
    title: "Purchase",
    component: <BarChart />,
  },
  {
    title: "Referral",
    component: <PieChart />,
  },
  {
    title: "Referral",
    component: <BarChart />,
  },
];
