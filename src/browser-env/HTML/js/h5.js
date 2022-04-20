const dialog = document.querySelector('#dialog')
function showDialog() {
  const r = dialog.showModal()
  //dialog.show() open without modal
  //dialog.open= true open without modal
  // dialog.showModal() open with modal
  console.log(r, dialog.returnValue)
}
function closeDialog() {
  dialog.close()
  console.log(dialog.returnValue)
}
