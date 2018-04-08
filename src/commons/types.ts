export interface ILocationMenu {
  orderType: {
    id: Number
    name: String
  }
  menus: IMenu[]
  revision: Number
  availability: {}
  menusAvailable: Number[]
}

export interface IMenu {
  id: Number
  name: String
  tags: String
  categories: IMenuCategories[]
}

export interface IMenuCategories {
  id: Number
  name: String
  items: IMenuCategoriesItem[]
}

export interface IMenuCategoriesItem {
  id: Number
  name: String
  description: String
  customisationType: String
  portions: IMenuCategoriesItemPortion[]
}

export interface IMenuCategoriesItemPortion {
  id: Number
  name: String
  ingredient: {
    id: Number
    name: String
    addPrice: String
    stockLevel: String
    slots: String
    modifiers: IMenuCategoriesItemPortionModifiers[]
  }
}

export interface IMenuCategoriesItemPortionModifiers {
  id: Number
  name: String
  requirementType: String
  inclusionType: String
  visible: Boolean
  pickOptions: IMenuCategoriesItemPortionModifiersPickOptions[]
}

export interface IMenuCategoriesItemPortionModifiersPickOptions {
  id: Number
  name: String
  addPrice: Number
  stockLevel: String
  slots: String
}