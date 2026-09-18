"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoolDown = void 0;
class CoolDown {
    duracao;
    faltam;
    constructor(duracao) {
        this.duracao = duracao;
        this.faltam = 0;
    }
    iniciarCoolDown() {
        this.faltam = this.duracao;
    }
    estaDisponivel() {
        if (this.faltam <= 0) {
            return true;
        }
        return false;
    }
    novoTurno() {
        this.faltam -= 1;
        if (this.faltam <= 0) {
            this.faltam = 0;
        }
    }
}
exports.CoolDown = CoolDown;
//# sourceMappingURL=CoolDown.js.map