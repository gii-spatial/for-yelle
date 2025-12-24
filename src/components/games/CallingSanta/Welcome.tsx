import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RenderGif from "./RenderGif";
import { useAtom } from "jotai";
import CSGameStore from "./_store";

interface WelcomeProps {
  readonly onBegin: () => void;
}
export default function Welcome(props: WelcomeProps) {
  const { onBegin } = props;
  const [user, setUser] = useAtom(CSGameStore.user);
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

        <Stack gap={1} alignItems={"center"}>
          <Typography>Your name:</Typography>
          <TextField
            value={user}
            onChange={(e) => setUser(e.target.value!)}
            variant="filled"
            slotProps={{
              htmlInput: {
                sx: {
                  padding: 2,
                },
              },
            }}
          />
        </Stack>

        {/* Acceptance */}
        <Button
          disabled={user.trim().length === 0}
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
