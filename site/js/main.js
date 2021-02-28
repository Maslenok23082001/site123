$(document).ready(
	$("#tabs li").click(function(e){
		$("#tabs li").css("backgroundColor", "#111");
		e.target.style.backgroundColor = "#5594BD";
		if (e.target.id == "owners"){
			$("#form1").css("display", "none");
			$("#form2").css("display", "block");
		} else {
			$("#form2").css("display", "none");
			$("#form1").css("display", "block");
		}
	})
);


$(document).ready(
	$("#menu a").click(function(e){
		var atr = $(this).attr("href");
		var scroll_top = $(atr).offset().top;
		$("body").animate({scrollTop : (scroll_top - 20)}, 900);
	}
)
);
$(document).ready(
	$("#menu_f a").click(function(e){
		var atr = $(this).attr("href");
		var scroll_top = $(atr).offset().top;
		$("body").animate({scrollTop : (scroll_top - 45)}, 900);
	}
)
);
$(document).scroll(function(){
	if ($(document).scrollTop() > $("#logo").height() + 30) {
		$("#menu_f").css({"display":"block", "opacity":"1"});
	} 
	else {
		$("#menu_f").css({"display":"none", "opacity":"0"});
	}
});

var img, modal, close, opisanie;

modal = document.getElementById('modal');
close = document.getElementById('close');
opisanie = document.getElementById('modal_opisanie_img');
$("#producty li img").click(function(){
	modal.style.display = "block";
	$("#modal img").attr("src", $(this).attr("src"));
	opisanie.innerHTML = this.alt;
});
close.addEventListener('click', function(){
	modal.style.display = "none";
}, false);