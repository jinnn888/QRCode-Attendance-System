function openPopup(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'flex'; 
}

function closePopup() {
    document.getElementById('popup').style.display = 'none'; 
}

// Placeholder 
function myFunction() {
    var txt;
    if (confirm("Site Under Construction, will be available soon. Thank you for your patience!")) {
      txt = "Reynard";
    } else {
      txt = "Ashvites";
    }
    document.getElementById("Cerberi").innerHTML = txt;
  }
//

function openAdminPopup(event) {
  event.preventDefault(); 
  document.getElementById('adminPopup').style.display = 'block';
}

function closeAdminPopup() {
  document.getElementById('adminPopup').style.display = 'none';
}

function openPopup(event) {
  event.preventDefault();
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'; 
}