<script>
	function yenikisim() {
		var metin = document.getElementById("textarea").value;
		var yenielement = document.createElement("p");
		var icerik = document.createTextNode(metin);
		yenielement.appendChild(icerik);
		var anakisim = document.getElementById("anakisim");
		anakisim.appendChild(yenielement);
	}
	</script>
	
	</head>
	<body>
	
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
	<textarea id="textarea" rows="10" cols="30"></textarea>
	
	<button onclick="yenikisim()">Yeni Kısım Ekle</button>
	
	</body>