$(document).ready(function() {
    (function randButton() {
        $('td').text('1');

        var td = document.querySelectorAll('td');
        var currentTd = td[Math.floor(Math.random() * td.length)];
        currentTd.innerHTML = '';

        var button = document.createElement("button");
        button.innerText = 'Click me';
        button.className = 'btn';
        button.addEventListener('click', randButton);
        currentTd.appendChild(button);
    })();
});