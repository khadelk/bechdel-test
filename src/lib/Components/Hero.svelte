<script>
  // import images for the film section from $lib/assets and create a film array with the image and the percentage range for when it should appear
  import realpain from '$lib/assets/a-real-pain.jpg'
  import beau from '$lib/assets/beau.png'
  import challengers from '$lib/assets/challengers.jpg'
  import stillhere from '$lib/assets/im-still-here.jpeg'
  import kimi from '$lib/assets/kimi.jpg'
  import substance from '$lib/assets/substance.jpg'
  import brutalist from '$lib/assets/brutalist.webp'

  let sectionBounds = {}
  let wrapper
  let windowHeight
  let scrollY = 0
  let percentage = $state(0)
  const hero = [
    {
      h1: 'What is the Bechdel Test?',
      start: 0,
      end: 50,
    },
    {
      h1: 'And why does it matter?',
      start: 50,
      end: 100,
    },
  ]
  const films = [
    { image: realpain, start: 0, end: 60, top: -110, left: -120, zIndex: 2 },
    { image: beau, start: 0, end: 60, top: 220, left: 50, zIndex: 7 },
    { image: challengers, start: 0, end: 60, top: -140, left: 60, zIndex: 3 },
    { image: stillhere, start: 0, end: 60, top: 0, left: 0, zIndex: 6 },
    { image: kimi, start: 0, end: 60, top: 140, left: -100, zIndex: 1 },
    { image: substance, start: 0, end: 60, top: 140, left: 180, zIndex: 1 },
    { image: brutalist, start: 0, end: 60, top: -100, left: 200, zIndex: 2 },
  ]

  // TODO: calculate the scroll position and update the hero text accordingly
  function handleScroll(event) {
    // Get info about the section position and height
    sectionBounds = wrapper?.getBoundingClientRect()

    // Calculate total scroll percentage from 0 to 100
    const documentHeight = document.documentElement.scrollHeight
    percentage = (scrollY / (documentHeight - windowHeight)) * 100
  }

  function calculateRange(start, end) {
    let state = 'before-range'

    if (percentage >= start && percentage <= end) state = 'in-range'
    if (percentage > end) state = 'after-range'

    return state
  }
</script>

<svelte:window on:scroll={handleScroll} bind:innerHeight={windowHeight} bind:scrollY />
<section bind:this={wrapper} class="hero">
  <div class="inner">
    <div class="hero-content">
      <div class="title">
        {#each hero as { h1, start, end }}
          <div class="h1-container">
            <h1 class={calculateRange(start, end)}>{h1}</h1>
          </div>
        {/each}
      </div>
      <div class="film-wrapper">
        {#each films as { image, start, end, left, top, zIndex }}
          <img
            src={image}
            class={calculateRange(start, end)}
            alt="Film poster"
            style={`--left: ${left}px; --top: ${top}px; --z-index: ${zIndex} --percentage: ${percentage}%`}
          />
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/global.scss' as *;
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
    text-align: center;
    height: calc(100vh * 4);
  }

  .inner {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
  }

  .hero-content {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .title {
    position: relative;
    width: 50%;
    padding: 4rem 0 0 3rem;
    text-align: left;
    .h1-container {
      position: absolute;
    }
    .before-range {
      opacity: 0;
      transform: translateY(20px);
    }
    .in-range {
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }
    .after-range {
      opacity: 0;
      transform: translateY(-20px);
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }
  }

  h1 {
    font-size: 6rem;
    margin: 0 0 1rem 0;
    font-weight: 700;
  }

  .film-wrapper {
    position: relative;
    width: 50%;
    img {
      width: 200px;
      border-radius: 1rem;
      @include absolute-center;
      transform: translate(var(--left), var(--top));
      z-index: var(--z-index);
    }
    .before-range {
      opacity: 0;
      // transform: translateY(20px);
    }
    .in-range {
      --normalize-start: calc(var(--percentage) - var(--start));
      --normalize-end: calc(var(--end) - var(--start));
      --normalize-base: calc(var(--normalize-start) / var(--normalize-end));
      --left-delta: calc(var(--normalize-base) * var(--left) * -1);
      --top-delta: calc(var(--normalize-base) * var(--top) * -1);
      opacity: 1;
      // transform: translateY(0);
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }
    .after-range {
      opacity: 0;
      // transform: translateY(-20px);
      transition:
        opacity 0.5s ease,
        transform 0.5s ease;
    }
  }
</style>
