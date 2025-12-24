import { useEffect, useRef, useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import RenderGif from "../../RenderGif";
import { useAtomValue } from "jotai";
import CSGameStore from "../../_store";
import app from "../../../../../_auth/firebase/gii-spatial-frb01.config";

interface CallingProps {
  onFinish: () => void;
}

export default function Calling(props: CallingProps) {
  const selectedPrice = useAtomValue(CSGameStore.selectedPrice);
  const player = useAtomValue(CSGameStore.player);
  const sendTo = useAtomValue(CSGameStore.sendTo);

  const [requestDone, setRequestDone] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);

  const hasSavedRef = useRef(false);

  const saveToFirebaseDB = () => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "calling-santa-game-results"));

    const payload = {
      id: crypto.randomUUID(),
      player: player,
      ninang: sendTo,
      prize: selectedPrice?.toString() || "0",
    };

    set(newDocRef, payload)
      .then(() => {
        console.log("Game result recorded!", payload);
        setRequestDone(true);
      })
      .catch((error) => {
        console.error(`error: ${error?.message}`);
      });
  };

  // Run saveToFirebaseDB only once
  useEffect(() => {
    if (hasSavedRef.current) return;

    hasSavedRef.current = true;
    saveToFirebaseDB();
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
