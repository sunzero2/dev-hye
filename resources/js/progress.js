$('#java').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Java');
});

$('#python').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Python');
});

$('#nodejs').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Node.js');
});

$('#spring').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Spring');
});

$('#html').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('HTML5');
});

$('#css').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('CSS6');
});

$('#javascript').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Java<br>script');
});

$('#oracle').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Oracle');
});

$('#mysql').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('MySQL');
});

$('#redis').circleProgress({
    value: 0.9
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html('Redis');
});

