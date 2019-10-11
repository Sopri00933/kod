<script>
	function degistir() {
		var x = document.getElementById("para")
        x.style.color ="red";
		x.style.backgroundColor = "yellow";
		x.style.textAlign = "center";
		x.style.fontSize = "100px";
		
	}
	</script>
	
	<p id="para">NİSA</p>
	<button onclick="degistir()">Tıkla</button>
	
<script>
	function kaybet() {
		var x = document.getElementById("para");  
		x.style.visibility ="hidden";	
	}
	function goster() {
		var x = document.getElementById("para"); 
		x.style.visibility ="visible";	
	}
	</script>
	
	<p id="para">NİSA</p>
	<button onclick="kaybet()">Kaybet</button>
	<button onclick="goster()">Göster</button>
	
//document.getElementsByTagName("p").style.özellik = yeni özellik
//document.getElementsByClassName("class1").style.özellik = yeni özellik
//style.color = "red";
//style.backgroundColor = "yellow";
//style.textAlign = "center";
//style.fontSize ="40px";
//style.visibility ="hidden" veya "visible"