<script>
	function tikla() {
	    var deger = document.forms["form1"]["username"].value;
		window.alert(deger);
	}
	</script>
	
	<body>

	<form name ="form1" method="post" action ="gonder.php">
	Kullanıcı Adı:<input type ="text" name="username"/></br>
	<button onclick ="tikla()">Tıkla</button>
</form>
	
<script>
	function tikla() {
	    var deger = document.form1.username.value;
		window.alert(deger);
		if (deger == "") {
			window.alert("Kullanıcı Adı Boş Geçilemez");
		}
		else {
			window.alert(deger);
		}
	}
	</script>
	
	<body>

	<form name ="form1" method="post" action ="gonder.php">
	Kullanıcı Adı:<input type ="text" name="username"/></br>
	<button onclick ="tikla()">Tıkla</button>
	</form>