import { symptomsDataAdult, symptomsDataBaby } from './SymptomsData';

const symptomsArrayAdult = [];
for (let i = 0; i < symptomsDataAdult.length; i++) {
  symptomsArrayAdult.push({
    label: symptomsDataAdult[i].symptom,
    id: i+1,
  });
}
export const symptomOptionAdult = symptomsArrayAdult.sort(function (a, b) {
  const textA = a.label.toLowerCase();
  const textB = b.label.toLowerCase();
  return textA.localeCompare(textB);
});

const symptomsArrayBaby = [];
for (let i = 0; i < symptomsDataBaby.length; i++) {
  symptomsArrayBaby.push({
    label: symptomsDataBaby[i].symptom,
    id: i+1,
  });
}
export const symptomOptionBaby = symptomsArrayBaby.sort(function (a, b) {
  const textA = a.label.toLowerCase();
  const textB = b.label.toLowerCase();
  return textA.localeCompare(textB);
});
