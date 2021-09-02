const options = {
  lux: { id: 1, name: 'Собственный люкс' },
  seaView: { id: 2, name: 'Вид на море' },
  ac: { id: 3, name: 'Кондиционер' },
  spa: { id: 4, name: 'Гидромассажная ванна' },
  bath: { id: 5, name: 'Ванная комната в номере' },
  tv: { id: 6, name: 'Телевизор с плоским экраном' },
  coffee: { id: 7, name: 'Кофемашина' },
  wifi: { id: 8, name: 'Бесплатный Wi-Fi' },
  bar: { id: 9, name: 'Мини-бар' },
  parking: { id: 10, name: 'Бесплатная парковка' }
}

const rooms = [
  {
    id: 1,
    title: 'Двухместный номер Делюкс',
    description:
      'Из этого люкса открывается вид на море. В числе удобств гостиный уголок и гидромассажная ванна.',
    area: '54 кв.м.',
    beds: '2 односпальных кровати',
    price: 13200,
    options: [options.ac, options.seaView, options.spa],
    rating: 3,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/59003063.jpg?k=d38f5850a0c9301c82740784f75d28585539ecd4f813d474f07343dfd9f03ed2&o='
  },
  {
    id: 2,
    title: 'Номер Делюкс с видом на море',
    description: '',
    area: '54 кв.м.',
    beds: '2 односпальных кровати',
    price: 23200,
    options: [options.ac, options.seaView, options.coffee],
    rating: 3,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/129424775.jpg?k=09e4211c93c62f0f2e95042c719da63880abbed897dd2cf86ce161674c29e812&o='
  },
  {
    id: 3,
    title: 'Полулюкс Делюкс с видом на море',
    description:
      'Стоимость указана из расчета на размещение 2 или 3 гостей. Максимальная вместимость — 3 человека (см. раздел «Порядок проживания в отеле»).',
    area: '54 кв.м.',
    beds: '2 односпальных кровати',
    price: 18200,
    options: [options.ac, options.seaView, options.wifi],
    rating: 3,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  }
]

export function fetchAll() {
  return rooms
}
