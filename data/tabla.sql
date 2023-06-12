create schema tablasintegrador;
use tablasintegrador;
create table usuarios (
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
usuario varchar(200) unique not null,
contraseña varchar(500) unique not null,
fotoPerfil varchar(300) not null,
fecha date not null,
dni int unsigned not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp  null
);

create table productos (
idProducto int unsigned primary key auto_increment,
nombreProducto varchar(200)  not null,
descripcion varchar(1000)  not null,
imagen varchar(300) not null,
clienteId int unsigned,
foreign key(clienteId) references usuarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

create table comentarios (
id int unsigned primary key auto_increment,
idProducto int unsigned,
foreign key (idProducto) references productos(idProducto),
idUsuario int unsigned,
foreign key (idUsuario) references usuarios(id),
commentario varchar(500)  not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

insert into usuarios (id,email,usuario,contraseña,fotoPerfil,fecha, dni)
values(default,"cata@gmail.com","cataosycka","m","/images/users/default-image.png","03-04-23", 555), 
(default,"maria@gmail.com","mariariobo","marich","/images/users/default-image.png","03-04-23", 666), 
(default,"suki@gmail.com","sukiwaterhouse","ma","/images/users/default-image.png","03-04-23",777), 
(default,"stuart@gmail.com","stuartlittle","mar","/images/users/default-image.png","03-04-23",888),
(default,"juanca@gmail.com","jcarlos","mare","/images/users/default-image.png","03-04-23",999);

insert into productos (idProducto,nombreProducto,descripcion,imagen,clienteId)
values(default,"Pride and Prejudice","'A classic Jane Austen novel. Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.","/images/products/prideandprejudice.png",1),
(default,"Caraval","First book of the Caraval trilogy. It is just a game... isnt it? It is about two sisters - Scarlett and Tella - who live on some random island in the middle of random world X with their abusive father who wants to marry Scarlett off to a count shes never met. Caraval is, as it sounds, a carnival-like game on another random island.","/images/products/caraval.jpg",2),
(default,"City of bones","City of bonesPart of the Shadow Hunter series written by Cassandra Clare. An evening at a New York nightclub takes an unexpected turn for 15-year-old Clary when she witnesses what looks like a murder - but the victims body has vanished into thin air. Whats even more strange is that her best friend Simon couldnt even see the attack take place","/images/products/cityofbones.webp",3),
(default,"Divergent","First book of the divergent trilogy. Divergent follows the story of Beatrice (Tris), who has a choice to make among the 5 factions of her nation, which will map out certain actions in her life: Abnegation (the selfless), Amity (the peaceful), Candor (the honest), Dauntless (the brave), and Erudite (the intellectual).","/images/products/divergent.webp",4),
(default,"Pillars of the Earth","First book of the best fantasy world ever created. The Pillars of the Earth tells the story of Philip, prior of Kingsbridge, a devout and resourceful monk driven to build the greatest Gothic cathedral the world has known . . . of Tom, the mason who becomes his architect—a man divided in his soul . . . of the beautiful, elusive Lady Aliena, haunted by a secret shame.","/images/products/pillarsoftheearth.webp",1),
(default,"Shadow and Bone","Now adapted to screen by netflix. Follow Alina as she discovers the perks of being a sun summoner. Shadow and Bone is a fantasy novel, in which monsters are real and so are Grisha, people who possess the ability to control the elements, such as summoning wind or fire. People without these powers are known as Otkazatsya. Alina Starkov is a young woman who grew up in an orphanage with Malyen Mal Oretsev.","/images/products/shadowandbone.webp",2),
(default,"Six of crows","Kaz Brekker summons a team of thieves for a multimillion dollar quest. Six of Crows is a fantasy novel written by the Israeli-American author Leigh Bardugo and published by Henry Holt and Co. in 2015. The story follows a thieving crew and is primarily set in the city of Ketterdam, which is loosely inspired by Dutch Republic era Amsterdam.","/images/products/sixofcrows1.webp",3),
(default,"The Great Gatsby","Third novel by American author F. Scott Fitzgerald, published in 1925. The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.","/images/products/greatgatsby.jpeg",4),
(default,"The Hand Maids tale","A classic of modern literature. The Handmaids Tale, acclaimed dystopian novel by Canadian author Margaret Atwood, published in 1985. The book, set in New England in the near future, posits a Christian fundamentalist theocratic regime in the former United States that arose as a response to a fertility crisis.","/images/products/thehandmaidstale.webp",1),
(default,"Little Women","The classic has come back in the best edition ever made. With their father fighting in the American Civil War, sisters Jo, Meg, Amy and Beth are at home with their mother, a very outspoken woman for her time. The story tells of how the sisters grow up, find love, and find their place in the world. Four sisters and their mother at home. Their father is fighting in the war.","/images/products/littlewomen.webp",2),
(default,"A court of thorns and roses","First book of the ACOTAR series written by Sarah J Maas. A Court of Thorns and Roses is a young adult high fantasy series by Sarah J. Maas. The saga begins when Feyre Archeron, a 19-year-old huntress, is kidnapped and brought to the faerie lands of Prythian after she kills a faerie wolf. Her kidnapper is Tamlin, a High Fae and one of the seven High Lords of Prythian.","/images/products/acotar.webp",3),
(default,"House of Earth and blood","The first Crescent City novel. Meet Bryce Quinland and Hunt Atalar. Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation.","/images/products/houseofearthandblood.webp",4);


insert into comentarios (idProducto,idUsuario,commentario)
values(1,1,"Una historia fascinante y una edición divina. Les encantará a todos."),
(2,2,"Los clásicos nunca pasan de moda, y esta no es la excepción. Una historia encantadora con un mensaje sin igual"),
(3,3,"That was both horrible and incredible at the same time, and my thoughts are a whirlwind."),
(4,4,"I am a second away from dousing myself in gasoline and lighting myself on fire just so I never have to look at this book again."),
(5,1,"Un libro que te captura desde el primer momento."),
(6,1,"Me lo devoré en dos días porque no podía parar de leer sobre el fantástico mundo de Caraval."),
(7,2,"Super recomendado <3"),
(8,3,"Uno de los libros mejor estructurado qué leído en mi vida."),(9,4,"Es una trama qué te atrapa de principio a fin."),(10,4,"me encanto todo de este libro, desde la trama hasta como escribe la autora, es buenisima y super recomiendo sus libros!"),
(11,4,"¡¡Me encantó!! Ese mundo mágico y todos los engaños aaaa me explotó la cabeza el final."),(12,2,"Lean esta joya de libro por favor, no se van a arrepentir."),
(1,3,"uno de los mejores libros que pueden existir en este vida ..."),
(2,4,"el libro es realmente increíble y sorprendente"),
(3,1,"Me gusto un monton, mega atrapante, lo super recomiendo"),
(4,1,"El mejor libro que pude haber leído quisiera poder volver al pasado para leerlo por primera vez"),
(5,2,"Es mi novela favorita, es lo mejor que he visto. Historia muy realista"),
(6,2,"Me encanta este libro. Definitivamente, uno de mis favoritos."),
(7,3,"Este libro me hizo amar la lectura, desde entonces no puedo parar."), 
(8,4,"Es lo más lindo que he leído me encanto"), 
(9,1,"una muy buena historia , se las recomiendo"), 
(10,1,"la historia es hermosa e interesante"), 
(11,2,"La novela es tremendamente emocionante y llena de sorpresas en cada capítulo. El concepto de la amistad y amor que transmite deja una impresión fuerte, la recomiendo 100%."), 
(12,3,"Le doy 5 por no poder darle 100, que maravilla de libro no hay palabras suficientes para describirlo."),
(1,4,"Me encanto, sin duda fueron las 600 y algo de paginas mejor leídas de mi vida uwu"),
(2,5,"Sin duda, el mejor libro que leí en 2020"),
(3,1,"Es un libro increíble, 100% recomendado."),
(4,2,"¡ME ENCANTA!, al principio creia que no era la gran cosa, pero cuando lo leí nunca pude dejar de leerlo es adictivo."),
(5,3,"Este libro me cambio la vida."),
(6,4,"Este libro es uno de los mejores libros que he leído, tiene una historia absolutamente GENIAL "),
(7,1,"Se lo recomiendo a cualquiera lector que esté buscando una mágica historia."),
(8,2,"el mejor libro hasta ahora ( salvo unos pocos) y solo he leido 3 y espero con muchas ganas el cuarto bueno de principio a fin a mi siempre me ha gustado leer pero este supera a casi todos"),
(9,2,"ME ENCANTA es tan bueno cuando lo lei por primera vez tarde como 2 meses en terminar de leerlo pero ya cuando le agarre gusto lo termine en 1 dia y medio"),
(10,3,"es genial 100% RECOMENDADO"),
(11,4,"amé el libro. Es increíble! "),
(12,1,"Me lo leí en un día y los 7 en un mes. Recomiendo leerlo"),
(1,1,"Es muy adictivo y no puedo dejar de leerlo ya ni siquiera se en que año estamos"),
(2,2,"Es único!!! Un mundo que te entra en lo más hondo y te hace sentir parte de él"),
(3,3,"Una historia realmente fascinante"),
(4,4,"me encanto este libro la verdad fue genial"),
(5,1,"Simplemente fantástico. "),
(6,1,"el mejor libro, realmente impresionante espero que siempre este disponible para todas las personas y vean lo maravilloso que es."),
(7,2,"Es el mejor libro que he leido en la vida!!! ojala hagan mas"),
(8,3,"Solamente ame, el libro es increíble realmente vale la pena leerlo muy recomentada"),
(9,4,"es maravilloso este libro y toda la saga la trama es buenisima te atrapa por completo"),
(10,1,"lo lei y es increible me quedo sin palabras"),
(11,1,"Es el mejor libro que he leído, tiene muchas cosas que me encanta es fantástico."),
(12,2,"Es lo mejor es muy interesante y vale mucho la pena comprarlo");

SELECT * FROM usuarios;
SELECT * FROM productos;
SELECT * FROM comentarios;


