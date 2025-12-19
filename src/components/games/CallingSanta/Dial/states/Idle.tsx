import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import NumberPicker from "../NumberPicker";

interface IdleProps {
  isCalling: boolean;
  selectedNumber: number | null;
  onCall: () => void;
  onSelectNumber: (num: number) => void;
}

export default function Idle(props: IdleProps) {
  const { isCalling, onCall, onSelectNumber, selectedNumber } = props;

  return (
    <Stack gap={3} alignItems="center">
      <Typography variant="font18Normal">Please pick a number</Typography>
      <NumberPicker
        onSelectNumber={onSelectNumber}
        selectedNumber={selectedNumber}
      />
      <IconButton
        onClick={onCall}
        disabled={isCalling || selectedNumber === null}
        sx={{
          backgroundColor: "#4CAF50",
          color: "white",
          width: 60,
          height: 60,
          position: "relative",
          "&::after": isCalling
            ? {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                animation: "pulse 1.5s infinite",
              }
            : {},
          "@keyframes pulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(76,175,80,0.7)" },
            "70%": { boxShadow: "0 0 0 16px rgba(76,175,80,0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(76,175,80,0)" },
          },
        }}
      >
        <CallIcon fontSize="large" />
      </IconButton>
    </Stack>
  );
}
