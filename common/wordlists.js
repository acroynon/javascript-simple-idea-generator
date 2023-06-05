const WordLists = { }

WordLists.ANIMAL = [
    "aardvark", "antelope", "alilgator", "armadillo", 
    "baboon", "badger", "barracude", "beaver", "bug", "bear", "bee", "bison", "bird", "buffalo", "butterfly",
    "camel", "carp", "cat", "caterpillar", "cheetah", "chicken", "chimpanzee", "chipmunk", "cobra", "cougar", "cow",
    "crab", "crane", "cricket", "crocodile", "crow", "cuckoo", "deer", "dinosaur", "dog", "dolphin", "donkey", "dragonfly",
    "duck", "eagle", "eel", "elephant", "emu", "falcon", "ferret", "fish", "falmingo", "flea", "fly", "fox", "frog",
    "goat", "goose", "gorilla", "hamster", "hawk", "hippo", "horse", "husky", "iguana", "kangaroo", "lemur", "leopard",
    "lion", "lizard", "llama", "lobster", "monkey", "moose", "mosquito", "moth", "mouse", "octopus", "ostrich", "otter",
    "owl", "oyster", "panda", "parrot", "peacock", "pelican", "penguin", "pheasant", "pig", "pigeon", "porcupine", 
    "rabbit", "racoon", "rat", "rooster", "seal", "sheep", "skunk", "sloth", "snail", "snake", "spider", "tiger",
    "whale", "wolf", "wombat", "zebra"
];

WordLists.CHARACTER = [
    "superhero", "supervillain", "millionaire", "posh person", "homeless person", "santanist", "religious person",
    "ordinary citizen", "ordinary townsperson"
];

WordLists.JOB = [
    "business man/woman", "accountant", "traffic officer", "police man/woman", "post man/woman",
    "astronaut", "space pirate", "pirate", "cowboy/girl", "marshal", "sheriff", "shopkeeper"
]

WordLists.PERSONALITY = [
    "loner", "socialite"
]

WordLists.ADJECTIVE = [
    "grumpy", "happy", "concerned", "sad"
];

WordLists.WANTS = [
    "treasure", "to go home", "to escape", "to find their <ANIMALS>", "to escape from <ANIMALS>"
];
WordLists.BUT = [
    "they've lost their vision", "they keep having nightmares", "they're too scared",
    "Zombies!", "they keep getting in their own way", "they just can't find it",
    "They're being chased by a <ANIMALS>"

];

WordLists.SETTING = [
    "Victorian era London", "outer space", "the Moon", "another planet", "underground",
    "a stakeout", "a skatepark", "the local shop", "the royal castle", "a dungeon",
    "prision", "at sea", "on a boat", "a deserted island", "in an office"
]


// Existing IP Charcters (Fan-Fiction)
WordLists.DOCTOR_WHO_CHARACTERS = [
    "The Doctor", "Rose Tyle", "Jack Harkness"
]
WordLists.MARVEL_CHARACTERS = [
    "Ironman", "Tony Stark", "Captain America", "Steve Rogers", "Buckey Barnes", "Black Panther", "Thor", "Loki",
    "Hulk", "She-Hulk", "Mantis", "Star-Lord", "Drax", "Gamora", "Nebula", "Spider-Man", "Vision", "Scarlet Witch"
]
WordLists.DC_CHARACTERS = [
    "Batman", "The Joker", "Harley Quinn"
]
WordLists.SUPERNATURAL_CHARACTERS = [
    "Sam Winchester", "Dean Winchester"
]
WordLists.DISNEY_CHARACTERS = [
    "Mickey Mouse", "Moana", "Daffy Duck", "Scrooge McDuck", "Cinderella", "Elsa", "Olaf", "Peter Pan", "Buzz Lightyear"
]
WordLists.HARRY_POTTER_CHARACTERS = [
    "Harry Potter", "James Potter", "Lilly Potter"
]
WordLists.MISC_CHARACTERS = [

]
WordLists.ANT_FANFICTION_CHARACTER = [
    ...WordLists.DOCTOR_WHO_CHARACTERS, ...WordLists.MARVEL_CHARACTERS, ...WordLists.DC_CHARACTERS, ...WordLists.SUPERNATURAL_CHARACTERS, ...WordLists.DISNEY_CHARACTERS,
    ...WordLists.HARRY_POTTER_CHARACTERS, ...WordLists.MISC_CHARACTERS
]

