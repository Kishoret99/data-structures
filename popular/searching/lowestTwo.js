function findIndex(array){
	var lowest = 0;
	var secondLowest  = 0;
	array.reduce((a,c,i) =>{
		if(c < lowest){
			secondLowest = lowest
			lowest = c;

		}	
	})
}
