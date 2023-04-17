import { createStubRequest } from 'lp-redux-api'

import files from '../../../fixtures/files.json'

export const fetchFiles = createStubRequest('FETCH_TODOS', files)
