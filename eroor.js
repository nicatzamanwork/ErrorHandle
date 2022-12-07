let img = document.querySelector("img");

try {
  fetch(" https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => (img.src = data.message));
  console.log(response);
} catch (error) {
  console.log(error);
}
