import { Box, Typography} from "@mui/material";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  children?: ReactNode;
  id?: string;
}

function SectionWrapper({ title, children, id }: SectionWrapperProps) {
  return (
    <Box id={id} sx={{ py: 10, px: 4, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="#0478b7ff" mb={2}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default SectionWrapper;
