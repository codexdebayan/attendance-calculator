//calculation part
function calculateMarks() {
    var curAttdPer = document.getElementById("curAttdPer").value;
    var targetAttdPer = document.getElementById("targetAttdPer").value;
    var lecAttended = document.getElementById("lecAttended").value;
    var lecDelivered = document.getElementById("lecDelivered").value;
    var n = lecDelivered;
  
    if(curAttdPer<targetAttdPer) {

      while (curAttdPer != targetAttdPer) {
          lecDelivered++;
          lecAttended++;
          temp = ((lecAttended / lecDelivered) * 100);
          curAttdPer = (Math.ceil((temp)));
      }
      
      document.getElementById("totalMarks").innerHTML = "Classes to attend : " + (lecDelivered - n);

      
  }
  else {
    document.getElementById("totalMarks").innerHTML = "Go Sleep !";

  }
  
}	