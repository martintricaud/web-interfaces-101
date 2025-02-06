// import './style.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
// import 'highlight.js/styles/github.css';

console.log("test");
// Register the languages that will be highlighted
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

function loadChapter(source, target) {
    fetch(source)
        .then(response => response.text())
        .then(content => {
            document.getElementById(target).innerHTML = content;
        })
        .catch(error => console.error('Error loading the page:', error));
}


document.addEventListener('DOMContentLoaded', (event) => {
    loadChapter("/html.html", "html");
    loadChapter("/css.html", "css");
    loadChapter("/js.html", "javascript");
    // hljs.highlightAll();
});


