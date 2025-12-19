import Button, { type ButtonProps } from "@mui/material/Button";

interface BtnNumberProps extends ButtonProps {
  text: string;
  selected?: boolean;
}
export default function BtnNumber(props: BtnNumberProps) {
  const { text, selected = false, ...buttonProps } = props;
  return (
    <Button
      variant="outlined"
      sx={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Montserrat, sans-serif",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ...(selected
          ? {
              backgroundColor: "#FFFFFF",
              borderColor: "currentColor",
              color: "#111418",
            }
          : {}),

        "&:hover": {
          backgroundColor: "#FFFFFF",
          borderColor: "currentColor",
          color: "#111418",
        },
      }}
      {...buttonProps}
    >
      {text}
    </Button>
  );
}
