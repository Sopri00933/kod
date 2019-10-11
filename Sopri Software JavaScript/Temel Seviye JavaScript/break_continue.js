<script>
	var i;
	for (i = 0; i <10; i++) {
		if (i == 5) {
			break;
		}
		document.write(i + "<br>");
	}
	</script>
	
<script>
	var i = 0;
	while (i < 5) {
		if (i == 2) {
			i++;
			continue;
		}
		document.write(i + "<br>");
		i++;
	}
	</script>