const data = {
    usuarios: {
        email: 'c@gmail.com',
        nombre: 'Mia ',
        contrasenia: 'contrasenia',
        fechanacimiento: '21/02/2005',
        dni: '4666666',
        fotoperfil: '/images/users/fotoperfil1.jpg',
    },
    productos: [
        {
            imagen: '/images/products/prideandprejudice.png',
            nombre: 'Pride and Prejudice',
            descripcion: 'A classic Jane Austen novel. Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.',
            fecha: '5 / 04 / 2023',
        },
        {
            imagen: '/images/products/caraval.jpg',
            nombre: 'Caraval',
            descripcion: 'First book of the Caraval trilogy. It is just a game... isnt it? It is about two sisters - Scarlett and Tella - who live on some random island in the middle of random world X with their abusive father who wants to marry Scarlett off to a count shes never met. Caraval is, as it sounds, a carnival-like game on another random island.',
            fecha: '4 / 02 / 2023',
        },
        {
            imagen: '/images/products/cityofbones.webp',
            nombre: 'City of bones',
            descripcion: 'Part of the Shadow Hunter series written by Cassandra Clare. An evening at a New York nightclub takes an unexpected turn for 15-year-old Clary when she witnesses what looks like a murder - but the victims body has vanished into thin air. Whats even more strange is that her best friend Simon couldnt even see the attack take place.',
            fecha: '20 / 03 / 2023',
        },
        {
            imagen: '/images/products/divergent.webp',
            nombre: 'Divergent',
            descripcion: 'First book of the divergent trilogy. Divergent follows the story of Beatrice (Tris), who has a choice to make among the 5 factions of her nation, which will map out certain actions in her life: Abnegation (the selfless), Amity (the peaceful), Candor (the honest), Dauntless (the brave), and Erudite (the intellectual).',
            fecha: '1 / 04 / 2023',
        },
        {
            imagen: '/images/products/pillarsoftheearth.webp',
            nombre: 'Pillars of the Earth',
            descripcion: 'First book of the best fantasy world ever created. The Pillars of the Earth tells the story of Philip, prior of Kingsbridge, a devout and resourceful monk driven to build the greatest Gothic cathedral the world has known . . . of Tom, the mason who becomes his architect—a man divided in his soul . . . of the beautiful, elusive Lady Aliena, haunted by a secret shame. ',
            fecha: '20 / 03 / 2023',
        },
        {
            imagen: '/images/products/shadowandbone.webp',
            nombre: 'Shadow and Bone',
            descripcion: 'Now adapted to screen by netflix. Follow Alina as she discovers the perks of being a sun summoner. Shadow and Bone is a fantasy novel, in which monsters are real and so are Grisha, people who possess the ability to control the elements, such as summoning wind or fire. People without these powers are known as Otkazatsya. Alina Starkov is a young woman who grew up in an orphanage with Malyen "Mal" Oretsev.',
            fecha: '1 / 04 / 2023',
        },
        {
            imagen: '/images/products/sixofcrows1.webp',
            nombre: 'Six of crows',
            descripcion: 'Kaz Brekker summons a team of thieves for a multimillion dollar quest. Six of Crows is a fantasy novel written by the Israeli-American author Leigh Bardugo and published by Henry Holt and Co. in 2015. The story follows a thieving crew and is primarily set in the city of Ketterdam, which is loosely inspired by Dutch Republic era Amsterdam.',
            fecha: '12 / 01 / 2023',
        },
        {
            imagen: '/images/products/greatgatsby.jpeg',
            nombre: 'The Great Gatsby',
            descripcion: 'Third novel by American author F. Scott Fitzgerald, published in 1925. The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.',
            fecha: '05/04/2023',
        },
        {
            imagen: '/images/products/thehandmaidstale.webp',
            nombre: 'The hand maids tale',
            descripcion: 'A classic of modern literature. The Handmaids Tale, acclaimed dystopian novel by Canadian author Margaret Atwood, published in 1985. The book, set in New England in the near future, posits a Christian fundamentalist theocratic regime in the former United States that arose as a response to a fertility crisis.',
            fecha: '4 / 02 / 2023',
        },
        {
            imagen: '/images/products/littlewomen.webp',
            nombre: 'Little Women',
            descripcion: 'The classic has come back in the best edition ever made. With their father fighting in the American Civil War, sisters Jo, Meg, Amy and Beth are at home with their mother, a very outspoken woman for her time. The story tells of how the sisters grow up, find love, and find their place in the world. Four sisters and their mother at home. Their father is fighting in the war.',
            fecha: 4 / 02 / 2023,
        },
        {
            imagen: '/images/products/acotar.webp',
            nombre: 'A court of thorns and roses',
            descripcion: 'First book of the ACOTAR series written by Sarah J Maas. A Court of Thorns and Roses is a young adult high fantasy series by Sarah J. Maas. The saga begins when Feyre Archeron, a 19-year-old huntress, is kidnapped and brought to the faerie lands of Prythian after she kills a faerie wolf. Her kidnapper is Tamlin, a High Fae and one of the seven High Lords of Prythian.',
            fecha: '12 / 01 / 2023',
        },
        {
            imagen: '/images/products/houseofearthandblood.webp',
            nombre: 'House of Earth and blood',
            descripcion: 'The first Crescent City novel. Meet Bryce Quinland and Hunt Atalar. Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation.',
            fecha: '12 / 01 / 2023',
        },
    ],
    comentarios: [
        {
            nombreusuario: 'TonyStark',
            textocom: 'Una historia fascinante y una edición divina. Les encantará a todos.',
            fotoperfil: '/images/users/default-image.png',
        },
        {
            nombreusuario: 'SteveRogers',
            textocom: 'Los clásicos nunca pasan de moda, y esta no es la excepción. Una historia encantadora con un mensaje sin igual',
            fotoperfil: '/images/users/default-image.png',
        },
        {
            nombreusuario: 'BruceBanner',
            textocom: 'That was both horrible and incredible at the same time, and my thoughts are a whirlwind.',
            fotoperfil: '/images/users/default-image.png',
        },
        {
            nombreusuario: 'NatashaRomanov',
            textocom: 'This was a solid start to this new series! I am really interested to see where things go. I did find a few things to be a bit questionable, but I cant say what they are because HELLO SPOILERS. I will be doing a full review/discussion on this sooooooon!',
            fotoperfil: '/images/users/default-image.png',
        },
        {
            nombreusuario: 'WandaMaximoff',
            textocom: 'This book was amazing! The romance was borderline new adult which I loved but it was also greatly paced. The plot was so well thought out and executed as well.',
            fotoperfil: '/images/users/default-image.png',
        },
        {
            nombreusuario: 'StevenGrant',
            textocom: 'I’m a second away from dousing myself in gasoline and lighting myself on fire just so I never have to look at this book again.',
            fotoperfil: '/images/users/default-image.png',
        },],
}

module.exports = data;