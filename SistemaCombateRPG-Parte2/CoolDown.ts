import { AtualizavelPorTurno } from "./AtualizavelPorTurno"


export class CoolDown implements AtualizavelPorTurno{

    private faltam: number

    constructor(

        private duracao: number,
    )
    {
        this.faltam = 0
    }

    iniciarCoolDown(): void{
        
        this.faltam = this.duracao + 1
    }

    estaDisponivel(): boolean{

        if(this.faltam <= 0){
            return true
        }
        return false
    }

    novoTurno(): void{
        this.faltam -= 1
        if (this.faltam <= 0){
            this.faltam = 0
        }
    }

    
}