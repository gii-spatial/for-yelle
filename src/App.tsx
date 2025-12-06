import Stack from "@mui/material/Stack";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import BaseCard from "./components/BaseCard";

function App() {
  const [openMsg, setOpenMsg] = useState<boolean>(false);

  const handleOpenMsg = () => {
    setOpenMsg(true);
  };

  return (
    <Stack
      flex={1}
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh", bgcolor: "#121212" }}
    >
      {!openMsg ? <WelcomeMessage onRead={handleOpenMsg} /> : <BaseCard />}
    </Stack>
  );
}

export default App;
