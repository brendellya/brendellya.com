const defaultColors = ['purple', 'blue', 'pink', 'yellow', 'orange'];

export const setRandomColor = () => {
  const len = Math.floor(Math.random() * defaultColors.length);

  const res = defaultColors[len];

  // console.log('++ len: ', res);
  return res;
};
