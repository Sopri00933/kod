<script>
	function tikla() {
		var elementler = document.getElementsByTagName("p");
		window.alert(elementler.length);
		elementler[0].style.backgroundcolor ="red";
		elementler[4].style.backgroundcolor ="red";
		
		var x = 0;
		
		for (; x < elementler.length;x++) {
			elementler[x].style.visibility ="hidden";
		}
	}
	</script>
	
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<button onclick="tikla()">Tıkla</button>
	
<script>
	function tikla() {
		var elementler = document.getElementsByClassName("class1");
		window.alert(elementler.length);
		elementler[0].style.backgroundcolor ="red";
		elementler[4].style.backgroundcolor ="red";
		
		var x = 0;
		
		for (; x < elementler.length;x++) {
			elementler[x].style.backgroundColor ="yellow";
		}
	}
	</script>
	
	<p class="class1">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<p id="para">NİSA</p>
	<button onclick="tikla()">Tıkla</button>