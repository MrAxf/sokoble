export default function isTouchAviable() {
  return (
    'ontouchstart' in globalThis ||
    navigator.maxTouchPoints > 0
  )
}
