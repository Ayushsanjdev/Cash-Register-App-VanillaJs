const nextBtn = document.querySelector('.next-button');
const cashAmountInput = document.querySelector('.cash-amount');
const billAmountInput = document.querySelector('.bill-amount');
const doneBtn = document.querySelector('.submit-button');
const resultSection = document.querySelector('.result-div');
const noOfNotes = document.querySelectorAll(".noOfNotes");
const errorLine = document.querySelector('.error-para');
const closeButton = document.querySelector('.close');
const returnvalue = document.querySelector('.return-amount');

const allNotes = [2000, 500, 100, 20, 10, 5, 1];
const billAmt = [];

const takeBill = () => {
	if(billAmountInput.value === cashAmountInput.value) {
		console.log("this part is working!")
	} else {	
		billAmt.push(Number(billAmountInput.value));
		console.log(billAmt);
		cashAmountInput.classList.remove('hidden-input');
		doneBtn.classList.remove('hidden-input');
	}
}

const takeCash = () => {
	let cashAmt = cashAmountInput.value - billAmt[0];
	console.log(cashAmt);
	if(cashAmountInput.value < billAmt[0]) {
		errorLine.classList.remove('hidden-input');
		closeButton.classList.remove('hidden-input');
		cashAmountInput.value = '';
	} else if(cashAmountInput.value === billAmt[0]) {
		returnvalue.innerText = "Return Amount: none"
	} else {
		resultSection.classList.remove('hidden-input');
		console.log(resultSection);
		returnvalue.innerText = `Return Amount: ${cashAmt}`
		for (let i = 0; i < allNotes.length; i++) {
      cashAmt = calculation(cashAmt, allNotes[i], i);
    }
	}
}

const removeError = () => {
	errorLine.classList.add('hidden-input');
	closeButton.classList.add('hidden-input');
}

const calculation = (remainder, noteAmt, index) => {
  let note = Math.floor(remainder / noteAmt);
  remainder = remainder - note * noteAmt;
  noOfNotes[index].innerText = `${note}`;
  noOfNotes[index].style.color = 'red';
  noOfNotes[index].style.fontWeight = 'bolder';
	return remainder;
  console.log(remainder)
  console.log(noteAmt)
  console.log(index);
}

const resetValue = () => {
	cashAmountInput.value = '';
	billAmountInput.value = '';
	billAmt.splice(0, billAmt.length);
	cashAmountInput.classList.add('hidden-input');
	doneBtn.classList.add('hidden-input');
	resultSection.classList.add('hidden-input');
	console.log(billAmt);
}