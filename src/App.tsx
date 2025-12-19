import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import susTheme from "./themes/susTheme";
import useDynamicViewPorts from "./hooks/useDynamicViewports";
import CallingSanta from "./components/games/CallingSanta";

function App() {
  const { getDvHeight, getDvWidth } = useDynamicViewPorts();

  const dynamicHeight = getDvHeight(100);
  const dynamicWidth = getDvWidth(100);
  return (
    <ThemeProvider theme={susTheme("dark")}>
      <CssBaseline />
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: dynamicHeight,
          height: dynamicHeight,
          width: dynamicWidth,
          overflowX: "hidden",
        }}
      >
        {/* -- app components go here -- */}
        <CallingSanta />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
