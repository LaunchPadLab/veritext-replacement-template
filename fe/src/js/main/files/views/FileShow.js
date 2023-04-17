import React /*, { useEffect } */ from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { Spinner } from 'lp-components'
// import { selectors } from '../reducer'
// import * as actions from '../actions'
// import * as apiActions from 'api-actions'
// import * as Types from 'types'

const propTypes = {
  // file: Types.File,
  // fetchFile: PropTypes.func.isRequired,
  // clearFile: PropTypes.func.isRequired,
}
const defaultProps = {}

function FileShow() {
// {
//   file,
//   fetchFile,
//   clearFile,
// }
  // const { id } = useParams()
  //
  // useEffect(() => {
  //  fetchFile(id)
  //  // Cleanup
  //  return () => clearFile()
  // }, [ id ])
  //
  // if (!file) return <Spinner />
  //
  return <div> This is the File show view! </div>
}

FileShow.propTypes = propTypes
FileShow.defaultProps = defaultProps

function mapStateToProps(/* state */) {
  return {
    // file: selectors.file(state)
  }
}

const mapDispatchToProps = {
  // fetchFile: apiActions.fetchFile,
  // clearFile: actions.clearFile
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(FileShow)
