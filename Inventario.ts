import { Item } from "./Item"


export class Inventario {

    private itens: Item[] = []


    adicionarItem(nome: string, valor: number): void{
        const item = new Item(nome,valor)
        this.itens.push(item)
        console.log(`${nome} adicionado ao inventario`)
        
    }

    removerItem(nome: string): void{
        const temp = this.itens.findIndex((n) => n.nome === nome)
        if (temp  !== -1){
            this.itens.splice(temp, 1)
        }
        
    }

    listarItens(): void{
        for( const item of this.itens){
            console.log(`${item.nome} - ${item.valor}`)
        }
        
    }

}