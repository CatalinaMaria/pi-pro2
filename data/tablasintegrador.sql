-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 17, 2023 at 02:34 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tablasintegrador`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `idProducto` int(10) UNSIGNED DEFAULT NULL,
  `idUsuario` int(10) UNSIGNED DEFAULT NULL,
  `commentario` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `idProducto`, `idUsuario`, `commentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'Una historia fascinante y una edición divina. Les encantará a todos.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(2, 2, 2, 'Los clásicos nunca pasan de moda, y esta no es la excepción. Una historia encantadora con un mensaje sin igual', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(3, 3, 3, 'That was both horrible and incredible at the same time, and my thoughts are a whirlwind.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(4, 4, 4, 'I am a second away from dousing myself in gasoline and lighting myself on fire just so I never have to look at this book again.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(5, 5, 1, 'Un libro que te captura desde el primer momento.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(6, 6, 1, 'Me lo devoré en dos días porque no podía parar de leer sobre el fantástico mundo de Caraval.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(7, 7, 2, 'Super recomendado <3', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(8, 8, 3, 'Uno de los libros mejor estructurado qué leído en mi vida.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(9, 9, 4, 'Es una trama qué te atrapa de principio a fin.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(10, 10, 4, 'me encanto todo de este libro, desde la trama hasta como escribe la autora, es buenisima y super recomiendo sus libros!', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(11, 11, 4, '¡¡Me encantó!! Ese mundo mágico y todos los engaños aaaa me explotó la cabeza el final.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(12, 12, 2, 'Lean esta joya de libro por favor, no se van a arrepentir.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(13, 1, 3, 'uno de los mejores libros que pueden existir en este vida ...', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(14, 2, 4, 'el libro es realmente increíble y sorprendente', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(15, 3, 1, 'Me gusto un monton, mega atrapante, lo super recomiendo', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(16, 4, 1, 'El mejor libro que pude haber leído quisiera poder volver al pasado para leerlo por primera vez', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(17, 5, 2, 'Es mi novela favorita, es lo mejor que he visto. Historia muy realista', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(18, 6, 2, 'Me encanta este libro. Definitivamente, uno de mis favoritos.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(19, 7, 3, 'Este libro me hizo amar la lectura, desde entonces no puedo parar.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(20, 8, 4, 'Es lo más lindo que he leído me encanto', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(21, 9, 1, 'una muy buena historia , se las recomiendo', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(22, 10, 1, 'la historia es hermosa e interesante', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(23, 11, 2, 'La novela es tremendamente emocionante y llena de sorpresas en cada capítulo. El concepto de la amistad y amor que transmite deja una impresión fuerte, la recomiendo 100%.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(24, 12, 3, 'Le doy 5 por no poder darle 100, que maravilla de libro no hay palabras suficientes para describirlo.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(25, 1, 4, 'Me encanto, sin duda fueron las 600 y algo de paginas mejor leídas de mi vida uwu', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(26, 2, 5, 'Sin duda, el mejor libro que leí en 2020', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(27, 3, 1, 'Es un libro increíble, 100% recomendado.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(28, 4, 2, '¡ME ENCANTA!, al principio creia que no era la gran cosa, pero cuando lo leí nunca pude dejar de leerlo es adictivo.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(29, 5, 3, 'Este libro me cambio la vida.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(30, 6, 4, 'Este libro es uno de los mejores libros que he leído, tiene una historia absolutamente GENIAL ', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(31, 7, 1, 'Se lo recomiendo a cualquiera lector que esté buscando una mágica historia.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(32, 8, 2, 'el mejor libro hasta ahora ( salvo unos pocos) y solo he leido 3 y espero con muchas ganas el cuarto bueno de principio a fin a mi siempre me ha gustado leer pero este supera a casi todos', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(33, 9, 2, 'ME ENCANTA es tan bueno cuando lo lei por primera vez tarde como 2 meses en terminar de leerlo pero ya cuando le agarre gusto lo termine en 1 dia y medio', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(34, 10, 3, 'es genial 100% RECOMENDADO', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(35, 11, 4, 'amé el libro. Es increíble! ', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(36, 12, 1, 'Me lo leí en un día y los 7 en un mes. Recomiendo leerlo', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(37, 1, 1, 'Es muy adictivo y no puedo dejar de leerlo ya ni siquiera se en que año estamos', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(38, 2, 2, 'Es único!!! Un mundo que te entra en lo más hondo y te hace sentir parte de él', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(39, 3, 3, 'Una historia realmente fascinante', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(40, 4, 4, 'me encanto este libro la verdad fue genial', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(41, 5, 1, 'Simplemente fantástico. ', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(42, 6, 1, 'el mejor libro, realmente impresionante espero que siempre este disponible para todas las personas y vean lo maravilloso que es.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(43, 7, 2, 'Es el mejor libro que he leido en la vida!!! ojala hagan mas', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(44, 8, 3, 'Solamente ame, el libro es increíble realmente vale la pena leerlo muy recomentada', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(45, 9, 4, 'es maravilloso este libro y toda la saga la trama es buenisima te atrapa por completo', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(46, 10, 1, 'lo lei y es increible me quedo sin palabras', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(47, 11, 1, 'Es el mejor libro que he leído, tiene muchas cosas que me encanta es fantástico.', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(48, 12, 2, 'Es lo mejor es muy interesante y vale mucho la pena comprarlo', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(51, 13, 14, 'Ame la quimica entre Daisy y Billy!!', '2023-06-16 05:04:26', '2023-06-16 05:04:26', NULL),
(56, 8, 14, 'El autor es un genio por como hace referencia al sueño americano', '2023-06-16 05:23:24', '2023-06-16 05:23:24', NULL),
(58, 14, 14, 'A quick read. Well written, interesting story.', '2023-06-16 13:32:49', '2023-06-16 13:32:49', NULL),
(65, 13, 14, 'Buenisimo', '2023-06-16 14:31:36', '2023-06-16 14:31:36', NULL),
(66, 26, 14, 'Me dio más miedo que la pelicula! Muy buen libro!', '2023-06-16 20:14:47', '2023-06-16 20:14:47', NULL),
(68, 13, 15, 'Me encanto este libro, y la serie también buenisima!', '2023-06-16 23:20:25', '2023-06-16 23:20:25', NULL),
(69, 27, 15, 'Un clasico que no te podes perder! 5/5 ', '2023-06-16 23:21:56', '2023-06-16 23:21:56', NULL),
(70, 27, 16, 'No pude soltarlo, el final no me lo esperaba! ', '2023-06-17 01:25:41', '2023-06-17 01:25:41', NULL),
(71, 7, 15, 'Primer libro que leo este año y no me decepciono!', '2023-06-17 02:09:19', '2023-06-17 02:09:19', NULL),
(72, 27, 12, 'Me encanta que sea en el Reino Unido y poder leer el Ingles Viejo aunque me cueste...', '2023-06-17 02:31:58', '2023-06-17 02:31:58', NULL),
(73, 13, 12, 'YO ACTUO DE BILLY EN LA PELICULA!', '2023-06-17 02:32:22', '2023-06-17 02:32:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(10) UNSIGNED NOT NULL,
  `nombreProducto` varchar(200) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `imagen` varchar(300) NOT NULL,
  `clienteId` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `descripcion`, `imagen`, `clienteId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Pride and Prejudice', '\'A classic Jane Austen novel. Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.', '/images/products/prideandprejudice.png', 1, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(2, 'Caraval', 'First book of the Caraval trilogy. It is just a game... isnt it? It is about two sisters - Scarlett and Tella - who live on some random island in the middle of random world X with their abusive father who wants to marry Scarlett off to a count shes never met. Caraval is, as it sounds, a carnival-like game on another random island.', '/images/products/caraval.jpg', 2, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(3, 'City of bones', 'City of bonesPart of the Shadow Hunter series written by Cassandra Clare. An evening at a New York nightclub takes an unexpected turn for 15-year-old Clary when she witnesses what looks like a murder - but the victims body has vanished into thin air. Whats even more strange is that her best friend Simon couldnt even see the attack take place', '/images/products/cityofbones.webp', 3, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(4, 'Divergent', 'First book of the divergent trilogy. Divergent follows the story of Beatrice (Tris), who has a choice to make among the 5 factions of her nation, which will map out certain actions in her life: Abnegation (the selfless), Amity (the peaceful), Candor (the honest), Dauntless (the brave), and Erudite (the intellectual).', '/images/products/divergent.webp', 4, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(5, 'Pillars of the Earth', 'First book of the best fantasy world ever created. The Pillars of the Earth tells the story of Philip, prior of Kingsbridge, a devout and resourceful monk driven to build the greatest Gothic cathedral the world has known . . . of Tom, the mason who becomes his architect—a man divided in his soul . . . of the beautiful, elusive Lady Aliena, haunted by a secret shame.', '/images/products/pillarsoftheearth.webp', 1, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(6, 'Shadow and Bone', 'Now adapted to screen by netflix. Follow Alina as she discovers the perks of being a sun summoner. Shadow and Bone is a fantasy novel, in which monsters are real and so are Grisha, people who possess the ability to control the elements, such as summoning wind or fire. People without these powers are known as Otkazatsya. Alina Starkov is a young woman who grew up in an orphanage with Malyen Mal Oretsev.', '/images/products/shadowandbone.webp', 2, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(7, 'Six of crows', 'Kaz Brekker summons a team of thieves for a multimillion dollar quest. Six of Crows is a fantasy novel written by the Israeli-American author Leigh Bardugo and published by Henry Holt and Co. in 2015. The story follows a thieving crew and is primarily set in the city of Ketterdam, which is loosely inspired by Dutch Republic era Amsterdam.', '/images/products/sixofcrows1.webp', 3, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(8, 'The Great Gatsby', 'Third novel by American author F. Scott Fitzgerald, published in 1925. The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.', '/images/products/greatgatsby.jpeg', 4, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(9, 'The Hand Maids tale', 'A classic of modern literature. The Handmaids Tale, acclaimed dystopian novel by Canadian author Margaret Atwood, published in 1985. The book, set in New England in the near future, posits a Christian fundamentalist theocratic regime in the former United States that arose as a response to a fertility crisis.', '/images/products/thehandmaidstale.webp', 1, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(10, 'Little Women', 'The classic has come back in the best edition ever made. With their father fighting in the American Civil War, sisters Jo, Meg, Amy and Beth are at home with their mother, a very outspoken woman for her time. The story tells of how the sisters grow up, find love, and find their place in the world. Four sisters and their mother at home. Their father is fighting in the war.', '/images/products/littlewomen.webp', 2, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(11, 'A court of thorns and roses', 'First book of the ACOTAR series written by Sarah J Maas. A Court of Thorns and Roses is a young adult high fantasy series by Sarah J. Maas. The saga begins when Feyre Archeron, a 19-year-old huntress, is kidnapped and brought to the faerie lands of Prythian after she kills a faerie wolf. Her kidnapper is Tamlin, a High Fae and one of the seven High Lords of Prythian.', 'https://m.media-amazon.com/images/I/81LftCZRUML._AC_UF1000,1000_QL80_.jpg', 3, '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(12, 'House of Earth and blood', 'The first Crescent City novel. Meet Bryce Quinland and Hunt Atalar. Bryce Quinlan had the perfect life-working hard all day and partying all night-until a demon murdered her closest friends, leaving her bereft, wounded, and alone. When the accused is behind bars but the crimes start up again, Bryce finds herself at the heart of the investigation.', 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781526622884.jpg', 4, '2023-06-13 15:40:23', '2023-06-16 20:29:39', NULL),
(13, 'Daisy Jones and The Six', 'In 1977, Daisy Jones & The Six were on top of the world; the band had risen from obscurity to fame, and then, after a sold-out show at Chicago\'s Soldier Field, they called it quits; now, decades later, the band members agree to reveal the truth.', 'https://thescreenfandome.com/wp-content/uploads/2023/02/IMG_20230220_203331.jpg', 12, '2023-06-14 00:00:00', '2023-06-15 07:22:28', NULL),
(14, 'The Seven Husbands of Evelyn Hugo', ' The Seven Husbands of Evelyn Hugo is a historical fiction novel by American author Taylor Jenkins Reid and published by Atria Books in 2017. The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who, at age 79, gives a final interview to an unknown journalist, Monique Grant.', 'https://contentv2.tap-commerce.com/cover/large/9789874777737_1.jpg?id_com=1113', 12, '2023-06-15 01:09:37', '2023-06-15 07:03:11', NULL),
(26, 'It', ' It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey', 'https://m.media-amazon.com/images/I/71tFhdcC0XL.jpg', 14, '2023-06-16 13:43:38', '2023-06-16 13:43:38', NULL),
(27, 'The Secret Garden', 'The Secret Garden is a novel by Frances Hodgson Burnett first published in book form in 1911, after serialisation in The American Magazine. Set in England, it is one of Burnett\'s most popular novels and seen as a classic of English children\'s literature. Several stage and film adaptations have been made.', 'https://godine.com/wp-content/uploads/2015/11/9780879236496.jpg', 15, '2023-06-16 23:21:25', '2023-06-17 01:33:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `contraseña` varchar(500) NOT NULL,
  `fotoPerfil` varchar(300) NOT NULL,
  `fecha` date NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `usuario`, `contraseña`, `fotoPerfil`, `fecha`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'cata@gmail.com', 'cataosycka', 'm', '/images/users/default-image.png', '2003-04-23', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(2, 'maria@gmail.com', 'mariariobo', 'marich', '/images/users/default-image.png', '2003-04-23', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(3, 'suki@gmail.com', 'sukiwaterhouse', 'ma', 'https://static.independent.co.uk/2022/11/19/14/newFile-1.jpg?width=1200', '2003-04-23', '2023-06-13 15:40:23', '2023-06-16 06:47:06', NULL),
(4, 'stuart@gmail.com', 'stuartlittle', 'mar', 'https://play-lh.googleusercontent.com/proxy/lzlfeGY0O7YSuY0_KcoGv7oH82rF44Q_wIyLKxXXh6hvC3lIS5Vm88VWXIcuHVF4sABcSa4j1WpSos9-cpD7mcuaq-fxte9X5bBcoFISk70lhF32UQ=s1920-w1920-h1080', '2003-04-23', '2023-06-13 15:40:23', '2023-06-16 06:48:27', NULL),
(5, 'juanca@gmail.com', 'jcarlos', 'mare', '/images/users/default-image.png', '2003-04-23', '2023-06-13 15:40:23', '2023-06-13 15:40:23', NULL),
(6, 'ignacio@gmail.com', 'Nachito', '$2a$12$RKnDWPvjfUWwaWexFQZk6uPFVbyNNvoo3FStNKYxigfJL5LvFQoeG', '/images/users/default-image.png', '2023-11-26', '2023-06-13 16:06:30', '2023-06-14 05:44:36', NULL),
(9, 'gigi@gmail.com', 'Gigi', '$2a$12$UoSvrc4bGw3NizsrvJZ4suIsDXIN4zRNeps.WSrlDON5qSxcRVOme', '/images/users/default-image.png', '1998-04-04', '2023-06-13 16:12:17', '2023-06-14 05:44:38', NULL),
(10, 'taylorswift@gmail.com', 'Taylor Swift', '$2a$12$3KSaoMGAPRsJNqkylHwzSOMAIWCIItJstNtwZwzwm7GC.fs8HypEu', '/images/users/default-image.png', '2023-06-12', '2023-06-14 04:56:01', '2023-06-14 05:44:39', NULL),
(12, 'sam@gmail.com', 'Sam Claflin', '$2a$12$Eabokr5uPFIees6ysT/wIOVA0kIJF8Lw9BZZgx1/MeOmOcVhSPeGu', 'https://variety.com/wp-content/uploads/2023/02/finnick.png', '2022-02-22', '2023-06-14 14:37:13', '2023-06-16 21:38:02', NULL),
(13, 'kyliejenner@gmail.com', 'Kylie Jenner', '$2a$12$VpgECetH.n95YgzmRFW.T.i1Dn6yuO7tBd5hITdzzjzghXCoE3K2O', 'https://www.instyle.com/thmb/V2U_-BsSWvr6kKSjtgkU6JjcyUg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kylie-jenner-black-bra-instagram-social-6aa7c76df8e94fa9a2c2be11374756ce.jpg', '1997-08-10', '2023-06-14 15:41:51', '2023-06-14 15:50:52', NULL),
(14, 'nola@gmail.com', 'Nola', '$2a$12$w2Sc2P3B7mgllNVEYC/CpOGR7hTGdA3i902lLrVtdpcTePdKxzivG', 'https://definicion.de/wp-content/uploads/2015/01/tortuga.png', '2005-08-12', '2023-06-15 07:40:17', '2023-06-16 21:26:30', NULL),
(15, 'tali@gmail.com', 'Tali', '$2a$12$n9NxKr7ofg.gt/gbN5JEH.ViSbzPAhfoHvNl4d5fWg7vyW1Is.RhO', 'https://d33x1o3gj9io8i.cloudfront.net/images/4211/qsozsYG5Q0TOSGpKRgEe', '2004-02-07', '2023-06-16 21:39:10', '2023-06-17 01:32:56', NULL),
(16, 'bradpitt@gmail.com', 'Brad Pitt', '$2a$12$y1ccMqXATCsRh4mX5JPuFOh4qKHp.5i8J1Ji4md7zzdFePIWh4ORW', 'https://images.ecestaticos.com/blDn6mJyJyggQjNXbQybJCAKhpE=/251x1:1452x901/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F0dd%2F685%2F9fd%2F0dd6859fdd15724271f0bcb9f6f3816c.jpg', '1963-12-18', '2023-06-17 01:24:37', '2023-06-17 01:24:37', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `clienteId` (`clienteId`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD UNIQUE KEY `contraseña` (`contraseña`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`clienteId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
