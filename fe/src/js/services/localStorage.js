// Local storage interactions go here.

/* HELPERS */

// Get item from localStorage, falling back to session storage
function getItem(key) {
  const serializedItem =
    localStorage.getItem(key) || sessionStorage.getItem(key)
  if (serializedItem === null) return undefined
  try {
    return JSON.parse(serializedItem)
  } catch (e) {
    return serializedItem
  }
}

// Remove item from local storage and session storage
function removeItem(key) {
  localStorage.removeItem(key)
  sessionStorage.removeItem(key)
}

// Set item in local storage or session storage (if specified)
export function setItem(key, value, options = {}) {
  const { persist = true } = options
  const serializedValue = JSON.stringify(value)
  removeItem(key)
  return persist
    ? localStorage.setItem(key, serializedValue)
    : sessionStorage.setItem(key, serializedValue)
}

/**
 * Given a key, returns functions for getting, setting, and clearing that key
 * @param {string} key - The unique name for the value to be stored at
 * @param {Object} [options={}] - An options configuration object. This can be overridden by individual setter invocations.
 * @param {boolean} [options.persist=true] - Option to save value across browser sessions.
 *
 * @example
 * export const [
 *  getSelectedMembership,
 *  setSelectedMembership,
 *  clearSelectedMembership
 * ] = createStorageAccessor('selectedMembership', { persist: false })
 *
 * @example
 * setSelectedMembership({ id: 2, name: 'Patron' }, { persist: true })
 **/
export function createStorageAccessor(key, defaultOptions = {}) {
  const get = () => getItem(key)
  const set = (value, options = {}) =>
    setItem(key, value, { ...defaultOptions, ...options })
  const clear = () => removeItem(key)

  return [get, set, clear]
}
