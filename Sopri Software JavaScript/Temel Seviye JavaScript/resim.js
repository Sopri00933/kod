<style>
	div {
		width:200px;
		height:200px;
		background:red;
		text-align:center;
	}
	</style>
	
	<div id ="div1">
	NİSA
	</div>
	
	<img id="resim" src="resim1.jpg" width="400px" height="400px"/>
	
	<script>
	var div = document.getElementById("div1");
	div.onclick = function() {
		this.innerHTML = "NİSA MEHMET ALİ";
	}
	var resim = document.getElementById("resim");
	resim.onmouseover = function() {
		this.src = "resim1.jpg";
	}
	resim.onmouseout = function() {
		this.src = "programlama_dilleri.jpg";
	}
	</script>