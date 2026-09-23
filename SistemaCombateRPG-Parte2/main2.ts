import { Jogo } from "./Jogo";
import { Personagem } from "./Personagem";
import { Espada } from "./Espada";
import { Arco } from "./Arco";
import { VarinhaMagica } from "./Varinha";
import { Grupo } from "./Grupo";
import { Explosao } from "./Explosao";
import { BolaDeFogo } from "./BolaDeFogo";
import { GolpePoderoso } from "./GolpePoderoso";
import { BombaDeCura } from "./BombaDeCura";
import { Cura } from "./Cura";



const jogo = new Jogo()


const guerreiro = new Personagem('Felipe', 100, 1000)

const goblin = new Personagem('Goblin', 400, 1000)
const golem = new Personagem('Golem', 200, 1000)


const scarlet = new Espada(45,2)

const eudora = new Arco(20,1,1)

const plink = new VarinhaMagica(1,5,250)

guerreiro.equiparNovaArma(scarlet)

const curandeira = new Personagem('Flor', 30, 1000, plink)

const aliado = new Personagem('Otavio', 100, 10, eudora)

jogo.adicionarPersonagem(guerreiro)
jogo.adicionarPersonagem(curandeira)
jogo.adicionarPersonagem(aliado)
jogo.adicionarPersonagem(goblin)
jogo.adicionarPersonagem(golem)

jogo.escutadorDeTurno(guerreiro)
jogo.escutadorDeTurno(curandeira)
jogo.escutadorDeTurno(aliado)
jogo.escutadorDeTurno(goblin)
jogo.escutadorDeTurno(golem)

const alvos = new Grupo([goblin,golem])
const aliados = new Grupo([guerreiro,curandeira,aliado])


const bolaDeFogo = new BolaDeFogo()
const golpePoderoso = new GolpePoderoso()
const explosao = new Explosao()
const cura = new Cura()
const bombaDeCura = new BombaDeCura()
const bolaDeFogo2 = new BolaDeFogo()

const bastao = new Espada(45,2)

goblin.equiparNovaArma(bastao)

guerreiro.adicionarHabilidade(bolaDeFogo)
guerreiro.adicionarHabilidade(golpePoderoso)
guerreiro.adicionarHabilidade(explosao)

curandeira.adicionarHabilidade(cura)
curandeira.adicionarHabilidade(bombaDeCura)

aliado.adicionarHabilidade(bolaDeFogo2)

guerreiro.usarHabilidade(bolaDeFogo, goblin)
guerreiro.usarHabilidade(bolaDeFogo, goblin)
jogo.passarTurno()
jogo.passarTurno()
jogo.passarTurno()
guerreiro.usarHabilidade(bolaDeFogo, goblin)
guerreiro.usarHabilidade(golpePoderoso, goblin)
guerreiro.usarHabilidade(explosao, alvos)
curandeira.usarHabilidade(cura,curandeira)
goblin.atacar(guerreiro)
curandeira.usarHabilidade(bombaDeCura, aliados)
aliado.usarHabilidade(bolaDeFogo2, golem)
curandeira.usarHabilidade(bolaDeFogo, golem)













 











