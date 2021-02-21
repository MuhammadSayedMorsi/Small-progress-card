<template>
  <div class="temerature">
    <h3>Temperature:</h3>
    <div class="hold-checkbox">
      <div class="p-right">
        <input type="radio" />
        <span> Internal: 24° </span>
      </div>
      <div>
        <input type="radio" />
        <span> External: 15° </span>
      </div>
    </div>
    <hr class="short-line" />
  </div>
</template>

<style lang="scss" scoped>
.temerature {

  h3 {
    font-size: 14px;
    color: var(--main-black);
    font-weight: 600;
  }

  .hold-checkbox {
    display: flex;

    .p-right {
      padding-right: 32px;
    }

    input[type='radio'] {
      background-color: var(--white);
      border-radius: 50%;
      border: 1px solid var(--black);
      cursor: pointer;
      height: 14px;
      position: relative;
      width: 14px;
      -webkit-appearance: none;
      outline: none;
    }

    input[type='radio']:after {
      background-color: var(--black);
      content: '';
      border-radius: 100%;
      display: block;
      left: 2.8px;
      position: relative;
      top: 3px;
      width: 6.53px;
      height: 6.53px;
    }

    input[type='radio']:checked:after {
      background: var(--primary);
      outline: none;
    }

    span {
      font-size: 14px;
      color: var(--main-black);
      font-weight: normal;
    }
  }

  .short-line {
    width: 154px;
    margin: 20px 0;
    border: 1px solid var(--line);
  }
}
</style>
