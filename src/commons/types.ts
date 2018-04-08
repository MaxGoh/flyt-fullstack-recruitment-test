export interface ILocationMenu {
  orderType: {
    id: number
    name: String
  }
  menus: IMenu[]
  revision: number
  availability: {}
  menusAvailable: number[]
}

export interface IMenu {
  id: number
  name: String
  tags: String
  categories: IMenuCategories[]
}

export interface IMenuCategories {
  id: number
  name: String
  items: IMenuCategoriesItem[]
}

export interface IMenuCategoriesItem {
  id: number
  name: String
  description: String
  customisationType: String
  portions: IMenuCategoriesItemPortion[]
}

export interface IMenuCategoriesItemPortion {
  id: number
  name: String
  ingredient: {
    id: number
    name: String
    addPrice: String
    stockLevel: String
    slots: String
    modifiers: IMenuCategoriesItemPortionModifiers[]
  }
}

export interface IMenuCategoriesItemPortionModifiers {
  id: number
  name: String
  requirementType: String
  inclusionType: String
  visible: Boolean
  pickOptions: IMenuCategoriesItemPortionModifiersPickOptions[]
}

export interface IMenuCategoriesItemPortionModifiersPickOptions {
  id: number
  name: String
  addPrice: number
  stockLevel: String
  slots: String
}

export interface ICartData {
  id: number
  quantity: number
  data: IMenuCategoriesItem
}