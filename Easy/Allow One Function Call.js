/*
2666. Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called

*/


//SOLUTION:

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let Allow = false;
    let res;
    return function(...args){
        
        if(!Allow){
            res = fn(...args);
            Allow=true;
            return res;
        }
        else{
            return undefined;
        }
    }
};

/*
EXPLANATION:

1.Function Parameter:
* The once function takes a single argument fn, which is assumed to be a function.

2.Closure:
* Inside the once function, there are two variables declared using let: Allow and res. These variables are used to track whether the original 
  function has been executed and store its result, respectively.

3.Returned Function:
* The once function returns a new function defined using the function(...args) syntax.

4.Behavior of the Returned Function:

* The returned function checks the value of the Allow flag.
* If Allow is false, it means the original function has not been executed yet. In this case:
	*It calls the original function (fn) with the provided arguments (...args).
	*Stores the result in the res variable.
	*Sets Allow to true, indicating that the original function has been executed.
	*Returns the result of the original function (res).
* If Allow is true, it means the original function has already been executed. In this case:
* It returns undefined without calling the original function again.

*/