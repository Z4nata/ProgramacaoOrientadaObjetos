"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regenerar = void 0;
class Regenerar {
    cura;
    alvo;
    faltam;
    constructor(cura, duracao, alvo) {
        this.cura = cura;
        this.alvo = alvo;
        this.faltam = duracao;
    }
    novoTurno() {
        if (this.faltam > 0) {
            this.faltam -= 1;
            this.alvo.curar(this.cura);
            console.log(`Cura de:${this.cura} realizada pelo Efeito Regenerar `);
        }
    }
}
exports.Regenerar = Regenerar;
//# sourceMappingURL=Regenerar.js.map