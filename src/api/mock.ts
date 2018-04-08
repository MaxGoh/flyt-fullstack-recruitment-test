// Dummy PNL
export const  retrieveMenuService = () =>
  Promise.resolve(
    {
      'orderType': {
        'id': 1,
        'name': 'Order Ahead'
      },
      'menus': [
        {
          'id': 3,
          'name': 'Main Menu',
          'categories': [
            {
              'id': 6,
              'name': 'Starters',
              'description': '',
              'items': [
                {
                  'id': 9,
                  'name': 'Olives',
                  'customisationType': 'simple',
                  'portions': [
                    {
                      'id': 10,
                      'name': 'Olives',
                      'ingredient': {
                        'id': 35,
                        'name': 'Olives',
                        'addPrice': 2.45,
                        'stockLevel': 1,
                        'slots': 1
                      }
                    }
                  ]
                },
                {
                  'id': 10,
                  'name': 'Wasabi Peas',
                  'customisationType': 'simple',
                  'portions': [
                    {
                      'id': 11,
                      'name': 'Wasabi Peas',
                      'ingredient': {
                        'id': 36,
                        'name': 'Wasabi Peas',
                        'addPrice': 1,
                        'stockLevel': 1,
                        'slots': 1
                      }
                    }
                  ]
                }
              ],
              'tags': []
            }
          ],
          'revision': 1,
          'upsells': [],
          'allergyInfoUri': null,
          'availability': {
            'regular': {},
            'special': {}
          }
        }
      ],
      'menusAvailable': [3]
    }
  )