WordLists.FIRST_NAME_MALE =  [
    "Michael", "Ryan", "Scott", "Tyler", "Kyle", "Noah", "Sean", "Dylan", "Jordan", "Jesse", 
    "Logan", "Mason", "Kai", "Jayden", "Luca", "Rowan", "Zion", "Remi", "Ari", "Blake", 
    "Elliot", "Quinn", "River", "Aria", "Alex", "Jude", "Charlie", "Ira", "Atlas", "Evelyn", 
    "Emerson", "Alma", "Maverick", "Andrea", "Isha", "Akira", "Skylar", "Sloane", "Finley", "Everly", 
    "Theo", "Skyler", "Bailey", "Riley", "Sage", "Rae", "Sasha", "Vivian", "Evan", "Nolan", 
    "Jade", "Mika", "Chelsea", "Rory", "Emery", "Aiden", "Harlow", "Avery", "Zoe", "Shiloh", 
    "Camille", "Hayden", "Yara", "Asher", "Ellis", "Asa", "Skye", "Nico", "Reese", "Marie", 
    "Aubrey", "Miles", "Francis", "Callan", "Harper", "Jean", "Beau", "Tara", "Shelby", "Phoenix", 
    "Hailey", "Sawyer", "Jamie", "Parker", "Lauren", "Marley", "Kaiden", "Faye", "Carter", "Grayson", 
    "Cooper", "Chase", "Morgan", "June", "Brooks", "Mackenzie", "Cleo", "Max", "Arden", "Brooke", 
    "Blair", "Rayne", "Hallie", "Lea", "Elliott", "Damian", "Adrian", "Joyce", "Niko", "Beckett", 
    "Ashton", "Rylee", "Imani", "Leighton", "Amos", "Remy", "Jayce", "Shane", "Darcy", "Micah", 
    "Devin", "Sunny", "Artemis", "Salem", "Ryder", "Patricia", "Sloan", "Harley", "Dior", "Nikita", 
    "Oakley", "Elia", "Taylor", "Amani", "Simone", "Alaia", "Cole", "Rylan", "Bryce", "Rio", 
    "Briar", "Ryker", "Alison", "Cali", "Kalani", "Peyton", "Amal", "Cameron", "Kyrie", "Raiden", 
    "Eva", "Claire", "Ariel", "Tristan", "Alexis", "Teagan", "Paige", "Robin", "Reece", "Rian", 
    "Emmett", "Spencer", "Kinsley", "Sutton", "Andre", "Hunter", "Kendall", "Rey", "Archer", "Lee", 
    "Idris", "Fallon", "Shay", "Hadley", "Dakota", "Isa", "Misha", "Julian", "Quincy", "Ayden", 
    "Emory", "Kaya", "Winnie", "Selah", "Carson", "Elisha", "Aspen", "Maxwell", "Jett", "Camden", 
    "Jericho", "Madison", "Cassidy", "Allison", "Kimberly", "Payton", "Elon", "Leigh", "Callen", "Presley", 
    "Marion", "Milan", "Israel", "Zephyr", "Dillon", "Ollie", "Raine", "Rowen", "Addison", "Eli", 
    "Haven", "Bodie", "Lennon", "Wyatt", "Remington", "Shea", "Landon", "Aster", "Jalen", "Jaiden", 
    "Flynn", "Zariah", "Ashley", "Brady", "Easton", "Eliza", "Delaney", "Azaria", "Lynn", "Esme", 
    "Colby", "Kade", "Hayley", "Yuki", "Maurice", "Jocelyn", "Beverly", "Rei", "Jessie", "Finnley", 
    "Ash", "Noor", "Mckenna", "Reid", "Aris", "Courtney", "Lacey", "Brynn", "Murphy", "Saige", 
    "Devon", "Emmet", "Harlan", "Sidney", "Paxton", "Maddie", "Kora", "Gael", "Bentley", "Kristen", 
    "Kennedy", "Grey", "Marlowe", "Kit", "Rene", "Blaire", "Drew", "Kenzie", "Hayes", "Roshan"
]

