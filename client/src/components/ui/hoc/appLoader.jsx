import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  getIsLoggedIn,
  getUsersLoadingStatus,
  loadUsersList
} from '../../../store/users'
import { loadOptionsList } from '../../../store/options'

const AppLoader = ({ children }) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(getIsLoggedIn())
  const usersStausLoading = useSelector(getUsersLoadingStatus())

  useEffect(() => {
    dispatch(loadOptionsList())
    if (isLoggedIn) {
      dispatch(loadUsersList())
    }
  }, [isLoggedIn])

  if (usersStausLoading) return 'Loading'
  return children
}

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AppLoader
