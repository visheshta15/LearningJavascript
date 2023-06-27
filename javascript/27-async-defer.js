// async and defer are boolean attribute which are used along with script tags to load the external scripts efficiently into our webpage

// when u load a webpage then there are two major thing will be happening
// 1.html parsing
// 2. loading of the scripts 
// 2a. fetching the scripts from the network
// 2b. actually execuating the script line by line 

// [1]normal 

html parsing goes on 
*--------------*                     *-------------*
               *----------**=========*
// as soon as the script tag encounter, the scripts are fetched from the network , there and then the scripts are executed and after that html parsing continues

// [2]async
html parsing goes on 
*--------------*          *-------------*
    *----------**=========*
// as soon as the script tag encounter, the scripts are fetched in async manner from the network in parallel, there and then the scripts are executed and after that html parsing continues
// -- async does not gaurantee the order of execution of scripts

// [2]defer
html parsing goes on 
*---------------------------*
    *----------*             *=========*
// as soon as the script tag encounter, the scripts are fetched in async manner from the network in parallel, and only executed when the html parsing is done-- maintain the order of execution of the scripts 
