

let display = document.getElementById('outputSpot');
let display_n = document.getElementById('Ncount')

let sequencer = new Sequencer();

function Sequencer() {
    this.sequence = null;
    this.currentNumber = 0;
    this.sequencebase10 = null;

    this.generateNew = function () {

        if (this.sequence === null) {
            this.sequence = new Array();
            this.sequence.push(true);
        }
        else {
            let old = this.sequence;
          
            let addthis = this.sequencesComplement(old);
            this.sequence.push(true);
            for (let i = 0; i < addthis.length; i++) {
                this.sequence.push(addthis[i]);
            }

        }

        this.sequencebase10 = converttobase10();
        this.currentNumber++;
    }
    this.sequencesComplement = function (old) {
        let rhsArray = new Array(old.length);

        for (let i = 0; i < old.length; i++) {
            if (old[i] === true) {
                rhsArray[i] = false;
            }
            else {
                rhsArray[i] = true;
            }
        }
        rhsArray.reverse();
        return rhsArray;
    }
    this.converttobase10 = function () {


    }
   

}

function process() {

    sequencer.generateNew();

}

processBTN = document.getElementById('output');
processBTN.onclick = function () {

    process();
    display_n.innerText = sequencer.currentNumber;
    display.innerText = sequencer.sequence;
}

