/*
    DOM HTMLElement Object Concepts
    ===============================
    DOM HTMLElement Objetc provides some HTML elements as object which is nothing
    but the accessing of DOM of HTML elements.

    Some HTML Objects
    -----------------
    a)  document.anchors                --> returns all <a> element that name attributes.
    b)  document.applets                --> deprecated
    c)  document.baseURI                --> returns the absolute base URI of the document.
    d)  document.body                   --> returns the <body> element.
    e)  document.cookie                 --> returns the document cookie.
    f)  document.doctype                --> returns the document's doctype.
    g)  document.documentElement        --> returns the <html> element.
    h)  document.documentMode           --> returns the mode used the by the browser.
    i)  document.documentURI            --> returns the URI of the document.
    j)  document.domain                 --> returns the domain name of the document server.
    k)  document.embeds                 --> returns the <embed> element.
    l)  document.forms                  --> returns the <form> element as a HTMLCollection.
    m)  document.head                   --> returns the <head> element.
    n)  document.images                 --> returns the <img> element.
    o)  document.implementation         --> returns the DOM implementation.
    p)  document.inputEncoding          --> returns the document's encoding.
    q)  document.lastModified           --> returns the date and time the document was last updated.
    r)  document.links                  --> returns the <area> and <a> elements that have 
                                            a 'href' attribute as a HTMLCollection.
    s)  document.readyState             --> returns the loading state of the document.
    t)  document.referrer               --> returns the URI of the referrer(the linking document).
    u)  document.scripts                --> returns the <script> elements as a HTMLCollection.
    v)  document.title                  --> returns the <title> element.
    w)  document.strictErrorChecking    --> returns if error checking is enforced.
    x)  document.URL                    --> returns the complete URL of the document.


*/

// defining the 'use strict' statement
'use strict';

console.log(document.scripts); // to see the scripts as a HTMLCollection
console.log(document.links);   // to see the links as a HTMLCollection
console.log(document.URL);    // to see the file URL
console.log(document.title);  // to see the <title> tag
console.log(document.head);  // to see the <title> tag
console.log(document.forms);  // to see the <form> tag as a HTMLCollection
console.log(document.body);  // to see the <body> tag
console.log(document.documentURI);  // to see the document URI
console.log(document.documentElement);  // to see the whole document
console.log(document.domain);       // to see the domain 