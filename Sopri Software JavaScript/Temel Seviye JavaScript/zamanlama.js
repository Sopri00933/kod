// var değişken = setTimeout(fonksiyon,sure) clearTimeout(değişken)
// var değişken = setInterval(fonksiyon,sure) clearInterval(değişken)

<script>
	var say = 5;
	var indirme;
	var sure ;
	function baslat() {
	    indirme = setTimeout(dosyaindirme,5000);
		sureyisay();
		sure = setInterveal(sureyisay,1000);
	}
	function dosyaindirme () {
		window.alert("Dosya İnmeye Başladı");
		document.getElementById("para").innerHTML = "";
		say = 5;
	}
	function sureyisay() {
	    document.getElementById("para").innerHTML = "Dosya " + say + " saniye içinde inecek";
		say--;
		if (say == 0) {
			clearInterval(sure);
		}
	}
	function islemleridurdur() {
		clearInterval(sure);
		clearTimeout(indirme);
		document.getElementById("para").innerHTML = "Dosya İndirmesi Durduruldu";
		say = 5;
	}
	</script>
	
	</head>
	<body>
	
	<p> Dosya İndirmek İçin Tıklayın</p>
	<p id = "para"></p>
	<button onclick = "baslat();">İndirmek için Tıklayın</button>
	<button onclick = "islemleridurdur();">İptal Etmek için Tıklayın</button>
	</body>