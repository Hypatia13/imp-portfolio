function addPersonSubmit(t) {
  if (t.keyCode === 10) {
    person();
  }
}

function person() {
  var nameInput = document.getElementById('name');
  personModel.addNewPerson(nameInput.value);
  nameInput.value = '';
}

function registerListeners() {
  personModel.addNewListener(updatePersonList);
}

var personModel = new PersonModel();
registerListeners();
personModel.loadDataIfExists();
