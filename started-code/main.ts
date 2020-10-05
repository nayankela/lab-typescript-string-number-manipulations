import { StringManipulationService, NumberManipulationService } from "./main-service";
class StringManipulations implements StringManipulationService{

     print(word:string): void{
         console.log(word);
         console.log(word.toUpperCase());
         console.log(word.toLowerCase());
         console.log(word.charAt(1));
         console.log(word.concat('prograd'));
         console.log(word.slice(1,3));
         console.log(word.length);

     }

    printWithSpace(sentence:string) : void{
        let result: string="";
         let strArr: string[]= sentence.split("");
         for (let index = 0; index < strArr.length; index++) {
              result =  result + strArr[index]+ " ";
             
         }
        console.log(result);
    }

    findVowel(str: string) : void{
                console.log(str);
                     console.log(str.replace(/[^aeiou]/gi, "").length);

}
}
let obj = new StringManipulations();
obj.print('facePrep');
obj.printWithSpace('facePrep');
obj.findVowel('facePrep');

class NumbersManipulations implements NumberManipulationService{

findPrime(num: number) : void{
let counter: number = 1;
for (let index = 2; index < num; index++) {
    if(num%index == 0){
        ++counter;
    }
}
if(counter == 1){
    console.log("It is Prime :"+num);
}else{
    console.log("Not Prime :"+num);
}

}
findMagic(num: number) : void{
 if (num % 9 == 1) 
           console.log("Magic Number"+num); 
        else
            console.log("Not a Magic Number"+num); 
    
}

} 

let obj1 = new NumbersManipulations();
obj1.findPrime(5);
obj1.findMagic(199);