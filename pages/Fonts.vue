<template>
  <section class="l-content">
    <div>
      <h2>Upload Your fonts</h2>
      <p>
        This help text should describe our recommendations around fonts. We will
        not impose any limits, but we will show the user how heavy their font
        load will be based on the number of fonts uploaded.
      </p>
    </div>

    <div id="submit-font-zip" class="margin-lg">
      <div class="margin-sm">
        <header class="margin-sm"><strong>Upload as:</strong></header>
        <div id="#upload-font-file">
          <res-radio
            ><input type="radio" name="r1" value="Font File" />
            <label>Font File</label></res-radio
          ><br />
        </div>
        <div id="#upload-font-url">
          <res-radio
            ><input type="radio" name="r1" value="URL" />
            <label>URL</label></res-radio
          ><br />
        </div>
      </div>

      <div id="#submit-font-file" class="hide">
        <res-input>
          <label>Upload font</label>
          <input type="text" />
          <res-icon slot="inner-right" name="upload"></res-icon>
          <res-button slot="outer-right" design="primary"
            ><button>Upload</button></res-button
          >
        </res-input>
      </div>
      <div id="#submit-font-url" class="hide">
        <res-input>
          <label
            >Include from URL (url from Google, Hoefler, Typekit, etc)</label
          >
          <input type="text" />
          <res-button slot="outer-right" design="primary"
            ><button>Submit</button></res-button
          >
        </res-input>
      </div>
    </div>

    <hr />

    <div style="font-size: 24px;">
      <p style="font-size: 12px;">
        <i>Fonts below illustrated uploaded fonts, not defaults</i>
      </p>
      <p style="font-family: Graphik; font-weight: 400;">
        Graphik-Regular
        <res-icon
          name="x-circle"
          size="small"
          res-modal-open="modal1"
          style="vertical-align: middle;"
        ></res-icon>
      </p>

      <res-modal id="modal1" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Graphik-Regular?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal1"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal1"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="graphik-bold">
        Graphik-Bold
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal2"
        ></res-icon>
      </p>

      <res-modal id="modal2" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Graphik-Bold?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal2"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal2"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="lora-regular">
        Lora
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal3"
        ></res-icon>
      </p>

      <res-modal id="modal3" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Lora?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal3"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal3"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="lora-bold">
        Lora-Bold
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal4"
        ></res-icon>
      </p>

      <res-modal id="modal4" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Lora-Bold?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal4"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal4"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>
    </div>
    <p>
      <strong>Total File Size: 200kb</strong>
      <res-icon
        id="medium-font-load-tooltip"
        name="info"
        size="small"
        style="vertical-align: text-bottom;"
      ></res-icon>
    </p>
    <res-dropdown for="medium-font-load-tooltip"
      >file size range for "medium" is tktk</res-dropdown
    >
    <div>
      <res-badge size="medium" design="gold">Load Time: Medium</res-badge>
    </div>

    <hr />

    <div>
      <NuxtLink to="/categories" style="text-decoration: none;"
        ><res-button design="secondary"
          ><button>Next</button></res-button
        ></NuxtLink
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fonts'
}
</script>

<style scoped></style>
