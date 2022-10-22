export const generateRandomHex = () => {
  // TODO: hex
  const randomNumber = Math.random() * 16777215;
  const randomHexNumber = Math.floor(randomNumber).toString(16);
  const randomHex = `#${randomHexNumber}`;
  return randomHex;
}
