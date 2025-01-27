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


document.addEventListener('DOMContentLoaded', (event) => {
      hljs.highlightAll();
  });


