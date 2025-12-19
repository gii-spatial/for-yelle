import RenderGif from "../../RenderGif";

interface CallingProps {
  onFinish: () => void;
}
export default function Calling(props: CallingProps) {
  return (
    <RenderGif
      src="/for-yelle/penguin-running-gift.gif"
      alt="penguin-running-gift.gif"
      width={125}
      height={125}
      onAnimationEnd={props.onFinish}
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
