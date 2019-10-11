<script>
	function dogrula () {
		var deger = document.formisim.isim.value;
		if (deger == "") {
			window.alert("İsim Alanı Boş Geçilemez");
			return false;
		}
	}
	</script>
	
	<body>

	<form name="formisim" method="post" action="gonder.php" onsubmit="return dogrula()">
	İsim Alanı:<input type ="text" name="isim"/></br>
	<input type="submit" value="Gonder">
	</form>
	
<script>
	function dogrula() {
	    var deger = document.getElementById("girdi").value;
		if (isNaN(deger) == true) {
			window.alert("Sayı Değeri Giriniz");
		}
		else {
			window.alert("Sayı Değeri Girildi");
		}
	}
	</script>
	
	<body>

	<input id="girdi">
    <button onclick="dogrula()">Kontrol Et</button>
	
<script>
	
	</script>
	
	<body>

    <form action="gonder.php" method="post">
	<input type ="text" name ="isim" required >
	<input type ="submit" value="Gonder">
	</form>
	
	FORM APİ
<script>
	function kontrol() {
		var x = document.getElementById("sayi");
		if (x.checkValidity() == false) {
			window.alert(x.validationMessage);
		}
		else {
			window.alert("Sayı Değeri Girildi");
		}
	}
	</script>

	<input id = "sayi" type ="number" min ="50" max="100" required />
	<button onclick="kontrol()">Kontrol Et</button>