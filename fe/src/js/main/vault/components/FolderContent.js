import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
import * as Types from 'types'

const propTypes = {
  items: PropTypes.arrayOf(Types.item).isRequired,
}

const defaultProps = {}

function FolderContent({ items }) {
  return (
    <div className="vault__folder-view">
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

FolderContent.propTypes = exact(propTypes)
FolderContent.defaultProps = defaultProps

export default FolderContent
