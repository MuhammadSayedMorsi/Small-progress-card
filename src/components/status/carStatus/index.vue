<template>
  <div class="car-status">
    <h3>Car status:</h3>
    <div class="hold-btns">
      <button>
        <Icon type="stationary" width="26" height="20" />
        <span> Stationary </span>
      </button>
      <button>
        <Icon type="locked" width="26" height="20" />
        <span> Locked </span>
      </button>
      <button>
        <Icon type="sentry" width="26" height="20" />
        <span>Sentry on</span>
      </button>
    </div>
  </div>
</template>
<script>
import Icon from '../../Global/Icon.vue'
export default {
  name: 'Car-Status',
  components: {
    Icon,
  },
}
</script>
<style lang="scss" scoped>
.car-status {

  h3 {
    font-size: 14px;
    color: var(--main-black);
    font-weight: 600;
  }

  button {
    width: 95px;
    height: 64px;
    background: var(--white);
    border: none;
    outline: none;
    margin-right: 8px;
    box-shadow: 4px 4px 22px -9px rgba(70, 61, 61, 0.15);
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    span {
      display: block;
      font-size: 14px;
      color: var(--main-black);
      font-weight: normal;
    }
  }
}
</style>
