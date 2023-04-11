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
        id: 'e10f7a86-d873-11ed-afa1-0242ac120002',
        parentFolderId: null,
        createdAt: '2023-03-11 20:49:53.911774',
        updatedAt: '2023-03-19 20:49:53.911774',
        repository: 'Vault',
        name: 'Northeast Vault',
        childrenCount: 3,
        path: '/Vault/Northeast Vault',
      },
      {
        id: 'e76136e0-d873-11ed-afa1-0242ac120002',
        parentFolderId: null,
        createdAt: '2023-03-11 20:49:53.911774',
        updatedAt: '2023-03-19 20:49:53.911774',
        repository: 'Vault',
        name: 'West Coast Vault',
        childrenCount: 0,
        path: '/Vault/West Coast Vault',
      },
    ],
    files: [
      {
        id: 'ebbd5ec6-d873-11ed-afa1-0242ac120002',
        parentFolderId: 'ebbd5ec6-d873-11ed-afa1-0242ac120002',
        repository: 'Vault',
        name: 'Trial Notes.pdf',
        url: 'https://veritext-test.s3.us-east-2.amazonaws.com/uploads/754c4485-b1c8-4e76-9f8d-bcbec4a081b5_exhibit.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR6HERED5CYJWGYEE%2F20230228%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230228T190002Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7528c3e32cb9c7ca9349250650debce7abb759085242382ecdba188a7d941eed',
        extension: '.pdf',
        path: '/Vault/Trial Notes.pdf',
      },
    ],
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
