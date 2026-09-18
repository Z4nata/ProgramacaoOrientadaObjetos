import { Arma } from "./Arma"
import { CoolDown } from "./CoolDown"

export class VarinhaMagica implements Arma{
    private manaMax: number
    private cooldow: CoolDown

    constructor(
        tempo: number,
        private dano: number,
        private mana: number

    ){
    this.manaMax = 700
    this.cooldow = new CoolDown(tempo)
    }

    atacar(): number{

        if (this.cooldow.estaDisponivel()){
            if (this.mana >= 250){
                this.mana -= 250
                this.cooldow.iniciarCoolDown()
                return this.dano
            } else{
                console.log(`Mana insuficiente`)
                return 0
            }
        } else {
            console.log(`Varinha em tempo de CoolDown`)
            return 0
        }

    }

    recarregarMana(): void{

        this.mana += 250
        console.log(`${250} manas foram adicionadas`)

        if( this.mana > this.manaMax){
            this.mana = this.manaMax
        }

    }

    passarTurno(): void{
        this.cooldow.novoTurno()
    }
}