module.exports = function toReadable(number) {
  let units = "";
  let tens = "";
  let hundreds = "";
  let resultArr = [];

  let numbersArr = number.toString().split("").reverse(); // перебираю с конца, с единиц

  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr.length === 1 && numbersArr[0] === '0') {
        return 'zero'
    } else if (i === 0) {
            // единицы
            if (numbersArr[i + 1] === "1") {
                // если десяток = 1
                let item = numbersArr[i]; // отрабатываем единицы и десятки
                switch (item) {
                    case "1":
                        tens = "eleven";
                        break;
                    case "2":
                        tens = "twelve";
                        break;
                    case "3":
                        tens = "thirteen";
                        break;
                    case "4":
                        tens = "fourteen";
                        break;
                    case "5":
                        tens = "fifteen";
                        break;
                    case "6":
                        tens = "sixteen";
                        break;
                    case "7":
                        tens = "seventeen";
                        break;
                    case "8":
                        tens = "eighteen";
                        break;
                    case "9":
                        tens = "nineteen";
                        break;
                    case "0":
                        tens = "ten";
                        break;
                }
                ++i; // i === 2 - переходим на сотни
            } else {
                let item = numbersArr[i]; // отрабатываем единицы
                switch (item) {
                    case "1":
                        units = "one";
                        break;
                    case "2":
                        units = "two";
                        break;
                    case "3":
                        units = "three";
                        break;
                    case "4":
                        units = "four";
                        break;
                    case "5":
                        units = "five";
                        break;
                    case "6":
                        units = "six";
                        break;
                    case "7":
                        units = "seven";
                        break;
                    case "8":
                        units = "eight";
                        break;
                    case "9":
                        units = "nine";
                        break;
                    case "0":
                        units = "";
                        break;
                }
            }
        } else if (i === 1) {
            // отрабатываем остальные десятки
            let item = numbersArr[i];

            switch (item) {
                case "2":
                    tens = "twenty";
                    break;
                case "3":
                    tens = "thirty";
                    break;
                case "4":
                    tens = "forty";
                    break;
                case "5":
                    tens = "fifty";
                    break;
                case "6":
                    tens = "sixty";
                    break;
                case "7":
                    tens = "seventy";
                    break;
                case "8":
                    tens = "eighty";
                    break;
                case "9":
                    tens = "ninety";
                    break;
                case "0":
                    tens = "";
                    break;
            }
        } else if (i === 2) {
            let item = numbersArr[i];
            // отрабатываем сотни
            switch (item) {
                case "1":
                    hundreds = "one hundred";
                    break;
                case "2":
                    hundreds = "two hundred";
                    break;
                case "3":
                    hundreds = "three hundred";
                    break;
                case "4":
                    hundreds = "four hundred";
                    break;
                case "5":
                    hundreds = "five hundred";
                    break;
                case "6":
                    hundreds = "six hundred";
                    break;
                case "7":
                    hundreds = "seven hundred";
                    break;
                case "8":
                    hundreds = "eight hundred";
                    break;
                case "9":
                    hundreds = "nine hundred";
                    break;
            }
        }
  }

  resultArr.push(hundreds, tens, units);
  let result = resultArr.join(" ").trim().replace('  ', ' ');
  console.log(result);
  return result;
};
