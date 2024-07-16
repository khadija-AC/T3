(function (exports) {
  function greet(name) {
    const options = {
      hour: "numeric",

      month: "long",
      year: "numeric",
    };

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", options);
    return `Hello, ${name}! Today is ${formattedDate}.`;
  }

  exports.greet = greet;
})(this);
