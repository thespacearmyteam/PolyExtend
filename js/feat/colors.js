onMessageAdd(function(name, message, id) {
	if(options.colornames &&
	(options.colornamesover || getRanks().length == 0)) {
		var old = parseInt(name, 36);
		
		var num1 = bigInt(Math.floor(old * 548.624373957303));
		var num2 = bigInt(Math.floor(old * 716.518575271835));
		var num3 = bigInt(Math.floor(old * 897.341595790817));
		
		// var part1 = num1 - (Math.floor(num1 / 192) * 192) + 64;
		var part1 = num1.minus(num1.divide(192).times(192)).plus(64);
		var color1 = part1.toString(16);
		// var part2 = num2 - (Math.floor(num2 / 192) * 192) + 64;
		var part2 = num2.minus(num2.divide(192).times(192)).plus(64);
		var color2 = part2.toString(16);
		// var part3 = num3 - (Math.floor(num3 / 192) * 192) + 64;
		var part3 = num3.minus(num3.divide(192).times(192)).plus(64);
		var color3 = part3.toString(16);
		
		addColor("#" + color1 + color2 + color3);
	}
});
