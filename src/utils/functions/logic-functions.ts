export const getArrayRandomSort = <T>(array: T[]) => {
  const copyArray = [...array];
  return copyArray.sort(() => Math.random() - 0.5);
};

export const shuffleArray = <T>(array: T[]) => {
  let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

export const showTime = (countSeconds: number) => {
  const minutes = Math.floor(countSeconds / 60);
  const seconds = countSeconds % 60;
  const printSeconds = seconds > 9 ? `${seconds}` : `0${seconds}`;

  return `${minutes}:${printSeconds}`;
};
