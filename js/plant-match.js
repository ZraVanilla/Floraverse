/* FloraVerse — plant-match.js — modular wrapper (logic lives in app.js, this extends with personality hook) */
function plantMatchToPersonality(answers){
  // simple mapping to Gardening Personality (Instruksi2 #28)
  if(answers.waktu==="jarang") return "The Patient Grower";
  if(answers.waktu==="sering" && answers.tujuan==="sayuran") return "The Quick Harvester";
  if(answers.lokasi==="balkon") return "The Urban Grower";
  if(answers.tujuan==="hias") return "The Plant Explorer";
  return "The Careful Keeper";
}
