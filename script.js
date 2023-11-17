function firstWord(str) {
	  if (str == "") {
		 return str;
	  }

	  let indexOfSpace = str.indexOf(" ");
	  if (indexOfSpace == -1) return str;
		return str.slice(0, indexOfSpace); 
}


// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
