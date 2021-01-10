<template>
  <main>
    <ul>
      <li
        v-for="page in ['Class API', ]"
        :key="page"
      >
        <nuxt-link :to="`/${page.toLowerCase().split(' ').join('-')}`">
          With {{ page }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue, namespace, State } from 'nuxt-property-decorator'
import { namespace as vehicleStoreNamespace, VehicleState, ActionType } from '~/store/vehicle'

const VehicleStore = namespace(vehicleStoreNamespace)
@Component({
  fetchOnServer: false,
})
export default class Home extends Vue {
  @VehicleStore.Action(ActionType.FETCH_DETAILS) fetchDetails!: (context: any) => void
  @VehicleStore.State('Vehicledetails') isDarkMode!: VehicleState['Vehicledetails']


  async mounted() {
    await this.fetchDetails('JN1TBAT32A0067225')
    console.log('mounted called')
  }
}
</script>
