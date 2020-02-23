import * as React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const DATA = [
    {
        "name": "Crusty Gruyere Grilled Cheese Sandwich w/ Bacon",
        "place": "Grill",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Quattro Formaggio Pizza",
        "place": "Pizza Oven",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "North African Style Honey Roasted Chicken",
        "place": "Euro Kitchen",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Mediterranean Spaghetti Squash Bake",
        "place": "Euro Kitchen",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "ACSF",
            "AEGG",
            "AFSH",
            "AGTN",
            "AMLK",
            "APNT",
            "ASOY",
            "ATNT",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Grilled Vegetable Sandwich",
        "place": "Exhibition Kitchen",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "ATNT",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Spice Market Duck Sandwich",
        "place": "Exhibition Kitchen",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Build-Your-Own Pasta Bar",
        "place": "Exhibition Kitchen",
        "time": "lunch",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Braised Cabbage w/ Chorizo",
        "place": "Flex Bar",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "ACSF",
            "AEGG",
            "AFSH",
            "AGTN",
            "AMLK",
            "APNT",
            "ASOY",
            "ATNT",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Mesquite Barbecue Chicken",
        "place": "Flex Bar",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "BBQ Bacon Cheeseburger",
        "place": "The Grill",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Buffalo Bleu Chicken Sandwich",
        "place": "The Grill",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Herb Crusted Roasted Beef",
        "place": "The Kitchen",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC",
            "AFSH",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Flaming Hot Cheetos Pizza",
        "place": "The Pizzeria",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Caldo de Siete Mares (7 Seas Stew)",
        "place": "The Front Burner",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "ACSF",
            "AFSH",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Mexican Stewed Cactus",
        "place": "The Front Burner",
        "time": "lunch",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "California Cobb Salad Wrap",
        "place": "Harvest",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Butternut Squash Soup",
        "place": "Harvest",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Balsamic Pear, Frisee, & Pecan Flatbread",
        "place": "Stone Oven",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "ATNT",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Lemon Chicken w/ Smoked Mozzarella Flatbread",
        "place": "Stone Oven",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Cajun Tofu, Polenta, & Spinach Bowl",
        "place": "Freshly Bowled",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Plantain, Cranberry Bean, Quinoa & Swiss Chard Bowl",
        "place": "Freshly Bowled",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "ASOY"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Bison, Caramelized Onion & Yam Stacker",
        "place": "Simply Grilled",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Spinach & White Bean Stacker w/ Arugula",
        "place": "Simply Grilled",
        "time": "lunch",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AMLK",
            "ASOY"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Okonomiyaki Udon",
        "place": "Bruin Wok",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Vegetarian Pan-Fried Udon",
        "place": "Bruin Wok",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Crispy Fried Tofu in Savory Broth",
        "place": "Iron Grill",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Japanese Shiitake Mushroom Burger",
        "place": "Iron Grill",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AFSH",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Veggie Burger w/ Black Bean Garlic Sauce",
        "place": "Iron Grill",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Huo Guo Hot Pot",
        "place": "Stone Oven",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "ASOY"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "California Roll",
        "place": "Spice Kitchen",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "ACSF",
            "AEGG",
            "AFSH",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Seaweed Salad Bowl",
        "place": "Spice Kitchen",
        "time": "lunch",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Flank Steak w/ Harissa Dry Rub",
        "place": "Euro Kitchen",
        "time": "dinner",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Cheese Ravioli w/ Mushroom Sauce",
        "place": "Exhibition Kitchen",
        "time": "dinner",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Portobello Mushroom Ravioli in Basil Cream Sauce",
        "place": "Exhibition Kitchen",
        "time": "dinner",
        "location": "Covel",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "BBQ Baby Back Ribs",
        "place": "The Kitchen",
        "time": "dinner",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "The Whistle Stop Cafe Stacker",
        "place": "The Kitchen",
        "time": "dinner",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Artichoke Pizza w/ Gruyere Cheese",
        "place": "The Pizzeria",
        "time": "dinner",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Chicken Loco w/ Beans & Rice",
        "place": "The Front Burner",
        "time": "dinner",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "ASOY"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Sesame Salmon, Bok Choy, & Carrot Cous Cous",
        "place": "Harvest",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AFSH",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Vegan Lasagna w/ Tofu Ricotta",
        "place": "Harvest",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Kale Hummus, Winter Greens & Red Quinoa Flatbread",
        "place": "Stone Oven",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Mango & Chicken Tortilla Pizza",
        "place": "Stone Oven",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Chickpea Panisse, Mixed Grains & Rapini Bowl",
        "place": "Freshly Bowled",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Rotini, Pesto, & Kale Bowl",
        "place": "Freshly Bowled",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AGTN",
            "AMLK",
            "ATNT",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Grilled Santa Maria Tri-Tip",
        "place": "Simply Grilled",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Grilled Persian-Style Tofu",
        "place": "Simply Grilled",
        "time": "dinner",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "ASOY"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "General Tsao's Chicken",
        "place": "Bruin Wok",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "General Tso's Vegan Chicken",
        "place": "Bruin Wok",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Jasmine Rice",
        "place": "Bruin Wok",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Grilled Kalbi Beef Burger",
        "place": "Iron Grill",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "HC",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Huli Huli Chicken Sandwich",
        "place": "Iron Grill",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Yaki Sake (Grilled Salmon)",
        "place": "Spice Kitchen",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AFSH",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Garlic Pepper Tofu",
        "place": "Spice Kitchen",
        "time": "dinner",
        "location": "FEAST",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "LC",
            "VG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Montreal Morning",
        "place": "The Grill",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Bacon",
        "place": "The Kitchen",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Chicken Apple Sausage",
        "place": "The Kitchen",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Scrambled Eggs",
        "place": "The Kitchen",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "LC",
            "AEGG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Belgian Waffle",
        "place": "The Pizzeria",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Egg Whites Omelet",
        "place": "The Front Burner",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "LC",
            "AEGG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Omelet Bar",
        "place": "The Front Burner",
        "time": "breakfast",
        "location": "De Neve",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "LC",
            "AEGG"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Pork Loin, Kale, & Egg on Toast",
        "place": "Harvest",
        "time": "breakfast",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "AEGG",
            "AGTN",
            "ASOY",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Oat & Whole Wheat Waffle",
        "place": "Stone Oven",
        "time": "breakfast",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "AEGG",
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    },
    {
        "name": "Cinnamon Polenta Pancake w/ Apple Cranberry Compote",
        "place": "Simply Grilled",
        "time": "breakfast",
        "location": "BPlate",
        "date": "2020-02-24T00:00:00.000Z",
        "info": [
            "V",
            "LC",
            "AEGG",
            "AGTN",
            "AMLK",
            "AWHT"
        ],
        "rating": 0,
        "numRatings": 0,
        "comments": [],
        "imgUrl": null
    }
];

export default function Menu() {
    return <ScrollView><SafeAreaView>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Text style={style.text}>{item.name}</Text>}
            keyExtractor={(s) => s.name}
            numColumns={4}
            columnWrapperStyle={style.row}
        />
    </SafeAreaView></ScrollView>
}

const style = StyleSheet.create({
    row: {
        flex: 1,
    },
    text: {
        textAlign: "left",
        width: "25%"
    }
});