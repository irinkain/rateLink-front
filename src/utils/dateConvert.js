export const substractDate = datetime => {
  var millSeconds = Math.abs(new Date() - new Date(datetime))
  return Math.floor((millSeconds / 1000 / 60) << 0)
}
