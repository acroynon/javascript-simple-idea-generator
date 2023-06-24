let CustomWordLists = { }
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

WordLists.ELEMENT = [
    "aluminum", "americium", "argon", "arsenic", "barium", "boron", "cadmium", "carbon", "chromium", "cobalt", "copper", "gold", "helium",
    "hydrogen", "iron", "iridium", "krypton", "lead", "manesium", "mercury", "neon", "nickel", "nitrogen", "osmium", "oxygen", "palladium",
    "platinum", "plutonium", "potassium", "radium", "radon", "silicon", "sulfur", "tin", "titanium", "tungsten", "uranium", "xenon", "zinc"
];

WordLists.FOOD = [
    "apple", "avacado", "almond", "artichoke", "applesauce", "bacon", "banana", "beans", "bagel", "beer", "broccoli", "buritto", "cabbage", "cake", "carrot",
    "celery", "cheese", "chicken", "catfish", "chips", "chocolate", "clams", "crakers", "coffee", "cookies", "corn", "cupcake", "crab", "curry", "ceral",
    "chimichanga", "dates", "duck", "dumplings", "donut", "eggs", "eggrolls", "eggplant", "fajita", "fish", "fondu", "garlic", "ginger", "goose", "granola",
    "grapes", "guancamole", "ham", "hamburger", "cheese burger", "honey", "hash browns", "hot dog", "hummus", "icecream", "jalapeno", "jam", "jelly", "kale", "kethcup",
    "kiwi", "lobster", "lamb", "lasagna", "meatballs", "milk", "milkshake", "noodles", "pizza", "pepperoni", "pancakes", "quiche", "spinach", "spaghetti", "syrup",
    "toast", "venison", "waffles,", "walnuts", "yogurt"
]

WordLists.NOUN =[
    "boot", "degree", "badge", "crayon", "bite", "rock", "meal", "guitar", "zebra", "quartz", "grass", "quiver", "color", "work", "punishment", "activity", "transport", 
    "bucket", "wool", "butter", "eye", "seat", "wash", "curtain", "actor", "treatment", "square",  "drink", "dog", "shape", "rub", "girls", "view", "smash", "truck",
    "purpose", "cactus", "feeling", "friend", "squirrel", "popcorn", "adjustment", "sweater", "geese", "pickle", "brick", "bag", "crate", "form", "camera", "rabbit",
    "humor", "train", "jam", "houses", "show", "route", "grape", "carriage", "skirt", "duck", "mountain", "rings", "box", "flag", "blood", "death", "stretch", "moon",
    "quicksand", "value", "brake", "farm", "jar", "skin", "knot", "growth", "frogs", "dogs", "beds", "toes", "steel", "coil", "prose", "selection", "house", "representative",
    "marble", "respect", "lake", "thrill", "star", "button", "question", "birds", "copper", "war", "bottle", "camp", "vase", "time", "chickens", "oven", "cap",
    "son", "slope", "cherry", "insurance", "need", "acoustics", "reaction", "linen", "locket", "regret", "wax", "pull", "fowl", "motion", "wheel", "twig", "watch", "support",
    "spy", "memory", "industry", "friends", "quarter", "dime", "expansion", "nerve", "vessel", "anger", "tray", "wood", "circle", "jellyfish", "milk", "tooth", "grain", "beef",
    "nut", "stranger", "air", "magic", "agreement", "person", "wave", "cough", "card", "weight", "visitor", "frame", "experience", "cake", "thought", "soup", "vacation",
    "pizzas", "year", "bedroom", "jewel", "fairies", "soap", "hammer", "boy", "bikes", "unit", "example", "orange", "range", "crime", "receipt", "nation", "riddle",
    "wrist", "tendency", "tent", "reading", "attack", "library", "coat", "army", "rail", "cream", "nose", "bait", "government", "mine", "icicle", "food", "surprise",
    "north", "change", "advertisement", "kitty", "quill", "kettle", "impulse", "smoke", "grip", "engine", "condition", "noise", "connection", "tail", "kittens", "hall", "sea", 
    "top", "jump", "power", "cushion", "fireman", "alarm", "clam", "flowers", "pot", "price", "cause", "soda", "plane", "trousers", "bridge", "caption", "hospital", "rifle", 
    "bike", "push", "straw", "teeth", "love", "trade", "downtown", "hands", "bee", "meeting", "mint", "income", "sound", "scarecrow", "sky", "snakes", "end", "pet", "hope", 
    "number", "edge", "machine", "jelly", "board", "mice", "juice", "pipe", "uncle", "secretary", "leather", "roof", "oatmeal", "lock", "plastic", "table", "flame", 
    "distribution", "structure", "cherries", "cave", "snails", "drop", "grandmother", "rest", "shirt", "silk", "haircut", "pump", "teaching", "horses", "screw", "dinosaurs", 
    "island", "appliance", "animal", "angle", "thing", "pencil", "society", "books", "approval", "creature", "flavor", "muscle", "song", "plantation", "cart", "taste", "test", 
    "ink", "slave", "building", "arch", "bomb", "level", "toothpaste", "hook", "chicken", "shake", "recess", "cent", "sticks", "thunder", "digestion", "spade", "sheet", "metal", 
    "ship", "pleasure", "sleep", "spot", "trains", "seashore", "snail", "lamp", "jeans", "pan", "step", "rainstorm", "man", "talk", "room", "vein", "rule", "meat", "spoon", 
    "curve", "cheese", "mask", "slip", "friction", "country", "development", "sister", "ring", "yarn", "sisters", "sack", "airport", "oranges", "authority", "pail", "discovery", 
    "potato", "land", "lace", "reward", "laborer", "advice", "grade", "relation", "loaf", "use", "believe", "van", "paper", "oil", "desk", "increase", "self", "sheep", "ocean", 
    "mother", "pear", "religion", "fear", "eggnog", "trucks", "stage", "line", "snake", "brother", "stamp", "basket", "throat", "place", "pest", "salt", "fang", "grandfather",
    "judge", "partner", "breath", "quilt", "carpenter", "cats", "summer", "hole", "plate", "earthquake", "flight", "ice", "railway", "bells", "event", "flesh", "seed",
    "fuel", "scarf", "celery", "crack", "position", "cook", "balance", "coach", "word", "rice", "fact", "rat", "coast", "sponge", "chance", "dock", "nest", "knife",
    "belief", "instrument", "corn", "club", "harbor", "channel", "health", "bead", "mark", "limit", "cracker", "temper", "earth", "bath", "school", "sand", "things",
    "attraction", "wren", "apparatus", "waste", "wing", "church", "drawer", "sense", "credit", "blade", "canvas", "crown", "dolls", "harmony", "guide", "crib", "thumb",
    "ants", "pie", "hour", "roll", "tomatoes", "rake", "ladybug", "story", "competition", "ground", "volleyball", "name", "stomach", "addition", "picture", "sidewalk", "laugh",
    "burst", "front", "division", "afternoon", "battle", "turkey", "month", "branch", "sneeze", "note", "profit", "arm", "fire", "servant", "cakes", "cover", "legs", "berry", 
    "crowd", "brass", "hill", "way", "act", "swing", "basketball", "trail", "low", "beginner", "stocking", "action", "bulb", "start", "plot", "lip", "minister", "boat",
    "cobweb", "plough", "week", "morning", "discussion", "smile", "point", "hate", "pocket", "zipper", "cars", "steam", "look", "theory", "stew", "honey", "aftermath",
    "loss", "sign", "back", "pigs", "scene", "donkey", "letters", "part", "team", "mass", "class", "sun", "finger", "driving", "current", "rain", "fall", "glove",
    "calculator", "trick", "stone", "cup", "committee", "trees", "drain", "bird", "poison", "furniture", "wall", "ear", "chess", "join", "giraffe", "play", "vest",
    "blow", "mom", "volcano", "debt", "stop", "voice", "shelf", "knee", "zinc", "arithmetic", "winter", "bear", "string", "window", "porter", "chin", "boundary",
    "detail", "throne", "education", "middle", "fork", "run", "tin", "shade", "frog", "size", "wilderness", "wish", "cow", "hair", "chalk", "sofa", "science",
    "sail", "monkey", "sort", "lunchroom", "doctor", "hot", "offer", "money", "children", "move", "control", "car", "cast", "home", "whip", "mitten", "quiet",
    "tub", "trouble", "turn", "tank", "observation", "title", "sugar", "stick", "distance", "gate", "planes", "quince", "border", "hobbies", "suggestion", "glass", "cloth",
    "elbow", "egg", "dirt", "territory", "history", "hat", "decision", "measure", "parcel", "bushes", "vegetable", "spiders", "lunch", "fold", "tongue", "hose", "neck",
    "bed", "interest", "suit", "pets", "bone", "night", "umbrella", "destruction", "birthday", "day", "payment", "pen", "fruit", "touch", "babies", "cattle", "sock",
    "hand", "insect", "office", "shame", "queen", "wrench", "order", "robin", "request", "tiger", "exchange", "rate", "invention", "effect", "book", "baby", "door",
    "space", "store", "twist", "afterthought", "liquid", "yoke", "argument", "wound", "wind", "veil", "horn", "business", "zoo", "key", "direction", "lettuce", "dad",
    "road", "hydrant", "statement", "produce", "giants", "shock", "rose", "sink", "cemetery", "mailbox", "reason", "bell", "company", "toad", "head", "root", "lumber",
    "amusement", "notebook", "water", "flock", "station", "bit", "party", "bubble", "wire", "iron", "holiday", "existence", "passenger", "verse", "heat", "texture", "protest",
    "base", "daughter", "voyage", "trip", "mist", "basin", "scissors", "desire", "kick", "rabbits", "match", "gold", "smell", "fog", "yard", "pin", "cable", "river",
    "minute", "error", "stitch", "fish", "eyes", "cellar", "care", "group", "dust", "wealth", "mouth", "side", "aunt", "needle", "face", "property", "weather",
    "doll", "toy", "deer", "crook", "songs", "toys", "crow", "maid", "ghost", "horse", "foot", "design", "cat", "dinner", "thread", "record", "playground",
    "eggs", "ball", "airplane", "account", "scent", "governor", "town", "yak", "underwear", "substance", "ray", "silver", "tramp", "shoes", "rhythm", "toothbrush", "pollution",
    "fly", "apparel", "plants", "mind", "pancake", "skate", "cannon", "powder", "spring", "kiss", "shoe", "sleet", "zephyr", "expert", "clover", "letter", "men",
    "calendar", "women", "leg", "walk", "stem", "yam", "tax", "achiever", "shop", "jail", "whistle", "tree", "pig", "peace", "language", "toe", "market",
    "collar", "baseball", "comparison", "worm", "floor", "woman", "force", "spark", "amount", "cub", "ducks", "dress", "bat", "writer", "ticket", "field", "idea",
    "birth", "snow", "girl", "wine", "flower", "cows", "art", "can", "behavior", "gun", "knowledge", "system", "swim", "rod", "waves", "stream", "street",
    "pies", "stove", "writing", "scale", "page", "coal", "plant", "cabbage", "creator", "chair", "computer", "radiator", "telescope", "keyboard", "light", 
    "spekaer", "balloon"
];

