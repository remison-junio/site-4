const btnMenu = document.querySelector('#btn-menu');
const secaoMenu = document.querySelector('#secao-menu');
const fecharMenu = document.querySelector('#fechar-menu');
const fundoEsquerdo = document.querySelector('.fundo-esquerdo');
const menuNav = document.querySelectorAll('.menu-itens');
const conteudo2 = document.querySelector('.conteudo2');
const site = document.querySelector('.site');
const me = document.querySelector('.me');
const meBorda1 = document.querySelector('.me-borda1');
const meBorda2 = document.querySelector('.me-borda2');
const imgModelo = document.querySelector('.img-modelo');
const aboutLink = document.querySelector('.about-download-link');
const arrowAnimacao = document.querySelector('.about-download-icon-arrow');

btnMenu.addEventListener('click', () => {
	 secaoMenu.classList.add('menu-aberto');
	 fundoEsquerdo.classList.add('menu-aberto');
	 fecharMenu.classList.add('fechar-dentro');

	let contador = 100;
	let inicio = 700;
 	menuNav.forEach((v,i,a)=> {
 		let transicao = inicio+contador;

 		if (i == 7) {
 			v.style.top = '100px';
 		} else {
 			v.style.left = '50px';
 		}
 			
 		setTimeout(()=> {
 			v.style.transition = transicao.toString()+'ms';
 			v.style.opacity = '1';

 			if(i == 7) {

 				v.style.top = '50px';
 			} else {
 				v.style.left = '0';
 			}
 			
 		}, inicio+=contador);
 	})
})

fecharMenu.addEventListener('click', ()=> {
	fechandoMenu();
})

function fechandoMenu() {
	secaoMenu.classList.remove('menu-aberto');
	fundoEsquerdo.classList.remove('menu-aberto');

	secaoMenu.classList.add('menu-fechado');
	fundoEsquerdo.classList.add('menu-fechado');

	menuNav.forEach((v,i,a)=> {
	 	v.style.opacity = '0';
	 	v.style.transition = '0s';
	})
}

function efeitoFechar(adicionando, removendo){
	fecharMenu.classList.add(adicionando);
	fecharMenu.classList.remove(removendo);
}

secaoMenu.addEventListener('mouseenter', ()=> {
	efeitoFechar('fechar-dentro', 'fechar-fora');
})

secaoMenu.addEventListener('mouseleave', ()=> {
	efeitoFechar('fechar-fora', 'fechar-dentro');})

fecharMenu.addEventListener('mouseenter', () => {
	efeitoFechar('fechar-fora', 'fechar-dentro');
})
fecharMenu.addEventListener('mouseout', () => {
	efeitoFechar('fechar-dentro', 'fechar-fora');
})

me.addEventListener('mouseenter', ()=> {
	meBorda1.style.borderColor = 'rgba(255, 255, 255, .3)';
	meBorda1.style.transition = 'border-color .3s';
	meBorda2.style.borderColor = 'rgba(255, 255, 255, .3)';
	meBorda2.style.transition = 'border-color .3s';
})

me.addEventListener('mouseleave', ()=> {
	meBorda1.style.borderColor = 'rgba(255, 255, 255, .2)';
	meBorda1.style.transition = 'border-color .2s';
	meBorda2.style.borderColor = 'rgba(255, 255, 255, .2)';
	meBorda2.style.transition = 'border-color .2s';
})


//descrição me

const descricaoMe = document.querySelector('.me-titulo-2');

const textosMe = ['Bruce Wilson', 'Web Developer', 'Freelancer', 'Photographer'];

function efeitoMaquinaEscrever(elemento) {

	const textoArray = elemento.split('');
	textoArray.forEach((letra, i, a) => {
		setTimeout(function(){
	 		descricaoMe.innerHTML += letra
	 	}, 150 * i)
	})
}

function efeitoMaquinaApagar(elemento) {
	descricaoMe.innerHTML = ''
}
let contadorInicio = 0
function teste() {
		setTimeout(() => {
			efeitoMaquinaEscrever(textosMe[contadorInicio])
			contadorInicio++;
			if(contadorInicio == textosMe.length){
				contadorInicio = 0;
			}
		}, 250)

		setTimeout(() => {
			efeitoMaquinaApagar(descricaoMe)
		}, 6850)
}

