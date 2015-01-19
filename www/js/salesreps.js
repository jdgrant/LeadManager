// JavaScript Document

var salesreps = ["None",
			"Andrew Fust",
			"Bill Tabor",
			"Brent Rexroat",
			"Brian Hayden",
			"Brian Moeglin",
			"Caroline McCauley",
			"Curtis Hewitt",
			"Elizabeth Moir",
			"Eric Buehner",
			"Erin Pickerrell",
			"Gina Skelton",
			"Janey McKenna",
			"Jessica Hancock",
			"Joey Tamburrano",
			"Jon Grant",
			"John Lesch",
			"Josh Moses",
			"Kim Callen",
			"Kristin Frischmuth",
			"Laurie Wells",
			"Mike Gottschalk",
			"Peter Bifone",
			"Sam Hill",
			"Shannon Mantell",
			"Stad Smith",
			"Steve Lishamer",
			"Steve Zeiter",
			"Todd Siegel",
			"Todd Strause",
			"Torey Strause",
			"William Cohen",
			"Other"];
			
			
			
var option = '';
for (i=0;i<salesreps.length;i++){
   option += '<option value="'+ salesreps[i] + '">' + salesreps[i] + '</option>';
}
$('#SalesRep').append(option);

			
			
			