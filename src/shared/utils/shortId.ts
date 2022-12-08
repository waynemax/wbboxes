export const shortId = (uuidv4: string) => {
  return uuidv4.slice(0, 4) + ".." + uuidv4.slice(-5);
};