WordLists.FIRST_NAME_FEMALE = [
    "Patricia", "Ashley", "Kimberly", "Joyce", "Lauren", "Evelyn", "Andrea", "Madison", "Jean", "Beverly", 
    "Alexis", "Marie", "Kai", "Jayden", "Luca", "Rowan", "Zion", "Remi", "Ari", "Blake", 
    "Elliot", "Quinn", "River", "Aria", "Alex", "Jude", "Charlie", "Ira", "Atlas", "Emerson", 
    "Alma", "Maverick", "Jesse", "Isha", "Akira", "Skylar", "Sloane", "Finley", "Everly", "Theo", 
    "Skyler", "Bailey", "Riley", "Sage", "Rae", "Sasha", "Sean", "Noah", "Vivian", "Evan", 
    "Nolan", "Jade", "Mika", "Chelsea", "Rory", "Emery", "Aiden", "Harlow", "Avery", "Zoe", 
    "Shiloh", "Camille", "Hayden", "Yara", "Asher", "Ellis", "Asa", "Skye", "Nico", "Reese", 
    "Kyle", "Aubrey", "Miles", "Francis", "Callan", "Harper", "Beau", "Tara", "Shelby", "Phoenix", 
    "Hailey", "Sawyer", "Jamie", "Parker", "Marley", "Kaiden", "Faye", "Carter", "Grayson", "Cooper", 
    "Chase", "Scott", "Morgan", "June", "Brooks", "Mackenzie", "Cleo", "Max", "Arden", "Brooke", 
    "Blair", "Rayne", "Hallie", "Lea", "Elliott", "Damian", "Adrian", "Niko", "Beckett", "Ashton", 
    "Rylee", "Imani", "Leighton", "Amos", "Remy", "Jayce", "Ryan", "Shane", "Darcy", "Micah", 
    "Devin", "Sunny", "Artemis", "Salem", "Ryder", "Logan", "Sloan", "Harley", "Dior", "Nikita", 
    "Oakley", "Jordan", "Elia", "Taylor", "Amani", "Michael", "Simone", "Alaia", "Cole", "Rylan", 
    "Bryce", "Rio", "Briar", "Ryker", "Alison", "Cali", "Kalani", "Peyton", "Amal", "Cameron", 
    "Kyrie", "Raiden", "Eva", "Claire", "Ariel", "Tristan", "Teagan", "Paige", "Robin", "Reece", 
    "Rian", "Emmett", "Spencer", "Kinsley", "Sutton", "Andre", "Hunter", "Kendall", "Rey", "Archer", 
    "Lee", "Idris", "Fallon", "Shay", "Hadley", "Dakota", "Isa", "Misha", "Julian", "Quincy", 
    "Ayden", "Emory", "Dylan", "Kaya", "Winnie", "Selah", "Carson", "Elisha", "Aspen", "Maxwell", 
    "Jett", "Camden", "Mason", "Jericho", "Cassidy", "Allison", "Payton", "Elon", "Leigh", "Callen", 
    "Presley", "Marion", "Milan", "Israel", "Zephyr", "Dillon", "Ollie", "Raine", "Rowen", "Addison", 
    "Eli", "Haven", "Bodie", "Lennon", "Wyatt", "Remington", "Shea", "Landon", "Aster", "Jalen", 
    "Jaiden", "Flynn", "Tyler", "Zariah", "Brady", "Easton", "Eliza", "Delaney", "Azaria", "Lynn", 
    "Esme", "Colby", "Kade", "Hayley", "Yuki", "Maurice", "Jocelyn", "Rei", "Jessie", "Finnley", 
    "Ash", "Noor", "Mckenna", "Reid", "Aris", "Courtney", "Lacey", "Brynn", "Murphy", "Saige", 
    "Devon", "Emmet", "Harlan", "Sidney", "Paxton", "Maddie", "Kora", "Gael", "Bentley", "Kristen", 
    "Kennedy", "Grey", "Marlowe", "Kit", "Rene", "Blaire", "Drew", "Kenzie", "Hayes", "Roshan"
]

