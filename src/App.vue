<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --main-black: #302e2c;
  --primary: #e11936;
  --grey: #9f9eb1;
  --green: #19df40;
  --green-bright: #57ff78;
  --green-washed: #d1f9d9;
  --line: #e0e0e0;
  --white: #ffffff;
  --black: #000000;
  --white: #ffffff;
}

html {
  font-size: 12px;

  @include tablets {
    font-size: 14px;
  }

  @include laptops {
    font-size: 15px;
  }

  @include desktops {
    font-size: 16px;
  }

  @include desktops4k {
    font-size: 18px;
  }
}

body {
  margin: 0;

  &.modalOpenned {
    overflow: hidden;
  }
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-black);

  &.modalOpenned {

    @include laptops {
      margin-right: 17px; /*https://www.textfixer.com/tutorials/browser-scrollbar-width.php*/
    }

    @include desktops {
      margin-right: 17px; /*https://www.textfixer.com/tutorials/browser-scrollbar-width.php*/
    }

    @include desktops4k {
      margin-right: 17px; /*https://www.textfixer.com/tutorials/browser-scrollbar-width.php*/
    }
  }
}
</style>
