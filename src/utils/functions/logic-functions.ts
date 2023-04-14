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

export const getDuringTime = (startDate: Date) => {
  const currentDate = new Date();
  return (currentDate.getTime() - startDate.getTime()) / 1000;
};
