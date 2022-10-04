function $(selector) {
	return document.querySelector(selector)
}

const burgerBtn = $('.header__open-link');

burgerBtn.onclick = function() {
	burgerBtn.classList.add('header__open-link--active');
	$('.header__navbar').classList.add('header__navbar--active');
}

$('.header__close-link').onclick = function() {
	burgerBtn.classList.remove('header__open-link--active');
	$('.header__navbar').classList.remove('header__navbar--active');
}


let linksBtn = document.querySelectorAll('.header__nav-link')

linksBtn.forEach(link => {
	link.onclick = function() {
		burgerBtn.classList.remove('header__open-link--active');
		$('.header__navbar').classList.remove('header__navbar--active')
	}
})


VANTA.WAVES({
    el: "#heroa",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x71622,
    shininess: 107.00,
    waveHeight: 25.00,
    waveSpeed: 1.25,
    zoom: 1.06
  })


  AOS.init({
	delay: 150,
	duration: 1000,
  });


  const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['CSS', 'HTML', 'BOOTSTRAP', 'JAVA SCRIPT', 'REACT JS', 'NODE JS'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 5, 9, 4, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }

        }
    }
});
