<script>
	function degistir() {
		document.getElementById("para").style.color ="blue";
        document.getElementById("para").style.backgroundcolor ="red";
		window.alert(document.URL);
		window.alert(document.title);
	}
	</script>
	
	<p id="para">NİSA</p>
	<button onclick="degistir()">Değiştir</button>
	
//document.getElementById("id").style.özellik = yeniözellik
//style.color = "red";
//style.backgroundColor = "yellow";
//style.textAlign = "center";
//style.fontsize = "40px";
//style.Visibility = "hidden" veya "visible"