WordLists.JOB = [
    "accountant", "architect", "artist", "astronaut", "bookkeeper", "bus driver", "carpenter", "cashier", "construction worker", "cook/chef", "correctional officer",
    "counselor", "cowboy/girl", "delivery driver", "dentist", "doctor", "electrician", "epidemiologist", "financial advisor", "gardener", "generic business person", "groundskeeper",
    "head teacher", "interpreter/translator", "janitor", "lawyer", "librarian", "maid/housekeeper", "marketer", "marshal", "mechanic", "mechanical engineer", "nurse",
    "painter", "patrol officer", "personal assistant", "personal trainer", "photographer", "phramacist", "physical therapist", "pirate", "plumber", "police officer", "post man/woman",
    "programmer", "psychologist", "radiographer", "realtor", "receptionist", "scientist", "sheriff", "shopkeeper", "social worker", "space pirate", "sports coach", "surgeon",
    "taxi driver", "teacher", "telemarketer", "therapist", "traffic officer", "veterinarian", "web developer", "detective", "milk man/woman", "priest"
]

WordLists.PERSONALITY = [
    "active", "adaptable", "adventurous", "affable", "affectionate", "aggressive", "agreeable", "alert", "aloof", "ambitious", 
    "amiable", "amicable", "amused", "analytical", "angry", "annoyed", "annoying", "anxious", "argumentative", "arrogant", 
    "artistic", "ashamed", "assertive", "bad-tempered", "belligerent", "bewildered", "big-headed", "boastful", "boring", 
    "bossy", "brave", "bright", "broad-minded", "callous", "calm", "carefree", "careful", "careless", "cautious", "charismatic", 
    "charming", "chatty", "cheerful", "childish", "clever", "clingy", "clumsy", "collaborative", "combative", "communicative", 
    "compassionate", "concerned", "confrontational", "confused", "conscientious", "considerate", "convivial", "cooperative", 
    "courageous", "cowardly", "crazy", "creative", "cruel", "curious", "cynical", "deceitful", "decisive", "defeated", "defensive", 
    "defiant", "delightful", "dependable", "depressed", "determined", "devious", "difficult", "diligent", "dim", "diplomatic", 
    "discreet", "disgusted", "dishonest", "disruptive", "disturbed", "dizzy", "domineering", "doubtful", "dull", "dynamic", "eager", 
    "easy-going", "efficient", "egotistical", "elated", "embarrassed", "emotional", "empathetic", "encouraging", "energetic", 
    "enthusiastic", "envious", "evil", "excited", "extroverted", "exuberant", "fair-minded", "faithful", "fearless", "fierce", 
    "finicky", "focused", "foolish", "forceful", "frantic", "friendly", "frightened", "funny", "generous", "gentle", "gifted", 
    "giving", "good", "graceful", "gregarious", "grieving", "grumpy", "gullible", "gussy", "happy", "hardworking", "helpful", 
    "helpless", "hilarious", "honest", "hopeful", "hostile", "humorous", "idle", "imaginative", "impartial", "impatient", 
    "impolite", "impulsive", "inconsiderate", "indecisive", "independent", "indiscreet", "industrious", "inflexible", "innocent", 
    "inquisitive", "intellectual", "intolerant", "introverted", "intuitive", "inventive", "irresponsible", "irritable", 
    "jealous", "jittery", "jolly", "joyful", "joyous", "kind", "kooky", "laid-back", "lazy", "likable", "lively", "lonely", "loner", 
    "loud", "lovely", "loving", "loyal", "lucky", "mature", "mean", "modest", "moody", "motivated", "narrowminded", "nasty", "naughty", 
    "neat", "nervous", "nice", "non-judgemental", "nosy", "nutty", "obedient", "obnoxious", "observant", "obstinate", "odd", "optimistic", 
    "organized", "outgoing", "overcritical", "overemotional", "panicky", "passionate", "passive", "patient", "patronizing", "persistent", 
    "pessimistic", "philosophical", "pig-headed", "pioneering", "placid", "plucky", "poised", "polite", "pompous", "popular", 
    "possessive", "powerful", "practical", "precise", "pro-active", "proud", "puzzled", "quick-tempered", "quick-witted", "quiet", 
    "rational", "reckless", "reflective", "reliable", "relieved", "resentful", "reserved", "resourceful", "romantic", "rude", "secretive", 
    "self-centered", "self-confident", "self-disciplined", "selfish", "sensible", "sensitive", "serious", "shy", "silly", "sincere", 
    "sleepy", "smart", "sneaky", "socialable", "socialite", "steadfast", "straight-forward", "stubborn", "stupid", "successful", "sullen", 
    "supportive", "sympathetic", "tactless", "talented", "talkative", "tame", "tense", "thankful", "thoughtful", "thoughtless", "tidy", 
    "tired", "touchy", "tough", "troubled", "trustworthy", "unassuming", "understanding", "uninterested", "unlucky", "unpredictable", 
    "unreliable", "unsocial", "untidy", "untrustworthy", "upbeat", "upset", "uptight", "vague", "vain", "versatile", "victorious", 
    "vivacious", "vulgar", "warmhearted", "weak", "weak-willed", "weary", "wicked", "wild", "wise", "witty", "worried", "worrisome", "zany", 
    "zealous"
]

