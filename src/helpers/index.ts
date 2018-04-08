import { ICartData, IMenuCategoriesItem } from 'commons/types'
import { TRootState } from 'reducers'

export const selectCartData = (state: TRootState) => state.cart.payload

export const appendItemInCart = (
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

export const removeItemInCart = (
  selectedCartData: IMenuCategoriesItem,
  cartDatas: ICartData[]
): ICartData[] => {
  const selectedDataId: number = selectedCartData.id
  let dataExist: boolean = false
  let sortedCart: ICartData[] = cartDatas

  // Check if Item already exist in Cart

  cartDatas.map((cartData: ICartData) => {
    if (cartData.id === selectedDataId) {
      dataExist = true
    }
  })

  if (dataExist) {

    let tempIndex: number = -1

    sortedCart = cartDatas.map((cartData: ICartData, index: number) => {
      if (cartData.id === selectedDataId) {

        if (cartData.quantity > 1) {

          cartData.quantity = cartData.quantity - 1

        } else {

          tempIndex = index

        }

      }
      return cartData
    })

    if (tempIndex !== -1) {
      sortedCart.splice(tempIndex, 1)
    }

  }

  return sortedCart
}

export const calculateTotalPrice = (cartDatas: ICartData[]): number => {
  let totalSum: number = 0

  cartDatas.map((cart: ICartData) => {
    let cartQuantity: number = cart.quantity
    let cartPrice: number = Number(cart.data.portions[0].ingredient.addPrice)

    totalSum += (cartQuantity * cartPrice)
  })

  return totalSum
}