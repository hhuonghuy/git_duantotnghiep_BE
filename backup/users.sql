-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2023 at 07:18 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datn-luyen-huy-huong`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(255) NOT NULL,
  `avatar` text NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `id`, `email`, `password`, `address`, `phone`, `avatar`, `role`) VALUES
('', 1, 'admin@gmail.com', '$2b$10$UM6sKRa7orh1/5bMHHaVtu3d9TnoAclvg8EKorTurprfx9poyaK3.', '', '', '', 1),
('', 2, 'admin1@gmail.com', '$2b$10$NhU8fn3CnlgSCR6eCQqTIOnAl20Pgeg6x2leInW8PK7NC.WlvpwKS', '', '', '', 0),
('', 5, 'test@example.com', '$2b$10$ZVa0JnB4RFUUTF7hJqOX2eREIRxpqw/V8U4oNcM.4ynl8a1o8V7Aq', '', '', '', 0),
('', 6, 'test1@example.com', '$2b$10$tusDGsNdcM7CEFD3C/LCQu/ijGfVFtWFOpBw3ByQ96SaGC.z2CiM2', '', '', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;