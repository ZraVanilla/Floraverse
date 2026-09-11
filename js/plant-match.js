/* FloraVerse - plant-match.js - modular wrapper (logic lives in app.js, this extends with personality hook) */
function plantMatchToPersonality(answers){
  // simple mapping to Gardening Personality (Instruksi2 #28)
  if(answers.waktu==="jarang") return "Perawat Santai";
  if(answers.waktu==="sering" && answers.tujuan==="panen") return "Pemburu Panen Cepat";
  if(answers.lokasi==="balkon" || answers.ruang==="sempit") return "Pekebun Urban";
  if(answers.tujuan==="hias") return "Penjelajah Tanaman";
  if(answers.tujuan==="herbal") return "Peracik Herbal";
  return "Perawat Teliti";
}
