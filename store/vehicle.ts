import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import type { RootState } from './index'
import { Vehicle } from '@/types'
import { getVehicle } from '~/api/vehicle'

export const namespace = 'vehicle'

export interface VehicleState {
  Vehicledetails: Vehicle[];
}

export const state = (): VehicleState => ({
  Vehicledetails: []
})

export const getters: GetterTree<VehicleState, RootState> = {
}

export const ActionType = {
  FETCH_DETAILS: 'fetchDetails'
}

export const MutationType = {
  LOAD_VEHICLE_DETAILS: 'loadVehicleDetails'
}



export const mutations: MutationTree<VehicleState> = {
  [MutationType.LOAD_VEHICLE_DETAILS]: (state, vehicleDetails: Vehicle) => {
    state.Vehicledetails = [vehicleDetails]
  }
}

export const actions: ActionTree<VehicleState, RootState> = {
  nuxtServerInit ({ commit }, _context: Context) {
    // Run your module initilisation code here
  },

  [ActionType.FETCH_DETAILS]: async (context, vin) => {
    const response = await getVehicle(vin) // VF15R5A0HD0682612
    // commit(MutationType.LOAD_VEHICLE_DETAILS, response.data.getVehicle)
  }
}

