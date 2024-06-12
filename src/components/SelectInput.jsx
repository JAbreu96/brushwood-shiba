import { breeds } from "../data/breeds.js";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";


export const SelectInput = () => {
  return <FormControl fullWidth >
    <InputLabel id="breed-label">Breed</InputLabel>
    <Select labelId="breed-label" sx={{
      "& .MuiSelect-nativeInput": {
        borderColor: "#fff"
      }
    }} label="breed">
      {Object.keys(breeds).map(breed => <MenuItem key={breed}>{breed}</MenuItem>)}
    </Select>
  </FormControl >
}