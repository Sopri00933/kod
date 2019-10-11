<script>
		var pc1 = {marka:"ASUS",model:"z500",ram:"8gb",cpu:4.66,cekirdek_sayisi:4,
		kapat:function(){
			window.alert("kapatılıyor...");
		},
		yazdir:function() {
			window.alert(this.cpu);
		}
		};
		pc1.yazdir();
		document.write(pc1.marka,pc1.ram);
		document.write(pc1["model"]);
		pc1.kapat();
	</script>