WordLists.FIRST_NAME_UNISEX = [
    "Kai", "Jayden", "Luca", "Rowan", "Zion", "Remi", "Ari", "Blake", "Elliot", "Quinn", 
    "River", "Aria", "Alex", "Jude", "Charlie", "Ira", "Atlas", "Evelyn", "Emerson", "Alma", 
    "Maverick", "Jesse", "Andrea", "Isha", "Akira", "Skylar", "Sloane", "Finley", "Everly", "Theo", 
    "Skyler", "Bailey", "Riley", "Sage", "Rae", "Sasha", "Sean", "Noah", "Vivian", "Evan", 
    "Nolan", "Jade", "Mika", "Chelsea", "Rory", "Emery", "Aiden", "Harlow", "Avery", "Zoe", 
    "Shiloh", "Camille", "Hayden", "Yara", "Asher", "Ellis", "Asa", "Skye", "Nico", "Reese", 
    "Kyle", "Marie", "Aubrey", "Miles", "Francis", "Callan", "Harper", "Jean", "Beau", "Tara", 
    "Shelby", "Phoenix", "Hailey", "Sawyer", "Jamie", "Parker", "Lauren", "Marley", "Kaiden", "Faye", 
    "Carter", "Grayson", "Cooper", "Chase", "Scott", "Morgan", "June", "Brooks", "Mackenzie", "Cleo", 
    "Max", "Arden", "Brooke", "Blair", "Rayne", "Hallie", "Lea", "Elliott", "Damian", "Adrian", 
    "Joyce", "Niko", "Beckett", "Ashton", "Rylee", "Imani", "Leighton", "Amos", "Remy", "Jayce", 
    "Ryan", "Shane", "Darcy", "Micah", "Devin", "Sunny", "Artemis", "Salem", "Ryder", "Patricia", 
    "Logan", "Sloan", "Harley", "Dior", "Nikita", "Oakley", "Jordan", "Elia", "Taylor", "Amani", 
    "Michael", "Simone", "Alaia", "Cole", "Rylan", "Bryce", "Rio", "Briar", "Ryker", "Alison", 
    "Cali", "Kalani", "Peyton", "Amal", "Cameron", "Kyrie", "Raiden", "Eva", "Claire", "Ariel", 
    "Tristan", "Alexis", "Teagan", "Paige", "Robin", "Reece", "Rian", "Emmett", "Spencer", "Kinsley", 
    "Sutton", "Andre", "Hunter", "Kendall", "Rey", "Archer", "Lee", "Idris", "Fallon", "Shay", 
    "Hadley", "Dakota", "Isa", "Misha", "Julian", "Quincy", "Ayden", "Emory", "Dylan", "Kaya", 
    "Winnie", "Selah", "Carson", "Elisha", "Aspen", "Maxwell", "Jett", "Camden", "Mason", "Jericho", 
    "Madison", "Cassidy", "Allison", "Kimberly", "Payton", "Elon", "Leigh", "Callen", "Presley", "Marion", 
    "Milan", "Israel", "Zephyr", "Dillon", "Ollie", "Raine", "Rowen", "Addison", "Eli", "Haven", 
    "Bodie", "Lennon", "Wyatt", "Remington", "Shea", "Landon", "Aster", "Jalen", "Jaiden", "Flynn", 
    "Tyler", "Zariah", "Ashley", "Brady", "Easton", "Eliza", "Delaney", "Azaria", "Lynn", "Esme", 
    "Colby", "Kade", "Hayley", "Yuki", "Maurice", "Jocelyn", "Beverly", "Rei", "Jessie", "Finnley", 
    "Ash", "Noor", "Mckenna", "Reid", "Aris", "Courtney", "Lacey", "Brynn", "Murphy", "Saige", 
    "Devon", "Emmet", "Harlan", "Sidney", "Paxton", "Maddie", "Kora", "Gael", "Bentley", "Kristen", 
    "Kennedy", "Grey", "Marlowe", "Kit", "Rene", "Blaire", "Drew", "Kenzie", "Hayes", "Roshan"
]

