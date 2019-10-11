<style>
	.kirmizi {
		color:red;
		background-color:yellow;
	}
	</style>
	
	<script>
	function  degistir() {
		var elementler = document.getElementsByTagName("h3");
		var i = 0;
		for (;i < elementler.length;i++) {
			var ozellik = document.createAttribute("class");
			ozellik.value = "kirmizi";
			
			elementler[i].setAttributeNode("ozellik"); 
		}
	}
	</script>
	
	</head>
	<body>
	
	<h3> Birinci Hikaye </h3>
	<div id="anakisim" style="background-color:" >
	<h3>Birinci Hikaye</h3>
	<p>
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	</p>
	<h3>İkinci Hikaye</h3>
	<p>
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
	</p>
	</div>
	
	<button class="degistir();">Renk</button>