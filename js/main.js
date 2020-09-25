class Nucleotide {
    constructor (_base, _type) {
        this.base = _base;
        this.type = _type;

        this.ntHTML = this.ProcessNT();
    }

    //Could add stuff here to also ensure only accepted bases are taken (ATCGU#), or to ignore non-recognized types

    ProcessNT() {
        switch(this.type) {
            default:
                console.log(`Prefix ${this.type} is not recognized. Setting as DNA.`);
                this.type = "d";
            case "d":                
                return `<span class="base-type-DNA">${this.base}</span>`;
                break;
            case "r":
                return `<span class="base-type-RNA">${this.base}</span>`;
                break;
            case "f":
                return `<span class="base-type-Fluoro">${this.base}</span>`;
                break;
            case "l":
                return `<span class="base-type-LNA">${this.base}</span>`;
                break;
            case "m":
                return `<span class="base-type-OMe">${this.base}</span>`;
                break;
            case "a":
                return `<span class="base-type-FANA">${this.base}</span>`;
                break;
            case "ara":
                return `<span class="base-type-ANA">${this.base}</span>`;
                break;
        }
    }             
}

var inputPlaceholder = "Enter sequence here...";

document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector("#oligoInputBox").addEventListener("input", ProcessSequence);
    document.querySelector("#oligoInputBox").addEventListener("click", CheckInputPlaceholder);
    document.querySelector("#oligoInputBox").addEventListener("focusout", CheckInputEmpty);
});

function CheckInputEmpty() {
    if (!document.querySelector("#oligoInputBox").value) {
        document.querySelector("#oligoInputBox").value = inputPlaceholder
        document.querySelector("#oligoInputBox").classList.add("faded");
    } else {
        document.querySelector("#oligoInputBox").classList.remove("faded");
    }
}

function CheckInputPlaceholder() {
    if (document.querySelector("#oligoInputBox").value === inputPlaceholder) {
        document.querySelector("#oligoInputBox").value = "";
        document.querySelector("#oligoInputBox").classList.remove("faded");
    }
}

function ProcessSequence() {
    let ntArr = [];
    
    document.querySelector("#reversedSequenceOutput").innerHTML = "";

    if (document.querySelector("#oligoInputBox").value.match(/[a-z]+[A-Z#]/g)) {
        document.querySelector("#oligoInputBox").value.match(/[a-z]+[A-Z#]/g).forEach(n => { 
            ntArr.push(new Nucleotide(n.match(/[A-Z#]/)[0], n.match(/[a-z]+/)[0]));    
        });

        ntArr.reverse().forEach(n => {
            document.querySelector("#reversedSequenceOutput").innerHTML += n.ntHTML;
        });        
    } 

    //Get NT totals
        // A //
        document.querySelector("#amountDNA_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "d").length;
        document.querySelector("#amountRNA_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "r").length;
        document.querySelector("#amountFluoro_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "f").length;
        document.querySelector("#amountLNA_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "l").length;
        document.querySelector("#amountOMe_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "m").length;
        document.querySelector("#amountFANA_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "a").length;
        document.querySelector("#amountANA_A").innerHTML = ntArr.filter(n => n.base ==="A" && n.type === "ara").length;
        document.querySelector("#amountTotal_A").innerHTML = ntArr.filter(n => n.base ==="A").length;
        // T //
        document.querySelector("#amountDNA_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "d").length;
        document.querySelector("#amountRNA_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "r").length;
        document.querySelector("#amountFluoro_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "f").length;
        document.querySelector("#amountLNA_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "l").length;
        document.querySelector("#amountOMe_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "m").length;
        document.querySelector("#amountFANA_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "a").length;
        document.querySelector("#amountANA_T").innerHTML = ntArr.filter(n => n.base ==="T" && n.type === "ara").length;
        document.querySelector("#amountTotal_T").innerHTML = ntArr.filter(n => n.base ==="T").length;
        // G //
        document.querySelector("#amountDNA_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "d").length;
        document.querySelector("#amountRNA_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "r").length;
        document.querySelector("#amountFluoro_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "f").length;
        document.querySelector("#amountLNA_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "l").length;
        document.querySelector("#amountOMe_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "m").length;
        document.querySelector("#amountFANA_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "a").length;
        document.querySelector("#amountANA_G").innerHTML = ntArr.filter(n => n.base ==="G" && n.type === "ara").length;
        document.querySelector("#amountTotal_G").innerHTML = ntArr.filter(n => n.base ==="G").length;
        // C //
        document.querySelector("#amountDNA_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "d").length;
        document.querySelector("#amountRNA_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "r").length;
        document.querySelector("#amountFluoro_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "f").length;
        document.querySelector("#amountLNA_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "l").length;
        document.querySelector("#amountOMe_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "m").length;
        document.querySelector("#amountFANA_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "a").length;
        document.querySelector("#amountANA_C").innerHTML = ntArr.filter(n => n.base ==="C" && n.type === "ara").length;
        document.querySelector("#amountTotal_C").innerHTML = ntArr.filter(n => n.base ==="C").length;
        // U //
        document.querySelector("#amountDNA_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "d").length;
        document.querySelector("#amountRNA_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "r").length;
        document.querySelector("#amountFluoro_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "f").length;
        document.querySelector("#amountLNA_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "l").length;
        document.querySelector("#amountOMe_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "m").length;
        document.querySelector("#amountFANA_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "a").length;
        document.querySelector("#amountANA_U").innerHTML = ntArr.filter(n => n.base ==="U" && n.type === "ara").length;
        document.querySelector("#amountTotal_U").innerHTML = ntArr.filter(n => n.base ==="U").length;
        // # //
        document.querySelector("#amountDNA_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "d").length;
        document.querySelector("#amountRNA_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "r").length;
        document.querySelector("#amountFluoro_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "f").length;
        document.querySelector("#amountLNA_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "l").length;
        document.querySelector("#amountOMe_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "m").length;
        document.querySelector("#amountFANA_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "a").length;
        document.querySelector("#amountANA_Hash").innerHTML = ntArr.filter(n => n.base ==="#" && n.type === "ara").length;
        document.querySelector("#amountTotal_Hash").innerHTML = ntArr.filter(n => n.base ==="#").length;
}

 function SelectText(_containerid) {
     if (document.selection) { // IE
         var range = document.body.createTextRange();
         range.moveToElementText(document.querySelector(`#${_containerid}`));
         range.select();
     } else if (window.getSelection) {
         var range = document.createRange();
         range.selectNode(document.querySelector(`#${_containerid}`));
         window.getSelection().removeAllRanges();
         window.getSelection().addRange(range);
     }
 }