WordLists.ADJECTIVE = [
    "adorable", "amusing", "attractive", "awful", "bad", "beautiful", "big", "bloody", "blushing", "bored", "brainy", "breakable", "chubby", 
    "clean", "colorful", "colossal", "colourful", "comfortable", "completely average", "condemned", "creepy", "cute", "dangerous", "dark", 
    "dazzling", "dead", "different", "distinct", "drab", "elegant", "enchanting", "expensive", "famous", "fancy", "fantastic", "fat", "filthy", 
    "fit", "flabby", "fragile", "frail", "gigantic", "glamorous", "gleaming", "glorious", "gorgeous", "great", "grotesque", "handsome", "healthy", 
    "homeless", "homely", "horrible", "huge", "hungry", "hurt", "ill", "immense", "important", "impossible", "inexpensive", "infamous", "itchy", 
    "large", "light", "little", "long", "magnificent", "mammoth", "massive", "microscopic", "miniature", "misty", "modern", "motionless", "muddy", 
    "muscular", "mushy", "mysterious", "old-fashioned", "perfect", "petite", "plain", "pleasant", "poor", "precious", "prickly", "puny", "putrid", 
    "quaint", "repulsive", "rich", "scary", "scrawny", "scruffy", "shiny", "short", "small", "smiling", "smoggy", "sore", "sparkling", "splendid", 
    "spotless", "stormy", "strange", "super", "tall", "tasty", "teeny", "tender", "terrible", "tiny", "ugliest", "ugly", "unsightly", "unusual", 
    "vast", "wandering", "wrong", "funny", "hostile", "intelligent", "frail", "adorable", "dull", "dark", "odd", "magical"
];

WordLists.WANTS = [
    "treasure", "to go home", "to escape", "to find their lost <NOUN|FOOD|ANIMAL>", "to escape from the <ADJECTIVE> <ANIMAL>", "to find the <ADJECTIVE> <NOUN|FOOD|ANIMAL>",
    "to better themselves", "find out their true identity", "start a new world", "clear their name", "avoid the <GENERIC_CHARACTER>", "find a new passion", "avoid a person",
    "prove a theory", "make sure justic prevails", "win a competition", "escape their destiny", "win a <FOOD> eating competition", "clear a family member's name", 
    "save Christmas", "find out a secret", "start a family", "find a purpose", "become godly", "break an additiction", "reunite with a family member",
    "uncover a secret plot", "protect their honor", "be remembered", "be forgotten", "spread choas", "end a war", "start a war", "overcome a disability",
    "embrace who they are", "forget their past", "remember their past", "start a business", "find a job", "make friends", "appease the gods", "protect the innocent",
    "make a difference", "do the right thing", "be the best they can be", "spread their ideology", "become anonymous", "escape from their current life",
    "fidn romance", "follow orders", "clear a friend's name", "change a law", "lead a rebellion", "stop a rebellion", "experience new things", 
];
WordLists.BUT = [
    "they've lost their vision", "they keep having nightmares", "they're too scared", "Zombies!", "they keep getting in their own way", "they just can't find it",
    "They're being chased by a <ADJECTIVE> <ANIMAL>", "they can't let go of a dead dream", "unfamilar with their surroundings", "they trusted the wrong person",
    "they're afriad of getting hurt", "feel like it's hopeless", "they aren't allowed into a critical area", "their behaviour drove others away", "can't let go of the past",
    "they're faced with a difficult choice", "afraid of disspointment", "they don't get along with the person in charge", "afraid of causing disaster", "don't have any money",
    "they have a terrible reputation", "afraid of the unknown", "doesn't know the way", "doesn't know how", "they aren't sure what's real and what's not",
    "they don't have enough influence", "they aren't qualified enough", "stuck in a contract", "they're lost", "they don't have the skill", "they aren't seeing the big picture"
];

