import { Jogo } from "./Jogo";
import { Personagem } from "./Personagem";
import { Espada } from "./Espada";
import { Arco } from "./Arco";
import { VarinhaMagica } from "./Varinha";
import { Veneno } from "./Veneno";
import { Regenerar } from "./Regenerar";

const jogo = new Jogo()


const guerreiro = new Personagem('Felipe', 100)

const goblin = new Personagem('Goblin', 100)

const scarlet = new Espada(45,2)

const eudora = new Arco(20,1,1)

const plink = new VarinhaMagica(1,5,250)

guerreiro.equiparNovaArma(scarlet)

const curandeira = new Personagem('Flor', 30, plink)

const aliado = new Personagem('Otavio', 100, eudora)

jogo.adicionarPersonagem(guerreiro)
jogo.adicionarPersonagem(curandeira)
jogo.adicionarPersonagem(aliado)
jogo.adicionarPersonagem(goblin)
jogo.escutadorDeTurno(guerreiro)
jogo.escutadorDeTurno(curandeira)
jogo.escutadorDeTurno(aliado)
jogo.escutadorDeTurno(goblin)

guerreiro.atacar(goblin)                                
guerreiro.atacar(goblin)
curandeira.atacar(goblin)
aliado.atacar(goblin)
jogo.passarTurno()
curandeira.atacar(goblin)
aliado.atacar(goblin)
eudora.recarregarFlechas()
plink.recarregarMana()
curandeira.adicionarItemInventario('Foto Antiga', 1)
curandeira.adicionarItemInventario('Pocao Vitalidade',10)                        
const denteDeVibora = new Veneno(10,1,goblin)
const asaDeAnjo = new Regenerar(50,2,guerreiro)
const guspeDegoblin = new Veneno(20,2,guerreiro)
jogo.escutadorDeTurno(guspeDegoblin)
jogo.escutadorDeTurno(denteDeVibora)
jogo.escutadorDeTurno(asaDeAnjo)
jogo.passarTurno()
guerreiro.curar(10)
jogo.passarTurno()
guerreiro.atacar(goblin)
 











