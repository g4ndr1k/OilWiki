import { symptomsDataAdult, symptomsDataBaby } from './SymptomsData';

export function symptomSearch(whichOne, symptomName) {
  let pepOil = 'Not found';
  let nonPepOil = 'Not found';
  let blend = 'Not found';
  let supplement = 'Not found';
  let personalCare = 'Not found';

  let symptomsData = [];

  if (whichOne === 'Adult') {
    symptomsData = symptomsDataAdult;
  } else {
    symptomsData = symptomsDataBaby;
  }

  for (let i = 0; i < symptomsData.length; i++) {
    if (
      symptomsData[i].symptom.toLowerCase().trim() ===
      symptomName.toLowerCase().trim()
    ) {
      pepOil = symptomsData[i].pepOil;
      nonPepOil = symptomsData[i].nonPepOil;
      blend = symptomsData[i].blend;
      supplement = symptomsData[i].supplement;
      personalCare = symptomsData[i].personalCare;
      break;
    }
  }
  return { pepOil, nonPepOil, blend, supplement, personalCare };
}
