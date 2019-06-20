(function($, window) {
  $(function() {
    // 課題１
    $('h2').remove();
    // 課題２
    $('ul').append('<li>メソッド</li>')
    // 課題４
    // $('#index').find('li').each(function(){
    //   alert($(this).text().length);
    // });
    // 課題５
    $('#index').find('li').each(function(){
      $(this).append('[$(this).text()].length + 文字');
    })
  });
})(jQuery, window);