WordLists.PLACE = [
    "Airplane", "Airport", "Ambulance", "Amusement park", "Antique store", "Aquarium", "Arboretum", "Arcade", "Art gallery", "Attic", "Auto repair place",
    "Backyard", "Bakery", "Balcony", "Bank", "Bar", "Barbershop", "Barn", "Baseball park", "Basement", "Basketball court", "Bathroom", "Bike shop", "Blues bar",
    "Boardwalk", "Boat", "Bowling alley", "Boxing club", "Burger joint", "Cabin", "Camp site", "Candy store", "Car wash", "Carnival", "Casino", "Cave", "Cellar", 
    "Cemetery", "Chiropractor's office", "Church",  "Classroom", "Coffee shop", "Collage campus", "Concert stadium", "Construction site", "Corn maze", "Cottage",
    "Court room", "Cruise ship", "Dance studio", "Daycare", "Department store", "Desert", "Doctors office", "Downtown", "Driveway", "Dump", "Farm", "Fast food restaurant", 
    "Fire station", "Flea market", "Food court", "Food truck", "Forest", "Funeral home", "Garage", "Garage sale", "Garden", "Gas Station", "Golf course", "Green house", 
    "Grocery store", "Gym", "Gymnasium", "Hardware store", "Helicopter", "Hospital", "Hotel", "Hut", "Ice rink", "Jail", "Jewelry store", "Karaoke bar", "Kitchen", 
    "Lake house", "Laundromat","Library", "Lighthouse", "Liquor store", "Lobby", "Lounge", "Lunch room", "Mall", "Mansion", "Marina", "Morgue", "Movie theater", "Museum", 
    "Nursing home", "Office", "Office cubicle", "Park", "Pawn shop", "Pet store", "Photo booth", "Pizzaria", "Plantation", "Playground", "Police station", "Prison", 
    "Pumpkin patch", "Rest stop", "Restaurant", "Sauna", "School", "Shoe store", "Skate park", "Ski slope", "Storage locker", "Street corner", "Subway", "Summer camp", 
    "Swimming pool", "The beach", "Tree house", "Unemployment office", "Victorian era London", "Vineyard", "Waiting room", "Warehouse", "Wax museum", "Whiskey bar", "Yacht", 
    "Yarn shop", "Zoo", "a deserted island", "a dungeon", "a skatepark", "a stakeout", "another planet", "at sea", "attic", "dance studio", "hospital", "in an office", 
    "jewllery story", "on a boat", "outer space", "prision", "the Moon", "the local shop", "the royal castle", "underground"
]

WordLists.WEATHER = [
    "clear", "rainy", "storming", "foggy", "snow", "overcast", "cloudy", "sunny", "partly cloudy", "thunder and lightning", "windy",
]

WordLists.TIME_OF_DAY = [
    "morning", "afternoon", "early morning", "later afternoon", "evening", "dusk", "night", "dawn", "twilight"
]

WordLists.SKIN_COLOUR = [
    "extremely fair", "fair", "olive", "brown", "pale", "extremely pale", "dark brown/black",
    "porcelain", "ivory", "beige", "honey", "almond", "caramel"
]

WordLists.COLOUR = [
    "red", "ruby", "crimson", "scarlet", "orange", "apricot", "yellow", "honey", "gold", "green", "emerald", "lime", "blue", "azure", "navy",
    "sapphire", "purple", "violet", "magenta", "lilac", "pink", "fuschia", "brown", "black", "onyx", "obsidian", "grey", "silver", "white",
    "eggshell", "cream", "ivory", "cyan", "maroon", "light brown", "dark brown"
]

WordLists.ITEM_OF_CLOTHING = [
    "apron", "bandanna", "baseball cap", "bathrobe", "battledress", "beanie", "beany", "belt", "bib", "bikini", "blazer", "blouse", "body", "body stocking", 
    "bodysuit", "boots", "bowler hat", "bowtie", "bracelet", "braces/suspenders", "button-down shirt", "camouflage", "cap", "cardigan", "chaps", "cloak", 
    "coat", "codpiece", "collar", "corset", "cravat", "crown", "cuff links", "cummerbund/kummerbund", "dinner jacket", "dress", "dress shirt", "dressing gown",
    "dungarees", "dungerees", "earmuffs", "earrings", "evening gown", "eye-patch", "fedora", "flannel shirt", "flip-flops", "formal wear", "frock", "gambeson",
    "garter", "gilet", "glasses", "gloves", "gown", "halter", "handbag", "handkerchief", "hasmat suit", "hat", "headscarf", "helmet", "hoodie", "hoody",
    "hospital gown", "housecoat", "jacket", "jeans", "jerkin", "jersey", "jewelry", "jogging bottoms", "jump suit", "jumper", "khakis", "kilt", "kimono",
    "lab coat", "leather jacket", "leg warmers", "leotard", "loafers", "loincloth", "long johns", "mask", "miniskirt", "mittens", "monocle", "negligee",
    "nightdress/nightgown", "nightshirt", "onesie", "overall", "overcoat", "pantsuit", "pashmina", "plaid", "polo", "polo shirt", "port pie hat", "pullover",
    "purse", "pyjamas", "raincoat", "ring", "robe", "romper", "sari/saree", "sash", "scarf", "scraf", "scrubs", "shawl", "shirt", "shoe", "shoes", "shorts",
    "skirt", "slippers", "smart trousers", "smock", "sneakers", "socks", "suit jacket", "sun hat", "sunglasses", "sweater", "swimming costume", "swimming trunks",
    "swimsuit", "t-shirt", "tank top", "thong", "tie", "tie clip", "tie/necktie", "tights", "toga", "top", "top hat", "trousers", "tunic", "tuxedo", "tweed jacket",
    "umbrella", "undergarment", "uniform", "vest", "waistcoat", "wellingtons", "wig", "windbreaker"
]

WordLists.HAIR_STYLE = [
    "straight", "curly", "mohawk", "shaven", "bald", "comb over", "short", "long", "buzz cut", "ponytail", "mullet", "regular", "dreadlocks", "medium length", 
    "ponytail", "pig-tails", "afro", "out of control", "messy", "unkempt", "spikey", "wavey", "uneven", "frizzy", "flattop", "bowl cut", "bob cut", "pixie cut", 
    "undercut", "bun", "curtained", "double buns", "ducktail", "feathered", "mop-top", "slicked-back", "beehive", "bangs", "big hair", "blowout", "braided",
    "frosted tips", "half up", "liberty spikes", "pompadour", "ponyhawk", "professional cut", "quiff", "waves", "asymmetric", "cornrows", "extensions",
    "highlights", "natural", "clean-shaven", "goatee", "neckbeard", "moustache", "mutton-chops", "stubble"
]

WordLists.AGE = [
    "child", "young", "adult", "old", "eldery", "ancient", "teenager", "young adult", "adolescent", "middle aged"
]

WordLists.RANDOM_PHYSICAL_DESCRIPTOR = [
    "small eyes", "big eyes", "bling in one eye", "blind in both eyes", "wrinkles around eyes", "squinty eyes", "sunken eye sockets",
    "small nose", "big nose", "pointy node", "hooked nose", "broken nose", "bent nose", "button nose", "turned up nose", "bulbous nose", 
    "flared nose", "small ears", "big ears", "pointy ears", "small mouth", "big mouth", "wide grin", "thin mouth", "full lips", "cracked lips", 
    "dry lips", "gap between teeth", "overbite", "underbite","small hands", "large hands", "gnarly hands", "rough hands", "soft hands", "webbed hands", 
    "delicate hands", "calloused hands","stubby fingers", "long fingers", "ragged nails", "grimy fingernails", "small feet", "large feets", "webbed feet", 
    "short neck", "long neck", "small head", "large head", "short fingernails", "long fingernails", "long chin", "short chin", "round chin", "square jaw", 
    "pointy chin", "rounded face", "angular face", "defined face", "square face", "oblong face", "narrow features", "high forehead", 
    "prominent brow ridge", "protruding brow bone", "defined cheeckbones", "high cheekbones","sharp teeth", "vampire fangs", "small eyebrows", 
    "big eyebrows", "no eyebrows", "bushy eyebrows", "birthmark on face", "birthmark on their back", "birthmark on their arm", "birthmark on their leg",
    "missing an eye", "missing an arm", "missing a leg", "missing an ear", "scar down one eye", "scars down their arm(s)", "scars down their leg(s)", 
    "scars across their face", "scars across both eyes", "sacrs on/around mouth","wound on their face", "wound on their arm", "wound on their back", 
    "wound on their leg", "piercings", "tattoos", "gang tattoo(s)", "small-bodied", "big-bodied", "muscly", "broad shoulders", "medium build", "perculiar mole",
    "leathery skin", "loose skin", "dry skin", "scaly skin", "heavy-set"
]

