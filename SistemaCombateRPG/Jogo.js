"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
class Jogo {
    herois;
    turno;
    constructor(herois = [], turno = []) {
        this.herois = herois;
        this.turno = turno;
    }
    adicionarPersonagem(personagem) {
        this.herois.push(personagem);
    }
    escutadorDeTurno(objeto) {
        this.turno.push(objeto);
    }
    passarTurno() {
        for (const hero of this.turno) {
            hero.novoTurno();
        }
    }
}
exports.Jogo = Jogo;
//# sourceMappingURL=Jogo.js.map