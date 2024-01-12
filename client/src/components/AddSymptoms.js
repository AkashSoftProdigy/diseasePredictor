import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Checkbox, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import styles from  "../App.module.css"


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AddSymptoms({selectedSymptoms, setSelectedSymptoms, allSymptoms}) {

  return (
    <Autocomplete
      disablePortal
      multiple
      id={styles["combo-box-demo"]}
      options={allSymptoms}
      value={selectedSymptoms}
      sx={{ width: "100%" }}
      // renderTags={(args) => null}
      onChange={(e,selectedOptions) => {
        console.log("args",e,"selectedOptions", selectedOptions)
        setSelectedSymptoms(selectedOptions)
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      renderInput={(params) => <TextField 
      placeholder="Add Symptoms" 
 
        {...params} 
    
        />}

        isOptionEqualToValue={(option,value)=> option?.symptom === value?.symptom}
    />
  );
}

