<script>
	function degistir() {
		document.getElementById("para").innerHTML = "JavaScript";
	}
	</script>
	
	<button onclick = "degistir()">Tıkla</button>
	<p id ="para"></p>
	
<script>
	function yukle() {
		window.alert("Hoşgeldiniz");
	}
	</script>
	
	<body onload ="yukle()">