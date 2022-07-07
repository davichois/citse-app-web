export function setLocalStorage(key, value) {
  localStorage.setItem(key.toUpperCase(), value);
}

export function getLocalStorage(key) {
  return localStorage.getItem(key.toUpperCase());
}

export function deleteLocalStorage(key) {
  localStorage.removeItem(key.toUpperCase());
}
