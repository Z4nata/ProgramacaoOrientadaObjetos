import { CoolDown } from "./CoolDown"
import { Personagem } from "./Personagem"

export class HabilidadeControle {
    private readonly cooldown: CoolDown
    constructor(
        private readonly custo: number,
        tempo: number
    ){
        this.cooldown = new CoolDown(tempo)
    }

    contabilizarHabilidade(realizador: Personagem):void{
        this.cooldown.iniciarCoolDown()
        realizador.gastarMana(this.custo)
    }

    podeUsar(realizador: Personagem): boolean{
    
            if(realizador.temMana(this.custo)){
                if(this.cooldown.estaDisponivel()){
                    return true
                }else{
                console.log(`Habilidade em tempo de CoolDown`)
                return false
            }
            }else{
                console.log(`Sem mana suficiente`)
                return false
            }
    
        }
        
    novoTurno():void{
        this.cooldown.novoTurno()
    }
    
}