import { CoolDown } from "./CoolDown"
import { Arma } from "./Arma"


export class Arco implements Arma{

    private cooldow: CoolDown
    private capacidadeMaxFlechas: number

    constructor(
        private dano: number,
        tempo: number,
        private flechas: number
    ){
        this.cooldow = new CoolDown(tempo)
        this.capacidadeMaxFlechas = 10
    }

    atacar(): number{
        if (this.cooldow.estaDisponivel()){
            if (this.flechas > 0){

                this.cooldow.iniciarCoolDown()
                this.flechas -= 1
                
                return this.dano
                
            }else{

                console.log(`Sem flechas disponiveis`)
                return 0
            }
        }else{

            console.log(`Arco em tempo de CoolDown`)
            return 0
        }
    }

    passarTurno(): void{
        this.cooldow.novoTurno()
    }

    recarregarFlechas(): void{

        this.flechas += 5
        console.log(`5 Flechas recarregadas`)
        if(this.flechas > this.capacidadeMaxFlechas){
            this.flechas = this.capacidadeMaxFlechas
        }

    }

}