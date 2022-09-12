/*
    Jquery Filter Based Methods
    ===========================
    Jquery Filter Methods is used to filter/search for specific element from the document(DOM).

    Syntax-
        1) $(selector).filter(selector);                // using selector filteration
        1) $(selector).filter(function (index){});      // using function filteration

    Filter Based Methods
    --------------------
    1) first()          --> to filters the first element.
    2) last()           --> to filters the last element.
    3) eq()             --> to filters the element having the match index value.
    4) not(paramer)     --> to filters all the elements not meeting the specified criteria.
    5) slice(paramter)  --> to filters the set of matched elements specified by range.
    6) fliter(paramter) --> to filters elements with some specific criteria.


*/

$('document').ready(function(){
    // filter method- first()
    $('.ul-list1').click(function(){
        $('.list1-item').first().addClass('highlightingListItems');
    });
    // filter method- last()
    $('.ul-list2').click(function(){
        $('.list2-item').last().addClass('highlightingListItems');
    });
    // filter method- eq()
    $('.ul-list3').click(function(){
        $('.list3-item').eq(2).addClass('highlightingListItems');
    });
    // filter method- not(paramter)
    $('.ul-list4').click(function(){
        $('.list4-item').not(':odd').addClass('highlightingListItems');
    });
    // filter method- filter(paramter)
    $('.ul-list5').click(function(){
        $('.list5-item').filter(':odd').addClass('highlightingListItems');
    });
    // filter method- slice(paramter)
    $('.ul-list6').click(function(){
        $('.list6-item').slice(0, 3).addClass('highlightingListItems');
    });
});