Managing javascript in browser is tricky because code excution blocks other browser processes such as UI painting. 
Evert time a <script> tag is encountered, the page must stop amd wait for the code to download(if external) and execute before continuing to process the rest of the page. 

# There are, however several ways to minimise the performance impact of Javascript.
1. pull all <script> tag at the bottom of the page
2. group sripts together. the fewer the <script> tagon the page, the faster the page can be loaded and become interactive
3. use [defer] attribute in <script>