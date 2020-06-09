const message = document.querySelector(".message");
  const fruitName = document.querySelector(".fruitName");
  const fruitNameBtn = document.querySelector(".letsEat");

  const currentFruitsInLocalStorage = localStorage['fruitsEaten'];
  let currentFruitMap = null;
  if (currentFruitsInLocalStorage) {
	currentFruitMap = JSON.parse(currentFruitsInLocalStorage);
  }

  // pass the previous state into the Factory Function...
  const oneFruitOfKindOnly = OneFruitOfKindOnly(currentFruitMap);
  
  fruitNameBtn.addEventListener("click", function(){

	  let fruitEaten;
	  if (fruitName && fruitName.value) {
		fruitEaten = fruitName.value.toLowerCase();
	  } else {
		return;
	  }
	  message.innerHTML = oneFruitOfKindOnly.eat(fruitEaten);

	  localStorage['fruitsEaten'] = JSON.stringify(oneFruitOfKindOnly.fruitsEaten());

	  // store the state into localStorage...
		
  });