$(document).ready(function() {
    $('.timelines, .message, .message-content, .top-nav-menu').hide();
    $('.main-content').hide();
    $('.timelines-c').click(function() {
        $('.home, .message,.message-content').hide('slow');
        $('.timelines').show('slow');
        $('.timelines-c').addClass('active');
        $('.home-c, .message-c').removeClass('active');
    });
    $('.home-c').click(function() {
        $('.home').show('slow');
        $('.timelines, .message, .message-content').hide('slow');
        $('.home-c').addClass('active');
        $('.timelines-c, .message-c').removeClass('active');
    });
    $('.message-c').click(function() {
        $('.home, .timelines, .message-content').hide('slow');
        $('.message, .message-main').show('slow');
        $('.message-c').addClass('active');
        $('.timelines-c, .home-c').removeClass('active');
    });
    $('#message-content').click(function() {
        $('.home, .timelines').hide('slow');
        $('.message-main').slideUp('slow');
        $('.message-content').slideDown('slow');
        $(this).addClass('active');
        $('.timelines-c, .home-c').removeClass('active');
    });
    $('#top-button').click(function() {
        $('.top-nav-menu').slideToggle('slow');
    });
    $('.bt').click(function() {
        $('.main-content').fadeToggle('slow');
        $('.not-toggle').fadeToggle('active');
    })
    $('.bts').click(function() {
        $('.main-content').toggleClass('full-scr');
    });
});
