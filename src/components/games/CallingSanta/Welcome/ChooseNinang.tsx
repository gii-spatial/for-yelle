import { useSetAtom } from "jotai";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CSGameStore from "../_store";
import type { Ninang } from "../_interface";

export default function ChooseNinang() {
  const setSendTo = useSetAtom(CSGameStore.sendTo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    if (val === "ate-mariel" || val === "ate-gladish") {
      setSendTo(event.target.value as Ninang);
      return;
    }

    console.warn("Invalid selected:", val);
  };

  return (
    <FormControl>
      <FormLabel id="radio-buttons-group-label">Choose Ninang:</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "row" }}
        onChange={handleChange}
      >
        <FormControlLabel
          value="ate-mariel"
          control={<Radio />}
          label="Ate Mariel"
        />
        <FormControlLabel
          value="ate-gladish"
          control={<Radio />}
          label="Ate Gladish"
        />
      </RadioGroup>
    </FormControl>
  );
}
