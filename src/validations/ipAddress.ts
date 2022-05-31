const re = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

const isValidIpAdress = (input: string) => {
  const regexCheck = re.exec(input);

  if (!regexCheck || regexCheck.length > 4) {
    return false;
  }

  const ipValuesAsString = regexCheck[0].split(".");
  const ipValuesAsNums = ipValuesAsString.map((str) => Number(str));

  const valid = validateIpMaxValue(ipValuesAsNums);

  if (valid) {
    return true;
  }

  return false;
};

const validateIpMaxValue = (nums: number[]) => {
  const findValuesOverIpMaxValue = nums.find((num) => num > 255);

  return findValuesOverIpMaxValue === undefined;
};

export { isValidIpAdress };
