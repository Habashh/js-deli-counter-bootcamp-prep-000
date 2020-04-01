var katzDeliLine = ["Steven", "Blake", "Avi"];
var newPersonName
var i=1
function takeANumber(katzDeliLine,newPersonName){

  console.log(`Welcome,${newPersonName}. You are number ${i} in line.`)
++i
 return katzDeliLine.push(newPersonName)
}
function nowServing(katzDeliLine){
if(katzDeliLine.length>0){
for(var i=0;i<katzDeliLine.length;i++){
var nowServingPerson= katzDeliLine.shift()
 console.log(nowServingPerson)
return nowServingPerson}
}else{return "There is nobody waiting to be served!"}
}

var katzDeliLine = ["Bill", "Jane", "Ann"];

var katzDeliLine = ["Steven", "Blake", "Avi"];

var katzDeliLine = [];
function currentLine(katzDeliLine) {
    var output = [];
    if (katzDeliLine.length > 0) {
      for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      output = output.slice(0, output.length - 2);
      return "The line is currently: " + output;
    } else {
        return "The line is currently empty.";
    }
}