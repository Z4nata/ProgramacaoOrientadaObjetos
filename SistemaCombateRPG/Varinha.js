"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarinhaMagica = void 0;
const CoolDown_1 = require("./CoolDown");
class VarinhaMagica {
    dano;
    mana;
    manaMax;
    cooldow;
    constructor(tempo, dano, mana) {
        this.dano = dano;
        this.mana = mana;
        this.manaMax = 700;
        this.cooldow = new CoolDown_1.CoolDown(tempo);
    }
    atacar() {
        if (this.cooldow.estaDisponivel()) {
            if (this.mana >= 250) {
                this.mana -= 250;
                this.cooldow.iniciarCoolDown();
                return this.dano;
            }
            else {
                console.log(`Mana insuficiente`);
                return 0;
            }
        }
        else {
            console.log(`Varinha em tempo de CoolDown`);
            return 0;
        }
    }
    recarregarMana() {
        this.mana += 250;
        console.log(`${250} manas foram adicionadas`);
        if (this.mana > this.manaMax) {
            this.mana = this.manaMax;
        }
    }
    passarTurno() {
        this.cooldow.novoTurno();
    }
}
exports.VarinhaMagica = VarinhaMagica;
//# sourceMappingURL=Varinha.js.map