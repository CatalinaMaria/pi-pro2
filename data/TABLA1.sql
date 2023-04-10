create schema tablas;
use tablas;
create table usuarios (
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
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
clienteId int unsigned,
foreign key(clienteId) references usuarios(id),
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

create table comentarios (
idComentario int unsigned primary key auto_increment,
foreign key (idComentario) references productos(idProducto),
idUsuario int unsigned,
foreign key (idUsuario) references usuarios(id),
commentario varchar(500)  not null,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

insert into usuarios (id,email,contraseña,fotoPerfil,fecha,dni)
values(1,"m@gmail.com","m","/images/users/default-image.png","03-04-23",45014441);
insert into usuarios (id,email,contraseña,fotoPerfil,fecha,dni)
values(2,"email2@gmail.com","mari","/images/users/default-image.png","03-04-23",45014442);
insert into usuarios (id,email,contraseña,fotoPerfil,fecha,dni)
values(3,"email3@gmail.com","ma","/images/users/default-image.png","03-04-23",45014443);
insert into usuarios (id,email,contraseña,fotoPerfil,fecha,dni)
values(4,"email4@gmail.com","mar","/images/users/default-image.png","03-04-23",45014444);
insert into usuarios (id,email,contraseña,fotoPerfil,fecha,dni)
values(5,"email5@gmail.com","mare","/images/users/default-image.png","03-04-23",45014445);

insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(1,"Pride and Prejudice","'A classic Jane Austen novel. Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.","1");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(2,"Caraval","First book of the Caraval trilogy. It is just a game... isnt it? It is about two sisters - Scarlett and Tella - who live on some random island in the middle of random world X with their abusive father who wants to marry Scarlett off to a count shes never met. Caraval is, as it sounds, a carnival-like game on another random island.","2");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(3,"City of bonesPart of the Shadow Hunter series written by Cassandra Clare. An evening at a New York nightclub takes an unexpected turn for 15-year-old Clary when she witnesses what looks like a murder - but the victims body has vanished into thin air. Whats even more strange is that her best friend Simon couldnt even see the attack take place","3");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(4,"Divergent","First book of the divergent trilogy. Divergent follows the story of Beatrice (Tris), who has a choice to make among the 5 factions of her nation, which will map out certain actions in her life: Abnegation (the selfless), Amity (the peaceful), Candor (the honest), Dauntless (the brave), and Erudite (the intellectual).","4");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(5,"Pillars of the Earth","First book of the best fantasy world ever created. The Pillars of the Earth tells the story of Philip, prior of Kingsbridge, a devout and resourceful monk driven to build the greatest Gothic cathedral the world has known . . . of Tom, the mason who becomes his architect—a man divided in his soul . . . of the beautiful, elusive Lady Aliena, haunted by a secret shame.","5");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(6,"Shadow and Bone","Now adapted to screen by netflix. Follow Alina as she discovers the perks of being a sun summoner. Shadow and Bone is a fantasy novel, in which monsters are real and so are Grisha, people who possess the ability to control the elements, such as summoning wind or fire. People without these powers are known as Otkazatsya. Alina Starkov is a young woman who grew up in an orphanage with Malyen Mal Oretsev.","6");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(7,"Six of crows","Kaz Brekker summons a team of thieves for a multimillion dollar quest. Six of Crows is a fantasy novel written by the Israeli-American author Leigh Bardugo and published by Henry Holt and Co. in 2015. The story follows a thieving crew and is primarily set in the city of Ketterdam, which is loosely inspired by Dutch Republic era Amsterdam.","7");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(8,"The Great Gatsby","Third novel by American author F. Scott Fitzgerald, published in 1925. The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.","8");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(9,"The hand maids tale","A classic of modern literature. The Handmaids Tale, acclaimed dystopian novel by Canadian author Margaret Atwood, published in 1985. The book, set in New England in the near future, posits a Christian fundamentalist theocratic regime in the former United States that arose as a response to a fertility crisis.","9");
insert into productos (idProducto,nombreProducto,descripcion,clienteId)
values(10,"Little Women","The classic has come back in the best edition ever made. With their father fighting in the American Civil War, sisters Jo, Meg, Amy and Beth are at home with their mother, a very outspoken woman for her time. The story tells of how the sisters grow up, find love, and find their place in the world. Four sisters and their mother at home. Their father is fighting in the war.","10");


insert into comentarios (idComentario,idUsuario,commentario)
values(1,1,"Una historia fascinante y una edición divina. Les encantará a todos.");
insert into comentarios (idComentario,idUsuario,commentario,descripcion)
values(2,2,"Los clásicos nunca pasan de moda, y esta no es la excepción. Una historia encantadora con un mensaje sin igual");
insert into comentarios (idComentario,idUsuario,commentario,descripcion)
values(3,3,"That was both horrible and incredible at the same time, and my thoughts are a whirlwind.");
insert into comentarios (idComentario,idUsuario,commentario,descripcion)
values(4,4,"I am a second away from dousing myself in gasoline and lighting myself on fire just so I never have to look at this book again.");

