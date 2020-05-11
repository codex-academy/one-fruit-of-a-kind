
function OneFruitOfKindOnly() {
  
	const hasEatenMap = {
	  'apple' : 0,
	  'pear' : 0,
	  'orange' : 0
	};
	
	function eat(fruitEaten) {
		
	  if (hasEatenMap[fruitEaten] === undefined) {
		   return "We don't have any " + fruitEaten + "s...";
	  } else if (hasEatenMap[fruitEaten] === 0)  {
		  hasEatenMap[fruitEaten] = 1;
		  return "Eat a " + fruitEaten + "!";
	  } else if (hasEatenMap[fruitEaten] == 1) {
		  return"You already eaten a " + fruitEaten + " today!";
	  }
	}
	
	return { 
	  eat
	};
  }
  
  