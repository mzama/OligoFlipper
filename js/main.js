 //Called when the sequence input updates to set reverse and count bases
 function RevSeqPress ()
 {
     //Get the input from the text field
     inputOligo = document.getElementById("oligoInputBox").value;
     //Break the input into an array
     ntCount = inputOligo.toUpperCase().split("");

     //Reset the count for each nucleotide
     nA = 0;
     nT = 0;
     nG = 0;
     nC = 0;
     nU = 0;

     //Loop through the nucleotide array and add up the numbers of each nucleotide present
     for (i = 0; i < ntCount.length; i++)
     {
         switch(ntCount[i])
         {
             case "A":
                 nA += 1;
                 break;
             case "T":
                 nT += 1;
                 break;
             case "G":
                 nG += 1;
                 break;
             case "C":
                 nC += 1;
                 break;
             case "U":
                 nU += 1;
                 break;
             default:
                 break;
         }
     }

     //Set the output as the reversed input
     outputOligo = inputOligo.split("").reverse().join("");
     //Set all text
     document.getElementById("reversedSequenceOutput").innerHTML = outputOligo;
     document.getElementById("numN").innerHTML = outputOligo.replace(/\s+/g, "").length;
     document.getElementById("numA").innerHTML = nA;
     document.getElementById("numT").innerHTML = nT;
     document.getElementById("numG").innerHTML = nG;
     document.getElementById("numC").innerHTML = nC;
     document.getElementById("numU").innerHTML = nU;
 }
 function SelectText(containerid) {
     if (document.selection) { // IE
         var range = document.body.createTextRange();
         range.moveToElementText(document.querySelector(`#${containerid}`));
         range.select();
     } else if (window.getSelection) {
         var range = document.createRange();
         range.selectNode(document.querySelector(`#${containerid}`));
         window.getSelection().removeAllRanges();
         window.getSelection().addRange(range);
     }
 }