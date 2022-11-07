import moment from "moment";

export default function (arr: number[]) {
  const momentObject = moment(moment().subtract(1, "month"));

  const valueObject = {
    high: {
      value: arr[0],
      date: momentObject.format("DD-MM-YYYY"),
    },
    low: {
      value: arr[0],
      date: momentObject.format("DD-MM-YYYY"),
    },
  };

  arr.forEach((e, index) => {
    momentObject.add(1, "days");

    if (valueObject.high.value < e) {
      valueObject.high.value = e;
      valueObject.high.date = momentObject.format("DD-MM-YYYY");
    }

    if (valueObject.low.value > e) {
      valueObject.low.value = e;
      valueObject.low.date = momentObject.format("DD-MM-YYYY");
    }
  });

  return valueObject;
}