setInterval(function helo(){
	teste();
	return helo;
}(), 7000);

//topo

document.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) {
		site.classList.add('scrolando');
		secaoMenu.classList.add('scrolando');
		fundoEsquerdo.classList.add('scrolando');
		me.classList.add('scrolando');
		meBorda1.classList.add('scrolando');
		imgModelo.classList.add('scrolando');
	} else {
		site.classList.remove('scrolando');
		secaoMenu.classList.remove('scrolando');
		fundoEsquerdo.classList.remove('scrolando');
		me.classList.remove('scrolando');
		meBorda1.classList.remove('scrolando');
		imgModelo.classList.remove('scrolando');
	}
})

aboutLink.addEventListener('mouseenter', ()=> {
	arrowAnimacao.classList.add('active');
})

aboutLink.addEventListener('mouseleave', ()=> {
	arrowAnimacao.classList.remove('active');
})

//contact formulário 

const formName = document.querySelector('.contact-form-name-input');
const formNameSpan = document.querySelector('.contact-form-name-span')
const formEmail = document.querySelector('.contact-form-email-input');
const formEmailSpan = document.querySelector('.contact-form-email-span')
const formPhone = document.querySelector('.contact-form-phone-input');
const formPhoneSpan = document.querySelector('.contact-form-phone-span')
const formMenssage = document.querySelector('.contact-form-message-input');
const formMassageSpan = document.querySelector('.contact-form-message-span')

function verificandoForumlario(form, ativando, desativando) {
	form.addEventListener('focus', () => {
		ativando();
	})
	form.addEventListener('blur',  () => {
		if(form.value.length == 0) {
			desativando();
		}
	})
}

verificandoForumlario(formName, ()=> {
	ativandoSpanForm(formNameSpan);
}, () => {
	desativandoSpanForm(formNameSpan)
})

verificandoForumlario(formEmail, ()=> {
	ativandoSpanForm(formEmailSpan);
}, () => {
	desativandoSpanForm(formEmailSpan)
})

verificandoForumlario(formPhone, ()=> {
	ativandoSpanForm(formPhoneSpan);
}, () => {
	desativandoSpanForm(formPhoneSpan)
})

verificandoForumlario(formMenssage, ()=> {
	ativandoSpanForm(formMassageSpan);
}, () => {
	desativandoSpanForm(formMassageSpan)
})

function ativandoSpanForm(form) {
	form.style.top = '0px';
	form.style.color = '#987750';
	form.style.fontSize = '16px';
	form.style.transition = 'top .2s';
	form.style.zIndex = '12'	
}

function desativandoSpanForm(form) {
	form.style.top = '35px';
	form.style.color = '#888888';
	form.style.fontSize = '16px';
	form.style.transition = 'top .2s';
	form.style.zIndex = '10';	
}

//Experiências

const btnXp1 = document.querySelector('#xp-btn-1');
const btnXp2 = document.querySelector('#xp-btn-2');
const btnXp3 = document.querySelector('#xp-btn-3');

const xp1 = document.querySelector('.xp-1');
const xp2 = document.querySelector('.xp-2');
const xp3 = document.querySelector('.xp-3');

function mudandoXp(ativado1, ativado2, desativado1, desativado2, desativado3, desativado4) {
	ativado1.classList.add('active');
	ativado2.classList.add('active');

	desativado1.classList.remove('active');
	desativado2.classList.remove('active');

	desativado3.classList.remove('active');
	desativado4.classList.remove('active');
}

btnXp1.addEventListener('click', () => {
	mudandoXp(btnXp1, xp1, btnXp2, xp2, btnXp3, xp3);
})

btnXp2.addEventListener('click', () => {
	mudandoXp(btnXp2, xp2, btnXp1, xp1, btnXp3, xp3);
})

btnXp3.addEventListener('click', () => {
	mudandoXp(btnXp3, xp3, btnXp1, xp1, btnXp2, xp2);
	const barraProgresso = document.querySelectorAll('.xp-3-item-1-barra-crescente');

	if (xp3.classList.contains('active')) {
		
		barraProgresso.forEach(function(v, i){
			v.classList.add('active')
		})
	}
})

