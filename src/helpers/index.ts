import { ICartData, IMenuCategoriesItem } from 'commons/types'
import { TRootState } from 'reducers'

export const selectCartData = (state: TRootState) => state.cart.payload

export const appendCart = (
  newCartData: IMenuCategoriesItem,
  cartDatas: ICartData[]
): ICartData[] => {

  const newDataId: number = newCartData.id
  let dataExist: boolean = false
  let sortedCart: ICartData[]

  // Check if Item already exist in Cart

  cartDatas.map((cartData: ICartData) => {
    if (cartData.id === newDataId) {
      dataExist = true
    }
  })

  if (dataExist) {

    sortedCart = cartDatas.map((cartData: ICartData) => {
      if (cartData.id === newDataId) {
        /* Append quantity */
        cartData.quantity = cartData.quantity + 1
      }
      return cartData
    })

  } else {

    let cartData: ICartData = {
      id: newDataId,
      quantity: 1,
      data: newCartData
    }
    sortedCart = [ ...cartDatas, cartData ]

  }

  return sortedCart
}