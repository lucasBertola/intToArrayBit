var binaryString = require( 'math-float64-to-binary-string' );
var fromBits = require( 'math-float64-from-bits' );


function toArrayBinary(binaryStringFunction,number){
	return binaryStringFunction(number).split('').map(Number);
}
function toStringBinary(binaryStringFunction,number){
	return binaryStringFunction(number);
}

var NumberArray = {
		int8 : function(int8) {
			return {
				toArrayBinary : function(){
					return toArrayBinary(binaryString,int8);
				},
				toStringBinary : function(){
					return toStringBinary(binaryString,int8);
				}
			}
		},
		int16 : function(int16) {
			return {
				toArrayBinary : function(){
					return toArrayBinary(binaryString,int16);
				},
				toStringBinary : function(){
					return toStringBinary(binaryString,int16);
				}
			}
		},
		int32 : function(int32) {
			return {
				toArrayBinary : function(){
					return toArrayBinary(binaryString,int32);
				},
				toStringBinary : function(){
					return toStringBinary(binaryString,int32);
				}
			}
		},
		float16 : function(float16) {
			return {
				toArrayBinary : function(){
					return toArrayBinary(binaryString,float16);
				},
				toStringBinary : function(){
					return toStringBinary(binaryString,float16);
				}
			}
		},
		float34 : function(float34) {
			return {
				toArrayBinary : function(){
					return toArrayBinary(binaryString,float34);
				},
				toStringBinary : function(){
					return toStringBinary(binaryString,float34);
				}
			}
		}
		,
		arrayBinary : function(arrayInt8) {
			return {
				toInt8 : function(){
					return fromBits(arrayInt8.join(''))
				}
			}
		},

		StringBinary : function(arrayInt8) {
			return {
			}
		},

}
