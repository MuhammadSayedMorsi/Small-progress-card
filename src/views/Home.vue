<template>
  <div class="home">
    <!-- Components examples go here -->
    <section class="status-holder">
      <div class="header">
        <div class="head">
          <h1>Status</h1>
          <span>Version 312.ca</span>
        </div>
        <hr />
      </div>
      <div class="progress-wrapepr">
        <ProgressBar />
        <div class="info">
          <Temp />
          <CarStatus />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProgressBar from '../components/status/progress'
import CarStatus from '../components/status/carStatus'
import Temp from '../components/status/temperature'
export default {
  name: 'Home',
  components: {
    ProgressBar,
    CarStatus,
    Temp,
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  @include mobile {
    padding: 20px;
  }

  .status-holder {
    width: 527px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 50px auto;
    box-shadow: 4px 4px 22px rgba(70, 61, 61, 0.15);
    border-radius: 8px;
    padding: 24px;
    position: relative;

    @include mobile {
      width: 100%;
    }

    .header {
      width: 100%;

      .head {
        display: flex;

        h1 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0;
          color: var(--main-black);
        }

        span {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 8px;
          color: var(--grey);
          font-weight: 600;
        }
      }

      hr {
        border: 1px solid var(--line);
      }
    }

    .progress-wrapepr {
      width: 100%;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;

      @include mobile {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .info {
          width: 100%;
          padding-top: 30px;
        }
      }
    }
  }
}
</style>
