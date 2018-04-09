import axios from 'axios'
import { API_URL, ACCESS_TOKEN } from 'commons'

/**
 * Retrieve menu from given location and order type
 *
 * @param {string} locationId
 * @param {string} orderTypeId
 */
export const retrieveMenuService = (
  locationId: string, orderTypeId: string
) => {
  return axios({
    method: 'GET',
    url: `${API_URL}/v2/location/${locationId}/menu/${orderTypeId}?accessToken=${ACCESS_TOKEN}`
  })
}