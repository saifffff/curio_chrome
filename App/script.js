
/* 
***TASK*** 
Create a new content script file that will inject your code into all web pages.
In the content script file, calculate the reading time of the current web page.
Send the reading time to your extension's HTML page using a message passing API.
In your extension's HTML page, receive the reading time message and display it to the user.
*/



 



const rt = 200;
console.log("reading time : ",rt);
// Send the reading time to the extension's HTML page.
chrome.runtime.sendMessage({ rt });

