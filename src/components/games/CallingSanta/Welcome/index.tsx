import { useAtom, useAtomValue } from "jotai";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RenderGif from "../RenderGif";
import CSGameStore from "../_store";
import ChooseNinang from "./ChooseNinang";

interface WelcomeProps {
  readonly onBegin: () => void;
}

export default function Welcome(props: WelcomeProps) {
  const { onBegin } = props;
  const [player, setPlayer] = useAtom(CSGameStore.player);
  const sendTo = useAtomValue(CSGameStore.sendTo);

  const handleOnChangePlayer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(event.target.value);
  };

  const canBeginGame = player.trim().length > 0 && sendTo !== null;
  return (
    <Stack gap={1}>
      {/* GIF Placement */}
      <Stack
        alignItems={"center"}
        sx={{
          position: "relative",
          borderRadius: 100,
          height: 175,
          width: 175,
          transform: "translateX(25px)",
        }}
      >
        <RenderGif src="/for-yelle/snow.gif" alt="snow.gif" />
        <RenderGif
          src="/for-yelle/cat-santa-01.gif"
          alt="cat-santa-01.gif"
          sx={{ position: "absolute" }}
        />
      </Stack>

      <Stack gap={4} alignItems={"center"}>
        {/* Short message */}
        <Stack gap={1} alignItems={"center"} textAlign={"center"}>
          <Typography variant="font22Normal">Merry christmas</Typography>
          <Typography whiteSpace={"pre-line"}>
            {`Choose your pamasko wisely. \nGoodluck!`}
          </Typography>
        </Stack>

        {/* Basic info */}
        <Stack gap={1} alignItems={"center"}>
          <TextField
            placeholder="Enter your name"
            value={player}
            onChange={handleOnChangePlayer}
            variant="filled"
            slotProps={{
              htmlInput: {
                sx: {
                  padding: 2,
                },
              },
            }}
          />
          <ChooseNinang />
        </Stack>

        {/* Acceptance */}
        <Button
          disabled={!canBeginGame}
          variant="contained"
          sx={{ fontSize: 16, px: 3.25, py: 1.25, width: "fit-content" }}
          onClick={onBegin}
        >
          I'm ready
        </Button>
      </Stack>
    </Stack>
  );
}
