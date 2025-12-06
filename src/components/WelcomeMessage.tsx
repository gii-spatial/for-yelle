import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/material";

// ripple animation keyframes
const ripple = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.25);
    opacity: 0;
  }
`;

interface WelcomeMessageProps {
  onRead: () => void;
}
export default function WelcomeMessage({ onRead }: WelcomeMessageProps) {
  return (
    <Stack alignItems="center" position="relative">
      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          top: -5,
          backgroundColor: "rgba(33, 150, 243, .75)",
          animation: `${ripple} 1.5s infinite`,
        }}
      />
      <IconButton
        onClick={onRead}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <EmailIcon sx={{ color: "#FFFFFF", fontSize: 64 }} />
      </IconButton>
      <Typography mt={2} color="white">
        You have a message 👉👈
      </Typography>
    </Stack>
  );
}
