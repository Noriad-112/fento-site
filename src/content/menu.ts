export const menu = {
  lastUpdated: "2026-03-22",
  note: "Prices may change without notice.",
  ingredientsSourceNote:
    "Ingredient lines for bowls and burritos are based on the archived legacy print menu.",
  houseMadeSauces: [
    {
      name: "Cashew Crema",
      tagline: "Smoky, creamy, quietly warm — cashew, chipotle and lime.",
      // heat 1–4: PLACEHOLDER estimated from the chilies in the recipe — confirm with Jeroen
      heat: 1,
      color: "#e8d2b0",
      ingredients:
        "Cashew nuts, nutritional yeast, lime juice, chipotle peppers in adobo, garlic, salt.",
    },
    {
      name: "Red Salsa",
      tagline: "Fresh tomato and lime with a jalapeño–habanero kick.",
      // heat 1–4: PLACEHOLDER estimated from the chilies in the recipe — confirm with Jeroen
      heat: 2,
      color: "#c8402f",
      photo: "/photos/red-salsa.png",
      ingredients:
        "Tomato pulp, fresh tomatoes, white onion, cilantro, spring onion, lime, jalapeno, habanero, garlic, salt.",
    },
    {
      name: "Salsa Verde",
      tagline: "Bright tomatillo, coriander and lime. Zingy, with bite.",
      // heat 1–4: PLACEHOLDER estimated from the chilies in the recipe — confirm with Jeroen
      heat: 2,
      color: "#6f8f3a",
      photo: "/photos/salsa-verde.jpg",
      ingredients:
        "Tomatillo, white onion, cilantro, lime juice, jalapeno, habanero, garlic, salt.",
    },
    {
      name: "Mango Hot Sauce",
      tagline: "Sweet mango up front, habanero heat right behind.",
      // heat 1–4: PLACEHOLDER estimated from the chilies in the recipe — confirm with Jeroen
      heat: 4,
      color: "#f0a12b",
      ingredients:
        "Mango, habanero pepper, yellow pickle juice, orange juice, agave syrup, salt.",
    },
    {
      name: "Guacamole",
      tagline: "Avocado, lime and coriander, with a little chili.",
      // heat 1–4: PLACEHOLDER estimated from the chilies in the recipe — confirm with Jeroen
      heat: 1,
      color: "#8db04a",
      ingredients:
        "Avocado, cilantro, lime juice, white onion, jalapeno, habanero, garlic, salt.",
    },
  ],
  sections: [
    {
      title: "Bowls",
      description:
        "Balanced bowls built from a plant-forward base with optional additions.",
      items: [
        {
          name: "Fento Bowl",
          price: 14.5,
          details:
            "Black beans, mixed greens, sweet potato, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Super Bowl",
          price: 18.5,
          details:
            "Bowl base with black beans, mixed greens, sweet potato, red salsa, cashew crema, plus mushroom/chicken add-ons.",
        },
      ],
    },
    {
      title: "Nachos",
      description:
        "Tortilla chips with homemade toppings and a choice of plant-based or free range chicken variations.",
      items: [
        {
          name: "Regular Nachos",
          price: 14.5,
          details:
            "Tortilla chips, black beans, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Vegan Nachos",
          price: 14.5,
          details:
            "Tortilla chips, black beans, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Sweet Potato Party Nacho",
          price: 15.5,
          details:
            "Tortilla chips, black beans, sweet potato, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Free Range Chicken Nacho",
          price: 16.5,
          details:
            "Tortilla chips, black beans, free range chicken, red salsa, cashew crema, pickles, coriander.",
        },
      ],
    },
    {
      title: "Burritos",
      description:
        "Warm burrito options with vegetarian, vegan, mushroom, or free-range chicken fillings.",
      items: [
        {
          name: "Vegetarian",
          price: 14.5,
          details:
            "Soft tortilla wrap, bean puree, brown rice and black beans, sweet potato, mixed greens, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Vegan",
          price: 14.5,
          details:
            "Soft tortilla wrap, bean puree, brown rice and black beans, sweet potato, mixed greens, red salsa, cashew crema, pickles, coriander.",
        },
        {
          name: "Local Mushrooms",
          price: 16.0,
          details:
            "Burrito base with shiitake mushrooms, jalapeno, bell pepper, oregano, zaatar, and onion.",
        },
        {
          name: "Free Range Chicken",
          price: 16.0,
          details:
            "Burrito base with marinated free range chicken, lime juice, paprika, oregano, sunflower oil, and salt.",
        },
      ],
    },
    {
      title: "Quesadillas",
      description:
        "Made with local organic corn tortillas, cheese or vegan cheese, and seasonal fillings.",
      items: [
        {
          name: "Kalesadilla",
          price: 11.5,
          details:
            "Local organic corn tortilla, kale filling, and cheese.",
        },
        {
          name: "Vegan Kalesadilla",
          price: 12.5,
          details:
            "Local organic corn tortilla, kale filling, and vegan cheese.",
        },
        {
          name: "Local Mushrooms",
          price: 13.5,
          details:
            "Local organic corn tortilla, locally grown shiitake mushrooms, and cheese or vegan cheese.",
        },
        {
          name: "Free Range Chicken",
          price: 13.5,
          details:
            "Local organic corn tortilla, free range chicken, and cheese or vegan cheese.",
        },
      ],
    },
    {
      title: "Extra",
      description:
        "Add-ons and sauces to customize your order.",
      items: [
        { name: "Chips, Guac & Salsa", price: 9.0, details: "" },
        { name: "Chips & Guac", price: 7.5, details: "" },
        { name: "Guacamole", price: 3.0, details: "" },
        { name: "Mango Hot Sauce", price: 2.0, details: "" },
        { name: "Free Range Chicken", price: 4.0, details: "" },
      ],
    },
    {
      title: "Fresh Juices",
      description: "Fresh juices, homemade daily.",
      items: [
        {
          name: "Lite 'n Stormy",
          price: 5.0,
          details: "Slow-juiced ginger, organic apple juice, fresh lime juice, agave syrup.",
        },
        {
          name: "Strawberry Hibiscus",
          price: 5.0,
          details: "Strawberries, hibiscus flower tea, agave syrup.",
        },
      ],
    },
  ],
};
