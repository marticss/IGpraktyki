# praktyki_infinitygroup

#instalation
no istanation required

#running projekt
open index.html in any browser

#todos

- dodać slick slider custom dots class / uzyć slick settings (http://kenwheeler.github.io/slick/)

- istnieje moliwość, ze na urzadzeniach o mniejszej rozdzielczosci ekranu
napis INFINIY GROUP w headerze wejdzie na ciemne tło i będzie mało czytelny. Lepszy byłby jakis jasny kolor w tym miejscu.

-  zmienic png w products/ wyrównać ich wielkości i wycentrować.
   nie sa równe w projekcie i przez to źle sie centrują w kodzie. DONE

- dodac dynamiczny kontent w prducts section / 

- poprawić mapę. z lewej strony błąd grafika. DONE

- pliki css nie są minifikowane w celu zachowania czytelnosci https://cssminifier.com/ 

- zmniejszyć wagę png https://tinypng.com/
  Internet Explorer 6 ignoruje transparency png i wyświetla solid kolor. Po uyciu TinyPNG ten problem znika.

- target="_blank" use or not use? 
  moze sprawić ze strona sie nie zwaliduje. wedle specyf. W3C to uzytkownik ma zadecydować czy chce otworzyc strone w nowym oknie czy nie.

- greenButton.letUsKnow {float: right;
transform: translateY(-46px);
nierówna wartość bo h1 contact i button let us know 
schodzą się do siebie na małych 
ekranach i trzeba to było idealnie dopasować

- scroll to check point nie działa. 
  /jquery $("window").scroll()/ ad brakepoints in: 1/5, 2/5, 3/5 ,4/5, 5/5 poprawic

- behavior: smooth; nie działa ani przy banerze cookies ani przy scroll poprawic

- poprawić key frames na PRAKTYKI i INFINITY GROUP. animacja powinna krązyć. wjezdzać z lewej znikać uciekając do prawej.

- flex nie działa przy floating input. sprawdzic dlaczego i jak to naprawić. 

- dodać validator adresu email / ("input[type='email']") if @ true else false error
  + validator numeru / ("input[type='number']") .checkValidity() 
  (https://www.w3schools.com/Js/js_validation_api.asp)
  pseudoselektory(http://ach-te-internety.pl/2017/09/28/czy-znasz-te-pseudoselektory-css/)

#newthings

- ul {margin: 20px auto 0;} taki zapis jej poprawny. gora, boki, dol.  
  (https://developer.mozilla.org/en-US/docs/Web/CSS/margin)

- header nav ul li:last-child a {border: none;}
a jest child li dlatego li:last-child a - nie li a:last child

- blockquotes is good practic !!!
do nauki:
(http://webdevzoom.com/styling-quotes-blockquote-and-pull-quote-using-css/)
(https://www.w3schools.com/cssref/pr_gen_quotes.asp)
(https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/)

- flex or grid?

(https://css-tricks.com/grid-to-flex/)
(https://css-tricks.com/dont-overthink-flexbox-grids/) 
(https://developer.mozilla.org/pl/docs/Web/CSS/box-sizing)

- Box-sizing:

propertys:
content-box - domyslny CSS width i height tylko zawartość, ale nie border, margin lub padding.
border-box - IE uzywa domyślnie if brak zgodności ze standardem
             width i height zawartość + border, bez margin i padding.
padding-box - width i height zawartość + padding, bez margin i border.
+global
initial - domyślna wartość
inherit - dziedziczy wartości rodzica


- white-space:

 normal; bez nowych linii, bez spacji z zawijaniem jak zapisano
 nowrap; bez nowych linii, bez spacji bez zawijania nawet jezeli w html jest zapisane inaczej
 pre; zachowany zapis jak w html/ nowe linie+spacje+bez zawijania
 pre-line; zachowane nowe linie i zawijanie/ bez spacji 
 pre-wrap; zachowane nowe linie, spacje i z zawijaniem
 +global initial; inherit; unset;

(https://www.w3schools.com/cssref/pr_text_white-space.asp)

- background-image: no-repeat; nie działa- obrazek znika
    background: no-repeat; działa

    (https://css-tricks.com/almanac/properties/b/background/)
    
    no-repeat jest property background a nie background-image
    background-image jest property background.

- overflow: hidden; zadba by nie pojawiał się poziomy scroll

- dlaczego nie naley uzywać placeholder
    (https://www.smashingmagazine.com/2018/06/placeholder-attribute/)

- @keyframes animation-timing-function: cubic-brazier (.0, .0, .0, .0)
    fantastyczne narzędzie do ustalania własnej prędkości ruchu animacji 
    (http://cubic-bezier.com/#.17,.67,.83,.67)

    animation-duration: s;
    animation-fill-mode: ;
    animation-direction: ;
    animation-delay: s;
    animation-timing-function: ;

  - scrollTop
    (https://developer.mozilla.org/pl/docs/Web/API/Element/scrollTop)
    (https://www.w3schools.com/jquery/css_scrolltop.asp)

 - &times; zamiast x
 (https://twitter.com/wesbos/status/499245255703949312/photo/1?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwesbos.com%2Ftimes-html-entity-close-button%2F)