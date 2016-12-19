

function getTotalWordCount(arr) {

return arr.length; 
}

function getUniqueCount(arr) {

	var uniqueArray = [];
	arr.forEach(function(word) {
		if (uniqueArray.indexOf(word) < 0) {
			uniqueArray.push(word);
		}
	})
	return uniqueArray.length;
}

function getAveWordCount(arr) {
var wordAvg = 0;
arr.forEach(function(word) {
wordAvg += word.length;
})
return (wordAvg/arr.length).toFixed(2) + ' characters';
}

 function getAveSentLength(words) {
	var sentences = words.split('. ');
	sentenceAvg = 0;
	sentences.forEach(function(sentence) {
		sentenceAvg += sentence.split(" ").length;
	})
	return (sentenceAvg/sentences.length).toFixed(2) + ' words';
 }
$(document).ready(function() {
	$('button').click(function(event) {
		event.preventDefault();
		var words = $('textarea').val();
		var array = words.split(" ");
		$('.js-word-count').text("").append(" : " + getTotalWordCount(array));
		$('.js-unique-count').text("").append(" : " + getUniqueCount(array));
		$('.js-average-word-length').text("")
			.append(" : " + getAveWordCount(array));
		$('.js-average-sentence-length').text("")
			.append(" : " + getAveSentLength(words));
		$('.text-report').removeClass('hidden');
	});
});
