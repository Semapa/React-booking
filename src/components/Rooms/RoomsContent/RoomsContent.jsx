import React from 'react'
import classes from './RoomsContent.css'
import Card from '../../UI/Card/Card'

const rooms = [
  {
    id: 1,
    title: 'Двухместный номер Делюкс',
    price: 13200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/59003063.jpg?k=d38f5850a0c9301c82740784f75d28585539ecd4f813d474f07343dfd9f03ed2&o='
  },
  {
    id: 2,
    title: 'Номер Делюкс с видом на море',
    price: 23200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/129424775.jpg?k=09e4211c93c62f0f2e95042c719da63880abbed897dd2cf86ce161674c29e812&o='
  },
  {
    id: 3,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  },
  {
    id: 4,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  },
  {
    id: 5,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  },
  {
    id: 6,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  },
  {
    id: 7,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  },
  {
    id: 8,
    title: 'Полулюкс Делюкс с видом на море',
    price: 18200,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31456835.jpg?k=c6046ec481bcee9f7976f77c389342fc2f668e1cef26a14687ba50cb4f53dd49&o='
  }
]

const roomsContent = () => {
  return (
    <div className={classes.wrapper}>
      {rooms.map((room) => (
        <Card key={room.id} {...room} />
      ))}
    </div>
  )
}

export default roomsContent
