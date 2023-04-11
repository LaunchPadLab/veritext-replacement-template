import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
import * as Types from 'types'

const propTypes = {
  content: PropTypes.arrayOf(Types.file).isRequired,
}

const defaultProps = {}

function FolderView({ content }) {
  return (
    <div className="vault__folder-view">
      {content.map((folderOrFile) => {
        return <div key={folderOrFile.id}>{folderOrFile.name}</div>
      })}
    </div>
  )
}

FolderView.propTypes = exact(propTypes)
FolderView.defaultProps = defaultProps

export default FolderView