WordLists.GENERIC_CHARACTER = [
    "absent-minded professor", "ace pilot", "action hero", "angel", "antihero", "aristocrat", "author", "barbarian", "bard", "beatnik", "best friend",
    "besterman", "bionic hero", "black knight", "black woman", "boy next door", "braggart", "bug-eyed monster", "bully", "career criminal", "cat lady", "chosen one",
    "christ figure", "classic hero", "clown", "competent man/woman", "con artist", "contender", "crone", "cult leader", "cult member", "curmudgeon", "damsel in distress",
    "dark lady", "dark lord", "dastardly whiplash", "devil", "doppelganger", "dragon lady", "dragon slayer", "drill sergeant", "dumb blonde", "everyman", "fall guy",
    "farmer's daughter", "farmer's wife", "father", "femme fatale", "final girl", "folk hero", "fool", "former/hiding nazi", "french maid", "gay best friend", "geek",
    "gentleman thief", "giant", "girl next door", "greaser", "grotesque", "gung-ho american", "gypsy", "hag", "halfbreed harlot", "harlequin", "homeless person",
    "hopeless romantic", "hotshot", "immigrant", "immortal", "innocent", "irish person", "italian person", "japanese person", "jewish american princess", "jewish mother", "jock",
    "judas", "latin lover", "legacy hero", "lgbtq character", "little green man", "lovable loser", "mad scientist", "martial arts master", "middle child", "millionaire", "miser",
    "mother", "mother's boy", "mother-in-law", "mythological king", "napoleonic villain", "neighbor", "nemesis", "nerd", "nice guy", "noble savage", "ordinary citizen",
    "ordinary person", "outlaw", "pantomime dame", "pirate", "posh person", "prince charming", "psycho-biddy", "punk rocker", "raw recruit", "rebel", "redneck",
    "redshirt", "religious person", "reluctant hero", "rightful king", "santanist", "savant", "schoolma'am", "seer", "shrew", "sidekick", "sissy",
    "starving artist", "student", "succubus", "superfluous man", "superhero", "supersoldier", "supervillain", "surfer", "swashbuckler", "teenager", "thug",
    "tiger mom", "tomboy", "tortured artist", "town drunk", "tragic hero", "tragic mulatto", "twin", "unseen character", "valley girl", "vampire", "village idiot", 
    "war veteran", "white man", "wimp", "wise fool", "wise old man", "yokel", "youngest child"
];

