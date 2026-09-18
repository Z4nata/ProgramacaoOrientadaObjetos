"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const Item_1 = require("./Item");
class Inventario {
    itens = [];
    adicionarItem(nome, valor) {
        const item = new Item_1.Item(nome, valor);
        this.itens.push(item);
        console.log(`${nome} adicionado ao inventario`);
    }
    removerItem(nome) {
        const temp = this.itens.findIndex((n) => n.nome === nome);
        if (temp !== -1) {
            this.itens.splice(temp, 1);
        }
    }
    listarItens() {
        for (const item of this.itens) {
            console.log(`${item.nome} - ${item.valor}`);
        }
    }
}
exports.Inventario = Inventario;
//# sourceMappingURL=Inventario.js.map