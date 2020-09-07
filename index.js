$(document).ready(() => {
  window.onload = () => {
    $(".loader").fadeOut("slow");
  };

  $(".project").click((event) => {
    const projectNumber = $(event.target).closest("section").attr("number");

    $(`.modal-${projectNumber}`).modal({
      fadeDuration: 250,
    });
  });
});
