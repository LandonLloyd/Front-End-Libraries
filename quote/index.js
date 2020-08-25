document.addEventListener('DOMContentLoaded', function(){
  let i = Math.floor(Math.random() * quotes.length);
  $('#text').text(quotes[i]);
  $('#author').text('- ' + authors[i]);
});
  

let quotes = ['Life is about making an impact, not making an income.', 'Whatever the mind of man can conceive and believe, it can achieve.', ' Strive not to be a success, but rather to be of value.','I attribute my success to this: I never gave or took any excuse.', 'You miss 100% of the shots you don\’t take.', 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.', 'The most difficult thing is the decision to act, the rest is merely tenacity.', 'Every strike brings me closer to the next home run.', 'Definiteness of purpose is the starting point of all achievement.', 'Life isn\'t about getting and having, it\'s about giving and being.', 'Life is what happens to you while you’re busy making other plans.', 'We become what we think about.'];

let authors = ['Kevin Kruse', 'Napoleon Hill', 'Albert Einstein', 'Florence Nightingale', 'Wayne Gretzky', 'Michael Jordan', 'Amelia Earheart', 'Babe Ruth', 'W. Clement Stone', 'Kevin Kruse', 'John Lennon', 'Earl Nightingale'];

$('#new-quote').click(function randQuote(){
  let i = Math.floor(Math.random() * quotes.length);
  $('#text').text(quotes[i]);
  $('#author').text('- ' + authors[i]);
  $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?text=${quotes[i]}\n--${authors[i]}`);
  });


