let triangleAnswer = function triangleChecker() {
  let sideOne = parseInt(document.getElementById("sideOne").value);
  let sideTwo = parseInt(document.getElementById("sideTwo").value);
  let sideThree = parseInt(document.getElementById("sideThree").value);

  if (sideOne === sideTwo && sideTwo === sideThree) {
    console.log("EQUAL");
  } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
    console.log("ISOSCELES");
  } else if ((sideOne + sideTwo) <= sideThree || (sideOne + sideThree) <= sideTwo || (sideTwo + sideThree) <= sideOne) {
    console.log("NOT a triangle");
  } else if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree) {
    console.log("SCALENE");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("trackerForm");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  triangleAnswer();
};