module.exports = function PhoneNumber (phone) {
  var methods = {
    toNumber: function (phone) {
      return phone.replace(/[ (-\.]/g, '');
    },

    getArea: function (phone) {
      return phone.substr(0, 3);
    }
  },

  clean = methods.toNumber(phone),

  invalid = "0000000000";

  if (clean.length < 10) clean = invalid;
  if (clean.length >= 11 && clean.substr(0, 1) !== "1") clean = invalid;

  return {
    number: function () {
      if (clean.length >= 11 && clean.substr(0, 1) === "1" && clean !== invalid) return clean.substr(1);
      return clean;
    },

    areaCode: function () {
      return methods.getArea(clean);
    },

    toString: function () {
      return clean.replace(/(...)/, '($&) ')
        .replace(/ .../, '$&-');
    }
  }
};
