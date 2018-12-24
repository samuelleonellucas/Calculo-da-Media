
var n1 = 0;
var n2 = 0; 
var mean = 0;

function Calc ()
{	
	n1 = parseFloat (formMean.n1.value);
	n2 = parseFloat (formMean.n2.value);	
	
	console.log(n1);
	console.log(n2);
	
	if (n1 != null && n2 != null)
	{
		mean = (n1 + n2) / 2;
		document.getElementById("mean").innerHTML = "Média Final: " + mean;
				
		if (mean < 3)
		{
			document.getElementById("status").innerHTML = "Situação: Reprovado";
		} 
		else if (mean >= 3 && mean <= 5)
		{
			document.getElementById("status").innerHTML = "Situação: Recuperação";			
		}
		else
		{
			document.getElementById("status").innerHTML = "Situação: Aprovado";		
		}
	} 
	else
	{
		console.log("error");
	}
}

function Clear ()
{
	n1 = 0;
	n2 = 0;
	mean = 0;
	
	document.getElementById("mean").innerHTML = "Média Final: ";
	document.getElementById("status").innerHTML = "Situação: ";	
}