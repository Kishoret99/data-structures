function findIndex(array){
	var lowest = 0;
	var secondLowest  = 0;
	array.map((c,i) =>{
		if(c < lowest){
			secondLowest = lowest
			lowest = c;
		}	
	})

	return {
		lowest: lowest,
		secondLowest: secondLowest
	}
}

var a = [2, 5, -1, 5, 6,-2]
var response = findIndex(a);
console.log(response)




