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
	console.log('entrou');
})

secaoMenu.addEventListener('mouseleave', ()=> {
	efeitoFechar('fechar-fora', 'fechar-dentro');
	console.log('saiu');
})

fecharMenu.addEventListener('mouseenter', () => {
	efeitoFechar('fechar-fora', 'fechar-dentro');
	console.log('entrou');
})
fecharMenu.addEventListener('mouseout', () => {
	efeitoFechar('fechar-dentro', 'fechar-fora');
	console.log('saiu');
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

//Artigos carousel

const artigoBtn1 = document.querySelector('#artigo-btn-1');
const artigoBtn2 = document.querySelector('#artigo-btn-2');

const containerArtigo = document.querySelector('.container-artigo');

const carrousselArtigoItem = document.querySelectorAll('.carroussel-artigo-item');

let contadorCarousel = 0;

artigoBtn2.addEventListener('click', carouselNext);
artigoBtn1.addEventListener('click', carouselPrev);

function carouselPrev() {
	contadorCarousel--
	if (contadorCarousel < 0) {
		containerArtigo.style.transform = 'translateX(-100%)'
		contadorCarousel = 5
	}
	containerArtigo.style.transform += 'translateX(16.6666666%)'
	console.log(contadorCarousel)
}

function carouselNext() {
	contadorCarousel++
	containerArtigo.style.transform += 'translateX(-16.6666666%)'
	
	if(contadorCarousel > carrousselArtigoItem.length - 1) {
		
		contadorCarousel = 0
		containerArtigo.style.transform = 'translateX(0%)'
	}
	console.log(contadorCarousel);
}

setInterval(carouselNext, 8000);

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

//portfolioBtn1.addEventListener('click', portfolioPrev);
portfolioBtn2.addEventListener('click', portfolioNext);

function portfolioNext() {
	const portfolioSecaoCards = document.querySelector('.portfolio-secao-cards');
	portfolioSecaoCards.style.transform += 'translateX(-370px)'
}