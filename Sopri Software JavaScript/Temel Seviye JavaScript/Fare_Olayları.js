<body>
	
	<button id = "dgm">Buton</button></br>
	<p id ="para">sssssssss</p>
	
	<script>
	var dgm =document.getElementById("dgm");
	dgm.addEventListener("click",tikla);
	dgm.addEventListener("mouseover",mouseover);
	dgm.addEventListener("mouseout",mouseout);
	
	function tikla() {
	    document.getElementById("para").innerHTML = "Tıklandı";	
	}
	function mouseover() {
		document.getElementById("para").innerHTML = "MouseOver";
	}
	function mouseout() {
		document.getElementById("para").innerHTML = "MouseOut";
	}
	</script>
	
	</body>