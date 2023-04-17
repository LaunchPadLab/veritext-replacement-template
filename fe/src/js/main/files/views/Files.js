import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Types from 'types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Spinner } from 'lp-components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'

const propTypes = {
  files: PropTypes.arrayOf(Types.file),
  fetchFiles: PropTypes.func.isRequired,
}
const defaultProps = {}

function Files({ files, fetchFiles }) {
  useEffect(() => {
    fetchFiles()
  }, [fetchFiles])
  // console.log({files})
  if (!files) return <Spinner />
  //
  return <div> This is the File index view! </div>
}

Files.propTypes = propTypes
Files.defaultProps = defaultProps

function mapStateToProps(/* state */) {
  return {
    // files: selectors.files(state),
  }
}

const mapDispatchToProps = {
  // fetchFiles: apiActions.fetchFiles,
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Files)
