import './style.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

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
    loadChapter("./pages/html.html", "html");
    loadChapter("./pages/css.html", "css");
    loadChapter("./pages/js.html", "javascript");
    hljs.highlightAll();
});


