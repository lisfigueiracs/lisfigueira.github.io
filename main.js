window.onload = function() {
	//Função para os slides do banner principal e prateleira
	function slide() {
		$(".main-banner-desktop").slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: true,
			dots: true
		});

		$(".main-banner-mobile").slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: true,
			dots: true
		});

		$(".product").slick({
			slideToScroll: 2,
			slidesToShow: 5,
			infinite: true,
			arrows: true,
			dots: false
		});
		$(".product-mobile").slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$(".cards-mobile").slick({
			slideToScroll: 1,
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			dots: false
		});
		$(".main-content-mobile .images").slick({
			slideToScroll: 2,
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			dots: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	function modal() {
		const htmlDesktop = `
			<div class="modal">
				<div class="close">
					<p>Fechar</p>
				</div>
				<div class="content">
					<img src="/assets/modal-image.png" />
					<div class="form">
					<img src="/assets/newsletter-mail-icon.png"/>
						<h2>Bem Vindo à MAEZTRA</h2>
						<p>Receba em Primeira mão <br>
						<strong>desconto e ofertas exclusivas </strong></p>
						<input type="email" placeholder="Digite seu e-mail" />
						<a class="send-modal"href="">Enviar
						<img src="/assets/aviao-button.png" />
						</a>
					</div>
				</div>
			</div>
		`;

		const htmlMobile = `
			<div class="modal-mobile">
			<div class="close">
			<p>Fechar</p>
		</div>
		<div class="content">
			<div class="form">
				<img src="/assets/newsletter-mail-icon.png"/>
				<h2>Bem Vindo à MAEZTRA</h2>
				<p>Receba em Primeira mão <br>
				<strong>desconto e ofertas exclusivas </strong></p>
			<div class="input-button">
				<input type="email" placeholder="Digite seu e-mail" />
				<a class="send-modal"href="">Enviar
				<img src="/assets/aviao-button.png" />
				</a>
			</div>
			</div>
		</div>
			</div>
		`;

		if (!localStorage.getItem("closed-modal")) {
			if (window.matchMedia("(min-width: 768px)").matches) {
				$("body").append(htmlDesktop);
			} else {
				$("body").append(htmlMobile);
			}
			$(".overlay").addClass("active");
		}

		$(".send-modal").on("click", function(e) {
			e.preventDefault();
			localStorage.setItem("closed-modal", "true");
			$(".modal").css("display", "none");
			$(".modal-mobile").css("display", "none");
			$(".overlay").attr("style", "opacity: 0; display: none;");
		});

		$(".close").on("click", function() {
			localStorage.setItem("closed-modal", "true");
			$(".modal").css("display", "none");
			$(".modal-mobile").css("display", "none");
			$(".overlay").attr("style", "opacity: 0; display: none;");
		});
	}

	modal();
	slide();
};
