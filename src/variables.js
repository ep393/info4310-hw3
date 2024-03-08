const foodCategoriesTopLevel = ["Cuisine", "Food Type", "Venue Type"]

const foodCategories = {
    "Cuisine": {
        "Italian": ["italian", "pizza"],
        "Asian": ["japanese", "sushi", "vietnamese", "thai", "chinese", "korean", "asianfusion", "pakistani", "bangladeshi", "himalayan", "mongolian", "dimsum", "cantonese", "armenian", "hotpot"],
        "American": ["newamerican", "tradamerican"],
        "Mexican & Latin": ["mexican", "latin"],
        "Indian & Middle Eastern": ["indpak", "mideastern", "turkish", "falafel", "halal"],
        "European": ["french", "greek", "mediterranean", "spanish", "belgian", "polish", "ukrainian"],
        "Comfort Food": ["pizza", "burgers", "cheese", "cheesesteaks", "hotdogs", "steak"]
    },
    "Food Type": {
        "Bakery & Sweets": ["bakeries", "donuts", "desserts", "cupcakes"],
        "Breakfast & Brunch": ["coffee", "breakfast_brunch"],
        "Healthy & Specialty": ["salad", "vegan", "vegetarian", "raw_food", "gluten_free"],
        "Seafood": ["seafood", "sushi"],
        "Beverages": ["coffee", "bubbletea", "juicebars"],
        "Snacks": ["icecream", "tapasmallplates", "ramen"]
    },
    "Venue Type": {
        "Casual & Quick Bites": ["sandwiches", "cafes", "delis", "foodtrucks", "fastfood", "hotdogs", "diners", "cafes", "pizza"],
        "Markets": ["ethnicmarkets", "grocery"],
        "Dining & Bars": ["bars", "lounges", "cocktailbars", "wine_bars", "pubs", "gastropubs"],
        "Service Oriented": ["catering", "foodstands"],
        "Shopping": ["shopping"]
    }
}

const foodSubCategories = [
    "Italian",
    "Asian",
    "American",
    "Mexican & Latin",
    "Indian & Middle Eastern",
    "European",
    "Comfort Food",
    "Bakery & Sweets",
    "Breakfast & Brunch",
    "Healthy & Specialty",
    "Seafood",
    "Beverages",
    "Snacks",
    "Casual & Quick Bites",
    "Markets",
    "Dining & Bars",
    "Service Oriented",
    "Shopping"
]

const foodCategorySubToBottom = {
    "Italian": ["italian", "pizza"],
    "Asian": ["japanese", "sushi", "vietnamese", "thai", "chinese", "korean", "asianfusion", "pakistani", "bangladeshi", "himalayan", "mongolian", "dimsum", "cantonese", "armenian", "hotpot"],
    "American": ["newamerican", "tradamerican"],
    "Mexican & Latin": ["mexican", "latin"],
    "Indian & Middle Eastern": ["indpak", "mideastern", "turkish", "falafel", "halal"],
    "European": ["french", "greek", "mediterranean", "spanish", "belgian", "polish", "ukrainian"],
    "Comfort Food": ["pizza", "burgers", "cheese", "cheesesteaks", "hotdogs", "steak"],

    "Bakery & Sweets": ["bakeries", "donuts", "desserts", "cupcakes"],
    "Breakfast & Brunch": ["coffee", "breakfast_brunch"],
    "Healthy & Specialty": ["salad", "vegan", "vegetarian", "raw_food", "gluten_free"],
    "Seafood": ["seafood", "sushi"],
    "Beverages": ["coffee", "bubbletea", "juicebars"],
    "Snacks": ["icecream", "tapasmallplates", "ramen"],

    "Casual & Quick Bites": ["sandwiches", "cafes", "delis", "foodtrucks", "fastfood", "hotdogs", "diners", "cafes", "pizza"],
    "Markets": ["ethnicmarkets", "grocery"],
    "Dining & Bars": ["bars", "lounges", "cocktailbars", "wine_bars", "pubs", "gastropubs"],
    "Service Oriented": ["catering", "foodstands"],
    "Shopping": ["shopping"]
}

