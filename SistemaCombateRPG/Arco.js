"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arco = void 0;
const CoolDown_1 = require("./CoolDown");
class Arco {
    dano;
    flechas;
    cooldow;
    capacidadeMaxFlechas;
    constructor(dano, tempo, flechas) {
        this.dano = dano;
        this.flechas = flechas;
        this.cooldow = new CoolDown_1.CoolDown(tempo);
        this.capacidadeMaxFlechas = 10;
    }
    atacar() {
        if (this.cooldow.estaDisponivel()) {
            if (this.flechas > 0) {
                this.cooldow.iniciarCoolDown();
                this.flechas -= 1;
                return this.dano;
            }
            else {
                console.log(`Sem flechas disponiveis`);
                return 0;
            }
        }
        else {
            console.log(`Arco em tempo de CoolDown`);
            return 0;
        }
    }
    passarTurno() {
        this.cooldow.novoTurno();
    }
    recarregarFlechas() {
        this.flechas += 5;
        console.log(`5 Flechas recarregadas`);
        if (this.flechas > this.capacidadeMaxFlechas) {
            this.flechas = this.capacidadeMaxFlechas;
        }
    }
}
exports.Arco = Arco;
//# sourceMappingURL=Arco.js.map