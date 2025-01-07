const breedCatCollection = [
    {
      id            : "екзотична късокосместа котка",
      name          : "Екзотична късокосместа котка",
      nameEn        : "Exotic Shorthair",
      code          : "1",
      image_link    : "0",
      country       : "United States",
      intro         : "Exotic Shorthairs are often described as the \"lazy man's Persian\" due to their similar appearance but with a short, plush coat that requires less grooming. They are affectionate, gentle, and enjoy lounging, making them excellent lap cats. These cats are playful yet calm, adapting well to various household environments. Their expressive eyes and sweet demeanor endear them to many cat enthusiasts.",
      health        : ["Polycystic kidney disease (PKD)", "hypertrophic cardiomyopathy (HCM)", "brachycephalic airway syndrome"]
    },
    {
      id            : "персийска котка",
      name          : "Персийска котка",
      nameEn        : "Persian cat",
      code          : "2",
      image_link    : "",
      country       : "Iran (formerly Persia)",
      intro         : "Persian cats are known for their long, luxurious coats and calm, dignified personalities. They enjoy serene environments and form strong bonds with their owners, often preferring a quiet lap to active play. Regular grooming is essential to maintain their coat's beauty. Their distinctive flat faces and large, expressive eyes make them one of the most recognizable cat breeds.",
      health        : ["Polycystic kidney disease (PKD)", "hypertrophic cardiomyopathy (HCM)", "progressive retinal atrophy (PRA)"]
    },
    {
      id            : "рагдол",
      name          : "Рагдол",
      nameEn        : "Ragdoll",
      code          : "3",
      image_link    : "",
      country       : "United States",
      intro         : "Ragdolls are large, affectionate cats known for their tendency to go limp when held, hence the name \"Ragdoll.\" They are gentle, sociable, and enjoy following their owners around the house. Their striking blue eyes and semi-long, silky coats add to their charm. Ragdolls are also known for their dog-like behavior, often greeting their owners at the door.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "bladder stones."]
    },
    {
      id            : "бирманска котка",
      name          : "Бирманска котка",
      nameEn        : "Sacred Birman",
      code          : "4",
      image_link    : "",
      country       : "France",
      intro         : "Sacred Birmans, or Birmans, are affectionate and gentle cats with striking blue eyes and white \"gloves\" on their paws. They are social and enjoy the company of their human companions, often seeking out attention and affection. Their semi-long, silky coats require regular grooming to prevent matting. Birmans are also known for their playful yet calm demeanor, making them excellent family pets.",
      health        : ["Congenital hypotrichosis (hairlessness)", "corneal dermoid"]
    },
    {
      id            : "турски ван",
      name          : "Турски Ван",
      nameEn        : "Turkish Van",
      code          : "5",
      image_link    : "",
      country       : "Turkey",
      intro         : "Turkish Vans are energetic and playful cats, often referred to as \"swimming cats\" due to their love for water. They are intelligent, curious, and enjoy interactive play, making them engaging companions. Their distinctive coloration, typically a white body with colored markings on the head and tail, adds to their unique appearance. Turkish Vans are also known for their strong, muscular bodies and high activity levels.",
      health        : ["Hypertrophic cardiomyopathy (HCM)"]
    },
    {
      id            : "американски кърл, дългокосмест",
      name          : "Американски кърл, дългокосмест",
      nameEn        : "American Curl Longhair",
      code          : "6",
      image_link    : "",
      country       : "United States",
      intro         : "American Curl Longhairs are known for their distinctive curled ears, which give them a unique and endearing appearance. They are affectionate, playful, and friendly cats that thrive on interaction with their owners. They are often described as having a \"dog-like\" personality, following their humans around and enjoying companionship. Their long, flowing coats require regular grooming to maintain their beauty",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "polycystic kidney disease (PKD)"]
    },
    {
      id            : "американски кърл, късокосмест",
      name          : "Американски кърл, късокосмест",
      nameEn        : "American Curl Shorthair",
      code          : "7",
      image_link    : "",
      country       : "United States",
      intro         : "Like the Longhair variety, American Curl Shorthairs are known for their signature curled ears. They are intelligent, affectionate, and social cats that enjoy being involved in family activities. Their short coat requires less grooming compared to their Longhair counterparts but still benefits from regular brushing. They are easygoing and get along well with other pets.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "polycystic kidney disease (PKD)"]
    },
    {
      id            : "laperm longhair",
      name          : "LaPerm Longhair",
      nameEn        : "LaPerm Longhair",
      code          : "8",
      image_link    : "",
      country       : "United States",
      intro         : "LaPerm Longhairs are known for their curly, soft coats, which can be quite luxurious and require regular grooming. These cats are affectionate, friendly, and energetic. They are social and enjoy being the center of attention but are not overly demanding. LaPerms are intelligent and can be taught tricks or enjoy interactive play. Despite their curls, they are low-shedding cats.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "laperm shorthair",
      name          : "LaPerm Shorthair",
      nameEn        : "LaPerm Shorthair",
      code          : "9",
      image_link    : "",
      country       : "United States",
      intro         : "LaPerm Shorthairs share the same friendly, affectionate personality as their Longhair counterparts but have shorter, curlier coats that are easier to maintain. They are intelligent, playful, and enjoy the company of their human families. Like the Longhair variety, LaPerm Shorthairs are often described as having \"dog-like\" behavior, being loyal and social.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "мейн кун",
      name          : "Мейн Кун",
      nameEn        : "Maine Coon",
      code          : "10",
      image_link    : "",
      country       : "United States",
      intro         : "Maine Coons are one of the largest domesticated cat breeds, known for their friendly and sociable nature. They are intelligent, playful, and often referred to as \"gentle giants.\" Their tufted ears, bushy tails, and shaggy coats are well-suited for cold climates. Maine Coons are also known for their chirping vocalizations and affectionate behavior towards their families.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "spinal muscular atrophy (SMA)", "hip dysplasia"]
    },
    {
      id            : "невска маскарадна котка",
      name          : "Невска маскарадна котка",
      nameEn        : "Neva Masquerade",
      code          : "11",
      image_link    : "",
      country       : "Russia",
      intro         : "Neva Masquerade cats are essentially colorpoint Siberian cats, characterized by their striking blue eyes and beautiful coat patterns. They are known for their gentle, affectionate nature and are highly social with their families. They are playful, curious, and love interactive play. Their coats are dense and semi-long, requiring regular grooming to maintain their health and appearance.",
      health        : ["HCM", ""]
    },
    {
      id            : "норвежка горска котка",
      name          : "Норвежка горска котка",
      nameEn        : "Norwegian Forest cat",
      code          : "12",
      image_link    : "",
      country       : "Norway",
      intro         : "Norwegian Forest Cats are large, sturdy cats with a thick, water-resistant double coat that protects them in cold climates. They are intelligent, independent, and affectionate but often have a calm, laid-back personality. These cats enjoy climbing and exploring, making them great companions for families with ample space. They are good swimmers and have a natural hunting instinct.",
      health        : ["HCM", "hip dysplasia", "polycystic kidney disease (PKD)"]
    },
    {
      id            : "сибирска котка",
      name          : "Сибирска котка",
      nameEn        : "Siberian cat",
      code          : "13",
      image_link    : "",
      country       : "Russia",
      intro         : "Siberian Cats are known for their robust, muscular bodies and thick, luxurious coats. They are affectionate, playful, and highly intelligent, making them excellent companions. Siberians are highly adaptable and get along well with other pets and children. Despite their luxurious fur, they shed less than many other long-haired breeds, making them somewhat low-maintenance.",
      health        : ["HCM", "PKD"]
    },
    {
      id            : "турска ангорска котка",
      name          : "Турска ангорска котка",
      nameEn        : "Turkish Angora",
      code          : "14",
      image_link    : "",
      country       : "Turkey",
      intro         : "Turkish Angoras are elegant cats with silky, medium-length coats and a graceful demeanor. They are active, intelligent, and enjoy interactive play, often engaging in games of fetch. Their almond-shaped eyes can come in various colors, including blue, green, and amber. Turkish Angoras are also known for their affectionate nature and strong bonds with their human companions.",
      health        : ["Deafness (particularly in white cats with blue eyes)", "ataxia"]
    },
    {
      id            : "бенгалска котка",
      name          : "Бенгалска котка",
      nameEn        : "Bengal cat",
      code          : "15",
      image_link    : "",
      country       : "United States",
      intro         : "Bengal cats are known for their wild appearance, featuring a sleek, muscular build and distinctive spotted or marbled coats reminiscent of leopards. They are highly active, intelligent, and require ample mental and physical stimulation. Bengals enjoy climbing and exploring, making cat trees and interactive toys essential. Their energetic and playful nature makes them engaging companions for those prepared for their high activity levels.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "progressive retinal atrophy (PRA)", "flat-chested kitten syndrome"]
    },
    {
      id            : "британска дългокосместа котка",
      name          : "Британска дългокосместа котка",
      nameEn        : "British Longhair",
      code          : "16",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "British Longhairs are affectionate and calm cats, known for their plush, dense coats and round faces. They enjoy human companionship but are not overly demanding, making them excellent companions for those seeking a balanced pet. Their easygoing nature allows them to adapt well to various household environments. Regular grooming is essential to maintain their luxurious fur.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "polycystic kidney disease (PKD)"]
    },
    {
      id            : "бурмила",
      name          : "Бурмила",
      nameEn        : "Burmilla",
      code          : "17",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "Burmillas are playful and affectionate cats, resulting from a cross between Burmese and Chinchilla Persian breeds. They possess a charming personality, combining the curiosity of the Burmese with the gentle nature of the Chinchilla Persian. Their striking silver coats and expressive eyes make them particularly eye-catching. Burmillas are also known for their friendly disposition and adaptability to various living situations.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "британска късокосместа",
      name          : "Британска късокосместа",
      nameEn        : "British Shorthair",
      code          : "18",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "British Shorthairs are known for their sturdy build, round faces, and dense coats. They are calm, easygoing, and form strong bonds with their human companions. While they enjoy affection, they are not typically \"lap cats\" and appreciate their independence. Their plush coats come in various colors and patterns, with the \"British Blue\" being particularly popular.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "hemophilia B"]
    },
    {
      id            : "бурманска котка",
      name          : "Бурманска котка",
      nameEn        : "Burmese cat",
      code          : "19",
      image_link    : "",
      country       : "Myanmar (Burma)",
      intro         : "Burmese cats are affectionate, energetic, and people-oriented, often described as \"dog-like\" in their devotion to their owners. They enjoy interactive play and thrive on human companionship, making them excellent family pets. Their sleek, muscular bodies and expressive eyes add to their appeal. Burmese cats are also known for their vocal nature, often engaging in conversations with their owners.",
      health        : ["Hypokalemia", "craniofacial defects (in some lines)"]
    },
    {
      id            : "шартрьо",
      name          : "Шартрьо",
      nameEn        : "Chartreux",
      code          : "20",
      image_link    : "",
      country       : "France",
      intro         : "Chartreux cats are known for their quiet, gentle, and sweet-natured personalities. They form strong bonds with their owners and are often described as \"smiling\" due to the shape of their heads and mouths. Their dense, water-resistant blue-gray coats and copper to gold eyes make them particularly striking. Chartreux cats are also known for their hunting skills and playful nature.",
      health        : ["Patellar luxation"]
    },
    {
      id            : "кимрик",
      name          : "Кимрик",
      nameEn        : "Cymric",
      code          : "21",
      image_link    : "",
      country       : "Isle of Man (developed further in Canada)",
      intro         : "The Cymric is a long-haired variety of the Manx cat, known for its taillessness or short tail. They are affectionate, intelligent, and enjoy interactive play, often displaying dog-like behaviors such as fetching. Their strong hind legs give them a distinctive hopping gait. Cymrics are also known for their adaptability and get along well with other pets and children.",
      health        : ["Manx syndrome (a range of spinal defects)", "corneal dystrophy"]
    },
    {
      id            : "европейска късокосместа",
      name          : "Европейска късокосместа",
      nameEn        : "European Shorthair",
      code          : "22",
      image_link    : "",
      country       : "Europe",
      intro         : "European Shorthairs are versatile and adaptable cats, often resembling the traditional domestic cats of Europe. They are friendly, intelligent, and have a strong hunting instinct. Their appearance varies widely, with a range of colors and patterns. European Shorthairs are also known for their robust health and adaptability to various living environments.",
      health        : ["Generally considered a healthy breed with no specific inherited diseases."]
    },
    {
      id            : "курилски бобтейл",
      name          : "Курилски бобтейл",
      nameEn        : "Kurilian bobtail",
      code          : "23",
      image_link    : "",
      country       : "Russia (Kuril Islands)",
      intro         : "Kurilian Bobtails are known for their distinctive pom-pom tails and strong, muscular bodies. They are intelligent, friendly, and have a love for water, often enjoying playing in it. Their semi-wild appearance contrasts with their gentle and affectionate nature. Kurilian Bobtails are also known for their excellent hunting skills and adaptability to various environments.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "корат",
      name          : "Корат",
      nameEn        : "Korat",
      code          : "24",
      image_link    : "",
      country       : "Thailand",
      intro         : "Korats are affectionate and intelligent cats, known for their striking silver-blue coats and luminous green eyes. They form strong bonds with their owners and prefer a stable, quiet environment. Korats are also known for their acute senses and playful nature, making them engaging companions. In Thailand, they are considered symbols of good luck.",
      health        : ["Gangliosidosis (GM1 and GM2)"]
    },
    {
      id            : "манкс",
      name          : "Манкс",
      nameEn        : "Manx cat",
      code          : "25",
      image_link    : "",
      country       : " Isle of Man",
      intro         : "Manx cats are known for their taillessness or short tails, a result of a natural genetic mutation. They are friendly, playful, and intelligent, often described as \"dog-like\" in their loyalty and interactive behavior. Their strong hind legs give them a unique hopping gait. Manx cats are excellent hunters and enjoy both indoor and outdoor environments.",
      health        : ["Manx syndrome (spinal cord defects)", "corneal dystrophy"]
    },
    {
      id            : "египетска мау",
      name          : "Египетска мау",
      nameEn        : "Egyptian Mau",
      code          : "26",
      image_link    : "",
      country       : "Egypt",
      intro         : "Egyptian Maus are elegant and athletic cats with spotted coats, often described as the fastest domestic cat breed due to their agility. They are loyal, affectionate, and highly intelligent, often forming close bonds with their owners. Their expressive green eyes and natural spotted pattern add to their exotic charm. Egyptian Maus also have a unique \"chirping\" vocalization when happy or excited.",
      health        : ["Leukodystrophy (a rare neurological condition)"]
    },
    {
      id            : "оцикет",
      name          : "Оцикет",
      nameEn        : "Ocicat",
      code          : "27",
      image_link    : "",
      country       : "United States",
      intro         : "Ocicats are playful, confident, and social cats that resemble wild ocelots but are entirely domesticated. They are active and enjoy interactive play, making them great companions for families. Their spotted coat comes in various colors and patterns, adding to their exotic allure. Ocicats are known for their intelligence and adaptability, thriving in both quiet and busy households.",
      health        : ["Progressive retinal atrophy (PRA)", "hypertrophic cardiomyopathy (HCM)"]
    },
    {
      id            : "сингапурска котка",
      name          : "Сингапурска котка",
      nameEn        : "Singapura cat",
      code          : "28",
      image_link    : "",
      country       : "Singapore",
      intro         : "Singapura cats are one of the smallest cat breeds, known for their big personalities and petite size. They are playful, affectionate, and thrive on human interaction, often seeking attention and cuddles. Their short, ticked coat and large, expressive eyes give them a unique, endearing appearance. Despite their small size, they are highly active and enjoy climbing and exploring.",
      health        : ["Pyruvate kinase deficiency (causing anemia)"]
    },
    {
      id            : "сноушу",
      name          : "Сноушу",
      nameEn        : "Snowshoe cat",
      code          : "29",
      image_link    : "",
      country       : "United States",
      intro         : "Snowshoe cats are affectionate, gentle, and intelligent, known for their striking white paws that resemble \"snowshoes.\" They are social cats that enjoy the company of their human companions and other pets. Snowshoes often have a mix of Siamese-like coloration and distinctive white markings. They are playful and adapt well to family environments but may be shy with strangers.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "кенийска горска котка",
      name          : "Кенийска горска котка",
      nameEn        : "Sokoke",
      code          : "30",
      image_link    : "",
      country       : "Kenya",
      intro         : "Sokokes are rare and unique cats with marbled coats resembling tree bark, a pattern that helps them blend into natural environments. They are active, independent, and intelligent cats that enjoy interactive play. Sokokes are known for their love of climbing and exploring, making cat trees and high perches essential in their homes. They are affectionate with their families but may be reserved with strangers.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "селкърк рекс, дългокосмест",
      name          : "Селкърк Рекс, дългокосмест",
      nameEn        : "Selkirk Rex Longhair",
      code          : "31",
      image_link    : "",
      country       : "United States",
      intro         : "Selkirk Rex Longhairs are known for their distinctive curly coats, which are thick and plush. They have a gentle, affectionate nature and enjoy being around people. These cats are friendly, social, and love cuddling with their human companions. Despite their long, curly fur, they are relatively low-shedding, making them easier to care for. Selkirk Rex cats are playful and enjoy interactive play, often following their owners around.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "certain types of respiratory conditions"]
    },
    {
      id            : "селкърк рекс, късокосмест",
      name          : "Селкърк Рекс, късокосмест",
      nameEn        : "Selkirk Rex Shorthair",
      code          : "32",
      image_link    : "",
      country       : "United States",
      intro         : "Like the Longhair variety, Selkirk Rex Shorthairs have curly coats but with shorter fur. They are affectionate, social, and easygoing, often described as \"dog-like\" in their loyalty. Selkirk Rex cats are known for their calm demeanor, and they tend to be adaptable to various living situations. They enjoy interactive play and are good with children and other pets.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "certain types of respiratory conditions"]
    },
    {
      id            : "абисинска котка",
      name          : "Абисинска котка",
      nameEn        : "Abyssinian",
      code          : "33",
      image_link    : "",
      country       : "Ethiopia (formerly Abyssinia)",
      intro         : "Abyssinians are energetic, intelligent, and playful cats that are often described as \"dog-like\" in their loyalty. They are known for their distinct \"ticked\" coat, where each hair is banded with multiple colors. Abyssinians enjoy climbing and exploring, making them highly active and curious pets. Their affectionate yet independent nature makes them ideal for families with active lifestyles.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "gingivitis"]
    },
    {
      id            : "балийска котка",
      name          : "Балийска котка",
      nameEn        : "Balinese cat",
      code          : "34",
      image_link    : "",
      country       : "United States (developed from Siamese cats)",
      intro         : "Balinese cats are known for their graceful appearance, long silky coats, and striking blue eyes. They are intelligent, vocal, and very affectionate, often forming strong bonds with their owners. Balinese cats are highly social and enjoy interactive play, and their playful nature makes them excellent companions for families.",
      health        : ["Progressive retinal atrophy (PRA)", "HCM"]
    },
    {
      id            : "корниш рекс",
      name          : "Корниш рекс",
      nameEn        : "Cornish Rex",
      code          : "35",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "Cornish Rex cats are known for their soft, wavy coats, which are the result of a natural genetic mutation. They are highly energetic, playful, and affectionate, often forming strong bonds with their human families. Cornish Rex cats are intelligent and enjoy interactive play, making them excellent companions for families with active lifestyles. They are also known for their athleticism and agility.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "certain skin conditions (due to their thin coat)"]
    },
    {
      id            : "девън рекс",
      name          : "Девън рекс",
      nameEn        : "Devon Rex",
      code          : "36",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "Devon Rex cats have large ears, a short, curly coat, and an impish personality. They are highly social, affectionate, and love human interaction, often seeking attention and cuddles. Devon Rex cats are intelligent and enjoy playing with toys and learning new tricks. They are often described as \"dog-like\" due to their loyalty and ability to follow their owners around.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", ""]
    },
    {
      id            : "донски сфинкс",
      name          : "Донски сфинкс",
      nameEn        : "Donskoy",
      code          : "37",
      image_link    : "",
      country       : "Russia",
      intro         : "Donskoy cats are a hairless breed with wrinkled skin, often described as having a \"bat-like\" appearance. They are highly affectionate, energetic, and social, often forming strong bonds with their owners. Donskoy cats are curious, intelligent, and enjoy being the center of attention. Despite their lack of fur, they require regular bathing to keep their skin clean and healthy.",
      health        : ["No specific inherited diseases are commonly associated with this breed.", ""]
    },
    {
      id            : "герман рекс",
      name          : "Герман рекс",
      nameEn        : "German Rex",
      code          : "38",
      image_link    : "",
      country       : "Germany",
      intro         : "German Rex cats are known for their soft, curly coats that give them a distinctive appearance. They are affectionate, playful, and highly social, often seeking attention from their human companions. German Rex cats are intelligent and enjoy interactive play, making them excellent pets for families. They are also adaptable to various living situations and get along well with other pets.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", ""]
    },
    {
      id            : "японски бобтейл",
      name          : "Японски бобтейл",
      nameEn        : "Japanese Bobtail",
      code          : "39",
      image_link    : "",
      country       : "Japan",
      intro         : "Japanese Bobtails are distinct for their short, \"bobbed\" tails, often curled or kinked. They are active, playful, and affectionate cats known for their intelligence and vocal nature. These cats are often associated with Japanese folklore, symbolizing good fortune. Japanese Bobtails are highly adaptable, enjoying both solo play and human companionship.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "ориенталска дългокосместа котка",
      name          : "Ориенталска дългокосместа котка",
      nameEn        : "Oriental Longhair",
      code          : "40",
      image_link    : "",
      country       : "United Kingdom (from the same gene pool as the Siamese and other Oriental breeds)",
      intro         : "Oriental Longhairs are similar to the Oriental Shorthair but have a longer coat. They are energetic, intelligent, and curious cats that thrive on human interaction. Oriental Longhairs are often described as \"chatty\" due to their vocal nature. Their sleek, elegant appearance and playful personality make them popular among cat lovers.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "ориенталска късокосместа котка",
      name          : "Ориенталска късокосместа котка",
      nameEn        : "Oriental Shorthair",
      code          : "41",
      image_link    : "",
      country       : "United Kingdom",
      intro         : "Oriental Shorthairs are intelligent, social, and highly energetic cats. They are known for their sleek, elegant bodies and wide range of coat colors and patterns. These cats are often compared to Siamese cats for their vocal personalities and strong desire for attention. They are highly affectionate and love interactive play.",
      health        : ["Progressive retinal atrophy (PRA)", "heart disease (HCM)"]
    },
    {
      id            : "оетерболд",
      name          : "Петерболд",
      nameEn        : "Peterbald",
      code          : "42",
      image_link    : "",
      country       : "Russia",
      intro         : "Peterbald cats are known for their unique hairless or semi-hairless appearance, though some have short coats. They are friendly, social, and affectionate cats, often described as \"dog-like\" in their loyalty. Peterbalds are playful, intelligent, and enjoy being the center of attention. Their hairlessness makes them an appealing choice for those who prefer low-maintenance grooming.",
      health        : ["No specific inherited diseases are commonly associated with this breed."]
    },
    {
      id            : "руска синя котка",
      name          : "Руска синя котка",
      nameEn        : "Russian Blue",
      code          : "43",
      image_link    : "",
      country       : "Russia",
      intro         : "Russian Blues are elegant, quiet, and reserved cats known for their stunning silver-blue coats and vivid green eyes. They are intelligent and can be somewhat shy around strangers, but they are very affectionate with their owners. Russian Blues are also known for their loyalty and make excellent indoor companions due to their calm nature.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "certain types of respiratory conditions"]
    },
    {
      id            : "сиамска котка",
      name          : "Сиамска котка",
      nameEn        : "Siamese",
      code          : "44",
      image_link    : "",
      country       : "Thailand (formerly Siam)",
      intro         : "Siamese cats are highly vocal, social, and affectionate cats that thrive on attention and companionship. Known for their striking blue almond-shaped eyes, slender bodies, and sleek coat, Siamese cats are intelligent and curious. They form strong bonds with their owners and are known to \"talk\" to them, often demanding attention and affection.",
      health        : ["Progressive retinal atrophy (PRA)", "HCM"]
    },
    {
      id            : "сомали",
      name          : "Сомали",
      nameEn        : "Somali cat",
      code          : "45",
      image_link    : "",
      country       : "United States (developed from Abyssinian cats)",
      intro         : "Somali cats are playful, intelligent, and affectionate. They are often described as having the personality of a dog due to their energetic nature and love of interacting with humans. Their beautiful \"ticked\" coats give them a wild appearance, but they are known for being friendly and social. Somalis are highly curious and enjoy climbing and exploring their environment.",
      health        : ["Progressive retinal atrophy (PRA)", "kidney disease (renal amyloidosis)"]
    },
    {
      id            : "канадски сфинкс",
      name          : "Канадски сфинкс",
      nameEn        : "Sphynx cat",
      code          : "46",
      image_link    : "",
      country       : "Canada",
      intro         : "Sphynx cats are famous for their hairless appearance, though they are not truly hypoallergenic. They are affectionate, social, and very playful, often seeking warmth and attention from their human companions. Due to their lack of a coat, they need regular bathing to keep their skin clean and healthy. Sphynx cats are known for being curious, energetic, and loving.",
      health        : ["Hypertrophic cardiomyopathy (HCM)", "skin issues (due to lack of fur)", "various types of allergies"]
    },
    {
      id            : "тайска котка",
      name          : "Тайска котка",
      nameEn        : "Thai cat",
      code          : "47",
      image_link    : "",
      country       : "Thailand",
      intro         : "Thai cats are the ancestors of the Siamese and have similar vocal, social, and affectionate personalities. They are known for their striking blue eyes, elegant bodies, and affectionate nature. Thai cats are highly vocal and enjoy the company of people, forming close bonds with their families. They are very playful and enjoy interactive activities.",
      health        : ["progressive retinal atrophy (PRA)", "HCM)"]
    }
  ]

