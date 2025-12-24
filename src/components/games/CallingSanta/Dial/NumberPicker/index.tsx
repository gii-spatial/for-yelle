import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DEF_NUMBERS } from "../../_constants";
import BtnNumber from "./BtnNumber";

interface NumberPickerProps {
  selectedNumber: number | null;
  onSelectNumber: (num: number) => void;
}

export default function NumberPicker(props: NumberPickerProps) {
  const { selectedNumber, onSelectNumber } = props;
  return (
    <Stack alignItems="center" gap={2}>
      {DEF_NUMBERS.map((row, rowIndex) => (
        <Box key={rowIndex} display="flex" gap={2}>
          {row.map((num, index) =>
            num !== null ? (
              <BtnNumber
                key={index}
                text={num.toString()}
                selected={selectedNumber === num}
                onClick={() => onSelectNumber(num)}
              />
            ) : (
              <Box
                key={index}
                sx={{ width: 60, height: 60 }} // empty space for alignment
              />
            )
          )}
        </Box>
      ))}
    </Stack>
  );
}
