# DVI

Nuestro proyecto es una versión reducida de The Legend of Zelda. La historia es independiente de la de cualquier título de la saga, a pesar de que sí nos hemos inspirado en ella a la hora de desarrollarlo.

## Introducción

El aspecto general de nuestro juego ha tomado como base el título The Legend of Zelda: A Link to the Past. Consta de tres partes diferenciables: La casa de Link, el bosque y el castillo. El juego comenzará desde la casa de Link, donde el jugador ya dispondrá de la espada para atacar. Tras un paseo por el bosque, lleno de rupias y enemigos, Link llegará al castillo. Allí tendrá lugar la batalla final contra Ganon y sus esbirros.

## Diseño del juego

### Objetivo del juego

El objetivo principal del juego consiste en acabar con Ganon y, por consecuente, salvar a la princesa Zelda y al reino de Hyrule. Para lograrlo, el jugador dispondrá de las tres vidas de Link o puntos de vida (PVs). Si las pierde, finalizará la aventura y tendrá que comenzar desde el principio. En cambio, si el jugador consigue derrotar a Ganon, habrá ganado el juego y tendrá la opción de volver a jugar.

### Mecánicas principales y personajes

Para explicar las mecánicas del juego nos centraremos en los distintos elementos del juego:

* **Link**: Personaje controlado por el jugador. Su movimiento está definido por las flechas de dirección. Ataca con la espada mediante la tecla SPACE y puede interaccionar con objetos simplemente chocando con ellos. Al chocar con un enemigo, pierde 1 PV y entra durante un segundo en un estado de invulnerabilidad para poder evitar los siguientes ataques.

* **Enemigos**: Su movimiento y PVs varían en función del tipo de enemigo que sea. Todos pierden 1 PV cuando son golpeados por un ataque de la espada. Los que tienen varios PVs, también disponen del estado de invulnerabilidad anteriormente mencionado. El jugador recibirá puntos extra, medidos en rupias, si acaba con ellos.

  * **Deadrocks**: Su movimiento es lineal y horizontal. Tienen 1 PV y proporcionan 5 rupias extra.

  * **Soldados**: Se mantienen quietos hasta que Link pasa cerca y comienzan a perseguirle. Al ser atacados, retroceden y entran en invulnerabilidad. Tienen 2 PVs y proporcionan 10  rupias extra.

  * **Ganon**: Jefe final del juego. Al ser atacado, además de volverse invulnerable, se teletransporta a otro lugar de la sala y envía a sus esbirros (deadrocks y soldados) para atacar a Link. También dispara bolas de fuego. Acabar con él permite abrir la sala en la que está presa la princesa y es necesario para ganar la partida. Tiene 3 PVs y proporciona 100 rupias extra.

* **Objetos**: Link podrá interactuar con ellos por choque. Las rupias aumentan el contador de puntuación en 1 y están distribuidas por todo el mapa. Los cofres también pueden contener rupias, además de objetos que aumentarán la puntuación en 3.

* **NPCs**: Link podrá dialogar con ellos por choque. Los diálogos varían en función del personaje y para todos ellos, se avanza pulsando el botón ENTER. Entre los personajes disponibles, están el tío de Link, los soldados y la princesa Zelda.

* **Mapas y pantallas**: Todos los mapas incluyen colisionadores de forma que no todas las zonas del mapa son accesibles, ya sea por los mismos elementos del mapa (árboles, paredes) o por la reducción del juego original para nuestra versión. Link podrá viajar de una zona a otra atravesando el límite de una zona y teletransportándose a la siguiente. El juego también dispone de una pantalla de título al comienzo y dos de final, en función de si el jugador ha perdido o ganado la partida. Se pasa a la siguiente pantalla pulsando ENTER.

* **Elementos de HUD**: El jugador podrá ver en todo momento, salvo en las pantallas inicial y finales, los PV que le quedan a Link (representados por corazones) y la puntuación en rupias.

## Diseño de la implementación

Se han organizado las clases en carpetas, según su función y/o temática en el proyecto.

* **Game.js**: Desde aquí se cargan todas las clases creadas, las máscaras de colisión y los archivos externos para crear el juego (.json, .png y .mp3).

* **Enemies**: Aquí se encuentran las clases de los distintos enemigos del juego, especificando en cada uno su movimiento y características. Además, contamos con la clase auxiliar Enemykilled.js, que sirve para mostrar la animación de muerte de los enemigos, y el componente Defaultenemy.js. El componente incluye las características compartidas y comportamientos básicos de los enemigos. Entre ellos, tenemos las funciones de enemigo golpeado, retroceso y muerte.

* **Items**: Contiene los cofres, que se "abren" mediante un sensor, los objetos que pueden aparecer dentro de éstos, junto con su animación, y las rupias que también se recogen con un sensor.

* **Link**: Contiene la misma clase Link y la espada. En Link.js se encuentran todos los métodos para el manejo del personaje: Las colisiones diferenciadas según el objeto con el que choque, los step para controlar las animaciones de movimiento y el diálogo, y la animación de muerte. La clase Sword se crea siempre asociada a Link, de forma que se muevan a la vez. También contiene step para las animaciones y detecta cuándo ha colisionado con un enemigo.

* **Maps**: Aquí están todos los mapas utilizados en el juego, a excepción de InitialMenu y Endgame, que se encargan con la interacción de las pantallas de carga y final.

* **NPCs**: Contiene los npcs utilizados, junto con el componente Defaultnpc. Éste controla el sensor para que detecten que el jugador intenta hablar con ellos, controla los diálogos y la finalización de la conversación. En el caso de Zelda, al finalizar la conversación se reinicia el juego, ya que se ha cumplido la condición de victoria.

* **UI**: Contiene los elementos que no interaccionan con el personaje como tal y el HUD. Los diálogos constan del recuadro en el que aparecen. Los corazones son el indicador de número de vidas y, junto con el contador de rupias, se incluyen en el HUD, de forma que el jugador tenga la información siempre disponible.

* **Utils**: Aquí se encuentran los elementos que no encajan en ninguna de las carpetas anteriores. Entre ellas se encuentra el collider, que permite saltar entre escenas, la animación de la pantalla inicial, y la muestra de los diálogos.

## Equipo de trabajo y reparto de tareas

La mayoría de documentos han sido creados y modificados de forma conjunta por varios autores, ya que no ha habido una organización específica a la hora de repartir tareas.

```
Lidia Concepción: 19
```
```
Javier Cortés: 28
```
```
Pedro David González: 25
```
```
Manuel Hidalgo: 28
```

## Fuentes y referencias

**Sprites**: [https://www.spriters-resource.com/snes/legendofzeldaalinktothepast/](https://www.spriters-resource.com/snes/legendofzeldaalinktothepast/)

**Sonidos**: [https://www.sounds-resource.com/snes/legendofzeldaalinktothepast/sound/7573/](https://www.sounds-resource.com/snes/legendofzeldaalinktothepast/sound/7573/)

**Pantalla inicio**: [https://giphy.com/gifs/snes-loz-alttp-ImTtlWXHwOZ9e](https://giphy.com/gifs/snes-loz-alttp-ImTtlWXHwOZ9e)

**Pantalla final (game over)**: [Google Images](https://images.google.com/).

**Pantalla final (victoria)**: [http://www.zeldaelements.net/images/games/a_link_to_the_past/ending/25.gif](http://www.zeldaelements.net/images/games/a_link_to_the_past/ending/25.gif)