// Existing IP Charcters (Fan-Fiction)
WordLists.DOCTOR_WHO_CHARACTERS = [
    "The Doctor (Doctor Who) (Doctor who)", "Rose Tyle (Doctor Who) (Doctor who)", "Jack Harkness (Doctor Who) (Doctor who)", "Abzorbaloff (Doctor who)", "Ace (Doctor who)", 
    "Adipose (Doctor who)", "Adric (Doctor who)", "Amy Pond (Doctor who)", "Rory Pond (Doctor who)", "River Song (Doctor who)", "Ashad (Doctor who)", "Ashildr (Doctor who)",
    "Autons (Doctor who)", "Barbara Wright (Doctor who)", "Ben Jackson (Doctor who)", "Bill Potts (Doctor who)", "Brian the Ood (Doctor who)", "Brigadier Lethbridge-Stewart (Doctor who)",
    "Captain Jack Harkness (Doctor who)", "Captain Yates (Doctor who)", "Clara Oswald (Doctor who)", "Clockwork Droids (Doctor who)", "Colony Sarff (Doctor who)", "CyberMasters (Doctor who)",
    "Cybermen (Doctor who)", "Dalek Time Squad (Doctor who)", "Daleks (Doctor who)", "Dan Lewis (Doctor who)", "Danny Pink (Doctor who)", "Davros (Doctor who)",
    "Defence Drone Dalek (Doctor who)", "Dodo Chaplet (Doctor who)", "Donna Noble (Doctor who)", "Dregs (Doctor who)", "Eighth Doctor (Doctor who)", "Eleventh Doctor (Doctor who)",
    "Empty Child (Doctor who)", "Face of Boe (Doctor who)", "Fifth Doctor (Doctor who)", "First Doctor (Doctor who)", "Foretold (Doctor who)", "Fourteenth Doctor (Doctor who)",
    "Fourth Doctor (Doctor who)", "Fugitive Doctor (Doctor who)", "Grace Holloway (Doctor who)", "Grace O'Brien (Doctor who)", "Graham O’Brien (Doctor who)", "Haemovores (Doctor who)",
    "Harriet Jones (Doctor who)", "Harry Sullivan (Doctor who)", "Ian Chesterton (Doctor who)", "Ice Warriors (Doctor who)", "Idris/The Tardis (Doctor who)"
]
WordLists.MARVEL_CHARACTERS = [
    "Abomination (Marvel)", "Aldrich Killian (Marvel)", "Alexander Pierce (Marvel)", "Ancient One (Marvel)", "Ant-Man (Marvel)", "Aunt May (Marvel)", "Black Panther (Marvel)", 
    "Black Widow (Marvel)", "Captain America (Marvel)", "Captain Marvel (Marvel)", "Corvus Glaive (Marvel)", "Cull Obsidian (Marvel)", "Darren Cross (Marvel)", "Dormammu (Marvel)", 
    "Dr. Strange (Marvel)", "Drax (Marvel)", "Ebony Maw (Marvel)", "Ego (Marvel)", "FRIDAY (Marvel)", "Falcon (Marvel)", "Gamora (Marvel)", "Groot (Marvel)", "Hank Pym (Marvel)",
    "Happy Hogan (Marvel)", "Hawkeye (Marvel)", "Hela (Marvel)", "Hulk (Marvel)", "Iron Man (Marvel)", "Iron Monger (Marvel)", "JARVIS (Marvel)", "Jane Foster (Marvel)", "Killmonger (Marvel)",
    "Korg (Marvel)", "Kurse (Marvel)", "Lady Sif (Marvel)", "Loki (Marvel)", "Luis (Marvel)", "Malekith (Marvel)", "Mantis (Marvel)", "Miek (Marvel)", "Mordo (Marvel)", "Nakia (Marvel)",
    "Nebula (Marvel)", "Ned Leeds (Marvel)", "Nick Fury (Marvel)", "Odin (Marvel)", "Okoye (Marvel)", "Peggy Carter (Marvel)", "Pepper Potts (Marvel)", "Proxima Midnight (Marvel)", 
    "Quicksilver (Marvel)", "Red Skull (Marvel)", "Rocket Raccoon (Marvel)", "Ronan (Marvel)", "Scarlet Witch (Marvel)", "Sharon Carter Aka Agent 13 (Marvel)", "Shuri (Marvel)", 
    "Skurge (Marvel)", "Spider Man (Marvel)", "Star-Lord (Marvel)", "Taserface (Marvel)", "Thanos (Marvel)", "Thor (Marvel)", "Ultron (Marvel)", "Ulysses Klaue (Marvel)",
    "Valkyrie (Marvel)", "Vision (Marvel)", "Vulture (Marvel)", "War Machine (Marvel)", "Wasp (Marvel)", "Whiplash (Marvel)", "Winter Soldier (Marvel)", "Wong (Marvel)", "Yondu (Marvel)"
]
WordLists.DC_CHARACTERS = [
    "Alfred Pennyworth (DC)", "Amanda Waller (DC)", "Aquaman (DC)", "Atom (DC)", "Bane (DC)", "Batgirl (DC)", "Batman (DC)", "Beast Boy (DC)", "Black Canary (DC)", "Black Lightning (DC)",
    "Blue Beetle (DC)", "Booster Gold (DC)", "Brainiac (DC)", "Captain Atom (DC)", "Captain Cold (DC)", "Catwoman (DC)", "Chameleon Boy (DC)", "Cosmic Boy (DC)", "Cyborg (DC)",
    "Damian Wayne (DC)", "Darkseid (DC)", "Deadman (DC)", "Deathstroke (DC)", "Doctor Fate (DC)", "Donna Troy (DC)", "Elongated Man (DC)", "Etrigan (DC)", "Firestorm (DC)",
    "Freddy Freeman (DC)", "Green Arrow (DC)", "Green Lantern (DC)", "Hal Jordan (DC)", "Harley Quinn (DC)", "Harvey Bullock (DC)", "Hawkgirl (DC)",  "Hawkman (DC)",
    "Huntress (DC)", "James Gordon (DC)", "Jimmy Olsen (DC)", "John Constantine (DC)", "Jonathan Kent (DC)", "Jonathan and Martha Kent (DC)", "Jor-El (DC)", "Kid Flash (DC)",
    "Killer Croc (DC)", "Kilowog (DC)", "Krypto (DC)", "Lana Lang (DC)", "Lex Luthor (DC)", "Lightning Lad (DC)", "Lobo (DC)", "Lois Lane (DC)", "Martian Manhunter (DC)",
    "Mary Marvel (DC)", "Mera (DC)", "Metamorpho (DC)", "Mon-El (DC)", "Nightwing (DC)", "Penguin (DC)", "Perry White (DC)", "Phantom Stranger (DC)", "Plastic Man (DC)",
    "Poison Ivy (DC)", "Power Girl (DC)", "Queen Hippolyta (DC)", "Raven (DC)", "Red Arrow (DC)", "Red Tornado (DC)", "Riddler (DC)", "Robin (DC)", "Saturn Girl (DC)",
    "Scarecrow (DC)", "Shazam (DC)", "Sinestro (DC)", "Spectre (DC)", "Star Sapphire (DC)", "Starfire (DC)", "Stargirl (DC)", "Steel (DC)", "Steve Trevor (DC)", "Superboy (DC)",
    "Supergirl (DC)", "Superman (DC)", "Swamp Thing (DC)", "Tempest (DC)", "The Flash (DC)", "The Joker (DC)", "Two-Face (DC)", "Ultra Boy (DC)", "Wildcat (DC)",
    "Wonder Girl (DC)", "Wonder Woman (DC)", "Zatanna (DC)"
]
WordLists.SUPERNATURAL_CHARACTERS = [
    "Abbadon (Supernatural)", "Adam Milligan (Supernatural)", "Anna Milton (Supernatural)", "Ash (Supernatural)", "Azazel (Supernatural)", "Becky Rosen (Supernatural)",
    "Bela Talbot (Supernatural)", "Ben Braeden (Supernatural)", "Benny Lafitte (Supernatural)", "Bobby Singer (Supernatural)", "Castiel (Supernatural)", "Charlie Bradbury (Supernatural)",
    "Chuck Shurley (Supernatural)", "Claire Novak (Supernatural)", "Crowley (Supernatural)", "Dean Winchester (Supernatural)", "Death (Supernatural)", "Demon Dean (Supernatural)",
    "Dick Roman (Supernatural)", "Ellen Harvelle (Supernatural)", "Gabriel (Supernatural)", "Jack Kline (Supernatural)", "Jessica Moore (Supernatural)", "Jo Harvelle (Supernatural)",
    "Jody Mills (Supernatural)", "John Winchester (Supernatural)", "Kevin Tran (Supernatural)", "Lilith (Supernatural)", "Linda Tran (Supernatural)", "Lisa Braeden (Supernatural)",
    "Lucifer (Supernatural)", "Mary Winchester (Supernatural)", "Meg Masters (Supernatural)", "Metatron (Supernatural)", "Michael (Supernatural)", "Pamela Barnes (Supernatural)",
    "Rowena (Supernatural)", "Ruby (Supernatural)", "Rufus Turner (Supernatural)", "Sam Winchester (Supernatural)", "Souless Sam (Supernatural)", "Tessa (Supernatural)",
    "gadreel (Supernatural)"
]
WordLists.DISNEY_CHARACTERS = [
    "Aladdin (Disney)", "Alice (Disney)", "Anger (Disney)", "Anna (Disney)", "Aurora (Disney)", "Baloo (Disney)", "Bambi (Disney)", "Bashful (Disney)", "Beast (Disney)", "Belle (Disney)",
    "Berlioz (Disney)", "Bo Peep (Disney)", "Bolt (Disney)", "Boo (Disney)", "Bruno (Disney)", "Bullseye (Disney)", "Buzz Lightyear (Disney)", "Casey Junior (Disney)", "Catty the Elephant (Disney)",
    "Cheshire Cat (Disney)", "Chip (Disney)", "Christopher Robin (Disney)", "Cinderella (Disney)", "Cogsworth (Disney)", "Daisy Duck (Disney)", "Dale (Disney)", "Destiny (Disney)",
    "Disgust (Disney)", "Donald Duck (Disney)", "Dopey (Disney)", "Dory (Disney)", "Drizella (Disney)", "Dumbo (Disney)", "Eeyore (Disney)", "Elsa (Disney)", "Fairy Godmother (Disney)",
    "Fear (Disney)", "Fifi the Featherduster (Disney)", "Figaro (Disney)", "Flounder (Disney)", "Gaston (Disney)", "Genie (Disney)", "Giddy the Elephant (Disney)",
    "Goofy (Disney)", "Grumpy (Disney)", "Gus (Disney)", "Hamm (Disney)", "Jafar (Disney)", "Jaq (Disney)", "Jasmine (Disney)", "Jessie (Disney)", "Jiminy Cricket (Disney)",
    "Joy (Disney)", "Kaa (Disney)", "Kanga (Disney)", "King Louie (Disney)", "Kristoff (Disney)", "Lady (Disney)", "Lefou (Disney)", "Lilo (Disney)", "Little Mermaid (Disney)",
    "Lumiere (Disney)", "Mad Hatter (Disney)", "Marie (Disney)", "Maurice (Disney)", "Merida (Disney)", "Mickey Mouse (Disney)", "Mike (Disney)", "Minnie Mouse (Disney)", "Mowgli (Disney)",
    "Mr. Potato Head (Disney)", "Mr. Stork (Disney)", "Mrs Potts (Disney)", "Mrs. Jumbo (Disney)", "Mrs. Potato Head (Disney)", "Nemo (Disney)", "Olaf (Disney)",
    "Owl (Disney)", "Perdita (Disney)", "Peter Pan (Disney)", "Piglet (Disney)", "Pluto (Disney)", "Pongo (Disney)", "Prissy the Elephant (Disney)", "Rafiki (Disney)", "Rapunzel (Disney)",
    "Rex (Disney)", "Roo (Disney)", "Sadness (Disney)", "Sebastian (Disney)", "Simba (Disney)", "Sleepy (Disney)", "Slinky Dog (Disney)", "Sneezy (Disney)", "Snow White (Disney)",
    "Stitch (Disney)", "Sully (Disney)", "Sven (Disney)", "The Crows (Disney)", "The Prince (Disney)", "Thumper (Disney)", "Tiana (Disney)", "Tigger (Disney)", "Timon & Pumbaa (Disney)",
    "Timothy Q. Mouse (Disney)", "Tinkerbell (Disney)", "Tramp (Disney)", "Whinnie the Pooh (Disney)", "Woody (Disney)"
]
WordLists.HARRY_POTTER_CHARACTERS = [
    "Aberforth Dumbledore (Harry Potter)", "Albus Dumbledore (Harry Potter)", "Alecto Carrow (Harry Potter)", "Alice Longbottom (Harry Potter)", "Alicia Spinnet (Harry Potter)", 
    "Amos Diggory (Harry Potter)", "Amycus Carrow (Harry Potter)", "Andromeda Tonks (Harry Potter)", "Angelina Johnson (Harry Potter)", "Antonin Dolohov (Harry Potter)",
    "Aragog (Harry Potter)", "Argus Filch (Harry Potter)", "Ariana Dumbledore (Harry Potter)", "Arthur Weasley (Harry Potter)", "Aunt Muriel (Harry Potter)",
    "Bane (Harry Potter)", "Barty Crouch (Harry Potter)", "Barty Crouch Jr (Harry Potter)", "Bathilda Bagshot (Harry Potter)", "Bellatrix Lestrange (Harry Potter)",
    "Bill Weasley (Harry Potter)", "Bloody Baron (Harry Potter)", "Buckbeak (Harry Potter)", "Cedric Diggory (Harry Potter)", "Charlie Weasley (Harry Potter)",
    "Cho Chang (Harry Potter)", "Colin Creevey (Harry Potter)", "Cornelius Fudge (Harry Potter)", "Crookshanks (Harry Potter)", "Dean Thomas (Harry Potter)",
    "Dedalus Diggle (Harry Potter)", "Dennis Creevey (Harry Potter)", "Dobby (Harry Potter)", "Dolores Umbridge (Harry Potter)", "Draco Malfoy (Harry Potter)",
    "Dudley Dursley (Harry Potter)", "Ernie MacMillan (Harry Potter)", "Errol (Harry Potter)", "Fang (Harry Potter)", "Fat Friar (Harry Potter)", "Fat Lady (Harry Potter)", 
    "Fawkes the Phoenix (Harry Potter)", "Fenrir Greyback (Harry Potter)", "Firenze (Harry Potter)", "Fleur Weasley (Harry Potter)", "Fluffy (Harry Potter)",
    "Frank Bryce (Harry Potter)", "Frank Longbottom (Harry Potter)", "Fred Weasley (Harry Potter)", "Gabrielle Delacour (Harry Potter)", "George Weasley (Harry Potter)",
    "Gilderoy Lockhart (Harry Potter)", "Ginny Weasley (Harry Potter)", "Godric Gryffindor (Harry Potter)", "Grawp (Harry Potter)", "Gregorovitch (Harry Potter)",
    "Gregory Goyle (Harry Potter)", "Grindelwald (Harry Potter)", "Griphook (Harry Potter)", "Hagrid (Harry Potter)", "Hannah Abbott (Harry Potter)", "Harry Potter (Harry Potter)",
    "Hedwig (Harry Potter)", "Helga Hufflepuff (Harry Potter)", "Hermione Granger (Harry Potter)", "Igor Karkaroff (Harry Potter)", "James Potter (Harry Potter)",
    "Justin Finch-Fetchley (Harry Potter)", "Katie Bell (Harry Potter)", "Kingsley Shacklebolt (Harry Potter)", "Kreacher (Harry Potter)", "Lavender Brown (Harry Potter)",
    "Lee Jordan (Harry Potter)", "Lily Potter (Harry Potter)", "Lucius Malfoy (Harry Potter)", "Luna Lovegood (Harry Potter)", "Mad-Eye Moody (Harry Potter)", "Madame Hooch (Harry Potter)",
    "Madame Malkin (Harry Potter)", "Madame Maxim (Harry Potter)", "Madame Pomfrey (Harry Potter)", "Madame Rosemerta (Harry Potter)", "Marge Dursley (Harry Potter)", 
    "Moaning Myrtle (Harry Potter)", "Molly Weasley (Harry Potter)", "Mr. Ollivander (Harry Potter)", "Mrs. Figg (Harry Potter)", "Mrs. Norris (Harry Potter)",
    "Mundungus Fletcher (Harry Potter)", "Nagini (Harry Potter)", "Narcissa Malfoy (Harry Potter)", "Nearly Headless Nick (Harry Potter)", "Neville Longbottom (Harry Potter)",
    "Nicholas Flamel (Harry Potter)", "Norbert (Harry Potter)", "Nymphadora Tonks (Harry Potter)", "Oliver Wood (Harry Potter)", "Padma Patil (Harry Potter)", "Parvati Patil (Harry Potter)",
    "Peeves (Harry Potter)", "Penelope Clearwater (Harry Potter)", "Percy Weasley (Harry Potter)", "Peter Pettigrew (Harry Potter)", "Petunia Dursley (Harry Potter)",
    "Pigwidgeon (Harry Potter)", "Professor Burbage (Harry Potter)", "Professor Flitwick (Harry Potter)", "Professor Grubbly-Plank (Harry Potter)", "Professor McGonagall (Harry Potter)",
    "Professor Quirrell (Harry Potter)", "Professor Slughorn (Harry Potter)", "Professor Snape (Harry Potter)", "Professor Sprout (Harry Potter)", "Professor Trelawney (Harry Potter)",
    "Professor Vector (Harry Potter)", "Regulus Black (Harry Potter)", "Remus Lupin (Harry Potter)", "Rita Skeeter (Harry Potter)", "Ron Weasley (Harry Potter)",
    "Rowena Ravenclaw (Harry Potter)", "Rufus Scrimgeour (Harry Potter)", "Salazar Slytherin (Harry Potter)", "Seamus Finnagan (Harry Potter)", "Sirius Black (Harry Potter)",
    "Stan Shunpike (Harry Potter)", "Susan Bones (Harry Potter)", "Ted Tonks (Harry Potter)", "Teddy Lupin (Harry Potter)", "The Grey Lady (Harry Potter)",
    "Trevor (Harry Potter)", "Vernon Dursley (Harry Potter)", "Viktor Krum (Harry Potter)", "Vincent Crabbe (Harry Potter)", "Voldemort (Harry Potter)",
    "Winky (Harry Potter)", "Xenophilius Lovegood (Harry Potter)", "Zacharias Smith (Harry Potter)"
]
WordLists.LORD_OF_THE_RINGS_CHARACTERS = [
    "Aragon (LOTR)", "Arwen (LOTR)", "Bilbo Baggins (LOTR)", "Frodo Baggins (LOTR)", "Tom Bombadil (LOTR)", "Merry Brandybuck (LOTR)", "Celeborn (LOTR)", 
    "Denethor (LOTR)", "Elendil (LOTR)", "Elrond (LOTR)", "Faramir (LOTR)", "Galadriel (LOTR)", "Samwise Gamgee (LOTR)", "Gandalf (LOTR)",
    "Gimli (LOTR)", "Gollum (LOTR)", "Isildur (LOTR)", "Legolas (LOTR)", "Nazgul (LOTR)", "Radagast (LOTR)", "Saruman (LOTR)", "Sauron (LOTR)",
    "pippin Took (LOTR)", "Treebeard (LOTR)"
]
WordLists.MISC_CHARACTERS = [
    "Sherlock Holmes (Sherlock Holmes)", "John Watson (Sherlock Holmes)", "Moriarty (Sherlock Holmes)",
    "Aslan (Narnia)", "Edmund Pevensie (Narnia)", "Lucy Pevensie (Narnia)", "Mr Tumnus (Narnia)", "Susan Pevensie (Narnia)",
    "Peter Pevensie (Narnia)", "Prince Caspian (Narnia)"

]
WordLists.ANY_FANFICTION_CHARACTER = [
    ...WordLists.DOCTOR_WHO_CHARACTERS, ...WordLists.MARVEL_CHARACTERS, ...WordLists.DC_CHARACTERS, ...WordLists.SUPERNATURAL_CHARACTERS, ...WordLists.DISNEY_CHARACTERS,
    ...WordLists.HARRY_POTTER_CHARACTERS, ...WordLists.LORD_OF_THE_RINGS_CHARACTERS, ...WordLists.MISC_CHARACTERS
]