WordLists.SURNAMES = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", 
    "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", 
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", 
    "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", 
    "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", 
    "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", 
    "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", 
    "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", 
    "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", 
    "Murray", "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "Mcdonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", 
    "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", 
    "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox", 
    "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", "Payne", 
    "Grant", "Dunn", "Kelley", "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", "Elliott", 
    "Cunningham", "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray", "Delgado", "Berry", "Perkins", "Hoffman", "Johnston", 
    "Matthews", "Pena", "Richards", "Contreras", "Willis", "Carpenter", "Lawrence", "Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", 
    "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", 
    "Lawson", "Jacobs", "Obrien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", "Gilbert", "Dean", "Sims", 
    "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "Mccoy", "Garrett", "Burton", "Fuller", "Wang", "Weber", "Welch", "Rojas", 
    "Lucas", "Marquez", "Fields", "Park", "Yang", "Little", "Banks", "Padilla", "Day", "Walsh", "Bowman", "Schultz", "Luna", "Fowler", "Mejia", 
    "Davidson", "Acosta", "Brewer", "May", "Holland", "Juarez", "Newman", "Pearson", "Curtis", "Cortez", "Douglas", "Schneider", "Joseph", "Barrett", "Navarro", 
    "Figueroa", "Keller", "Avila", "Wade", "Molina", "Stanley", "Hopkins", "Campos", "Barnett", "Bates", "Chambers", "Caldwell", "Beck", "Lambert", "Miranda", 
    "Byrd", "Craig", "Ayala", "Lowe", "Frazier", "Powers", "Neal", "Leonard", "Gregory", "Carrillo", "Sutton", "Fleming", "Rhodes", "Shelton", "Schwartz", 
    "Norris", "Jennings", "Watts", "Duran", "Walters", "Cohen", "Mcdaniel", "Moran", "Parks", "Steele", "Vaughn", "Becker", "Holt", "Deleon", "Barker", 
    "Terry", "Hale", "Leon", "Hail", "Benson", "Haynes", "Horton", "Miles", "Lyons", "Pham", "Graves", "Bush", "Thornton", "Wolfe", "Warner", 
    "Cabrera", "Mckinney", "Mann", "Zimmerman", "Dawson", "Lara", "Fletcher", "Page", "Mccarthy", "Love", "Robles", "Cervantes", "Solis", "Erickson", "Reeves", 
    "Chang", "Klein", "Salinas", "Fuentes", "Baldwin", "Daniel", "Simon", "Velasquez", "Hardy", "Higgins", "Aguirre", "Lin", "Cummings", "Chandler", "Sharp", 
    "Barber", "Bowen", "Ochoa", "Dennis", "Robbins", "Liu", "Ramsey", "Francis", "Griffith", "Paul", "Blair", "Oconnor", "Cardenas", "Pacheco", "Cross", 
    "Calderon", "Quinn", "Moss", "Swanson", "Chan", "Rivas", "Khan", "Rodgers", "Serrano", "Fitzgerald", "Rosales", "Stevenson", "Christensen", "Manning", "Gill", 
    "Curry", "Mclaughlin", "Harmon", "Mcgee", "Gross", "Doyle", "Garner", "Newton", "Burgess", "Reese", "Walton", "Blake", "Trujillo", "Adkins", "Brady", 
    "Goodman", "Roman", "Webster", "Goodwin", "Fischer", "Huang", "Potter", "Delacruz", "Montoya", "Todd", "Wu", "Hines", "Mullins", "Castaneda", "Malone", 
    "Cannon", "Tate", "Mack", "Sherman", "Hubbard", "Hodges", "Zhang", "Guerra", "Wolf", "Valencia", "Saunders", "Franco", "Rowe", "Gallagher", "Farmer", 
    "Hammond", "Hampton", "Townsend", "Ingram", "Wise", "Gallegos", "Clarke", "Barton", "Schroeder", "Maxwell", "Waters", "Logan", "Camacho", "Strickland", "Norman", 
    "Person", "Colon", "Parsons", "Frank", "Harrington", "Glover", "Osborne", "Buchanan", "Casey", "Floyd", "Patton", "Ibarra", "Ball", "Tyler", "Suarez", 
    "Bowers", "Orozco", "Salas", "Cobb", "Gibbs", "Andrade", "Bauer", "Conner", "Moody", "Escobar", "Mcguire", "Lloyd", "Mueller", "Hartman", "French", 
    "Kramer", "Mcbride", "Pope", "Lindsey", "Velazquez", "Norton", "Mccormick", "Sparks", "Flynn", "Yates", "Hogan", "Marsh", "Macias", "Villanueva", "Zamora", 
    "Pratt", "Stokes", "Owen", "Ballard", "Lang", "Brock", "Villarreal", "Charles", "Drake", "Barrera", "Cain", "Patrick", "Pineda", "Burnett", "Mercado", 
    "Santana", "Shepherd", "Bautista", "Ali", "Shaffer", "Lamb", "Trevino", "Mckenzie", "Hess", "Beil", "Olsen", "Cochran", "Morton", "Nash", "Wilkins", 
    "Petersen", "Briggs", "Shah", "Roth", "Nicholson", "Holloway", "Lozano", "Rangel", "Flowers", "Hoover", "Short", "Arias", "Mora", "Valenzuela", "Bryan", 
    "Meyers", "Weiss", "Underwood", "Bass", "Greer", "Summers", "Houston", "Carson", "Morrow", "Clayton", "Whitaker", "Decker", "Yoder", "Collier", "Zuniga", 
    "Carey", "Wilcox", "Melendez", "Poole", "Roberson", "Larsen", "Conley", "Davenport", "Copeland", "Massey", "Lam", "Huff", "Rocha", "Cameron", "Jefferson", 
    "Hood", "Monroe", "Anthony", "Pittman", "Huynh", "Randall", "Singleton", "Kirk", "Combs", "Mathis", "Christian", "Skinner", "Bradford", "Richard", "Galvan", 
    "Wall", "Boone", "Kirby", "Wilkinson", "Bridges", "Bruce", "Atkinson", "Velez", "Meza", "Roy", "Vincent", "York", "Hodge", "Villa", "Abbott", 
    "Allison", "Tapia", "Gates", "Chase", "Sosa", "Sweeney", "Farrell", "Wyatt", "Dalton", "Horn", "Barron", "Phelps", "Yu", "Dickerson", "Heath", 
    "Foley", "Atkins", "Mathews", "Bonilla", "Acevedo", "Benitez", "Zavala", "Hensley", "Glenn", "Cisneros", "Harrell", "Shields", "Rubio", "Huffman", "Choi", 
    "Boyer", "Garrison", "Arroyo", "Bond", "Kane", "Hancock", "Callahan", "Dillon", "Cline", "Wiggins", "Grimes", "Arellano", "Melton", "Oneill", "Savage", 
    "Ho", "Beltran", "Pitts", "Parrish", "Ponce", "Rich", "Booth", "Koch", "Golden", "Ware", "Brennan", "Mcdowell", "Marks", "Cantu", "Humphrey", 
    "Baxter", "Sawyer", "Clay", "Tanner", "Hutchinson", "Kaur", "Berg", "Wiley", "Gilmore", "Russo", "Villegas", "Hobbs", "Keith", "Wilkerson", "Ahmed", 
    "Beard", "Mcclain", "Montes", "Mata", "Rosario", "Vang", "Walter", "Henson", "Oneal", "Mosley", "Mcclure", "Beasley", "Stephenson", "Snow", "Huerta", 
    "Preston", "Vance", "Barry", "Johns", "Eaton", "Blackwell", "Dyer", "Prince", "Macdonald", "Solomon", "Guevara", "Stafford", "English", "Hurst", "Woodard", 
    "Cortes", "Shannon", "Kemp", "Nolan", "Mccullough", "Merritt", "Murillo", "Moon", "Salgado", "Strong", "Kline", "Cordova", "Barajas", "Roach", "Rosas", 
    "Winters", "Jacobson", "Lester", "Knox", "Bullock", "Kerr", "Leach", "Meadows", "Orr", "Davila", "Whitehead", "Pruitt", "Kent", "Conway", "Mckee", 
    "Barr", "David", "Dejesus", "Marin", "Berger", "Mcintyre", "Blankenship", "Gaines", "Palacios", "Cuevas", "Bartlett", "Durham", "Dorsey", "Mccall", "Odonnell", 
    "Stein", "Browning", "Stout", "Lowery", "Sloan", "Mclean", "Hendricks", "Calhoun", "Sexton", "Chung", "Gentry", "Hull", "Duarte", "Ellison", "Nielsen", 
    "Gillespie", "Buck", "Middleton", "Sellers", "Leblanc", "Esparza", "Hardin", "Bradshaw", "Mcintosh", "Howe", "Livingston", "Frost", "Glass", "Morse", "Knapp", 
    "Herman", "Stark", "Bravo", "Noble", "Spears", "Weeks", "Corona", "Frederick", "Buckley", "Mcfarland", "Hebert", "Enriquez", "Hickman", "Quintero", "Randolph", 
    "Schaefer", "Walls", "Trejo", "House", "Reilly", "Pennington", "Michael", "Conrad", "Giles", "Benjamin", "Crosby", "Fitzpatrick", "Donovan", "Mays", "Mahoney", 
    "Valentine", "Raymond", "Medrano", "Hahn", "Mcmillan", "Small", "Bentley", "Felix", "Peck", "Lucero", "Boyle", "Hanna", "Pace", "Rush", "Hurley", 
    "Harding", "Mcconnell", "Bernal", "Nava", "Ayers", "Everett", "Ventura", "Avery", "Pugh", "Mayer", "Bender", "Shepard", "Mcmahon", "Landry", "Case", 
    "Sampson", "Moses", "Magana", "Blackburn", "Dunlap", "Gould", "Duffy", "Vaughan", "Herring", "Mckay", "Espinosa", "Rivers", "Farley", "Bernard", "Ashley", 
    "Friedman", "Potts", "Truong", "Costa", "Correa", "Blevins", "Nixon", "Clements", "Fry", "Delarosa", "Best", "Benton", "Lugo", "Portillo", "Dougherty", 
    "Crane", "Haley", "Phan", "Villalobos", "Blanchard", "Horne", "Finley", "Quintana", "Lynn", "Esquivel", "Bean", "Dodson", "Mullen", "Xiong", "Hayden", 
    "Cano", "Levy", "Huber", "Richmond", "Moyer", "Lim", "Frye", "Sheppard", "Mccarty", "Avalos", "Booker", "Waller", "Parra", "Woodward", "Jaramillo", 
    "Krueger", "Rasmussen", "Brandt", "Peralta", "Donaldson", "Stuart", "Faulkner", "Maynard", "Galindo", "Coffey", "Estes", "Sanford", "Burch", "Maddox", "Vo", 
    "Oconnell", "Vu", "Andersen", "Spence", "Mcpherson", "Church", "Schmitt", "Stanton", "Leal", "Cherry", "Compton", "Dudley", "Sierra", "Pollard", "Alfaro", 
    "Hester", "Proctor", "Lu", "Hinton", "Novak", "Good", "Madden", "Mccann", "Terrell", "Jarvis", "Dickson", "Reyna", "Cantrell", "Mayo", "Branch", 
    "Hendrix", "Rollins", "Rowland", "Whitney", "Duke", "Odom", "Daugherty", "Travis", "Tang", "Archer", "Bennet"    
]