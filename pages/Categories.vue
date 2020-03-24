<template>
  <section class="l-content">
    <h2>Assign your typography</h2>
    <p>These broad font categories define your theme's typography</p>
    <div class="c-panel">
      <res-select
        ><label
          >Headings
          <p>Currently: <strong>Graphik-Regular</strong></p></label
        >
        <select id="initial-id1" name="s1"
          ><option placeholder="">Select font</option
          ><option value="Graphik-Regular">Graphik-Regular</option
          ><option value="Graphik-Bold">Graphik-Bold</option
          ><option value="Lora-Regular">Lora-Regular</option
          ><option value="Lora-Bold">Lora-Bold</option></select
        ></res-select
      >

      <hr />

      <res-select
        ><label
          >Body
          <p>Currently: <strong>Graphik-Regular</strong></p></label
        >
        <select id="initial-id2" name="s1"
          ><option placeholder="">Select font</option
          ><option value="Graphik-Regular">Graphik-Regular</option
          ><option value="Graphik-Bold">Graphik-Bold</option
          ><option value="Lora-Regular">Lora-Regular</option
          ><option value="Lora-Bold">Lora-Bold</option></select
        ></res-select
      >

      <hr />

      <res-select
        ><label
          >Meta
          <p>Currently: <strong>Graphik-Regular</strong></p></label
        >
        <select id="initial-id3" name="s1"
          ><option placeholder="">Select font</option
          ><option value="Graphik-Regular">Graphik-Regular</option
          ><option value="Graphik-Bold">Graphik-Bold</option
          ><option value="Lora-Regular">Lora-Regular</option
          ><option value="Lora-Bold">Lora-Bold</option></select
        ></res-select
      >

      <hr />

      <res-select
        ><label
          >UI
          <p>Currently: <strong>Graphik-Regular</strong></p></label
        >
        <select id="initial-id4" name="s1"
          ><option placeholder="">Select font</option
          ><option value="Graphik-Regular">Graphik-Regular</option
          ><option value="Graphik-Bold">Graphik-Bold</option
          ><option value="Lora-Regular">Lora-Regular</option
          ><option value="Lora-Bold">Lora-Bold</option></select
        ></res-select
      >
    </div>

    <div>
      <res-button design="primary"><button>Save</button></res-button>
      <NuxtLink to="/typography" style="text-decoration: none;"
        ><res-button design="secondary"
          ><button>Next</button></res-button
        ></NuxtLink
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Categories'
}
</script>

<style scoped></style>
