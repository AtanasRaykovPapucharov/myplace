
// daily marker
$(() => {
	let today = new Date();
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Tursday", "Friday", "Saturday"];
	let color = "lightgrey";

	switch (days[today.getDay()]) {
		case "Sunday":
			$(".wrapper-daily .day.sunday").css("background", color);
			break;
		case "Monday":
			$(".wrapper-daily .day.monday").css("background", color);
			break;
		case "Tuesday":
			$(".wrapper-daily .day.sunday").css("background", color);
			break;
		case "Wednesday":
			$(".wrapper-daily .day.wednesday").css("background", color);
			break;
		case "Tursday":
			$(".wrapper-daily .day.tursday").css("background", color);
			break;
		case "Friday":
			$(".wrapper-daily .day.friday").css("background", color);
			break;
		case "Saturday":
			$(".wrapper-daily .day.saturday").css("background", color);
			break;

	}
})

// language button
$(() => {
	let isBG = false;
	$('#language').on('click', () => {
		isBG = !isBG;
		if (isBG) {
			$('#language').attr('src', './assets/images/gb.jpg');
		} else {
			$('#language').attr('src', './assets/images/bg.jpg');
		}
	});
})

// drop-down menu
$(() => {
	let isToggle = false;
	let $navbar = $('ul.menu-bar');
	$('.menu-bar-btn').on('click', function () {
		$(this).toggleClass("open");
		if (!isToggle) {
			$navbar.css('display', 'inherit');
		} else {
			$navbar.css('display', 'none');
		}

		isToggle = !isToggle;
	});

	let isToggleFoot = false;
	let $navbarfoot = $('ul.menu-bar-foot');
	$('.menu-bar-btn-foot').on('click', () => {
		if (!isToggleFoot) {
			$navbarfoot.css('display', 'inherit');
		} else {
			$navbarfoot.css('display', 'none');
		}

		isToggleFoot = !isToggleFoot;
	});

	$('.menu-bar li a').on('click', () => {
		$navbar.css('display', 'none');
		$('#overlay').hide();
		$('.lines-button').removeClass('close');
		isToggle = !isToggle;
	});


});

// clock
setInterval(() => {
	let d = new Date();
	$('.clock').html(d.toLocaleTimeString() + '<br>' + d.toDateString());
}, 1000);