//Carousel

const artigoBtn1 = document.querySelector('#artigo-btn-1');
const artigoBtn2 = document.querySelector('#artigo-btn-2');

const containerArtigo = document.querySelector('.container-artigo');

const carrousselArtigoItem = document.querySelectorAll('.carroussel-artigo-item');

let contadorCarousel = 0;

function carouselPrev(containerPai, tamanhoMovimento, tamanhoInicial) {
	contadorCarousel--
	if (contadorCarousel < 0) {
		containerPai.style.transform = tamanhoInicial
		contadorCarousel = 5
	}
	
	containerPai.style.transform += tamanhoMovimento	
}

function carouselNext(containerPai, containerFilho, tamanhoMovimento, tamanhoInicial, contarAte) {
	contadorCarousel++;
	containerPai.style.transform += tamanhoMovimento;
	
	if(contadorCarousel > containerFilho.length - 1) {
		
		contadorCarousel = 0;
		containerPai.style.transform = tamanhoInicial;
	}
}

//Carousel artigos

function corouselArtigoNext () {
	carouselNext(containerArtigo, carrousselArtigoItem, 'translateX(-16.6666666%)', 'translateX(0%)');
} 

function corouselArtigoPrev () {
	carouselPrev(containerArtigo, 'translateX(16.6666666%)', 'translateX(-100%)');
} 

artigoBtn2.addEventListener('click', corouselArtigoNext);
artigoBtn1.addEventListener('click', corouselArtigoPrev)

setInterval(corouselArtigoNext, 8000);

//Carousel portfolio



//scroll suave 

let linkMenu = document.querySelectorAll('.menu-link') 

linkMenu.forEach(function(item) {
	item.addEventListener('click', ()=> {
		fechandoMenu();
	})
})

//portfolio botões

const portfolioBtn1 = document.querySelector('#portfolio-btn-1');
const portfolioBtn2 = document.querySelector('#portfolio-btn-2');

portfolioBtn1.addEventListener('click', portfolioPrev);
portfolioBtn2.addEventListener('click', portfolioNext);

const portfolioContainer = document.querySelector('.portfolio-card-container');
const portfolioItem = document.querySelectorAll('.portfolio-cards-item');
const img = document.querySelector('.portfolio-cards-img');
var tamanho = img.clientWidth;

var contadorPortfolio = 0;	

function portfolioNext() {

	if(contadorPortfolio < portfolioItem.length - 3) {
		portfolioContainer.style.transform += `translateX(calc(-${tamanho}px + -15px))`
		contadorPortfolio++;
	} else if(contadorPortfolio == portfolioItem.length - 3){
		portfolioContainer.style.transform += `translateX(calc(-${tamanho / 2}px + -15px))`
		contadorPortfolio++;
	} else {
		portfolioContainer.style.transform += `translateX(0px)`;
		contadorPortfolio = portfolioItem.length - 2;
	}
}

function portfolioPrev() {
	
console.log(contadorPortfolio)
	if (contadorPortfolio == portfolioItem.length - 2) {
		console.log('diminir' + contadorPortfolio)
		contadorPortfolio--;
		portfolioContainer.style.transform += `translateX(calc(${tamanho / 2}px + 15px))`;
	} else if (contadorPortfolio < portfolioItem.length - 2 && contadorPortfolio > 0) {
		portfolioContainer.style.transform += `translateX(calc(${tamanho}px + 15px))`;
		contadorPortfolio--;
		console.log('if 2 	' + contadorPortfolio)
	} else {
		console.log('zerou')
		portfolioContainer.style.transform += `translateX(0px)`;
		contadorPortfolio = 0
	}
}


//News e Tips 

const newsBtn = document.querySelector('.news-btn')
newsBtn.addEventListener('click', mostrarMais)

function mostrarMais() {
	var ultimo = document.querySelectorAll('.ultimo')

	for(i=0;i<ultimo.length;i++) {
		ultimo[i].classList.toggle('active')
	}
}

