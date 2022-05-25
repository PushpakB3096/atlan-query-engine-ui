export const truncate = function (str, limit = 70) {
  if (str) {
    if (str.toString().length < limit) {
      return str;
    }
    return `${str.toString().substring(0, limit)}...`;
  }
  return "";
};

export const camelCaseToRegularCase = function (str) {
  return str.replace(/([A-Z])/g, " $1");
};
