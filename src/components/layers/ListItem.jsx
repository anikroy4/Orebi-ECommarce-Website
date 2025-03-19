import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({className, ListInnerItem, href}) => {
  return (
    <li className={className}>
      <Link to={href}>
      {ListInnerItem}
      </Link>
    </li>
  )
}

export default ListItem