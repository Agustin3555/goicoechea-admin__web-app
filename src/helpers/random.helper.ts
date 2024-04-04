export const randomInt = ({ min = 0, max }: { min?: number; max: number }) => {
  // Aseguramos que el mínimo sea menor o igual al máximo
  if (min > max) [min, max] = [max, min];

  const range = max - min + 1;

  return Math.floor(Math.random() * range) + min;
};

export const dropRandom = <T>(elements: T[]) =>
  elements[randomInt({ max: elements.length - 1 })];
