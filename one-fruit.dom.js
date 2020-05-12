const message = document.querySelector(".message");
  const fruitName = document.querySelector(".fruitName");
  const fruitNameBtn = document.querySelector(".letsEat");
  const oneFruitOfKindOnly = OneFruitOfKindOnly();
  
  fruitNameBtn.addEventListener("click", function(){

	  let fruitEaten;
	  if (fruitName && fruitName.value) {
		fruitEaten = fruitName.value.toLowerCase();
	  } else {
		return;
	  }
	  message.innerHTML = oneFruitOfKindOnly.eat(fruitEaten)
		
  });