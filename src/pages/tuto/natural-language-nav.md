On a l'habitude de voir des menus en bandeau, qui contient un onglet par page de contenu que l'on veut mettre en avant.
Mais il ne faut pas hésiter à utiliser un paragraphe comme interface de navigation, lorsque le contexte s'y prête.

Par exemple, pour la page d'accueil d'un site de type portfolio.

Premièrement j'utilise la balise nav, qui indique que le contenu que je vais y imbriquer joue le rôle d'interface de navigation (c'est utile pour les malvoyants qui utilisent un lecteur d'écran par exemple)

Ensuite, je réfléchis aux sections de contenus auxquelles je veux fournir un accès rapide: biographie et formation, compétences, publications, oeuvres, récompenses. 
Puis je trouve quelques phrases pour réunir toutes ces termes dans un paragraphe de présentation

```html
<nav>
    Bonjour et bienvenue sur mon site.
    Je m'appelle Lilian Schwarz et je suis une artiste et informaticienne.
    <a>Mon parcours et ma formation</a> en partie autodidacte m'ont permis de développer des <a>compétences</a> interdisciplinaires atypiques autour de la création et des technologies numériques.
    Actuellement en poste aux Laboratoires Bell, mes travaux explorent l'usage du code comme moyen d'expression artistique.
    Ces recherches ont donné lieu à des <a>publications scientifiques</a> et à des <a>oeuvres audiovisuelles</a>, dont un certain nombre ont été recompensées par des <a>prix et distinctions</a> internationales.
    N'hésitez pas à <a>me contacter</a>
</nav>

```