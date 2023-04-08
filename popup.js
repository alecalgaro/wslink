const form = document.querySelector("form");
const phone = document.querySelector("#phone");
const code = document.querySelector("#code");
const error = document.querySelector("#error");
const btn = document.querySelector("#btn");
const link = document.querySelector("#link");

// Si se agregan otros paises se debe considerar la cantidad de digitos que tienen
// los numeros de celulares en cada pais, para validar que sea un numero correcto.

function valideteMobileNumber(number) {
	var pattern = /^[0-9]{10}$/; // patron para verificar que sean 10 digitos numericos
	return pattern.test(number); // true si el numero cumple con el patron, false en caso contrario
}

btn.addEventListener("click", (event) => {
	event.preventDefault();

	const valid = valideteMobileNumber(phone.value);

	if (valid) {
		error.innerHTML = "";
		link.innerHTML = `https://wa.me/${code.value}${phone.value}`;
		link.setAttribute("href", `https://wa.me/${code.value}${phone.value}`);
	} else {
		error.innerHTML = "Ingrese un número de celular válido";
		link.innerHTML = ``;
	}
});
