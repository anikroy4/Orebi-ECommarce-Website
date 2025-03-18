import React from 'react'

const ListItem = ({className, ListInnerItem}) => {
  return (
    <li className={className}>
      {ListInnerItem}
    </li>
  )
}

export default ListItem