const foodCategoryTopToBottom = {
    'Cuisine': ['italian',
        'pizza',
        'japanese',
        'sushi',
        'vietnamese',
        'thai',
        'chinese',
        'korean',
        'asianfusion',
        'pakistani',
        'bangladeshi',
        'himalayan',
        'mongolian',
        'dimsum',
        'cantonese',
        'armenian',
        'hotpot',
        'newamerican',
        'tradamerican',
        'mexican',
        'latin',
        'indpak',
        'mideastern',
        'turkish',
        'falafel',
        'halal',
        'french',
        'greek',
        'mediterranean',
        'spanish',
        'belgian',
        'polish',
        'ukrainian',
        'pizza',
        'burgers',
        'cheese',
        'cheesesteaks',
        'hotdogs',
        'steak'],
    'Food Type': ['bakeries',
        'donuts',
        'desserts',
        'cupcakes',
        'coffee',
        'breakfast_brunch',
        'salad',
        'vegan',
        'vegetarian',
        'raw_food',
        'gluten_free',
        'seafood',
        'sushi',
        'coffee',
        'bubbletea',
        'juicebars',
        'icecream',
        'tapasmallplates',
        'ramen'],
    'Venue Type': ['sandwiches',
        'cafes',
        'delis',
        'foodtrucks',
        'fastfood',
        'hotdogs',
        'diners',
        'cafes',
        'pizza',
        'ethnicmarkets',
        'grocery',
        'bars',
        'lounges',
        'cocktailbars',
        'wine_bars',
        'pubs',
        'gastropubs',
        'catering',
        'foodstands',
        'shopping']
}

const labelToCategory = {
    "Cuisine": "Cuisine",
    "Food Type": "Food Type",
    "Venue Type": "Venue Type",
    'Breakfast & Brunch': 'breakfast_brunch',
    'Burgers': 'burgers',
    'Sandwiches': 'sandwiches',
    'Mexican': 'mexican',
    'Japanese': 'japanese',
    'Italian': 'italian',
    'Pizza': 'pizza',
    'Seafood': 'seafood',
    'Live/Raw Food': 'raw_food',
    'American (New)': 'newamerican',
    'Mediterranean': 'mediterranean',
    'Vegan': 'vegan',
    'Gluten-Free': 'gluten_free',
    'Spanish': 'spanish',
    'Wine Bars': 'wine_bars',
    'Tapas/Small Plates': 'tapasmallplates',
    'Salad': 'salad',
    'Juice Bars & Smoothies': 'juicebars',
    'Vegetarian': 'vegetarian',
    'Indian': 'indpak',
    'Belgian': 'belgian',
    'American (Traditional)': 'tradamerican',
    'Pubs': 'pubs',
    'Korean': 'korean',
    'Asian Fusion': 'asianfusion',
    'Lounges': 'lounges',
    'Coffee & Tea': 'coffee',
    'Cafes': 'cafes',
    'Delis': 'delis',
    'Grocery': 'grocery',
    'Bakeries': 'bakeries',
    'Gastropubs': 'gastropubs',
    'Bars': 'bars',
    'Cocktail Bars': 'cocktailbars',
    'Desserts': 'desserts',
    'French': 'french',
    'Steakhouses': 'steak',
    'Cheese Shops': 'cheese',
    'Sushi Bars': 'sushi',
    'Bubble Tea': 'bubbletea',
    'Vietnamese': 'vietnamese',
    'Caterers': 'catering',
    'Cheesesteaks': 'cheesesteaks',
    'Diners': 'diners',
    'Turkish': 'turkish',
    'Falafel': 'falafel',
    'Pakistani': 'pakistani',
    'Bangladeshi': 'bangladeshi',
    'Himalayan/Nepalese': 'himalayan',
    'Halal': 'halal',
    'Fast Food': 'hotdogs',
    'Hot Pot': 'hotpot',
    'Chinese': 'chinese',
    'Ramen': 'ramen',
    'Mongolian': 'mongolian',
    'Dim Sum': 'dimsum',
    'Cantonese': 'cantonese',
    'Latin American': 'latin',
    'Food Trucks': 'foodtrucks',
    'Thai': 'thai',
    'Ice Cream & Frozen Yogurt': 'icecream',
    'Donuts': 'donuts',
    'Food Stands': 'foodstands',
    'Cupcakes': 'cupcakes',
    'Greek': 'greek',
    'Ethnic Food': 'ethnicmarkets',
    'Armenian': 'armenian',
    'Middle Eastern': 'mideastern',
    'Polish': 'polish',
    'Ukrainian': 'ukrainian',
    'Shopping': 'shopping'
}

