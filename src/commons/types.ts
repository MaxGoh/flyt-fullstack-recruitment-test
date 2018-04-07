export interface ILocationMenu {
  orderType: {
    id: Number
    name: String
  }

}

export interface IMenu {

}

// {
//   "orderType": {
//     "id": 1,
//     "name": "Order Ahead"
//   },
//   "menus": [
//     {
//       "id": 0,
//       "name": "string",
//       "categories": [
//         {
//           "id": 0,
//           "name": "Burgers",
//           "items": [
//             {
//               "id": 0,
//               "name": "Home Made Burger",
//               "description": "Our super home made burger",
//               "customisationType": "simple",
//               "portions": [
//                 {
//                   "id": 0,
//                   "name": "Super Size Burger",
//                   "ingredient": {
//                     "id": 0,
//                     "name": "Burger Patty",
//                     "addPrice": 100,
//                     "stockLevel": 1,
//                     "slots": 1,
//                     "modifiers": [
//                       {
//                         "id": 0,
//                         "name": "Cook Type",
//                         "requirementType": "required",
//                         "inclusionType": "upgrade",
//                         "visible": true,
//                         "pickOptions": [
//                           {
//                             "id": 0,
//                             "name": "Very rare",
//                             "addPrice": 100,
//                             "stockLevel": 1,
//                             "slots": 0
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 }
//               ]
//             }
//           ],
//           "tags": "string"
//         }
//       ],
//       "revision": 0,
//       "upsells": [
//         "string"
//       ],
//       "availability": {
//         "regular": {
//           "monday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "tuesday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "wednesday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "thursday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "friday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "saturday": {
//             "open": "07:00",
//             "close": "23:59"
//           },
//           "sunday": {
//             "open": "07:00",
//             "close": "23:59"
//           }
//         },
//         "special": [
//           {
//             "date": "2016-12-24",
//             "name": "Christmas Eve",
//             "hours": {
//               "open": "07:00",
//               "close": "23:59"
//             }
//           }
//         ]
//       }
//     }
//   ],
//   "menusAvailable": [
//     0
//   ]
// }