(function (exports) {
  function greet(name) {
    const options = {
      



      
      day: "long",
      month: "long",
      year: "numeric",
      weekday: "numeric",
    };

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", options);
    return `Hello, ${name}! Today is ${formattedDate}.`;
  }

  exports.greet = greet;
})(this);
