"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espada = void 0;
const CoolDown_1 = require("./CoolDown");
class Espada {
    dano;
    cooldown;
    constructor(dano, tempo) {
        this.dano = dano;
        this.cooldown = new CoolDown_1.CoolDown(tempo);
    }
    atacar() {
        if (this.cooldown.estaDisponivel()) {
            this.cooldown.iniciarCoolDown();
            return this.dano;
        }
        else {
            console.log(`Espada em tempo de CoolDown`);
            return 0;
        }
    }
    passarTurno() {
        this.cooldown.novoTurno();
    }
}
exports.Espada = Espada;
//# sourceMappingURL=Espada.js.map