// Common names
WordLists.FIRST_NAME_MALE =  [
    'Adrian', 'Aiden', 'Andre', 'Archer', 'Arden', 'Artemis', 'Asher', 'Ashton', 'Atlas', 'Ayden', 'Beckett', 'Bentley', 'Bodie', 'Brady', 
    'Bryce', 'Callan', 'Callen', 'Cameron', 'Carson', 'Carter', 'Chase', 'Colby', 'Cole', 'Cooper', 'Damian', 'Dillon', 'Dylan', 'Easton', 
    'Elliot', 'Elon', 'Emerson', 'Emmet', 'Emmett', 'Evan', 'Fallon', 'Finley', 'Flynn', 'Francis', 'Grayson', 'Grey', 'Harlan', 'Harper', 
    'Hayley', 'Hunter', 'Idris', 'Jaiden', 'Jalen', 'Jamie', 'Jayce', 'Jayden', 'Jericho', 'Jesse', 'Jett', 'Jordan', 'Julian', 'Kade', 
    'Kaiden', 'Kinsley', 'Kit', 'Kyle', 'Landon', 'Logan', 'Luca', 'Marlowe', 'Mason', 'Maverick', 'Maxwell', 'Micah', 'Michael', 'Mika', 
    'Miles', 'Murphy', 'Nico', 'Noah', 'Nolan', 'Oakley', 'Parker', 'Paxton', 'Presley', 'Quincy', 'Raiden', 'Reece', 'Reese', 'Remington', 
    'Rian', 'Rory', 'Rowan', 'Ryan', 'Ryder', 'Ryker', 'Rylan', 'Salem', 'Sawyer', 'Scott', 'Sean', 'Shane', 'Theo', 'Tristan', 'Tyler', 'Wyatt'
];


