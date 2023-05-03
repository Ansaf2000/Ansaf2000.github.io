var names=new Array();
names[0]="Yaakov";
names[1]="Jen";
names[2]="John";
names[3]="jeson";
names[4]="paul";
names[5]="frank";
names[6]="jimmy";
names[7]="Laura";
names[8]="frank";
names[9]="jason";

for (var i =0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
       console.log("Goodbye "+ names[i])
	}
     else{
     	  console.log("Hello "+ names[i])
     }
}