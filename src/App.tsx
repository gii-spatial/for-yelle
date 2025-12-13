import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function App() {
  return (
    <Stack
      flex={1}
      alignItems="center"
      justifyContent="center"
      gap={1.5}
      sx={{ height: "100vh" }}
    >
      <Box
        component="img"
        src="/for-yelle/send-hearts-1.gif"
        alt="send-hearts-1"
        sx={{
          width: 430,
          height: 430,
          pointerEvents: "none",
        }}
      />
      <Typography variant="h4" sx={{ color: "#111418" }}>
        Ingat pauwi 🚌💖
      </Typography>
    </Stack>
  );
}

export default App;
