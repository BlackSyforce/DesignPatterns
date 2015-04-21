/**
 * Check to see if the string contains numbers.
 */
var hasNumbers = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
			return true;
		}
	}

	return false;
}

/**
 * Check to see if the string contains lowercase characters.
 */
var hasLowecase = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
			return true;
		}
	}

	return false;
};

/**
 * Check to see if the string contains uppercase characters.
 */
var hasUppercase = function(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
			return true;
		}
	}

	return false;
}

/**
 * Check to see if the string contains special characters.
 */
var hasSpecialCharacters = function(str) {
	for (var i = 0; i < str.length; i++) {
		if ((str.charCodeAt(i) > 32 && str.charCodeAt(i) < 48) || 
			(str.charCodeAt(i) > 57 && str.charCodeAt(i) < 65) ||
			(str.charCodeAt(i) > 122 && str.charCodeAt(i) < 127)) {
			return true;
		}
	}

	return false;
}

/**
 * Check to see if the string has 8 or more characters.
 */
var hasLength = function(str) {
	return (str && str.length > 7);
}

var Checker = function(fun, next) {
	var verificationFunction = fun;
	this.next = next;

	this.verify = function(str) {
		var check = fun && fun(str);

		if (check) {
			if (next) {
				return next.verify(str);
			}
		}

		return check;
	}
}

var check1 = new Checker(hasSpecialCharacters);
var check2 = new Checker(hasUppercase, check1);
var check3 = new Checker(hasLowecase, check2);
var check4 = new Checker(hasNumbers, check3);
var check5 = new Checker(hasLength, check4);

console.log(check5.verify("assd$dAs32ffsdf"));