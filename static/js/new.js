$(document)
  .on("mouseenter", ".m_subject_text", function () {
    var parentId = $(this).parents(".m_data").attr("id");
    var callFunction = "showToolTip('" + parentId + "')";
    timer = setTimeout(callFunction, 2000);
  })
  .on("mouseleave", ".m_subject_text", function () {
    clearTimeout(timer);
  });

for (let i = 0; i < hoverBox.length; i++) {
  hoverBox[i]
    .on("mouseenter", function () {
      var parentId = $(this).parents(".m_data").attr("id");

      timer = setTimeout(callFunction, 2000);
    })
    .on("mouseleave", function () {
      clearTimeout(timer);
    });
}
