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
    $('div').click(function(){
        $('.ul-list1 > li').first().addClass('highlightingListItems');
    })
    $('div').click(function(){
        $('.ul-list2 > li').last().addClass('highlightingListItems');
    })
    $('div').click(function(){
        $('.ul-list3 > li').eq(2).addClass('highlightingListItems');
    })
    $('div').click(function(){
        $('.ul-list4 > li').not(':even').addClass('highlightingListItems');
    })
    $('div').click(function(){
        $('.ul-list5 > li').not(':even').addClass('highlightingListItems');
    })
    
})