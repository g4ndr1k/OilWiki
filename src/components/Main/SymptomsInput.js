import { useState, useRef } from 'react';
import {
  Autocomplete,
  TextField,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

import { symptomOptionAdult, symptomOptionBaby } from './SymptomsOptions';
import { symptomSearch } from './SymptomsSearch';

const SymptomInput = (props) => {
  let symptomAutocompleteOption = [];
  let title = '';

  if (props.whichOne === 'Adult') {
    symptomAutocompleteOption = symptomOptionAdult;
    title = 'Campuran EO untuk Dewasa';
  } else {
    symptomAutocompleteOption = symptomOptionBaby;
    title = 'Campuran EO untuk Balita & Bayi';
  }

  const [value, setValue] = useState('Ketik nama penyakit');
  const [inputValue, setInputValue] = useState('');

  const pepOilRef = useRef('');
  const nonPepOilRef = useRef('');
  const blendRef = useRef('');
  const supplementRef = useRef('');
  const personalCareRef = useRef('');

  const setPepOilRefResult = (result) => {
    pepOilRef && (pepOilRef.current.value = result);
  };
  const setNonPepOilRefResult = (result) => {
    nonPepOilRef && (nonPepOilRef.current.value = result);
  };
  const setBlendRefResult = (result) => {
    blendRef && (blendRef.current.value = result);
  };
  const setSupplementRefResult = (result) => {
    supplementRef && (supplementRef.current.value = result);
  };
  const setPersonalCareRefResult = (result) => {
    personalCareRef && (personalCareRef.current.value = result);
  };

  const onInputChangeHandler = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const selectedSymptomHandler = (event, newValue) => {
    setValue(newValue);
    console.log(props.whichOne);
    console.log(newValue);
    if (newValue != null) {
      const symptomResult = symptomSearch(props.whichOne, newValue.label);
      setPepOilRefResult(symptomResult.pepOil);
      setNonPepOilRefResult(symptomResult.nonPepOil);
      setBlendRefResult(symptomResult.blend);
      setSupplementRefResult(symptomResult.supplement);
      setPersonalCareRefResult(symptomResult.personalCare);
    }
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader title={title} />
      <CardActions>
        <Autocomplete
          value={value}
          onChange={selectedSymptomHandler}
          inputValue={inputValue}
          onInputChange={onInputChangeHandler}
          disablePortal
          id="combo-box"
          options={symptomAutocompleteOption}
          sx={{ width: 312 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Symptom"
              variant="outlined"
              size="small"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </CardActions>
      <CardContent>
        <Divider variant="middle" textAlign="left">
          Oil PEP
        </Divider>
        <Typography paragraph ref={pepOilRef}>{pepOilRef.current.value}</Typography>
        <Divider variant="middle" textAlign="left">
          Oil Non PEP
        </Divider>
        <Typography paragraph ref={nonPepOilRef}>{nonPepOilRef.current.value}</Typography>
        <Divider variant="middle" textAlign="left">
          Blend DIY
        </Divider>
        <Typography paragraph ref={blendRef}>{blendRef.current.value}</Typography>
        <Divider variant="middle" textAlign="left">
          Supplement
        </Divider>
        <Typography paragraph ref={supplementRef}>{supplementRef.current.value}</Typography>
        <Divider variant="middle" textAlign="left">
          Personal Care
        </Divider>
        <Typography paragraph ref={personalCareRef}>{personalCareRef.current.value}</Typography>
      </CardContent>

      
    </Card>
  );
};

export default SymptomInput;
