<template>
  <section class="l-content">
    <h2>Typography</h2>
    <p>Set the values associated with your chosen fonts.</p>
    <div class="c-panel">
      <h2>Graphik</h2>
      <p>Regular, Bold</p>
      <hr />
      <h3>Line Heights</h3>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder="1.1" /><label
            >Tight</label
          ></res-input
        ><span style="font-size:24px;line-height:1.1;"
          >This line height applies to larger font sizes, such as those used in
          headlines. Here's some sample text for you to test this value. Let's
          use this example text to also tell the user how this works</span
        >
      </div>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder="1.3" /><label
            >Medium</label
          ></res-input
        ><span style="font-size:16px;line-height:1.3;"
          >This line height applies to medium font sizes. Here's some sample
          text for you to test this value. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.</span
        >
      </div>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder="1.5" /><label
            >Loose</label
          ></res-input
        ><span style="font-size:12px;line-height:1.5;"
          >This line height applies to small font sizes. Here's some sample text
          for you to test this value. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.</span
        >
      </div>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder="1.7" /><label>Body</label></res-input
        ><span style="font-size:16px;line-height:1.7;"
          >This line height applies to the body copy in an article, which we
          think is a little different than other text. Here's some sample text
          for you to test this value.</span
        >
      </div>
      <h3>Letterspacing</h3>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder="0" /><label
            >Default</label
          ></res-input
        ><span style="font-size:16px;letter-spacing:0;"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </div>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder=".04em" /><label
            >Caps</label
          ></res-input
        ><span
          style="font-size:12px;letter-spacing:.04em;text-transform:uppercase;"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </div>
      <div class="flex margin-lg">
        <res-input
          ><input type="text" placeholder=".02em" /><label
            >Expressive</label
          ></res-input
        ><span style="font-size:16px;letter-spacing:.02em;"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </div>
    </div>

    <div>
      <NuxtLink to="#" style="text-decoration: none;"
        ><res-button design="primary"
          ><button>Save</button></res-button
        ></NuxtLink
      >
      <NuxtLink to="/lora" style="text-decoration: none;"
        ><res-button design="secondary"
          ><button>Next</button></res-button
        ></NuxtLink
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Typography'
}
</script>

<style scoped></style>
