import { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CSGameStore from "../../_store";
import useDynamicViewPorts from "../../../../../hooks/useDynamicViewports";
import RenderGif from "../../RenderGif";

export default function Completed() {
  const selectedPrice = useAtomValue(CSGameStore.selectedPrice);
  const user = useAtomValue(CSGameStore.user);
  const { getDvHeight, getDvWidth } = useDynamicViewPorts();
  const hasSent = useRef(false);

  useEffect(() => {
    if (hasSent.current) return; // skip if already sent
    if (!user || !selectedPrice) return;

    hasSent.current = true; // mark as sent

    const payload = { user, pamasko: selectedPrice };

    void (async () => {
      // static url for now
      const url = "https://gh-gii-spatial-fastapi.vercel.app/send-result";
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Request failed");
        console.log("Sent!");
        alert("Your prize has been recorded. Thank you for playing!");
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, []);

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
