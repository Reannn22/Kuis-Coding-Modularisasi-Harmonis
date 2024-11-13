// utils.mjs

// Ekspor default
export default function unique(arr) {
  return [...new Set(arr)];
}

// Ekspor bernama
export function splitString(str) {
  return str.split('');
}
