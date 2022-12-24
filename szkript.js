var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();
var p5 = new Image();
var p6 = new Image();
var p7 = new Image();
var p8 = new Image();
var p9 = new Image();
var p10 = new Image();
var p11 = new Image();
var p12 = new Image();

p1.src="1kep.png";
p2.src="kepek/2kep.png";
p3.src="kepek/3kep.png";
p4.src="kepek/4kep.png";
p5.src="kepek/5kep.png";
p6.src="kepek/6kep.png";
p7.src="kepek/7kep.png";
p8.src="kepek/8kep.png";
p9.src="kepek/9kep.png";
p10.src="kepek/10kep.png";
p11.src="kepek/11kep.png";
p12.src="kepek/12kep.png";

var imgLista =
new Array(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);

var szamlalo = 0;
var veg = imgLista.length - 1;

function vissza()
{
	try{
		if (szamlalo == 0)
		{
			alert("Ez a prezentáció kezdete! NE LEGYÉL HÜLYE!!!");
		}
		else
		{
		szamlalo--;
		}
		document.pic1.src = imgLista[szamlalo].src;
	} catch(e){ console.log(e); }
}
function elore()
{
	try{
		if (szamlalo == veg)
		{
			alert("EZ A PREZENTÁCIÓ VÉGE!");
		}
		else
		{
			szamlalo++;
		}
	document.pic1.src = imgLista[szamlalo].src;
	} catch(e){ console.log(e); }
}
