import Dish from '../models/Dish'
import Restaurant from '../models/Restaurant'

type DishTranslation = {
    name: string
    description: string
    portion: string
}

type RestaurantTranslation = {
    title: string
    category: string
    description: string
    dishes: DishTranslation[]
}

const restaurantTranslations: Record<string, RestaurantTranslation> = {
    'Bella Tavola Italiana': {
        title: 'Bella Tavola Italiana',
        category: 'Italian',
        description:
            'A celebration of authentic Italian cuisine, from handmade pasta and creamy risottos to carefully prepared meats and seafood. Traditional recipes, fresh ingredients and a curated selection of wines create a warm and memorable dining experience.',
        dishes: [
            {
                name: 'Truffle Ravioli',
                description:
                    'Handmade ravioli filled with creamy cheese and finished with a delicate black truffle sauce and Parmesan.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Spaghetti Carbonara',
                description:
                    'Classic Italian spaghetti prepared with crispy pancetta, egg yolk, Pecorino cheese and freshly ground black pepper.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Porcini Mushroom Risotto',
                description:
                    'Creamy Arborio rice cooked with porcini mushrooms, Parmesan cheese and a touch of white wine.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Osso Buco Milanese',
                description:
                    'Slow-cooked beef osso buco served with a rich house sauce and traditional Milanese-inspired seasoning.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Caprese Salad',
                description:
                    'Fresh mozzarella, ripe tomatoes and basil finished with extra virgin olive oil and a touch of sea salt.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Classic Tiramisu',
                description:
                    'Traditional Italian dessert made with mascarpone cream, espresso-soaked biscuits and cocoa.',
                portion: 'Serves 1 person'
            }
        ]
    },

    'Casa das Delícias Árabes': {
        title: 'Arabian Delights',
        category: 'Middle Eastern',
        description:
            'A welcoming Middle Eastern restaurant inspired by traditional flavors and recipes. Aromatic spices, grilled meats, fresh herbs and classic dishes come together to create an authentic culinary experience.',
        dishes: [
            {
                name: 'Hummus & Warm Pita',
                description:
                    'Creamy chickpea hummus blended with tahini, lemon and olive oil, served with freshly warmed pita bread.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Beef Kibbeh',
                description:
                    'Traditional crispy kibbeh made with seasoned beef, bulgur wheat, herbs and aromatic Middle Eastern spices.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Chicken Shawarma',
                description:
                    'Marinated chicken slowly roasted with Middle Eastern spices and served with fresh vegetables and garlic sauce.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Lamb Kofta',
                description:
                    'Chargrilled seasoned lamb skewers prepared with herbs and spices, served with a fresh house accompaniment.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Falafel Plate',
                description:
                    'Crispy chickpea falafel served with hummus, salad, tahini sauce and warm pita bread.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Baklava',
                description:
                    'Layers of crisp pastry filled with nuts and finished with a fragrant honey syrup.',
                portion: 'Serves 1 person'
            }
        ]
    },

    'Sakura Sushi House': {
        title: 'Sakura Sushi House',
        category: 'Japanese',
        description:
            'A refined Japanese restaurant focused on fresh ingredients, precise preparation and beautifully balanced flavors. From sushi and sashimi to warm Japanese classics, every dish is crafted with attention to detail.',
        dishes: [
            {
                name: 'Salmon Sashimi',
                description:
                    'Fresh premium salmon carefully sliced and served in the traditional Japanese style.',
                portion: '8 pieces'
            },
            {
                name: 'Salmon Nigiri',
                description:
                    'Hand-pressed seasoned rice topped with fresh slices of premium salmon.',
                portion: '6 pieces'
            },
            {
                name: 'Dragon Roll',
                description:
                    'Signature sushi roll prepared with fresh ingredients, creamy avocado and a balanced house sauce.',
                portion: '8 pieces'
            },
            {
                name: 'Tuna Tataki',
                description:
                    'Lightly seared tuna served rare in the center and finished with sesame and citrus soy dressing.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Shrimp Tempura',
                description:
                    'Crispy Japanese-style shrimp tempura served with a light and savory dipping sauce.',
                portion: '6 pieces'
            },
            {
                name: 'Miso Ramen',
                description:
                    'Comforting ramen with rich miso broth, noodles, vegetables and traditional Japanese toppings.',
                portion: 'Serves 1 person'
            }
        ]
    },

    'Cantinho Lusitano': {
        title: 'Lusitanian Corner',
        category: 'Portuguese',
        description:
            'Traditional Portuguese cuisine inspired by the rich culinary heritage of Portugal. Fresh seafood, comforting recipes and authentic flavors create a warm experience rooted in classic Portuguese cooking.',
        dishes: [
            {
                name: 'Brás-Style Cod',
                description:
                    'Traditional shredded cod prepared with potatoes, onions and eggs and finished with olives and fresh herbs.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Portuguese Grilled Chicken',
                description:
                    'Juicy grilled chicken seasoned with Portuguese spices and served with a traditional house accompaniment.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Lagareiro-Style Octopus',
                description:
                    'Tender roasted octopus served with potatoes, garlic, herbs and generous extra virgin olive oil.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Portuguese Seafood Rice',
                description:
                    'Rich and comforting rice prepared with fresh seafood, tomatoes, herbs and a flavorful seafood broth.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Alentejo-Style Pork',
                description:
                    'Traditional Portuguese pork prepared with aromatic seasoning and a savory regional-style sauce.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Portuguese Custard Tarts',
                description:
                    'Classic crisp pastry filled with silky baked custard and finished with a touch of cinnamon.',
                portion: '2 pieces'
            }
        ]
    },

    'Piazza del Forno': {
        title: 'Piazza del Forno',
        category: 'Pizzeria',
        description:
            'An artisan pizzeria inspired by Italian tradition. Fresh ingredients, carefully fermented dough and a wood-fired oven create pizzas with crisp edges, soft centers and bold, authentic flavors.',
        dishes: [
            {
                name: 'Margherita',
                description:
                    'Classic pizza with tomato sauce, fresh mozzarella, basil and extra virgin olive oil.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Pepperoni',
                description:
                    'Wood-fired pizza topped with tomato sauce, mozzarella and generous slices of pepperoni.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Four Cheese',
                description:
                    'A rich combination of mozzarella, Gorgonzola, Parmesan and creamy Italian cheese.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Parma & Arugula',
                description:
                    'Tomato sauce and mozzarella topped with Parma ham, fresh arugula and Parmesan.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Truffle Mushroom',
                description:
                    'Wood-fired pizza topped with mushrooms, mozzarella, Parmesan and aromatic truffle cream.',
                portion: 'Serves 2 people'
            },
            {
                name: 'Burrata & Pesto',
                description:
                    'Fresh burrata, tomato, basil pesto and extra virgin olive oil over our signature artisan crust.',
                portion: 'Serves 2 people'
            }
        ]
    },

    'Jardim da Terra': {
        title: 'Earth Garden',
        category: 'Vegan',
        description:
            'Creative plant-based cuisine prepared with fresh, seasonal and thoughtfully selected ingredients. Colorful vegetables, grains and bold natural flavors come together in satisfying dishes designed for everyone.',
        dishes: [
            {
                name: 'Roasted Pumpkin Bowl',
                description:
                    'Roasted pumpkin with seasoned grains, fresh greens, seeds and a creamy plant-based house dressing.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Wild Mushroom Risotto',
                description:
                    'Creamy plant-based risotto prepared with wild mushrooms, herbs and a rich vegetable broth.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Vegan Buddha Bowl',
                description:
                    'A colorful combination of grains, roasted vegetables, greens, avocado and a flavorful house dressing.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Eggplant Parmigiana',
                description:
                    'Roasted eggplant layered with tomato sauce, herbs and creamy plant-based cheese.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Plant-Based Burger',
                description:
                    'House plant-based burger served with fresh vegetables, special sauce and a toasted bun.',
                portion: 'Serves 1 person'
            },
            {
                name: 'Chocolate Avocado Mousse',
                description:
                    'Smooth chocolate mousse made with avocado and cocoa for a rich and naturally creamy finish.',
                portion: 'Serves 1 person'
            }
        ]
    }
}

