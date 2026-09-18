"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veneno = void 0;
class Veneno {
    dano;
    alvo;
    faltam;
    constructor(dano, duracao, alvo) {
        this.dano = dano;
        this.alvo = alvo;
        this.faltam = duracao;
    }
    novoTurno() {
        if (this.faltam > 0) {
            this.faltam -= 1;
            this.alvo.receberDano(this.dano);
        }
    }
}
exports.Veneno = Veneno;
//# sourceMappingURL=Veneno.js.map