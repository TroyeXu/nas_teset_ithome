<template lang="pug">
section
    .l-registered
      .col-container
        .col-row.h-flex-lg-column.h-pt-4.h-pb-4
          .l-registered__title.h-flex.h-align-items-center.h-mb-lg-4
            img(src="../assets/img/logo-light.svg",width="40",height="40")
            h3.h-inline 訂閱你我的甜蜜郵件
          form(action="/").l-registered__form.h-flex.h-align-content-between
            i.fas.fa-envelope.l-registered__form__icon
            input(type="text").l-registered__form__text
            button.l-registered__form__submit.h-ml-auto
              i.fas.fa-arrow-right

    .l-footer
      .col-container
        .col-row.h-mb-4
          .l-footer__contact
            .l-footer__contact__logo.h-mb-md-4
              img(src="../assets/img/logotype-lg-dark.svg",width="171",height="26")
            ul.l-footer__contact__content
              li
                a(href="tel:+0712345678")
                | 07-1234-5678

              li
                a(href="mailto:sweetaste@email.com")
                | sweetaste@email.com
              li
                a(href="https://www.google.com.tw/maps/place/800%E9%AB%98%E9%9B%84%E5%B8%82%E6%96%B0%E8%88%88%E5%8D%80/@22.6284345,120.2987625", target="_blank") 800 高雄市新興區幸福路 520 號
          .l-footer__title.h-md-none
            img(src="../assets/img/footer__title.svg",witdt="59",height="218")
        .col-row.h-align-items-end.h-align-items-md-start.h-flex-md-column
          ul.l-footer__social.h-flex.h-mb-md-3
            li
              a(href="#")
                img(src="../assets/img/ic-line@.svg",width="32",height="32")
            li
              a(href="#")
                img(src="../assets/img/ic-facebook.svg",width="32",height="32")
          .l-footer__copyright © 2018 Sweetaste* All Rights Reserved
</template>
