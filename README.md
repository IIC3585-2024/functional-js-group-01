# Tarea 1 - JavaScript Funcional

Esta tarea consiste en crear una pequeña aplicación que convierta un archivo Markdown (.md) a HTML, utilizando programación funcional en JavaScript.

En general la aplicación realiza las siguientes funcionalidades de conversión:

- Headings
- Paragraphs
- Line Breaks
- Emphasis
    - Bold
    - Italic
    - Bold and Italic
- Blockquotes
    - Blockquotes with Multiple Paragraphs
    - Blockquotes with Other Elements
- Lists
    - Ordered Lists
    - Unordered Lists
- Code Blocks
- Code
- Horizontal Rules
- Links
    - Formatting Links
- URLs and Email Addresses
- Images
- Escaping Characters

## Contenido y funciones
El código del programa se encuentra en la carpeta ```src```. A continuación se detalla su contenido.

- ```src/dicts```: contiene los diccionarios que guardan las correspondencias entre las diferentes etiquetas markdown y su expresión regular, así como sus equivalencias en html.
- ```src/parsers```: Contiene las funciones (parsers) que se encargan de transformar el input. 
    - ```src/parsers/codes```: Contiene parsers de conversión de expresiones de código (ej: codes, codeBlocks).
    - ```src/parsers/externals```: Contiene parsers de conversión de elementos externos (ej: images, links).
    - ```src/parsers/lists```: Contiene parsers de conversión de listas.
- ```src/helpers```: Se encuentran en el los siguientes archivos
    - ```src/helpers/compose.js```: Contiene la función **parseCompose** que se detallará más adelante.
    - ```src/helpers/pipe.js```: Contiene la función **parsePipe** que se detallará más adelante.
- ```src/converter.js```: Contiene la función **convertMdToHTML** que se detallará más adelante.
- ```src/index.js```: Se encarga del renderizado y manipulación de los elementos html del programa.

Además de lo anterior se encuentra ```src/styles/style.css``` que contiene los estilos de la aplicación y el archivo ```index.html``` que contiene el html del programa.

Por último se detalla brevemente las funciones más importantes y la lista de parsers incorporados:

- **convertMdToHTML**: Utiliza una serie de funciones para analizar y procesar diferentes elementos del Markdown. La función aplica estos analizadores en un orden específico para garantizar una conversión correcta y completa del Markdown a HTML.

- **parsePipe**: función de orden superior que toma una lista de funciones analizadoras (parsers) como entrada y devuelve una nueva función. Esta función resultante toma un texto como entrada y aplica secuencialmente cada una de las funciones analizadoras a ese texto.

- **parseCompose**:  función de orden superior que toma dos funciones analizadoras como entrada y devuelve una nueva función. Esta función resultante toma un texto como entrada y aplica primero la primera función y luego la segunda función  al texto. Proporciona una forma de componer dos funciones para aplicarlas secuencialmente a un texto.

- **Parsers**:
    - parseCodeBlocks
    - parseCodeTags
    - parseImages
    - parseLinks
    - parseBlockQuotes
    - parseHeaders
    - parseHorizontalRules
    - parseParagraphs
    - parseTags
    - parseEscapeChars




## Instrucciones de ejecución

### Forma larga:  

1. Abre tu navegador web preferido (por ejemplo, Google Chrome, Mozilla Firefox, Safari).  
2. En el navegador, ve al menú "Archivo" y selecciona "Abrir archivo" (el nombre del menú puede variar según el navegador).
3. Busca y selecciona el archivo **index.html** y ábrelo.
4. El navegador mostrará el contenido HTML del paso 3 y lo interpretará como una página web.
5. Listo! Prueba escribiendo en markdown y visualizalo en tiempo real (NO TE OLVIDES DE LAS BUENAS PRÁCTICAS)

### Forma corta:
1. Haz doble click en el archivo **index.html**.  
2. Listo! Prueba escribiendo en markdown y visualizalo en tiempo real (NO TE OLVIDES DE LAS BUENAS PRÁCTICAS)

## Referencias
https://www.markdownguide.org/basic-syntax/#headings

