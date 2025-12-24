import { useEffect, useState } from "react";
import RenderGif from "../../RenderGif";
import { useAtomValue } from "jotai";
import CSGameStore from "../../_store";

interface CallingProps {
  onFinish: () => void;
}

export default function Calling(props: CallingProps) {
  const selectedPrice = useAtomValue(CSGameStore.selectedPrice);
  const user = useAtomValue(CSGameStore.user);

  const [requestDone, setRequestDone] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);

  const sendResult = async () => {
    const payload = { user, pamasko: selectedPrice };
    const url = "https://gh-gii-spatial-fastapi.vercel.app/send-result";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      console.log("Sent!");
    } catch (err) {
      console.log("error", err);
    } finally {
      setRequestDone(true);
    }
  };

  // Run sendResult only once
  useEffect(() => {
    sendResult();
  }, []);

  // Call onFinish only when both animation and request are done
  useEffect(() => {
    if (requestDone && animationEnded) {
      props.onFinish();
    }
  }, [requestDone, animationEnded]);

  return (
    <RenderGif
      src="/for-yelle/penguin-running-gift.gif"
      alt="penguin-running-gift.gif"
      width={125}
      height={125}
      onAnimationEnd={() => setAnimationEnded(true)}
      sx={{
        "@keyframes zoomIn": {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      }}
      style={{
        display: "block",
        margin: "0 auto",
        transform: "scale(0)",
        animation: "zoomIn 5s ease-out forwards",
      }}
    />
  );
}
