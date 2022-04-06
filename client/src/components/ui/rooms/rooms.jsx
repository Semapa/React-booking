import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './rooms.css'
import RoomsHeader from './roomsHeader'
import RoomsContent from './roomsContent'
import Pagination from '../../common/pagination/pagination'
import { paginate } from '../../../utils/paginate'

const Rooms = ({ rooms, ...rest }) => {
  const pageSize = 3
  const [currentPage, setCurrentPage] = useState(1)
  const countRooms = rooms.length

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const roomsCrop = paginate(rooms, currentPage, pageSize)

  return (
    <section className={classes.rooms}>
      <RoomsHeader {...rest} />
      <RoomsContent rooms={roomsCrop} />
      <Pagination
        itemCount={countRooms}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  )
}

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
}
export default Rooms
