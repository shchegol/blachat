let forms = document.getElementsByTagName('form');

[].forEach.call(forms, function(elem) {
  elem.addEventListener('submit', logFormData);
});

function logFormData(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  let data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
}