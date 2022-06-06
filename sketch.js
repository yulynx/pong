let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha / 2;

let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xMinhaRaquete = 10;
let yMinhaRaquete = 300;
let xRaqueteOponente = comprimentoTela - larguraRaquete - 10;
let yRaqueteOponente = 300
let collidiu = false
let meusPontos = 0 ;
let pontosOponente = 0 ;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  mostraRaquete(xMinhaRaquete, yMinhaRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  colisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  colideRaquete();
  mostraPlacar();
  
}

function criaBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colideBolinha() {
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(posicaoX, posicaoY) {
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function moveRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yMinhaRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yMinhaRaquete += 10;
  }
  yRaqueteOponente = yBolinha - comprimentoRaquete/2
}

function colideRaquete() {
  if (
    xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete &&
    yBolinha - raioBolinha < yMinhaRaquete + comprimentoRaquete &&
    yBolinha + raioBolinha > yMinhaRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}
function colisaoRaquete (posicaoX, posicaoY) {
  colidiu = collideRectCircle (posicaoX, posicaoY, larguraRaquete, comprimentoRaquete, xBolinha,
yBolinha, diametroBolinha ) ; 
   if(colidiu){
   velocidadeXBolinha *= -1
   }
}

function mostraPlacar () {
   fill (255);
  textSize (30);
  text (meusPontos, 200, 50);
  text (pontosOponente,600, 50);
}
 function contaPontos (){
   if (xBolinha > 790 ) {
   meusPontos += 1
          }
  if (xBolinha < 5){
    pontosOponente += 1;
  }
 }