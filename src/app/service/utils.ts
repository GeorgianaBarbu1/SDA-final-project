export function getRandomId() {
  return Math.floor(Math.random() * 1000 + 1).toString() + Date.now();
}
