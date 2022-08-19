const upperFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const threeNumbers = (i: number) => {
  return i.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
};

export { upperFirstLetter, threeNumbers };
