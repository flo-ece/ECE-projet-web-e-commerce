-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 06 mai 2024 à 20:28
-- Version du serveur : 8.1.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

DROP TABLE IF EXISTS `adresse`;
CREATE TABLE IF NOT EXISTS `adresse` (
  `ID` varchar(15) NOT NULL,
  `numero` int NOT NULL,
  `rue` varchar(60) NOT NULL,
  `code postal` bigint NOT NULL,
  `ville` mediumtext NOT NULL,
  `pays` mediumtext NOT NULL,
  `ID_client` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_client` (`ID_client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`ID`, `numero`, `rue`, `code postal`, `ville`, `pays`, `ID_client`) VALUES
('A-78279YH', 14, 'Rue de Monmartre', 75018, 'Paris', 'France', 'C-801291UI'),
('A-UYT5467', 4, 'Rue des Rosiers', 95100, 'Argenteuil', 'France', 'C-UYT5467');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `ID` varchar(15) NOT NULL,
  `nom` varchar(1000) NOT NULL,
  `section` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`ID`, `nom`, `section`) VALUES
('C-46751', 'Apple MacBook Pro M2', 'PC'),
('C-98101', 'MSI', 'PC'),
('C-90292', 'Acer Predator', 'PC'),
('C-45678', 'IPhone 13', 'Portable'),
('C-11325', 'Samsung M12 4G', 'Portable');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `ID` varchar(15) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `age` int NOT NULL,
  `mail` varchar(30) NOT NULL,
  `ID_adresse` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `id_adresse` (`ID_adresse`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`ID`, `nom`, `prenom`, `age`, `mail`, `ID_adresse`) VALUES
('C-UYT5467', 'Paktunam', 'Vinoth', 22, 'vinoth.paktunam@caca.fr', 'A-UYT5467 	'),
('C-801291UI', 'A', 'Jean', 35, 'A.jean@caca.fr', 'A-78279YH');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `ID` varchar(15) NOT NULL,
  `ID_client` varchar(15) NOT NULL,
  `quantite` int NOT NULL,
  `ID_produit` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_client` (`ID_client`),
  KEY `ID_produit` (`ID_produit`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `ID` varchar(15) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `prix` int NOT NULL,
  `quantite` int NOT NULL,
  `commentaire` varchar(1000) NOT NULL,
  `ID_categorie` varchar(15) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_categorie` (`ID_categorie`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`ID`, `nom`, `image`, `description`, `prix`, `quantite`, `commentaire`, `ID_categorie`) VALUES
('P-46751', 'Apple MacBook Pro M2', 'laptop-1.jpg', 'PC portable très performant de chez Apple.', 3000, 3, '', 'C-46751'),
('P-98101', 'MSI', 'laptop-6.jpg', 'PC Gamer MSI avec un très bon rapport qualité prix !', 999, 10, '', 'C-98101'),
('P-90292', 'Acer Predator', 'laptop-5.jpg', 'PC Gamer de chez Acer.', 1099, 5, '', 'C-90292'),
('P-45678', 'IPhone 13', 'mobile-3.jpg', '', 699, 11, '', 'C-45678'),
('P-11325', 'Samsung M12 4G', 'mobile-1.jpg', '', 379, 20, '', 'C-11325');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
