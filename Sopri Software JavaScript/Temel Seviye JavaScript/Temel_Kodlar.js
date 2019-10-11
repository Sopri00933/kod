<script src = "a.js"></script>

var i = 2;
document.write(i);

document.write("NİSA");

var i = 2; // İnteger
var pi = 3.14; // float
var yaz = "JavaScript"; // String
var x = false // boolean

var i = null;
i = 2;
document.write(i);

var x = 5;
var y = 6;
var z = x + y;
document.write(z);

var x = 5;
x = x + 5;
document.write(x);

var i = 5;
var j = 6;
var k = 7;
document.write(i+j+k);

var i = 4 + 5;
document.write(i);

var i = "5" + 2 + 3;
document.write(i);
var isim = "Murat";
var yas = 24;
document.write(isim + " ın yası " + yas);

var x = 5;
var y = 6;
var i = 3;
var z = 7;
var a = 10;
document.write(x * y / i + z - a);

var x = 5;
x++;
document.write(x);

document.write(13 / 10 * 2 + 5 % 3);

var x = 20;
x = x + 20;
x += 20;
x -= 3;
x *= 3;
x /= 2;
x %= 3;
document.write(x);

<p id ="paragraf"></p>
<script>
document.getElementById("paragraf").innerHTML = "JavaScript Öğreniyorum";
</script>

<p> Yazılım </p>
	<script>
	window.alert("JavaScript");
	</script>
	
<h1> Başlık </h1>
	<p> Yazılım </p>	
	<button onclick = "document.write('JavaScript')">Tıkla</button>
	
<p> Yazılım  </p>
	<script>
	console.log("JavaScript");
	</script>
	
<script>
	function bas() {
		window.alert("Tıklandı");
	}
	bas();
	bas();
	</script>	
	<input type = "button" value="Tıkla" onclick = "document.write('Merhaba')"/>
	
<script>
	function ismimisoyle(isim) {
		window.alert("Benim İsmim " + isim);
	}
	ismimisoyle("NİSA");
	</script>
	
<script>
	function toplama(a,b){
		window.alert(a + b);
	}
	function cikarma(a,b){
		window.alert(a - b);
	}
	</script>
	<input type = "button" value="Topla" onclick = "toplama(4,5)"/>
	<input type = "button" value="Çıkar" onclick = "cikarma(10,3)"/>
	
<script>
	function toplama(a,b){
		return a+b;
	}
	var c = (toplama(3,4));
	document.write(c);
	function carpma (a,b) {
		return a*b ;
	}
	window.alert(carpma(toplama(3,5),toplama(4,6)));
	</script>
	
<script>
		window.alert(x);
		var x = 32;
		window.alert(x);
	</script>