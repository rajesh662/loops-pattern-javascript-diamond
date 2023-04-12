

// Diamond Pattern in Javascript-------------------------------------

// let a= prompt("Enter they number");
// 			for(i=1;i<=a;i++){

// 				for(j=1;j<=a-i;j++){
// 					document.write("&nbsp","&nbsp")
// 				}
// 				for(r=1;r<=i*2-1;r++){
// 					document.write("*");
// 				}
// 				document.write("<br>");
// 			}
// 			for ( i = 1; i <= a; i++) {
// 				for ( j = 1; j <= i; j++) {
// 					  document.write("&nbsp","&nbsp")
// 				}
			  
// 				for ( m = 1; m<= 2*(a-i)- 1; m++) {
// 				  document.write("*");
// 				}
			   
// 			   document.write("<br>")
// 			  }

// Reversed Pyramid Star Pattern----------------------------------------------

// let a = prompt("enter they number");
// for ( i = 1; i <= a; i++) {
//   for ( j = 1; j <= i; j++) {
// 		document.write("&nbsp","&nbsp")
//   }

//   for ( m = 1; m<= 2*(a-i)- 1; m++) {
// 	document.write("*");
//   }
 
//  document.write("<br>")
// }

// Hollow Triangle Star Pattern---------------------------------------------/

// let a = prompt("enter they number");
// for(i=1; i<=a; i++){
//     for(j=1; j<=i; j++){
// 		if(i==1 || i==a){
// 			document.write("*")
// 		}
// 		else if(j==1 || j==a || i==j){
// 			document.write("*")
// 		}
// 		else{
// 			document.write("&nbsp","&nbsp")
// 		}
       
// }
// document.write("<br>")
// }

// javascript pyramind pattern-----------------------


// let b = prompt("Enter they number");
// 			for(i=1;i<=b;i++){

// 				for(j=1;j<=b-i;j++){
// 					document.write("&nbsp","&nbsp")
// 				}
// 				for(r=1;r<=i*2-1;r++){
// 					document.write("*");
// 				}
// 				document.write("<br>");
// 			}


// Left Triangle Pattern in Javascript------------



// let a = prompt("enter they number");
// for(i=1; i<=a; i++){
//     for(j=1; j<=i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// let a = prompt("enter they number");
// for(i=1; i<=a; i++){
//     for(j=i; j<=a; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// Hollow Square Pattern----------------------

// let a = prompt("enter they number");
// for(i=1; i<=a; i++){
//     for(j=1; j<=a; j++){
//       if(i==1 || j==1 || i==a || j==a){
//         document.write(" *")
//       }
//       else{

//         document.write("&nbsp &nbsp");
//       }
//     }
//     document.write( "<br>")
// }

// Square Star Pattern in Javascript-------------------

let a = prompt("enter they number");
for(i=0; i<a; i++){
    for(j=0; j<a; j++){
        document.write("*")
    }
    document.write("<br>")
}