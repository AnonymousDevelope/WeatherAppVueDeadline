export const styles = {
  grayBold: "text-gray-400 font-bold",
  gray: "text-gray-400",
};

export const regions = [
  {
    id: "1",
    name_uz: "Qoraqalpog'iston",
  },
  {
    id: "2",
    name_uz: "Andijon",
  },
  {
    id: "3",
    name_uz: "Bukhara",
  },
  {
    id: "4",
    name_uz: "Jizzax",
  },
  {
    id: "5",
    name_uz: "Qashqadaryo",
  },
  {
    id: "6",
    name_uz: "Navoiy",
  },
  {
    id: "7",
    name_uz: "Namangan",
  },
  {
    id: "8",
    name_uz: "Samarqand",
  },
  {
    id: "9",
    name_uz: "Surxandaryo",
  },
  {
    id: "10",
    name_uz: "Sirdaryo",
  },
  {
    id: "11",
    name_uz: "Toshkent",
  },
  {
    id: "12",
    name_uz: "Farg'ona",
  },
  {
    id: "13",
    name_uz: "Xorazm",
  },
  {
    id: "14",
    name_uz: "Toshkent",
  },
];


export const weatherConverter = {
  dateConvert(date) {
    var today = new Date(date * 1000);
    return  today.toDateString();
  }
};
