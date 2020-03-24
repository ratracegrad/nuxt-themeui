<template>
  <section class="l-content">
    <h2>Choose your type sizing</h2>

    <div>
      <p>
        Scales affect your typopgraphy ttktktktktk. Scale choice is important
        because blah blah blah. Learn about scale options below. Let's describe
        the breakpoint stuff too.
      </p>
    </div>
    <p>Currently set to: <strong>Small</strong></p>

    <div class="flex-center margin-lg">
      <res-select style="margin-right: 8px;"
        ><select id="initial-id" name="s1"
          ><option placeholder="">Select scale</option
          ><option value="Small">Small</option
          ><option value="Medium">Medium</option
          ><option value="Large">Large</option></select
        ></res-select
      >
      <res-button design="primary"><button>Save</button></res-button>
    </div>

    <div class="c-panel">
      <h3>
        <span>Small (condensed)</span
        ><NuxtLink to="edit_type_scale.html" style="text-decoration: none;"
          ><res-badge
            design="gold"
            size="small"
            style="vertical-align: middle; margin-left: 8px; cursor: pointer;"
            >Edit Scale</res-badge
          ></NuxtLink
        >
      </h3>
      <p>Based on: Minor Third: 1.125 Base font size = 18 (1.125em)</p>
      <p><NuxtLink to="#">Example</NuxtLink></p>
      <res-table id="my-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>wide: >1400</th>
              <th>mid: >1400</th>
              <th>narrow: &lt;650</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size 1</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 2</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 3</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 4</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 5</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 6</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 7</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 8</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 9</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 10</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 11</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 12</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
          </tbody>
        </table>
      </res-table>

      <hr />

      <h3>Medium (condensed)</h3>
      <p>Based on: Major Third: 1.25 Base font size = 18 (1.125em)</p>
      <p><NuxtLink to="#">Example</NuxtLink></p>
      <res-table id="my-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>wide: >1400</th>
              <th>mid: >1400</th>
              <th>narrow: &lt;650</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size 1</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 2</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 3</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 4</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 5</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 6</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 7</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 8</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 9</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 10</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 11</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 12</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
          </tbody>
        </table>
      </res-table>

      <hr />

      <h3>Large (bigger contrast in sizes)</h3>
      <p>Based on: Perfect Fourth: 1.333 Base font size = 18 (1.125em)</p>
      <p><NuxtLink to="#">Example</NuxtLink></p>
      <res-table id="my-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>wide: >1400</th>
              <th>mid: >1400</th>
              <th>narrow: &lt;650</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size 1</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 2</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 3</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 4</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 5</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 6</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 7</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 8</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 9</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 10</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 11</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
            <tr>
              <td>size 12</td>
              <td>tk</td>
              <td>tk</td>
              <td>tk</td>
            </tr>
          </tbody>
        </table>
      </res-table>
    </div>

    <NuxtLink to="/spacing" style="text-decoration: none;"
      ><res-button design="secondary"
        ><button>Next</button></res-button
      ></NuxtLink
    >
  </section>
</template>

<script>
export default {
  name: 'Sizing'
}
</script>

<style scoped></style>
