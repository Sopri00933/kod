<script>
	    var insanlar =["Mustafa","Hatice","Nisa","Mehmet Ali"];
		var x = insanlar.toString();
		document.write(x);
	</script>
	
<script>
		var tarih = ["10","11","1938"];
		var yazi = tarih.join("/");
		document.write(yazi);	
	</script>
	
<script>
		var sayilar = [1,2,3,4,5,6,7,8,9];
		sayilar.pop();
		document.write(sayilar);
	</script>
	
<script>
		var sayilar = [1,2,3,4,5,6,7,8,9];
		var x = sayilar.pop();
		document.write(x + "<br>");
		document.write(sayilar);
	</script>
	
<script>
		var sayilar = [1,2,3,4,5,6,7,8,9];
		var x = sayilar.push(200);
		document.write(x);
	</script>
	
<script>
		var x = [1,2,3,4,5,6,7,8];
		x[4] = 100;
		document.write(x);
	</script>
	
<script>
	    var x = ["Ahmet","Zeynep","Mert","Serhat"];
		x.sort();
		document.write(x);
	</script>
	
<script>
	    var x = ["Ahmet","Zeynep","Mert","Serhat"];
		x.reverse();
		document.write(x);
	</script>
	
<script>
	    var x = [-1,-5,3,10,100,52,35];
		x.sort(function(a,b) {return a-b});
		document.write(x);
	</script>
	
<script>
	    var x = [-1,-5,3,10,100,52,35];
		x.sort(function(a,b) {return b-a});
		document.write(x);
	</script>