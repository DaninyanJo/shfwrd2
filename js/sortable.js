let el = document.querySelector(".shuffled-letters");
let sortable = Sortable.create(el, {
  onEnd: function (/**Event*/ evt) {
    cheker()
  }
});