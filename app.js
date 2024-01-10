window.onload = () => {
  const button = document.querySelector("#btn");
  button.addEventListener("click", hitungBmi);
};

function hitungBmi() {
  const tinggi = document.querySelector("#tinggi").value;
  const berat = document.querySelector("#berat").value;
  const hasil = document.querySelector("#hasil");

  console.log(tinggi);
  console.log(berat);

  if (isNaN(tinggi) || tinggi < 0) {
    hasil.innerText = "Tolong masukan data tinggi badan yang valid";
    return;
  } else if (isNaN(berat) || berat < 0) {
    hasil.innerText = "Tolong masukan data berat badan yang valid";
    return;
  }

  const bmi = berat / ((tinggi * tinggi) / 10000);

  if (bmi < 18.5) {
    hasil.innerText = `under weight \n${bmi}`;
  } else if (bmi >= 18.55 && bmi < 24.9) {
    hasil.innerText = `Normal \n${bmi}`;
  } else if (bmi >= 25 && bmi < 29.9) {
    hasil.innerText = `Over weight \n${bmi}`;
  } else if (bmi >= 30 && bmi < 34.9) {
    hasil.innerText = `Obesitas (kelas 1) \n${bmi}`;
  } else if (bmi >= 35.5 && bmi < 39.9) {
    hasil.innerText = `Obesitas (kelas 2) \n${bmi}`;
  } else {
    hasil.innerText = `Obesitas Ekstrim \n${bmi}`;
  }
}