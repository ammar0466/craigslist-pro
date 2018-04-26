var results = $('li.result-row');

results.each((index, element) => {
	// console.log(element);
	const result = $(element);
	const title = result.find('.result-title').text();
	console.log(title);
});
