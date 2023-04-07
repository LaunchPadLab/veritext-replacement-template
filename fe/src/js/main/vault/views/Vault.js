import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import FileTree from '../components/FileTree'
import FolderView from '../components/FolderView'

const propTypes = {}

const defaultProps = {}

function Vault() {
  const fileTree = {
    repository: 'Vault',
    folders: [
      {
        id: 1,
        parentFolderId: null,
        createdAt: '2023-03-11 20:49:53.911774',
        updatedAt: '2023-03-19 20:49:53.911774',
        repository: 'Vault',
        name: 'Northeast Vault',
        childrenCount: 3,
        path: '/Vault/Northeast Vault',
      },
      {
        id: 2,
        parentFolderId: null,
        createdAt: '2023-03-11 20:49:53.911774',
        updatedAt: '2023-03-19 20:49:53.911774',
        repository: 'Vault',
        name: 'West Coast Vault',
        childrenCount: 0,
        path: '/Vault/West Coast Vault',
      },
    ],
    files: [],
  }

  return (
    <>
      <FileTree folders={fileTree.folders} />
      <FolderView content={fileTree.files} />
    </>
  )
}

Vault.propTypes = propTypes

Vault.defaultProps = defaultProps

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Vault)