WordLists.FIRST_NAME_FEMALE = [
    'Addison', 'Akira', 'Alaia', 'Alexis', 'Alison', 'Allison', 'Alma', 'Amal', 'Amani', 'Andrea', 'Ari', 'Aria', 'Ariel', 'Aubrey', 'Avery', 
    'Azaria', 'Bailey', 'Beau', 'Beverly', 'Blair', 'Blaire', 'Blake', 'Brooke', 'Brooks', 'Cali', 'Camille', 'Chelsea', 'Claire', 'Cleo', 
    'Courtney', 'Dakota', 'Darcy', 'Delaney', 'Dior', 'Eli', 'Elia', 'Elisha', 'Eliza', 'Emery', 'Emory', 'Esme', 'Eva', 'Evelyn', 'Everly', 
    'Faye', 'Gael', 'Hadley', 'Hailey', 'Hallie', 'Imani', 'Ira', 'Isa', 'Isha', 'Jade', 'Jean', 'Jocelyn', 'Joyce', 'June', 'Kalani', 'Kaya', 
    'Kendall', 'Kenzie', 'Kimberly', 'Kora', 'Kristen', 'Kyrie', 'Lacey', 'Lauren', 'Lea', 'Leigh', 'Lynn', 'Maddie', 'Madison', 'Marie', 
    'Marion', 'Mckenna', 'Nikita', 'Paige', 'Patricia', 'Peyton', 'Rae', 'Raine', 'Rayne', 'Rei', 'Remi', 'Remy', 'Rene', 'Rey', 'Roshan', 
    'Rylee', 'Saige', 'Sasha', 'Selah', 'Shea', 'Shelby', 'Shiloh', 'Simone', 'Skye', 'Sloan', 'Sloane', 'Tara', 'Teagan', 'Vivian', 'Winnie', 
    'Yara', 'Yuki', 'Zariah', 'Zoe'
];


WordLists.FIRST_NAME_UNISEX = [
    'Morgan', 'Ollie', 'Alex', 'Amos', 'Aris', 'Asa', 'Ash', 'Ashley', 'Aspen', 'Aster', 'Briar', 'Brynn', 'Camden', 'Cassidy', 'Charlie', 
    'Devin', 'Devon', 'Drew', 'Ellis', 'Finnley', 'Harley', 'Harlow', 'Haven', 'Hayden', 'Hayes', 'Israel', 'Jessie', 'Jude', 'Kai', 'Kennedy', 
    'Lee', 'Leighton', 'Lennon', 'Mackenzie', 'Marley', 'Maurice', 'Max', 'Milan', 'Misha', 'Niko', 'Noor', 'Payton', 'Phoenix', 'Quinn', 
    'Reid', 'Riley', 'Rio', 'River', 'Robin', 'Rowen', 'Sage', 'Shay', 'Sidney', 'Skylar', 'Skyler', 'Spencer', 'Sunny', 'Sutton', 'Taylor', 
    'Zephyr', 'Zion'
];

WordLists.SURNAME = [
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
