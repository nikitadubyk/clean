$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',

        responsive: [
            {
              breakpoint: 992,
              settings: {
              dots: true,
              arrows: false,
              }
            }
          ]
    });

    $('.feedback__inner').slick({
        adaptiveHeight: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',

        responsive: [
            {
              breakpoint: 992,
              settings: {
              dots: true,
              arrows: false,
              }
            }
          ]
    });

    // плавный скролл
    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    //modal 


    $('[data-modal=contacts]').on('click', function() {
        $('.overlay, #contacts').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #contacts, #thanks').fadeOut('slow');
    });
    

    // const modalTrigger = document.querySelectorAll('[data-modal]'),
    // modal = document.querySelector('.overlay'),
    // modalCloseBtn = document.querySelector('[data-close]');

    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.classList.add('show');
    //         modal.classList.remove('hide');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });
    
    // function closeModal() {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // }

    // modalCloseBtn.addEventListener('click', closeModal);

    // modal.addEventListener('click', (e) => {
    //     if (e.target === modal) {
    //         closeModal();
    //     }
    // });

    // document.addEventListener('keydown', (e) => {
    //     if (e.code === "Escape" && modal.classList.contains('show')) {
    //         closeModal();
    //     }
    // });

    // tabs
    
    window.addEventListener('DOMContentLoaded', () => {

        const tabs = document.querySelectorAll('.tabs__header'),
              tabsContent = document.querySelectorAll('.tabs__content'),
              tabsParent = document.querySelector('.tabs__headers');

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabs__header_active');
            });
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabs__header_active');
        }

        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabs__header')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    });

    //validate

    // function validateForms(form) {
    //     $(form).validate({
    //         rules: {
    //             name: 'required',
    //             phone: {
    //                 required: true,
    //                 minlength: 10
    //             }
    //         },
    //         messages: {
    //             name: "Введите ваше имя",
    //             phone: {
    //                 required: "Нам нужен ваш номер для связи с вами",
    //                 minlength: jQuery.validator.format("Введите не менее {0} символов!")
    //               }
    //           }
    //     });
    // }
    // validateForms('#contacts-form');
    // validateForms('#contacts');

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#contacts').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });


    $("form").each(function () {
        $(this).validate({
            rules: {
                name: 'required',
                phone: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: "Введите ваше имя",
                phone: {
                    required: "Нам нужен ваш номер для связи с вами",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                    }
                },
          submitHandler: function (form) {
            $.ajax({
              type: "POST",
              url: $(form).attr('action'),
              data: $(form).serialize()
            }).done(function () {
                $(this).find("input").val("");
                $('#contacts').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');
                $('form').trigger('reset');
            });
            return false;
          }
        });
      });

    // hamburger

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    });

  });


  