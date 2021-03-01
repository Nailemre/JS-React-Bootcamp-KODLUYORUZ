///@Nail Emre Kayapinar
'use strict';
const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ['GER', 'USA'], ["UAE", "JPN"]]
//const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]]
var element;
const result = [];
const base=[];
const target=[];
var count=0;
let i=0;
let j = 0;

// We find starting place
function searchFirst(arr)
{
    const concatReduce = arr.reduce((acc, value) => [...acc.concat(value)], []);//2D array convert to 1D array
    for (let i = 0; i < concatReduce.length; i++) {
        if (i % 2 == 0) base.push(concatReduce[i])//if the placement is even number, push base array
        else if (i % 2 == 1) target.push(concatReduce[i])//if the placement is odd number, push target array
    }
    var difference = base.filter(x => target.indexOf(x) === -1);// difference of base elemnent of target 
    return difference[0]; 
}
// We find route
function nextStation(arr, first)
{   
    for (let j = 0; j < arr.length;j++ )
    {
        if (first == arr[j][0]) {//we find the location of the starting point
            first = arr[j][1];//next point is a new starting point
            result.push(first);//element push the result array 
            j = -1;
        }   
    }    
}
result.push(searchFirst(tickets));
nextStation(tickets, searchFirst(tickets))
console.log(result.join());// array convert to string with join() function