const categoryToLabel = {
    'breakfast_brunch': 'Breakfast & Brunch',
    'burgers': 'Burgers',
    'sandwiches': 'Sandwiches',
    'mexican': 'Mexican',
    'japanese': 'Japanese',
    'italian': 'Italian',
    'pizza': 'Pizza',
    'seafood': 'Seafood',
    'raw_food': 'Live/Raw Food',
    'newamerican': 'American (New)',
    'mediterranean': 'Mediterranean',
    'vegan': 'Vegan',
    'gluten_free': 'Gluten-Free',
    'spanish': 'Spanish',
    'wine_bars': 'Wine Bars',
    'tapasmallplates': 'Tapas/Small Plates',
    'salad': 'Salad',
    'juicebars': 'Juice Bars & Smoothies',
    'vegetarian': 'Vegetarian',
    'indpak': 'Indian',
    'belgian': 'Belgian',
    'tradamerican': 'American (Traditional)',
    'pubs': 'Pubs',
    'korean': 'Korean',
    'asianfusion': 'Asian Fusion',
    'lounges': 'Lounges',
    'coffee': 'Coffee & Tea',
    'cafes': 'Cafes',
    'delis': 'Delis',
    'grocery': 'Grocery',
    'bakeries': 'Bakeries',
    'gastropubs': 'Gastropubs',
    'bars': 'Bars',
    'cocktailbars': 'Cocktail Bars',
    'desserts': 'Desserts',
    'french': 'French',
    'steak': 'Steakhouses',
    'cheese': 'Cheese Shops',
    'sushi': 'Sushi Bars',
    'bubbletea': 'Bubble Tea',
    'vietnamese': 'Vietnamese',
    'catering': 'Caterers',
    'cheesesteaks': 'Cheesesteaks',
    'diners': 'Diners',
    'turkish': 'Turkish',
    'falafel': 'Falafel',
    'pakistani': 'Pakistani',
    'bangladeshi': 'Bangladeshi',
    'himalayan': 'Himalayan/Nepalese',
    'halal': 'Halal',
    'hotdogs': 'Fast Food',
    'hotpot': 'Hot Pot',
    'chinese': 'Chinese',
    'ramen': 'Ramen',
    'mongolian': 'Mongolian',
    'dimsum': 'Dim Sum',
    'cantonese': 'Cantonese',
    'latin': 'Latin American',
    'foodtrucks': 'Food Trucks',
    'thai': 'Thai',
    'icecream': 'Ice Cream & Frozen Yogurt',
    'donuts': 'Donuts',
    'foodstands': 'Food Stands',
    'cupcakes': 'Cupcakes',
    'greek': 'Greek',
    'ethnicmarkets': 'Ethnic Food',
    'armenian': 'Armenian',
    'mideastern': 'Middle Eastern',
    'polish': 'Polish',
    'ukrainian': 'Ukrainian',
    'shopping': 'Shopping'
}

const foodCategoryIcons = {
    "Cuisine": "assets/icons/cuisines-icon.png",
    "Food Type": "assets/icons/food-types-icon.png",
    "Venue Type": "assets/icons/venues-icon.png",

    "Italian": "assets/icons/Spaghetti.png",
    "Asian": "assets/icons/icons8-chinese-fried-rice-96.png",
    "American": "assets/icons/icons8-burger-96.png",
    "Mexican & Latin": "assets/icons/icons8-taco-100.png",
    "Indian & Middle Eastern": "assets/icons/Naan.png",
    "European": "assets/icons/icons8-euro-96.png",
    "Comfort Food": "assets/icons/pizza.png",
    "Bakery & Sweets": "assets/icons/icons8-bakery-100.png",
    "Breakfast & Brunch": "",
    "Healthy & Specialty": "",
    "Seafood": "",
    "Beverages": "",
    "Snacks": "",
    "Casual & Quick Bites": "",
    "Markets": "",
    "Dining & Bars": "",
    "Service Oriented": "",
    "Shopping": "",
    "Unknown": "assets/icons/icons8-tableware-100.png",
}

const colors = {
    "category3": ["#007BFF", "#FFA500", "#00FF00"]
}