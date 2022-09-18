-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 17-Set-2022 às 22:32
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_music`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `videos`
--

DROP TABLE IF EXISTS `videos`;
CREATE TABLE IF NOT EXISTS `videos` (
  `IdVideo` int(11) NOT NULL AUTO_INCREMENT,
  `compositor` varchar(100) DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `musica` varchar(110) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdVideo`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `videos`
--

INSERT INTO `videos` (`IdVideo`, `compositor`, `genero`, `musica`, `link`, `foto`) VALUES
(1, 'Zayde Wolf', 'Alternativa/Indie', 'Rule the World', 'https://www.youtube.com/embed/sAMvv8kvG5M', 'Zayde Wolf-1.jpg'),
(2, 'Zayde Wolf', 'Alternativa/Indie', 'Walk Through the fire (feat. Ruelle) ', 'https://www.youtube.com/embed/WIdJi5IE0P0', 'Zayde Wolf-2.jpg'),
(3, 'Vintage Culture', 'Eletrônica', 'Cante por nós', 'https://www.youtube.com/embed/urxUXQfj-MU', 'Vintage-Culture-1.jpg'),
(4, 'Hungria', 'Hip Hop', 'Quebra Cabeça - ft. Lucas Lucco', 'https://www.youtube.com/embed/S3J1UvKpzPc', 'Hungria-1.jpg'),
(5, 'Hungria', 'Hip Hop', 'Não Troco (Official Music)', 'https://www.youtube.com/embed/hBecvGXZaNM', 'Hungria-2.jpg'),
(6, 'Vintage Culture', 'Eletrônica', 'Vintage Culture & Adam K - Save Me (feat. MKLA)', 'https://www.youtube.com/embed/S92QFNQUUa0', 'Vintage-Culture-2.jpg'),
(7, 'Linkin Park', 'Rock', 'Numb (Official Video)', 'https://www.youtube.com/embed/kXYiU_JCYtU', 'Link-Park-1.jpg'),
(8, 'Alok', 'Eletrônica', 'Alok, Bruno Martini feat. Zeeba - Hear Me Now', 'https://www.youtube.com/embed/JVpTp8IHdEg', 'alok-1.jpg'),
(9, 'Alok', 'Eletrônica', 'Alok - Me and You Feat. IRO', 'https://www.youtube.com/embed/FxIkFuuvdy4', 'alok2.jpg'),
(10, 'Alok', 'Eletrônica', 'Alok & Bhaskar - FUEGO', 'https://www.youtube.com/embed/VQ2EyU75p2o', 'alok-3.jpg'),
(11, 'Alok', 'Eletrônica', 'Alok, Bhaskar & Jetlag Music - Bella Ciao', 'https://www.youtube.com/embed/2eSTXIdZb-E', 'alok-4.jpg'),
(12, 'Vintage Culture', 'Eletrônica', 'Vintage Culture, Rooftime - I Will Find', 'https://www.youtube.com/embed/xslPDHq-yog', 'vintage-culture-3.jpg'),
(13, 'Vintage Culture', 'Eletrônica', 'Vintage Culture, Adam K - Pour Over', 'https://www.youtube.com/embed/gprAWYQ47uY', 'vintage-culture-4.jpg'),
(14, 'Hungria', 'Hip Hop', 'Coração de Aço - Hungria Hip Hop (VídeoClipe Oficial)', 'https://www.youtube.com/embed/pdFLuRQd0wQ', 'hungria-3.jpg'),
(15, 'Hungria', 'Hip Hop', 'Beijo Com Trap (Official Vídeo)', 'https://www.youtube.com/embed/63XyWeKWI0M', 'hungria-4.jpg'),
(16, 'Zayde Wolf', 'Alternativa/Indie', 'BORN READY (Official Lyric Video)', 'https://www.youtube.com/embed/dGdHAyM6FZY', 'Zayde-Wolf-3.jpg'),
(17, 'Zayde Wolf', 'Alternativa/Indie', 'COLD-BLOODED (Official Lyric Video)', 'https://www.youtube.com/embed/aMXMNfuzJ1g', 'Zayde-Wolf-4.jpg'),
(18, 'Linkin Park', 'Rock', 'CASTLE OF GLASS (Official Video)', 'https://www.youtube.com/embed/ScNNfyq3d_w', 'Linkin-Park-2.jpg'),
(19, 'Linkin Park', 'Rock', 'In The End (Official Video)', 'https://www.youtube.com/embed/eVTXPUF4Oz4', 'Linkin-Park-3.jpg'),
(21, 'The Score', 'Rock Alternativo', 'The Score - Born For This (Official Audio)', 'https://www.youtube.com/embed/aJ5IzGBnWAc', '10bde063ccda1aa7eaba88fa60f2ce00.jpg'),
(20, 'Linkin Park', 'Rock', 'One More Light (Official Video)', 'https://www.youtube.com/embed/Tm8LGxTLtQk', 'Linkin-Park-4.jpg'),
(22, 'The Score', 'Rock Alternativo', 'The Score - Higher (Official Audio)', 'https://www.youtube.com/embed/XclXvB1Gmnc', '2a9ea69d231c9bb94b88564d4ad20e08.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
