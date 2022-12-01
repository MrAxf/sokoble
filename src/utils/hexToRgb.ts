export default function hexToRgb(hex: string) {
  var res = hex.match(/[a-f0-9]{2}/gi)
  return res && res.length === 3
    ? res.map(function (v) {
        return parseInt(v, 16)
      })
    : null
}
