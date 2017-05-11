(function() {
  let price = 0;
  let tax = $("#tax");
  let subtotal = $("#subtotal");
  let total = $("#total");

  $("#burger").click(function() {
    $("tbody").append($("<tr>").append($("<td>").text("Royale with Cheese")));
    $("tbody tr:last").append($("<td>").addClass("addSub").text("$8.99"));
    price += parseFloat($(".addSub:last").text().slice(1));
    subtotal = subtotal.text(price);
    totalTax = tax.text((parseFloat(subtotal.text())* 0.09).toFixed(2));
    total.text("$" + (parseFloat(totalTax.text()) + parseFloat(subtotal.text())).toFixed(2));
  })

  $("#pizza").click(function() {
    $("tbody").append($("<tr>").append($("<td>").text("Arugula Pie")));
    $("tbody tr:last").append($("<td>").addClass("addSub").text("$11.99"));
    price += parseFloat($(".addSub:last").text().slice(1));
    subtotal = subtotal.text(price);
    totalTax = tax.text((parseFloat(subtotal.text())* 0.09).toFixed(2));
    total.text("$" + (parseFloat(totalTax.text()) + parseFloat(subtotal.text())).toFixed(2));
  })

  $("#ribs").click(function() {
    $("tbody").append($("<tr>").append($("<td>").text("Smoked Swine")));
    $("tbody tr:last").append($("<td>").addClass("addSub").text("$14.99"));
    price += parseFloat($(".addSub:last").text().slice(1));
    subtotal = subtotal.text(price);
    totalTax = tax.text((parseFloat(subtotal.text())* 0.09).toFixed(2));
    total.text("$" + (parseFloat(totalTax.text()) + parseFloat(subtotal.text())).toFixed(2));
  })

  $("#icecream").click(function() {
    $("tbody").append($("<tr>").append($("<td>").text("Ice Cream Biscut")));
    $("tbody tr:last").append($("<td>").addClass("addSub").text("$7.99"));
    price += parseFloat($(".addSub:last").text().slice(1));
    subtotal = subtotal.text(price);
    totalTax = tax.text((parseFloat(subtotal.text())* 0.09).toFixed(2));
    total.text("$" + (parseFloat(totalTax.text()) + parseFloat(subtotal.text())).toFixed(2));
  })

  $('#placeOrder').on('click', (event) => {
    event.preventDefault();

    if (subtotal.text().length === 0) {
      Materialize.toast('Please add an item to your order.', 4000);
      return;
    }

    if ($('#name').val().trim() === '') {
      Materialize.toast('Please type a name.', 4000);
      return;
    }

    if ($('#phone_number').val().trim() === '') {
      Materialize.toast('Please type a phone number.', 4000);
      return;
    }

    if ($('#address').val().trim() === '') {
      Materialize.toast('Please type an address.', 4000);
      return;
    }

    Materialize.toast('Order placed. Thank you!', 4000);
  })



})();
