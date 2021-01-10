import getVehicleQuery from './queries/getVehicle.gql'

function getClient() {
  return window.$nuxt.context.app.apolloProvider.defaultClient
}

export async function getVehicle(id: string) {
  return await getClient().query({
      query: getVehicleQuery,
      variables: { id }
    })
}