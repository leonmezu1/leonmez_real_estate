import HomeHero1 from '../images/Home1/Hero.jpg';
import HomeHero2 from '../images/Home2/Hero.jpg';
import HomeHero3 from '../images/Home3/Hero.jpg';
import HomeHero4 from '../images/Home4/Hero.jpg';
import HomeHero5 from '../images/Home5/Hero.jpg';
import Home11 from '../images/Home1/1.jpg';
import Home12 from '../images/Home1/2.jpg';
import Home13 from '../images/Home1/3.jpg';
import Home14 from '../images/Home1/4.jpg';
import Home21 from '../images/Home2/1.jpg';
import Home22 from '../images/Home2/2.jpg';
import Home23 from '../images/Home2/3.jpg';
import Home24 from '../images/Home2/4.jpg';
import Home25 from '../images/Home2/5.jpg';
import Home31 from '../images/Home3/1.jpg';
import Home32 from '../images/Home3/2.jpg';
import Home33 from '../images/Home3/3.jpg';
import Home34 from '../images/Home3/4.jpg';
import Home35 from '../images/Home3/5.jpg';
import Home41 from '../images/Home4/1.jpg';
import Home42 from '../images/Home4/2.jpg';
import Home43 from '../images/Home4/3.jpg';
import Home44 from '../images/Home4/4.jpg';
import Home51 from '../images/Home5/1.jpg';
import Home52 from '../images/Home5/2.jpg';
import Home53 from '../images/Home5/3.jpg';
import Home54 from '../images/Home5/4.jpg';

export default {
  home1: {
    id: 1,
    hero: HomeHero1,
    slides: [Home11, Home12, Home13, Home14],
    title: 'Med001 - House in Medelllin',
    intro:
      'Modern and luxurious house with the best view of Medellín located in Las Palmas.',
    has:
      '4 Rooms with private bathroom, 5 bathrooms in total, Main hall, Auxiliary room, Dinning room, Kitchen, TV studio, Outdoor room, Stone pool and Jacuzzi, Sauna, Turkish, Bonsai gardens, 10 parking lots and car and motorcycle workshop, 2 service rooms',
    price: 'US$ 5,500,000.00',
    coordinates: [6.1992399, -75.5660682],
  },
  home2: {
    id: 2,
    hero: HomeHero2,
    slides: [Home21, Home22, Home23, Home24, Home25],
    title: 'Anp001 - Villa in Anapoima',
    intro:
      'Spectacular Villa in the most beautiful places in the Colombia center. Perfect to rest from the routine mixing the comfort and luxury of this property and the overflowing nature of its surroundings.',
    has:
      'Playroom, Pub, 18-hole golf course - Golf cart rental, Tennis courts, Swimming pools, Bicycle rental, Walking trails, Restaurant, Medical Center, A great lake where to practice water sports',
    price: 'US$ 1,250,280.00',
    coordinates: [4.5489, -74.5352],
  },
  home3: {
    id: 3,
    hero: HomeHero3,
    slides: [Home31, Home32, Home33, Home34, Home35],
    title: 'Ley002 - House in Villa de Leyva',
    intro:
      'Charming colonial house in Villa de Leyva with an incredible view of the town and the hills, has a large green area and an outdoor terrace / patio for BBQ ... It is located just 10 minutes walk from the town.',
    has:
      'Two levels, 4 Bedrooms (master bedroom with walk-in closet and private bathroom), 2 bathrooms, Social Bathroom, 2 rooms, Dinning room, TV studio, Open kitchen, Fourth of clothes, Terrace, Balcony, Floors in marble and porcelain, Embedded wood furniture, 2 Garages, Deposit',
    price: 'US$ 361,257.65',
    coordinates: [5.6365, -73.5271],
  },
  home4: {
    id: 4,
    hero: HomeHero4,
    slides: [Home41, Home42, Home43, Home44],
    title: 'Med002 - Penthouse in Medellin',
    intro:
      'Spectacular duplex apartment of 600 m2 in Medellín. The spaciousness and good design of its interiors make this place a perfect space for a formidable stay, where you can make a barbecue on the terrace overlooking the city in the company of your friends.',
    has:
      'Duplex penthouse with 600sqm, Large interiors, Excellent design, 1 complete suite with closet, Glass windows from ceiling to floor, American kitchen in white marble, Large terrace with garden and jacuzzi',
    price: 'US$ 2,000,000',
    coordinates: [6.1992399, -75.5660682],
  },
  home5: {
    id: 5,
    hero: HomeHero5,
    slides: [Home51, Home52, Home53, Home54],
    title: 'Med008 - Penthouse in Medellin',
    intro:
      'Beautiful duplex penthouse on the 20th floor with incredible views of the beautiful city of Medellin, gym, pool and exclusive and luxurious design. There are 3 full suites, the master with a relaxing luxury tub.',
    has:
      '500 square meters area, Impeccable design, with a lot of luxury and good taste, 3 full and luxurious suites, Master suite with heated bath and whirlpool, Spacious living and dining rooms with large windows that offer breathtaking views, Both natural and artificial lighting create an incredible and unique atmosphere, Exclusive wine cellar in one of the living rooms, Private gym',
    price: 'US$ 1,500,000',
    coordinates: [6.1992399, -75.5660682],
  },
  index(n) {
    return this[Object.keys(this)[n]];
  },
  array() {
    return Object.values(this).filter(value => typeof value === 'object');
  },
};
