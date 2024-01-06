/*
2629. Function Composition

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
*/

// SOLUTION 

var compose = function(functions) {
    
    return function(x) {
        for(let i=functions.length-1; i>=0;  i--){
            x=functions[i](x);
        }
        return x;
    }
};

/*
EXPLANATION:

1.compose Function:
The compose function takes an array of functions (functions) as its parameter.

2.Returned Function:
The compose function returns another function.
This returned function takes a single argument (x).

3.Function Composition:
Inside the returned function, there is a for loop that iterates through the array of functions in reverse order (i starts from functions.length-1 and goes down to 0).
For each iteration, the current function in the array (functions[i]) is applied to the argument x. The result is then assigned back to x.
This loop effectively composes the functions in reverse order.

4.Result:
After all the functions have been applied, the final value of x is returned.
*/