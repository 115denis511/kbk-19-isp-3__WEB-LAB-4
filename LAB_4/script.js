var b = document.getElementById("button");

b.onclick = function() {
	
	var x1 = document.getElementById("x1").value;
	var y1 = document.getElementById("y1").value;
	var x2 = document.getElementById("x2").value;
	var y2 = document.getElementById("y2").value;
	var res = document.getElementById("res");
	
	var result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	res.textContent = result;
}