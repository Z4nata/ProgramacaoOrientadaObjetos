"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Inventario_1 = require("./Inventario");
class Personagem {
    nome;
    vidaMaxima;
    arma;
    experiencia;
    nivel;
    vidaAtual;
    expNeeded;
    inventario;
    constructor(nome, vidaMaxima, arma) {
        this.nome = nome;
        this.vidaMaxima = vidaMaxima;
        this.arma = arma;
        this.experiencia = 0;
        this.nivel = 1;
        this.vidaAtual = this.vidaMaxima;
        this.expNeeded = 100;
        this.inventario = new Inventario_1.Inventario();
    }
    estaVivo() {
        if (this.vidaAtual > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    receberDano(dano) {
        this.vidaAtual -= dano;
        if (this.vidaAtual < 0) {
            this.vidaAtual = 0;
        }
        if (!this.estaVivo()) {
            console.log(`${this.nome} foi derrotado`);
        }
        else {
            console.log(`${this.nome} sofreu ${dano} de dano`);
        }
    }
    curar(cura) {
        if (this.estaVivo()) {
            this.vidaAtual += cura;
            if (this.vidaAtual > this.vidaMaxima) {
                this.vidaAtual = this.vidaMaxima;
            }
        }
        else {
            console.log(`${this.nome} está morto, cura indisponível.`);
        }
    }
    ganharExp(exp) {
        console.log(`${this.nome} recebeu ${exp} de experiencia`);
        this.experiencia += exp;
        if (this.experiencia >= this.expNeeded) {
            this.subirDeNivel();
        }
    }
    subirDeNivel() {
        this.experiencia = 0;
        this.vidaMaxima += 10;
        this.vidaAtual = this.vidaMaxima;
        this.nivel += 1;
        console.log(`${this.nome} subiu de nivel! - Novo nivel: ${this.nivel}`);
    }
    equiparNovaArma(arma) {
        this.arma = arma;
    }
    atacar(inimigo) {
        if (this.arma) {
            inimigo.receberDano(this.arma.atacar());
            if (!inimigo.estaVivo()) {
                this.ganharExp(100);
            }
        }
        else {
            console.log(`Sem arma equipada`);
        }
    }
    adicionarItemInventario(nome, valor) {
        this.inventario.adicionarItem(nome, valor);
    }
    novoTurno() {
        this.arma?.passarTurno();
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map