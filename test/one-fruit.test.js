describe("One Fruit of a kind", function() {

	it("should be able to eat an apple", function() {
		const oneFruitOfKindOnly = OneFruitOfKindOnly();
		const response = oneFruitOfKindOnly.eat("apple");
		assert.equal("Eat a apple!", response);
	});

	it("should be able to eat only one apple", function() {
		const oneFruitOfKindOnly = OneFruitOfKindOnly();
		oneFruitOfKindOnly.eat("apple");
		const response = oneFruitOfKindOnly.eat("apple");
		assert.equal("You already eaten a apple today!", response);
	});

	it("should not be able to eat a fig", function() {
		const oneFruitOfKindOnly = OneFruitOfKindOnly();
		const response = oneFruitOfKindOnly.eat("fig");
		assert.equal("We don\'t have any figs...", response);
	});

	it("should be able apple to remember that an apple was eaten before", function() {

		const previousData = {
			'apple' : 1,
			'pear' : 0,
			'orange' : 0
		};


		const oneFruitOfKindOnly = OneFruitOfKindOnly(previousData);

		const response = oneFruitOfKindOnly.eat("apple");
		assert.equal("You already eaten a apple today!", response);
	});

	it("should be able apple to get what was eaten to far", function() {

		const oneFruitOfKindOnly = OneFruitOfKindOnly();
		oneFruitOfKindOnly.eat("orange");
		oneFruitOfKindOnly.eat("pear");

		const previouslyEaten = {
			'apple' : 0,
			'pear' : 1,
			'orange' : 1
		};

		assert.deepEqual(previouslyEaten, oneFruitOfKindOnly.fruitsEaten());

	});

});