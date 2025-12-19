import { useState } from "react";
import { useSetAtom } from "jotai";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import CSGameStore from "../_store";
import Calling from "./states/Calling";
import Completed from "./states/Completed";
import Idle from "./states/Idle";

const DialEnum = {
  idle: "idle",
  calling: "calling",
  completed: "completed",
} as const;

type DialEnum = (typeof DialEnum)[keyof typeof DialEnum];

export default function Dial() {
  const setSelectedNumber = useSetAtom(CSGameStore.selectedNumber);
  const [dialState, setDialState] = useState<DialEnum>(DialEnum.idle);
  const [_selectedNumber, _setSelectedNumber] = useState<null | number>(null);

  const handleOnCall = () => {
    setDialState(DialEnum.calling);
    setTimeout(() => {
      setSelectedNumber(_selectedNumber);
    }, 4000);
  };

  const handleOnFinish = () => {
    setDialState(DialEnum.completed);
  };

  const isCalling = dialState === DialEnum.calling;
  const isIdle = dialState === DialEnum.idle;
  const isCompleted = dialState === DialEnum.completed;

  return (
    <Stack width="100%" gap={3} alignItems="center">
      <Collapse in={isIdle} timeout={300} unmountOnExit>
        <Idle
          isCalling={isCalling}
          onCall={handleOnCall}
          onSelectNumber={_setSelectedNumber}
          selectedNumber={_selectedNumber}
        />
      </Collapse>

      {isCalling && <Calling onFinish={handleOnFinish} />}
      {isCompleted && <Completed />}
    </Stack>
  );
}
