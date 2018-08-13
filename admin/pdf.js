function download1(){


var area= document.getElementById("area").value;
var address= document.getElementById("address").value;
var coordinate1= document.getElementById("coordinate1").value;
var coordinate2= document.getElementById("coordinate2").value;
var coordinate3= document.getElementById("coordinate3").value;
var coordinate4= document.getElementById("coordinate4").value;


var doc = new jsPDF('landscape')
doc.setFontSize(30)
doc.setFont('helvetica')
doc.setFontType('bold')
doc.text('Land Certificate', 120, 25)

doc.rect(10, 10, 277, 190)

doc.setLineWidth(1)
doc.line(210, 30, 110, 30)

doc.setFontSize(25)
doc.text("Address  :",30,120)

doc.setFontSize(22)
doc.text(address,82,120)

doc.setLineWidth(0.5)
doc.line(250, 120, 80, 122)

doc.setFontSize(25)
doc.text("Area        :",30,140)

doc.setFontSize(22)
doc.text(area+"  square feet",82,140)

doc.setLineWidth(0.5)
doc.line(250, 140, 80, 142)

doc.setFontSize(22)
doc.text("Coordinate:",30,160)

doc.setFontSize(22)
doc.text(coordinate1 + " ,"+coordinate2+","+coordinate3 + " , "+coordinate4,82,160)

doc.setLineWidth(0.5)
doc.line(250, 160, 80, 162)
doc.save('Certificate.pdf')

}
