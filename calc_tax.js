function tax(){
	//input
	var monthlySalary = parseInt(document.getElementById('monthly-salary').value) || 0;
	var father        = document.getElementById('father').checked ? 1000000 : 0;
	var mother 		  = document.getElementById('mother').checked ? 1000000 : 0;
	var wife		  = document.getElementById('wife').checked   ? 1000000 : 0;
	var child		  = parseInt(document.getElementById('children').value) || 0;
	//result

	//annualSalary
	var annualSalary = monthlySalary * 12;
	document.getElementById('annualSalary').value = annualSalary;

	//personalRelief
	var relief = annualSalary / 5 ;
	var personalRelief = relief < 10000000 ? relief : 10000000;
	document.getElementById('personalRelief').value = Math.floor(personalRelief);

	//parentRelief
	var parentRelief = father + mother;
	document.getElementById('parentRelief').value = parentRelief;

	//wifeRelief
	var wifeRelief = wife;
	document.getElementById('wifeRelief').value = wifeRelief;

	//childRelief
	var childRelief = child * 500000;
	document.getElementById('childRelief').value = childRelief;

	//taxableIncome
	var totalRelief = parentRelief + wifeRelief + childRelief + personalRelief;
	var taxableIncome = annualSalary - totalRelief;
	document.getElementById('taxableIncome').value = taxableIncome > 0 ? taxableIncome : 0;

	//totalTax
    var taxRate = [2000000, 3000000, 5000000, 10000000, 10000000];
    var rate = [0, 0.05, 0.1, 0.15, 0.2];
    var taxedAmount = [];
    var totalTax = 0;

    for (var i = 0; i < taxRate.length; i++) {
        if (taxableIncome <= 0) break;

        if (taxableIncome < taxRate[i]) {
            taxedAmount.push(taxableIncome * rate[i]);
            taxableIncome = taxableIncome - taxRate[i];
        } else {
            taxedAmount.push(taxRate[i] * rate[i]);
            taxableIncome = taxableIncome - taxRate[i];
        }
        //
    }

    if (taxableIncome > 0) {
        taxedAmount.push(taxableIncome * 0.25);
    }


    taxedAmount.forEach((tax) => {
        totalTax = totalTax + tax;
    })


	document.getElementById('totalTax').value = totalTax;


	// console.log(monthlySalary);
	// console.log(father);
	// console.log(child);
}