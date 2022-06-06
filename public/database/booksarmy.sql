-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2022 a las 15:34:16
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `booksarmy`
--
CREATE DATABASE IF NOT EXISTS `booksarmy` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `booksarmy`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `author`
--

CREATE TABLE IF NOT EXISTS `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `author`
--

INSERT INTO `author` (`id`, `first_name`, `last_name`, `bio`, `image`) VALUES
(1, 'Gabriel', 'García Marquez', '... completar ', 'default.png'),
(2, 'John Ronald', 'Reuel Tolkien', '... completar ', 'default.png'),
(3, 'George', 'Orwell', '... completar ', 'default.png'),
(4, 'Aldous', 'Huxley', '... completar ', 'default.png'),
(5, 'Jane', 'Austen', '... completar ', 'default.png'),
(6, 'Fiódor', 'Dostoyevski', '... completar ', 'default.png'),
(7, 'Vladimir', 'Nabokov', '... completar ', 'default.png'),
(8, 'James', 'Joyce', '... completar ', 'default.png'),
(9, 'Gustave', 'Flaubert', '... completar ', 'default.png'),
(10, 'Miguel', 'de Cervantes', '... completar ', 'default.png'),
(11, 'Oscar', 'Wilde', '... completar ', 'default.png'),
(12, 'León', 'Tolstói', '... completar ', 'default.png'),
(13, 'Antoine', 'de Saint-Exupéry', '...completar', 'default.png'),
(14, 'Franz', 'Kafka', '...completar', 'default.png'),
(15, 'William', 'Faulkner', '...completar', 'default.png'),
(16, 'William', 'Shakespeare', '...completar', 'default.png'),
(17, 'Margaret', 'Mitchell', '...completar', 'default.png'),
(18, 'Homero', '', '...completar', 'default.png'),
(19, 'John', 'Steinbeck', '...completar', 'default.png'),
(20, 'J.D.', 'Salinger', '...completar', 'default.png'),
(21, 'Emily', 'Bronté', '...completar', 'default.png'),
(22, 'F. Scott', 'Fitzgerald', '...completar', 'default.png'),
(23, 'Khaled', 'Hosseini', '...completar', 'default.png'),
(24, 'Lewis', 'Carroll', '...completar', 'default.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `autor_id` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `editorial` varchar(255) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `format` varchar(255) NOT NULL,
  `material` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `books_autor_id_foreign` (`autor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`id`, `name`, `autor_id`, `description`, `gender`, `image`, `editorial`, `isbn`, `price`, `discount`, `stock`, `format`, `material`, `created_at`) VALUES
