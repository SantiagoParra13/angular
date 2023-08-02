import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      bio: 'Arthur Curry, también conocido como Aquaman, es un superhéroe acuático que posee la capacidad de comunicarse con los peces y controlar los océanos. Es el rey de la Atlántida y defensor de los mares.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941',
      casa: 'DC Comics',
    },
    {
      nombre: 'Batman',
      bio: 'Bruce Wayne, alias Batman, es un vigilante enmascarado que lucha contra el crimen en Gotham City. Utiliza su intelecto, habilidades de detective y una amplia gama de gadgets para combatir a los criminales.',
      img: 'assets/img/batman.png',
      aparicion: '1939',
      casa: 'DC Comics',
    },
    {
      nombre: 'Daredevil',
      bio: "Matt Murdock, conocido como Daredevil, es un abogado ciego que combate el crimen por la noche como un justiciero en Hell's Kitchen. Sus otros sentidos están extremadamente desarrollados debido a su ceguera.",
      img: 'assets/img/daredevil.png',
      aparicion: '1964',
      casa: 'Marvel Comics',
    },
    {
      nombre: 'Hulk',
      bio: 'Dr. Bruce Banner es un científico que se convierte en Hulk cuando se enoja o se emociona. Como Hulk, posee una increíble fuerza y resistencia. Aunque es un héroe, a veces sufre de problemas de control debido a su ira.',
      img: 'assets/img/hulk.png',
      aparicion: '1962',
      casa: 'Marvel Comics',
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Varios personajes han llevado el manto de Linterna Verde, miembros de la fuerza policial intergaláctica conocida como los Green Lantern Corps. Cada Linterna Verde posee un anillo que otorga la capacidad de crear manifestaciones de luz basadas en la voluntad del portador.',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940',
      casa: 'DC Comics',
    },
    {
      nombre: 'Spider-Man',
      bio: 'Peter Parker es un joven que obtiene habilidades de araña después de ser mordido por una araña radiactiva. Se convierte en Spider-Man, un héroe que combate el crimen en Nueva York. Utiliza su agilidad, fuerza y habilidades de trepar paredes para enfrentar a los villanos.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962',
      casa: 'Marvel Comics',
    },
    {
      nombre: 'Wolverine',
      bio: 'Logan, conocido como Wolverine, es un mutante con la capacidad de regenerar rápidamente y garras retractiles de adamantium en sus manos. Es un miembro de los X-Men y ha vivido una vida llena de violencia y aventuras.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974',
      casa: 'Marvel Comics',
    },
    {
      nombre: 'Joker',
      bio: 'El Joker es un villano icónico del universo de Batman. Es un criminal psicópata conocido por su maquillaje de payaso y su sentido del humor sádico. Siempre está causando caos y enfrentándose al Caballero de la Noche en Gotham City.',
      img: 'assets/img/joker.png',
      aparicion: '1940',
      casa: 'DC Comics',
    },
  ];

  constructor() {
    console.log('Servicio listo para usarse');
  }

  getHeores() {
    return this.heroes;
  }

  getverMas(idx: number) {
    return this.heroes[idx];
  }

  buscarHeroes(termino: string) {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for(let i = 0; i<this.heroes.length; i ++){

      let heroe= this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >=0){
        heroe.idx= i;
          heroesArr.push( heroe)
      }
    }

    return heroesArr;
  }
}

export interface Heroe {
  nombre: String;
  bio: String;
  img: String;
  aparicion: String;
  casa: String;
  idx?:Number;
}
