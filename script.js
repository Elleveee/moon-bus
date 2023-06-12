function checkmatch() 
{
	const number = document.getElementById("numstep");
	const correct = document.getElementById("correct");
	const star2 = document.getElementById("star2");
	const wrong = document.getElementById("wrong");

	//numero dello step corretto

	if (number.value == truevalue) {
		correct.style.opacity = 100;
		correct.style.animation = "scale .5s ease";
		correct.style.animation = "rotation1 .5s ease";

		star2.style.borderRadius = "50px";
		star2.style.height = "60px";
		star2.style.width = "60px";
		star2.style.animation = "scale .5s ease";
		star2.style.backgroundColor = "#39D391";

		document.getElementById("wrong").style.opacity = 0;


		//alert("Hello! I am an alert box!!");
		//window.location.assign("right.html");
	}
	else if (number.value != truevalue && number.value != 0) {
		wrong.style.opacity = 100;
		wrong.style.scale = 1,25;
		wrong.style.animation = "shake .3s ease";


		star2.style.borderRadius = "50px";
		star2.style.height = "60px";
		star2.style.width = "60px";
		star2.style.animation = "scale .5s ease";
		star2.style.animation = "shake .3s ease";
		star2.style.backgroundColor = "#EA4747";


		document.getElementById("correct").style.opacity = 0;

		document.getElementById("correct-answer").style.opacity = 100;


		//alert("Hello! I am an alert box 2!!");
		//window.location.assign("wrong.html");
	}
	else if (number.value == 0){
		console.log("null");
		alert("Prova a rispondere!");

		//window.alert("Campo da compilare");

	}
}

setTimeout(() => {

	if (document.getElementById("numstep") != null){
		
		const sender = document.getElementById("submit");
		const number = document.getElementById("numstep");
		const inputField = document.getElementById("numstep");
		
		inputField.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
				event.preventDefault();
				checkmatch();
			}
		});
	}


  }, "300")