const createFallbackDish = (dish: Dish, index: number): DishTranslation => ({
    name: `Chef's Special ${index + 1}`,
    description:
        'A signature house dish prepared with fresh ingredients and carefully balanced flavors.',
    portion: 'Serves 1 person'
})

export const translateRestaurant = (restaurant: Restaurant): Restaurant => {
    const translation = restaurantTranslations[restaurant.titulo]

    if (!translation) {
        return {
            ...restaurant,
            tipo: 'International',
            descricao:
                'Discover a selection of carefully prepared dishes made with fresh ingredients and distinctive flavors.',
            cardapio: restaurant.cardapio.map((dish, index) => {
                const fallback = createFallbackDish(dish, index)

                return {
                    ...dish,
                    nome: fallback.name,
                    descricao: fallback.description,
                    porcao: fallback.portion
                }
            })
        }
    }

    return {
        ...restaurant,
        titulo: translation.title,
        tipo: translation.category,
        descricao: translation.description,
        cardapio: restaurant.cardapio.map((dish, index) => {
            const dishTranslation =
                translation.dishes[index] ?? createFallbackDish(dish, index)

            return {
                ...dish,
                nome: dishTranslation.name,
                descricao: dishTranslation.description,
                porcao: dishTranslation.portion
            }
        })
    }
}

export const translateRestaurants = (
    restaurants: Restaurant[]
): Restaurant[] => restaurants.map(translateRestaurant)