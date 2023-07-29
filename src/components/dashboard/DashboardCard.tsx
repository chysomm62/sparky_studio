import { FC, ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface DashboardCardProps {
  children: ReactNode;
  header: string;
}

const DashboardCard: FC<DashboardCardProps> = ({ children, header }) => {
  const [openCard, setOpenCard] = useState(true);
  return (
    <Box
      sx={{
        width: "100%",
        height: openCard ? "100%" : "auto",
        backgroundColor: "#FFFFFF",
        border: "2px solid #a76DFa",
        borderRadius: "12px",
      }}
      py={1}
      px={2}
      className="flex flex-col"
    >
      <Box
        sx={{
          width: "100%",
          height: "35px",
          backgroundColor: "#FFFFFF",
          border: "2px solid #a76DFa",
          borderRadius: "12px",
        }}
        p={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4">{header}</Typography>
        <IconButton>
          {openCard ? (
            <RemoveIcon onClick={() => setOpenCard(false)} />
          ) : (
            <AddIcon onClick={() => setOpenCard(true)} />
          )}
        </IconButton>
      </Box>
      {openCard && (
        <Box sx={{ display: "flex", alignItems: "center" }} className="flex-1">
          {children}
        </Box>
      )}
    </Box>
  );
};

export default DashboardCard;
