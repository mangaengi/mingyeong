/* Click 버튼 클릭시 모달창 */
const open = document.querySelector("#My_Page");
const close = document.querySelector("#close");
const modalBox = document.querySelector("#modalBox");

open.onclick = function() {
    modalBox.classList.add("active")
} 
close.onclick = function() {
    modalBox.classList.remove("active")
}

/* 이미지 목업 - 독도 전시관  */
$(function(){
  let t =0;
  function contents(){
    if(t<3){
      t++;
    }else {
      t=0;
    }
    $(" figure > .p_img_dokdo").animate({top: -130 * t + "px"},{height: 100 + "%"})
  }
  setInterval(contents,2800)
})

/* 이미지 목업 - ks_벽지  */
$(function(){
  let t =0;
  function contents(){
    if(t<4){
      t++;
    }else {
      t=0;
    }
    
    /* 이미지 목업 - pc  */
    $(" figure > .p_img_ks").animate({top: -130 * t + "px"},{height: 100 + "%"})

    /* 이미지 목업 - mobile  */
    $(" figure > .m_img_ks").animate({top: -200 * t + "px" },{height: 100 + "%"})
  }
  setInterval(contents,2800)
})


/* 이미지 목업 - 삼청각  */
$(function(){
  let t =0;
  function contents(){
    if(t<6){
      t++;
    }else {
      t=0;
    }

    /* 이미지 목업 - pc  */
    $(" figure > .p_img_smn").animate({top: -160 * t + "px"},{height: 100 + "%"})

    /* 이미지 목업 - mobile  */
    $(" figure > .m_img_smn").animate({top: -250 * t + "px" },{height: 100 + "%"})
  }
  setInterval(contents,2800)
})


/* contact */
function sendEmailForm(form) {
    if ( form._replyto.value.length == 0 ) {
      form._replyto.focus();
      return;
    }
    
    if ( form.message.value.length == 0 ) {
      form.message.focus();
      return;
    }

    form.submit();
  }

/* 사이드메뉴 */
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('header').height()){
            $('.Side_menu').addClass('on')
        }else {
            $('.Side_menu').removeClass('on')
        }
  
        $(window).resize(function(){
            let win = $(window).width();
            
            if (win < 960) {
                $('header').addClass('bg')
            } else {
                $('header').removeClass('bg')
            }
        })
    })
  })

/* 모바일 고정헤드 */
$(function(){
  let $header = $('nav'),
      $txt1 = $('.scrollTop')

  let headerTop = Math.floor($header.offset().top);
  

  $(window).scroll(function(){
      let i = Math.floor($(this).scrollTop());
      $txt1.text(i)

      if (headerTop < i) { 
          $header.addClass('on')
          $('.btnTop').fadeIn()
      } else {
          $header.removeClass('on')
          $('.btnTop').fadeOut()
      }
  });
});
