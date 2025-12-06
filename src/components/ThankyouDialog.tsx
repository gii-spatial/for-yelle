import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface ThankyouDialogProps {
  open: boolean;
}

export default function ThankyouDialog({ open }: ThankyouDialogProps) {
  return (
    <Dialog
      slotProps={{
        paper: {
          sx: {
            height: 300,
            width: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          },
        },
      }}
      onClose={() => {}}
      open={open}
    >
      {/* Confetti GIF */}
      <Box
        component="img"
        src="/src/assets/gif/confetti.gif"
        alt="Confetti"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Stack
        sx={{
          zIndex: 1, // text is above the confetti
          color: "#000",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
        spacing={2}
      >
        Thankyou Yelle 💙✨
      </Stack>
    </Dialog>
  );
}
