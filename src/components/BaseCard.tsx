import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import ThankyouDialog from "./ThankyouDialog";

export default function BaseCard() {
  const [swapped, setSwapped] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false);

  // Trigger mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNoClick = () => {
    setSwapped((s) => !s);
    setClickCount((c) => Math.min(c + 1, 5));
  };

  const handleYesClick = () => {
    setShowThankyou(true);
  };

  const noScale = 1 - clickCount * 0.15; // Shrinks
  const yesScale = 1 + clickCount * 0.15; // Grows
  const isGone = clickCount >= 5;

  const yesButton = (
    <Box sx={{ width: 80, display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        key="yes"
        onClick={handleYesClick}
        sx={{
          transform: `scale(${yesScale})`,
          transition: "transform 0.2s ease",
        }}
      >
        YES
      </Button>
    </Box>
  );

  const noButton = !isGone && (
    <Box sx={{ width: 80, display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        key="no"
        onClick={handleNoClick}
        sx={{
          bgcolor: "#616161",
          transform: `scale(${noScale})`,
          transition: "transform 0.2s ease",
        }}
      >
        NO
      </Button>
    </Box>
  );

  const message = `Hello yelle, sorry it took a while... \nI just wanted to say sorry   earlier, \nI shouldn't have said it. \n\nHindi ka magulo, i was the one who didn't read the lines and went overboard. \n\nCan we still... make this work?... 😥\nSorry ulit.`;
  const suffix = `\n\n----\nYour bff,\niann`;
  return (
    <>
      <Grow in={mounted} timeout={{ appear: 1000, enter: 1000, exit: 500 }}>
        <Card
          sx={{
            width: 330,
            margin: 2,
            height: `calc(415px + ${clickCount * 3}px)`, // add small growth per click
            transition: "height 0.2s ease",
          }}
        >
          <CardContent sx={{ whiteSpace: "pre-line" }}>
            {message}
            {suffix}
          </CardContent>

          <CardActions
            sx={{
              justifyContent: isGone ? "center" : "space-between",
              padding: 2,
            }}
          >
            {swapped ? noButton : yesButton}
            {swapped ? yesButton : noButton}
          </CardActions>
        </Card>
      </Grow>
      {showThankyou && <ThankyouDialog open={showThankyou} />}
    </>
  );
}
