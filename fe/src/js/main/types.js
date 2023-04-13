import PropTypes from 'prop-types'

export const file = PropTypes.shape({
  id: PropTypes.string.isRequired,
  parentFolderId: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
})

export const folder = PropTypes.shape({
  id: PropTypes.string.isRequired,
  parentFolderId: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  childrenCount: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
})

export const item = PropTypes.oneOfType([folder, file])
