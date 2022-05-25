export const truncate = function (str, limit = 50) {
  if (str) {
    if (str.toString().length < limit) {
      return str;
    }
    return `${str.toString().substring(0, limit)}...`;
  }
  return "";
};
