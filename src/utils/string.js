// This function truncates a string with ellipses when the string limit is crossed.
export const truncate = function (str, limit = 70) {
  if (str) {
    if (str.toString().length < limit) {
      return str;
    }
    return `${str.toString().substring(0, limit)}...`;
  }
  return "";
};

// This function converts camel-cased string to regular case using regex.
export const camelCaseToRegularCase = function (str) {
  return str.replace(/([A-Z])/g, " $1");
};
