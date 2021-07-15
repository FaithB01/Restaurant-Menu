import React from 'react'
import Button from './Button'

import Salad from './Salad'
import Video from './Video'


function Menu() {
    const menuList=[
        {
            name: 'Salad',
            choices: [
            { name: 'Santa Fe' },
            { name: 'Greek' },
            { name: 'Asian' },
            ],
            related: [
            {
            name: 'Dressing',
            choices: [
            { name: 'Italian' },
            { name: 'Blue Cheese' },
            { name: 'Ranch' },
            ]
            },
            {
            name: 'Bread',
            choices: [
            { name: 'Italian' },
            { name: 'Flat' },
            { name: 'Sourdough' },
            ]
            }
            ]
            },
            {
            name: 'Entree',
            choices: [
            { name: 'Steak' },
            { name: 'Salmon' },
            { name: 'Rice' },
            ],
            related: [
            ]
            },
            {
            name: 'Soup',
            choices: [
            { name: 'Minestrone' },
            { name: 'Hot and sour' },
            { name: 'Miso' },
            ],
            related: [
            {
            name: 'Bread',
            choices: [
            { name: 'Breadsticks'}
            ]
            }
            ]
            }

    ]
    const menus = menuList.map(food => (<Salad food={food} />))
  return (
    <>
     <section className="card-section">
    <div className="card">
        <div className="flip-card">
            <div className="flip-card__container">
                <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                       <svg>
                   </svg>

                   <h2 className="card-front__heading">
                    RESTAURANT MENU
                </h2>
                <p className="card-front__text-price">
                Say yes to more cheese!
                </p>
                    </div>

                    <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--city">
                            View Menu
                        </p>
                    </div>
                </div>
                <Video />
            </div>
        </div>

        <div className="inside-page">
            <div className="inside-page__container">
                <h1 className="inside-page__heading inside-page__heading--city">
                Bon Appétit  😋
                </h1>
                <p className="inside-page__text">
                    <div className="content" role="main">
      
{menus}
                    </div>
        
                    <Button />
                    </p>
        </div>
    </div>
</div>
                    </section>
    </>
  )
}

export default Menu;