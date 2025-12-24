import { useAtomValue } from "jotai";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CSGameStore from "../../_store";
import useDynamicViewPorts from "../../../../../hooks/useDynamicViewports";
import RenderGif from "../../RenderGif";

export default function Completed() {
  const selectedPrice = useAtomValue(CSGameStore.selectedPrice);
  const { getDvHeight, getDvWidth } = useDynamicViewPorts();

  return (
    <Stack
      position={"relative"}
      width={getDvWidth(100)}
      height={getDvHeight(100)}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <RenderGif
        src="/for-yelle/confetti-02.gif"
        alt="confetti.gif"
        sx={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Typography variant="font18Normal">Congratulations, you won</Typography>
      <Typography variant="font34Strong">₱ {selectedPrice}</Typography>
    </Stack>
  );
}
