import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slide from "@mui/material/Slide";
import Collapse from "@mui/material/Collapse";
import Welcome from "./Welcome";
import Dial from "./Dial";

export default function CallingSanta() {
  const [readyClicked, setReadyClicked] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const handleOnBegin = () => {
    setReadyClicked(true);
    setTimeout(() => setShowPicker(true), 400);
  };

  return (
    <Stack
      flex={1}
      gap={3}
      justifyContent="center"
      alignItems={"center"}
      width={300}
    >
      {/* GIF + Short message + Ready button */}
      <Collapse in={!readyClicked} timeout={300} unmountOnExit mountOnEnter>
        <Welcome onBegin={handleOnBegin} />
      </Collapse>

      {/* PickANumber slides in from right */}
      <Slide
        direction="left"
        in={showPicker}
        mountOnEnter
        unmountOnExit
        timeout={300}
      >
        <Box>
          <Dial />
        </Box>
      </Slide>
    </Stack>
  );
}
