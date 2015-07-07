/**
 * 	The MIT License (MIT)
 *	Copyright (c) 2015 Ricardo
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in all
 *	copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
 * 
 * 	Author: Ricardo Pallas 
 * 	Twitter: @pallasr
 * 	StackOverflow: @rpallas
 * 	GitHub: @rpallas92
 */

(function() {
		
	/**
	 * Curries a function. Returs a new function that If all parameters are passed,
	 * the function is executed, else, It returns other curried function with the parameters.
	 * 
	 * @param fn The function to be curried
	 * @returns The curried function
	 */
	function curry(fn){
		
		return function(){
			
			var fnArity = fn.length;
			var numberOfArgs = arguments.length;
			var argsArray = Array.prototype.slice.call(arguments);
			var remainingArity = fnArity - numberOfArgs;
			
			if(remainingArity <= 0){
				return fn.apply(fn,argsArray);
			} else {
				var curriedFn = fn.bind.apply(fn, [null].concat(argsArray));
				return curry(curriedFn);
			}
		}
	}
	
	
	exports.curry = curry;
	
})()
	

