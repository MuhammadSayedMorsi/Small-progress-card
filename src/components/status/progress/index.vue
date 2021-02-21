<template>
  <div class="progress">
    <div class="precent">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div class="number">
        <Icon type="arrow" width="18" height="18" class="arrow" />
        <span class="how-percent">90%</span>
        <div class="km">
          <Icon type="road" class="power" />
          <span>550KM</span>
        </div>
      </div>
      <div class="text">
        <p>Full in: 25 min.</p>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../../Global/Icon.vue'
export default {
  name: 'Progress',
  components: {
    Icon,
  },
}
</script>

<style scoped lang="scss">
.progress {
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

  .precent {
    position: relative;
    width: 150px;
    height: 150px;

    .text {
      text-align: center;

      p {
        font-size: 12px;
        color: var(--main-black);
        font-weight: normal;
      }
    }

    svg {
      position: relative;
      width: 150px;
      height: 150px;
      transform: rotate(106deg);

      circle {
        width: 150px;
        height: 150px;
        fill: none;
        stroke-width: 10;
        stroke: var(--green);
        transform: translate(5px, 5px);
        stroke-dasharray: 700;
        stroke-dashoffset: 300;
        stroke-linecap: round;

        &:first-child {
          stroke-dashoffset: calc(440 - (440 * 90) / 100);
          stroke: var(--green-washed);
        }

        &:nth-child(2) {
          stroke: blue;
          stroke: var(--green-bright);
        }
      }
    }

    .number {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .arrow {
        width: 18px;
        height: 18px;
        transform: rotate(360deg);
      }

      .how-percent {
        display: block;
        margin: 10px auto;
        font-size: 14px;
        color: var(--black);
        font-weight: normal;
      }

      .km {
        display: flex;
        justify-content: center;
        align-items: center;

        .power {
          width: 18px;
          height: 18px;
          transform: rotate(0deg);
        }

        span {
          font-size: 14px;
          color: var(--black);
          font-weight: normal;
        }
      }
    }
  }
}
</style>
