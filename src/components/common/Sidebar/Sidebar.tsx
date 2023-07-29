import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Tree } from "../../icons";
import Typography from "@mui/material/Typography";

const drawerWidth = 270;

const Tabs = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: <DashboardIcon />,
    submenu: [
      {
        title: "Customers",
        link: "/dashboard",
      },
      {
        title: "Products",
        link: "/dashboard/products",
      },
      {
        title: "Orders",
        link: "/dashboard",
      },
      {
        title: "Performa Invoice",
        link: "/dashboard/products",
      },
    ],
  },
  {
    title: "Notifications",
    id: "notifications",
    icon: <NotificationsIcon />,
  },
  {
    title: "Analytics",
    id: "analytics",
    icon: <TimelineIcon />,
  },
];

const listItemStyle = {
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#3fc1de",
  },
  borderRadius: "12px",
  color: "#3fc1de",
};

const listItemSubStyle = {
  "&.Mui-selected": {
    color: "#3fc1de",
  },
  borderRadius: "12px",
  color: "#fff",
};

export default function PermanentDrawerLeft() {
  const [active, setActive] = useState(0);
  const [activeSub, setActiveSub] = useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          pl: 3,
          pr: "12px",
          "& .MuiDrawer-paper": {
            pl: 3,
            pr: "12px",
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgba(40,37,82,1)",
            background: "linear-gradient(0deg,  73%, rgba(75,71,115,1) 88%)",
          },
        }}
        variant="permanent"
        // anchor="left"
      >
        <Toolbar disableGutters>
          <Box height={32} width={132}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#cce",
                fontSize: 20,
                fontStyle: "italic",
                fontFamily: "cursive 'san-serif",
              }}
            >
              Logo
            </Typography>
          </Box>
        </Toolbar>
        <List disablePadding>
          {Tabs.map((tab, index) => (
            <Box key={`main-tab-${index}`}>
              <ListItemButton
                sx={listItemStyle}
                selected={index === active}
                onClick={() => setActive(index)}
              >
                {tab.icon}&nbsp;&nbsp;
                <ListItemText
                  primary={tab.title}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
              <Collapse in={index === active} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {tab.submenu?.map((submenu, index) => (
                    <ListItemButton
                      key={`sub-${index}`}
                      sx={{ pl: 2, py: 0, ...listItemSubStyle }}
                      selected={index === activeSub}
                      onClick={() => setActiveSub(index)}
                    >
                      <Tree />
                      &nbsp;&nbsp;
                      <ListItemText
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                        primary={submenu.title}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
