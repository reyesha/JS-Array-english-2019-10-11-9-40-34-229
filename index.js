// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
typeof(a);
typeof(b);
   
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0; i<a.length; i++) {
    a[i] *= 2;
}
console.log(a);  


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var colorsAsString = colors.join(' ');
console.log(colorsAsString);
// case 2 output: 'Red+Green+White+Black'
var colorsAsString = colors.join('+');
console.log(colorsAsString) 
// case 3 output: 'Red,Green,White,Black'
var colorsAsString = colors.join(',');
console.log(colorsAsString) ;


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var b = a.sort((a,b)=>b-a);
console.log(b);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var b = 1;
var c = 0;
var mf; //most frequent
for (var i=0; i<a.length; i++)
{
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 c++;
                if (b<c)
                {
                  b=c; 
                  mf = a[i];
                }
        }
        c=0;
}
console.log(mf);