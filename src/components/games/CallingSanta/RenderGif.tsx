import Box, { type BoxProps } from "@mui/material/Box";

interface RenderGifProps extends BoxProps {
  src: string;
  alt: string;
}
export default function RenderGif(props: RenderGifProps) {
  return (
    <Box
      {...props}
      component="img"
      sx={{
        width: 150,
        height: 150,
        pointerEvents: "none",
        transition: "all 0.3s ease",
        ...props.sx,
      }}
    />
  );
}
