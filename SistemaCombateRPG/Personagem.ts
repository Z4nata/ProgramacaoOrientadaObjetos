import { Arma } from "./Arma"
import { AtualizavelPorTurno } from "./AtualizavelPorTurno"
import { Inventario } from "./Inventario"



export class Personagem implements AtualizavelPorTurno{

        private experiencia: number
        private nivel: number
        private vidaAtual: number
        private expNeeded: number
        private inventario: Inventario

    constructor(

        private nome: string,
        private vidaMaxima: number,
        private arma?: Arma

    ) {
        this.experiencia = 0
    this.nivel = 1
    this.vidaAtual = this.vidaMaxima
    this.expNeeded = 100
    this.inventario = new Inventario()
    }

    estaVivo(): boolean{

        if(this.vidaAtual > 0){
            return true
        } else {
            return false
        }

    }

    receberDano(dano: number): void{

        this.vidaAtual -= dano
        if (this.vidaAtual < 0 ){
            this.vidaAtual = 0
        } 

        if (!this.estaVivo()){
            console.log(`${this.nome} foi derrotado`)
        } else {
            console.log(`${this.nome} sofreu ${dano} de dano`)
        }

    }

    curar(cura: number): void{

        if(this.estaVivo()){
        
            this.vidaAtual += cura

            if (this.vidaAtual > this.vidaMaxima){
                this.vidaAtual = this.vidaMaxima
            }
        } else{
            console.log(`${this.nome} está morto, cura indisponível.`)
        }   
    }

    ganharExp(exp: number): void{
        console.log(`${this.nome} recebeu ${exp} de experiencia`)
        this.experiencia += exp
        if ( this.experiencia >= this.expNeeded){
            this.subirDeNivel()
        }
    }

    private subirDeNivel(): void{
  
            this.experiencia = 0
            this.vidaMaxima += 10
            this.vidaAtual = this.vidaMaxima
            this.nivel += 1
            console.log(`${this.nome} subiu de nivel! - Novo nivel: ${this.nivel}`)

    }

    equiparNovaArma(arma: Arma): void{
        
        this.arma = arma
    }

    atacar(inimigo: Personagem): void{
        if(this.arma){
            inimigo.receberDano(this.arma.atacar())
            if(!inimigo.estaVivo()){
                this.ganharExp(100)
            }

        } else {
            console.log(`Sem arma equipada`)
        }
    }

    adicionarItemInventario(nome: string, valor: number){
        this.inventario.adicionarItem(nome,valor)
    }

    novoTurno(): void {
        this.arma?.passarTurno()
    }

    
  


}