(1, 'Cien años de soledad', 1, 'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit', 'Sin género', 'cien-anios-soledad.png', 'Franecki, Mueller and Gislason', '333864155-9', 4635.75, 19, 5, 'Ebook', 'MOBI', NULL),
(2, 'El señor de los anillos (trilogía)', 2, 'CAMBIO', 'Aventura', 'el-señor-de-los-anillos-lacomunidaddelanillo.png', 'CAMBIO', '587537237-0', 2408.83, 19, 30, 'Papel', 'papel de madera', NULL),
(3, '1984', 3, '1984 (en su versión original en inglés: Nineteen Eighty-Four) es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949. La novela popularizó los conceptos del omnipresente y vigilante Gran Hermano o Hermano Mayor, de la notoria habitación 101, de la ubicua policía del Pensamiento y de la neolengua, adaptación del idioma inglés en la que se reduce y se transforma el léxico con fines represivos, basándose en el principio de que lo que no forma parte de la lengua, no puede ser pensado...', 'Drama', '1651690940790-img.png', 'Durgan Inc', '258990844-X', 3127.34, 10, 4, 'Papel', 'NORMAL', NULL),
(4, 'Un mundo feliz', 4, 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius', 'Adventure', 'default-img.png', 'Rutherford-Sporer', '080135980-5', 1662.9, 6, 1, 'Papel', 'NORMAL', NULL),
(5, 'Orgullo y prejuicio', 5, 'nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget', 'Documentary', '1653604016725-img.png', 'Moore, Quigley and Bayer', '251700147-2', 3250.94, 31, 5, 'Papel', 'NORMAL', NULL),
(6, 'Crimen y castigo', 6, 'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem', 'Drama|Horror|Thriller', 'default-img.png', 'Jaskolski-Dickens', '074353903-6', 4374.03, 45, 6, 'Ebook', 'PDF', NULL),
(7, 'Lolita', 7, 'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede', 'Drama|Mystery|Sci-Fi|Thriller', 'default-img.png', 'Rodriguez Inc', '078938923-1', 1132.07, 40, 7, 'Ebook', 'EPUB', NULL),
(8, 'Ulises', 8, 'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat', 'Comedy|Drama', 'default-img.png', 'Gleason, Krajcik and Stiedemann', '790460279-2', 1391.39, 41, 8, 'Ebook', 'EPUB', NULL),
(9, 'Madame Bovary', 9, 'vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', 'Comedy', 'default-img.png', 'Hirthe and Sons', '927965148-X', 3677.02, 33, 9, 'Papel', 'NORMAL', NULL),
(10, 'Don quijote de la Mancha', 10, 'amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis', 'Drama', 'don-quijote-de-la-mancha.png', 'Deckow, Lebsack and Kuphal', '965260061-X', 1204.92, 8, 1, 'Papel ahuesado o marfil', 'PDF', NULL),
(11, 'El retrato de Dorian Gray', 11, 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis', 'Horror', 'default-img.png', 'Konopelski, Baumbach and Runte', '381498107-3', 1075.03, 43, 12, 'Ebook', 'MOBI', NULL),
(13, 'Ana Karenina', 12, 'ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim', 'Drama|Film-Noir|Romance', 'default-img.png', 'Pouros, Marquardt and Bernhard', '249342157-4', 4735.33, 39, 3, 'Papel', 'NORMAL', NULL),
(14, 'El principito', 13, 'mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate', 'Comedy|Fantasy|Romance', 'el-principito.png', 'Macejkovic, Stroman and Prosacco', '418089364-9', 3338.02, 40, 14, 'Ebook', 'EPUB', NULL),
(15, 'El proceso', 14, 'elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor', 'Comedy|Crime|Drama|Thriller', 'default-img.png', 'Carroll-Waters', '191935955-9', 1905.4, 15, 1, 'Ebook', 'MOBI', NULL),
(16, 'El ruido y la furia', 15, 'donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi', 'Drama|Thriller', 'default-img.png', 'Doyle-Casper', '545721921-6', 3233.45, 44, 6, 'Papel', 'MOBI', NULL),
(17, 'Hamlet', 16, 'proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean', 'Comedy', 'default-img.png', 'Barton-Mertz', '561309074-2', 3061.24, 1, 17, 'Papel', 'MOBI', NULL),
(18, 'Lo que el viento se llevó', 17, 'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis', 'Horror', 'default-img.png', 'Schuppe and Sons', '964233196-9', 3654.26, 2, 18, 'Papel', 'NORMAL', NULL),
(19, 'La Odisea', 18, 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus', 'Comedy|Romance', 'odisea.png', 'Fahey-Trantow', '029317619-1', 4131.43, 12, 19, 'Papel', 'PDF', NULL),
(20, 'Las uvas de la ira', 19, 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue', 'Documentary', 'default-img.png', 'Emard-Cremin', '859694033-2', 4237.16, 26, 20, 'Papel ahuesado o marfil', 'MOBI', NULL),
(21, 'El guardián entre el centeno', 20, 'nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate', 'Drama', 'default-img.png', 'Brown and Sons', '552068760-9', 3728.64, 1, 21, 'Papel ahuesado o marfil', 'PDF', NULL),
(22, 'Cumbres borrascosas', 21, 'sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis', 'Drama|Horror|Mystery|Thriller', 'default-img.png', 'Romaguera-Kemmer', '823641842-1', 1129.6, 45, 22, 'Papel offset', 'PDF', NULL),
(23, 'El gran Gatsby', 22, 'dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa', 'Horror', 'default-img.png', 'Wintheiser, Nikolaus and Armstrong', '086558953-4', 4513.84, 16, 23, 'Papel ahuesado o marfil', 'EPUB', NULL),
(24, 'Mil soles espléndidos', 23, 'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem', 'Drama', 'default-img.png', 'Crooks Inc', '085566892-X', 4196.21, 45, 24, 'Papel offset', 'MOBI', NULL),
(25, 'Alicia en el país de las maravillas', 24, 'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper', 'Drama|Romance', 'default-img.png', 'Daugherty, Rempel and Turcotte', '438386992-0', 1532.27, 15, 25, 'Papel', 'EPUB', NULL),
(26, 'Rebelión en la granja', 3, 'lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel', 'Comedy|Drama', 'default-img.png', 'Hansen, Wintheiser and Fahey', '299859959-1', 4615.1, 16, 1, 'Papel ahuesado o marfil', 'NORMAL', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `book_format`
--

CREATE TABLE IF NOT EXISTS `book_format` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) DEFAULT NULL,
  `format_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `book_format_format_id_foreign` (`format_id`),
  KEY `book_format_book_id_foreign` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `format`
--

CREATE TABLE IF NOT EXISTS `format` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `format`
--

INSERT INTO `format` (`id`, `type`) VALUES
(1, 'Papel'),
(2, 'Ebook');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_category_id_foreign` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `category_id`, `image`) VALUES
(1, 'admin', 'admin  ', 'admin@booksarmy.com', '$2a$10$zi7meHhAtjzOMMKhdMCW5ubeBuFqTy2Noqq1ucJF/k.iQSODt9.PO', 1, '1652748485220_img.png'),
(2, 'lala', 'lala', 'lala@lala', '$2a$10$/tfOq0mapfkrRwLTaECFXe7YMtfoiIZP8nPqfkFpbUU8Zn8rAa7Yq', 1, 'default.png'),
(3, 'perfiladmin', 'admin', 'perfiladmin@gmail.com', '$2a$10$nm8g5olHuAEzNy1J/KGbL.3xbc7TMpYN.3d0kXcXiugSL/PyeKd4W', 1, '1652903668384_img.png'),
(4, 'noemi', 'noemi ', 'noemi@booksarmy.com', '$2a$10$/ADFrNA79E32Uk5rocyPKuT3jC7Sz3NkGIt8t50kwmMEimUH/s58e', 1, 'default.png'),
(5, 'visitante', '1234', '1234@1234', '$2a$10$C9F75qaBk4R1xepL1.3FdOKeHkTl3jqxt96E0HPZ5xIOTDv6zwKvy', 2, '1653248863433_img.png'),
(6, 'prueba', 'prueba', 'prueba@mail.com', '$2a$10$awgvtSOfNoeFhoiFAcpBeeWP8YMNxO3jpP81aj6k7gUNGdpzVyH3i', 2, '1653603190210_img.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_categories`
--

CREATE TABLE IF NOT EXISTS `user_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_categories`
--

INSERT INTO `user_categories` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_autor_id_foreign` FOREIGN KEY (`autor_id`) REFERENCES `author` (`id`);

--
-- Filtros para la tabla `book_format`
--
ALTER TABLE `book_format`
  ADD CONSTRAINT `book_format_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `book_format_format_id_foreign` FOREIGN KEY (`format_id`) REFERENCES `format` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `user_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
