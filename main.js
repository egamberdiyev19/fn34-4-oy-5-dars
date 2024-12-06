// 1. For + break/continue ga oid masalalar (4 ta):
// 1-masala
for (let i = 1; i <= 100; i++) {
  if (i == 50) {
    break;
  }
  console.log(i);
}
// 2-masala
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}
// 3-masala
for (let i = 1; i <= 30; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}
// 4-masala
for (let i = 7; i <= 50; i += 7) {
  if (i == 4) {
    break;
  }
  console.log(i);
}
// 2. Switch-case ga oid masalalar (4 ta):
// 1-masala
let num2_1 = +prompt("hafta sonni kiriting");
switch (num2_1) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;

  case 3:
    console.log("Chorshanba");
    break;

  case 4:
    console.log("Payshanba");
    break;

  case 5:
    console.log("Juma");
    break;

  case 6:
    console.log("Shanba");
    break;

  case 7:
    console.log("Yakshanba");
    break;

  default:
    console.log("Bunday hafta yoq");
    break;
}
// 2-masala
let num2_2 = +prompt("Oy raqamini kiriting");
switch (num2_2) {
  case 12:
  case 1:
  case 2:
    console.log("Qish");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Yoz");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Kuz");
    break;
  default:
    console.log("Bunday oy yoq");
    break;
}
// 3-masala
let num2_3 = +prompt("sonni kiriting");
switch (num2_3) {
  case num2_3 % 2 == 0:
    console.log("Juft son");
    break;
  case num2_3 % 2 == 1:
    console.log("Toq son");
    break;

  default:
    console.log("Bunday son yoq");
    break;
}
// 4-masala
let num2_4 = +prompt("baho raqamini kiriting");
switch (num2_4) {
  case 5:
    console.log("A'lo");
    break;
  case 4:
    console.log("Yaxshi");
    break;
  case 3:
    console.log("qoniqarli");
    break;
  case 2:
    console.log("qoniqarsz");
    break;
  case 1:
    console.log("Yomon");
    break;

  default:
    console.log("bunday baho yoq")
    break;
}
// 3. While va do...while ga oid masalalar (15 ta):
// 1-masala
let num3_1 = 1;
while (num3_1 <= 10) {
    
    console.log(num3_1)
    num3_1++;
}
// 2-masala
let num3_2 = 10;
while (num3_2 <= 1) {
    console.log(num3_2)
    i--;
}
// 3-masala
let sum3_3 = 0;
let num3_3 = +prompt("soni kiriting")
while (true) {
  num3_3 = +prompt("soni kiritng")
  if (num3_3 ==0) {
    break;
  } else {
    sum3_3 += num3_3;

  }
  console.log(sum3_3)
}
// 4-masala
let num3_4 = +prompt("3-4-masala")
while (true) {
  num3_4 = +prompt("3-4-masala")
  if (num3-4 >0) {
    break;

  } 
}
console.log(num3_4)
// 5-masala
let num3_5 = +prompt("sonni kiriting")
let sum3_5 = 0;
while (num3_5 >0) {
  sum3_5 = sum3_5 + num3_5 % 10;

  console.log(sum3_5);
  
}
// 6-masala
let num3_6 = +prompt("sonno kiriting")
let sum3_6 =0;
if (num3_6 % 2 == 0) {
  while (num3_6 < 0) {

sum3_6 += num3_6
    
  }
  console.log(sum3_6);
  
}
// 7-masala
let i = 1
while (i <= 20) {
  i+=2
}
console.log(i);
// 8-masala
let i1 =5;
while (i1 >=50) {
  i1 += 5;
  
}
console.log(i1)
// 9-masala
let num3_9 = +prompt("sonni kiriting")
let sum3_9 = 0;
while (num3_9 > 0) {
  sum3_9 = sum3_9 *10 + num3_9 % 10;
  num3_9 = num3_9 / 10;
  
}
console.log(sum3_9);
// 10-masala
let i2 = 100;
while (i2 >= 10) {
  i2-=10;
  
}
console.log(i2);
// 11-masala
let i3 = 1;
while (i3 <= 100) {
  i3++;
  
}
console.log(i3 **2);
// 12-masala
let num3_12 = +prompt("sonni kiriting")
while (num3_12 > 0) {
 
  if (num3_12 %5 == 0) {
    break
  } else {
    num3_12 = +prompt("sonni kiruting")
  }
  
}
// 13-masala
let num3_13 = +prompt("sonni kiriting")
while (num3_13 >0) {
  if (num3_13 <= 10) {
    num3_13 = +prompt("sonni kiriting")
  } else {
    console.log(num3_13)
  }
  
}
// 14-masala
let num3_14 = prompt("sonni kiriting")
let sum3_14 =0;
while (num3_14 >0) {
  if (num3_14 == stop) {
    sum3_14 ++;
  } else {
    num3_14 = prompt("sonni kiriting")
  }
  console.log(sum3_14);
  
}
// 15-masala
let num3_15 = +prompt('sonni kiriting')
let sum3_15 = 0;
let counter3_15 =1;
while (num3_15 != 0) {
  sum3_15 += num3_15;
  counter3_15 ++;
  
}
console.log(sum3_15 / counter3_15);
//4. Ternary operator ga oid masalalar (5 ta):
// 1-masala
let num4_1 = +prompt("sonni kiriting")
let res = ''
if (num4_1 > 0) {
  res = "musbat"
} else {
  res = "manfiy"
}
res = num4_1 > 0 ? "musbat" :"manfiy";
// 2-masala
let num4_2 = +prompt("sonni kiriting")
let res1 = ''
if (num4_2 % 2 == 0) {
  res1 = "juft"
} else {
  res1 = "toq"
}
res1 = num4_2 > 0 ? "jufy" :"toq";
// 3-masala
let num4_3 = +prompt("sonni kiriting")
let res2 = ''
if (num4_3 > 100) {
  res2 = "kotta"
} else {
  res2 = "kichik"
}
res2 = num4_3 > 0 ? "kotta" :"kichik";
// 4-masala
let num4_41 = +prompt("sonni kiriting")
let num4_42 = +prompt("sonni kiritin")
let res3 = ''
if (num4_41 > num4_42) {
  res3 = "1-son katta"
} else {
  res3 = "2-son katta"
}
res3 = num4_41 > num4_42 ? "1-son katta" : "2-son katta" ;
// 5-masla
let num4_5 = +prompt("sonni kiriting")
let res4 = ''
if (num4_5 % 15 == 2) {
  res4 = "bolinadi"
} else {
  res4 = "bolinmaydi"
}
res4 = num4_5 > 0 ? "bolinadi" :"bolinmaydi";
// 6. For ga oid masalalar (15 ta):
// 1-masala
for (let i = 1; i <= 50; i++) {
  console.log(i)
}
// 2-masala
for (let i = 10; i >= 1; i--) {
  console.log(i)
}
// 3-masala
for (let i = 1; i <= 100; i+= 2) {
  console.log(i)
}
// 4-masala
for (let i = 2; i <= 50; i+= 2) {
  console.log(i)
}
// 5-masala
let sum6_5 = 0;
for (let i = 1; i <= 100; i++) {
  sum6_5 += i
  console.log(sum6_5)
}
// 6-masala
let num6_6 = +prompt("sonni kiriting")
let sum6_6 = 1;
for (let i = 1; i <= num6_6; i++) {
  sum6_6*= i
  console.log(sum6_6)
}
// 7-masala
for (let i = 1; i <= 20; i++) {
  console.log(i**2)
}
// 9-masala
for (let i = 5; i <= 100; i+= 5) {
  console.log(i)
}
// 10-masala
let num6_10 = +prompt("musbat son kiriting")
for (let i = 1; i <= num6_10; i++) {
  console.log(i**3)
}
// 11-masala
let sum6_11 = 0;
for (let i = 2; i <= 100; i+= 2) {
  sum6_11 += i;
  console.log(sum6_10)
}
// 12-masala
let sum6_12 = 0;
for (let i = 3; i <= 50; i+= 3) {
  sum6_12 ++;
  if (sum6_12 ==3) {
    console.log(i)
  }
  
}
// 13-masala
let num6_13 = +prompt("musbat son kiriting")
let sum6_13 = 0;
for (let i = 1; i <= num6_13; i++) {
  sum6_13 += i;
  console.log(sum6_13);
  
}
// 14-masala
for (let i = 1; i <+ 10 )



