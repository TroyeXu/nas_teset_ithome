<template lang="pug">
  .col-container.l-header
    .col-row.h-align-items-center
      a.l-header__bars.h-none.h-md-block
        i.fas.fa-bars.h-none.h-md-inline
      h1.l-header__logo
        a.h-hideText(href="/index.html") logo
      ul.l-header__menu.h-ml-auto.h-flex-row.h-flex.h-md-none
        li
          a(href="index.html") 首頁
        li
          a(href="product.html") 甜點
        li
          a(href="login.html") 登入
      a.l-header__cart(href="cart.html")
        i.fas.fa-shopping-cart
</template>
