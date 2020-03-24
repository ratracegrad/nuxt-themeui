<template>
  <section class="l-content">
    <h2>Choose your spacing scale</h2>

    <div>
      <p>How spacing and sizing works in harmony tkktktktktkt</p>
    </div>

    <p>Currently set to: <strong>Medium</strong></p>
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

    <div class="c-panel" style="display: flex;">
      <div>
        <res-table id="spacing-scale-small">
          <label
            >Small
            <res-icon
              id="spacing-small-tooltip"
              name="info"
              size="small"
              style="vertical-align: middle;"
            ></res-icon
          ></label>
          <res-dropdown for="spacing-small-tooltip"
            >additional info</res-dropdown
          >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size (px)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>space 1</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 2</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 3</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 4</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 5</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 6</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 7</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 8</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 9</td>
                <td>tk</td>
              </tr>
            </tbody>
          </table>
        </res-table>
      </div>
      <div>
        <res-table id="spacing-scale-medium" style="margin-left: 8px;">
          <table>
            <label style="margin-bottom:10px;"
              >Medium
              <res-icon
                id="spacing-medium-tooltip"
                name="info"
                size="small"
                style="vertical-align: middle;"
              ></res-icon
              ><NuxtLink
                to="edit_spacing_scale.html"
                style="text-decoration: none;"
                ><res-badge
                  design="gold"
                  size="small"
                  style="vertical-align: middle; margin-left: 8px; cursor: pointer;"
                  >Edit Scale</res-badge
                ></NuxtLink
              ></label
            >
            <res-dropdown for="spacing-medium-tooltip"
              >additional info</res-dropdown
            >
            <thead>
              <tr>
                <th>Name</th>
                <th>Size (px)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>space 1</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 2</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 3</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 4</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 5</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 6</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 7</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 8</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 9</td>
                <td>tk</td>
              </tr>
            </tbody>
          </table>
        </res-table>
      </div>
      <div>
        <res-table id="spacing-scale-large" style="margin-left: 8px;">
          <table>
            <label
              >Large
              <res-icon
                id="spacing-large-tooltip"
                name="info"
                size="small"
                style="vertical-align: middle;"
              ></res-icon
            ></label>
            <res-dropdown for="spacing-large-tooltip"
              >additional info</res-dropdown
            >
            <thead>
              <tr>
                <th>Name</th>
                <th>Size (px)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>space 1</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 2</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 3</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 4</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 5</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 6</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 7</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 8</td>
                <td>tk</td>
              </tr>
              <tr>
                <td>space 9</td>
                <td>tk</td>
              </tr>
            </tbody>
          </table>
        </res-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Spacing'
}
</script>

<style scoped></style>
