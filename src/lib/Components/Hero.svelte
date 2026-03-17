<script>
  let sectionBounds = {}
  let wrapper
  let windowHeight
  let scrollY = 0
  let percentage = 0
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
  // TODO: calculate the scroll position and update the hero text accordingly
  function handleScroll(event) {
    // Get info about the section position and height
    sectionBounds = wrapper?.getBoundingClientRect()

    // Calculate total scroll percentage from 0 to 100
    const documentHeight = document.documentElement.scrollHeight
    console.log('Document height:', documentHeight)
    percentage = (scrollY / (documentHeight - windowHeight)) * 100
    console.log('Scroll percentage:', percentage)
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
  <div class="hero-content">
    <div class="frame">
      {#each hero as { h1, start, end }}
        <h1 class={calculateRange(start, end)}>{h1}</h1>
        <!-- content here -->
      {/each}
    </div>
    <!-- <div class="frame frame-1">
			<h1>What is the Bechdel Test?</h1>
		</div>

		<div class="frame frame-2">
			<h1>And why does it matter?</h1>
		</div> -->
  </div>
</section>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
    text-align: center;
    height: calc(100vh * 4);
  }

  .hero-content {
    position: fixed;
    top: 0;
    height: 100vh;
  }

  h1 {
    font-size: 3.5rem;
    margin: 0 0 1rem 0;
    font-weight: 700;
  }
</style>
