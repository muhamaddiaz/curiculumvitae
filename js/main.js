$(document).ready(function() {
    $('.timelines, .message, .message-content, .top-nav-menu').hide();
    $('.main-content').hide();
    $('.timelines-c').click(function() {
        $('.home, .message,.message-content').hide('slow');
        $('.timelines').show('slow');
        $('.timelines-c').addClass('aktif');
        $('.home-c, .message-c').removeClass('aktif');
    });
    $('.home-c').click(function() {
        $('.home').show('slow');
        $('.timelines, .message, .message-content').hide('slow');
        $('.home-c').addClass('aktif');
        $('.timelines-c, .message-c').removeClass('aktif');
    });
    $('.message-c').click(function() {
        $('.home, .timelines, .message-content').hide('slow');
        $('.message, .message-main').show('slow');
        $('.message-c').addClass('aktif');
        $('.timelines-c, .home-c').removeClass('aktif');
    });
    $('#message-content').click(function() {
        $('.home, .timelines').hide('slow');
        $('.message-main').slideUp('slow');
        $('.message-content').slideDown('slow');
        $(this).addClass('aktif');
        $('.timelines-c, .home-c').removeClass('aktif');
    });
    $('#top-button').click(function() {
        $('.top-nav-menu').slideToggle('slow');
    });
    $('.bt').click(function() {
        $('.main-content').fadeToggle('slow');
        $('.not-toggle').fadeToggle('fast');
    })
    $('.bts').click(function() {
        $('.main-content').toggleClass('full-scr');
    });
});