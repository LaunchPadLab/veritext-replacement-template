import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
import * as Types from 'types'

const propTypes = {
  folders: PropTypes.arrayOf(Types.folder).isRequired,
}

const defaultProps = {}

function FileTree({ folders }) {
  return (
    <aside className="library__file-tree">
      {folders.map((folder, index) => {
        return (
          <div className="folder" key={index}>
            {folder.name}
          </div>
        )
      })}
    </aside>
  )
}

FileTree.propTypes = exact(propTypes)
FileTree.defaultProps = defaultProps

export default FileTree
