-- sizes
insert into sizes (id, name) values (DEFAULT,"s");
insert into sizes (id, name) values (DEFAULT,"m");
insert into sizes (id, name) values (DEFAULT,"l");
insert into sizes (id, name) values (DEFAULT,"xl");
insert into sizes (id, name) values (DEFAULT,"xxl");


-- categories
insert into categories (id, name, description) values (DEFAULT,"t-shirts", "Camisetas y remeras");
insert into categories (id, name, description) values (DEFAULT,"shirts", "Camisas");
insert into categories (id, name, description) values (DEFAULT,"jackets", "Camperas, buzos y abrigos similares");
insert into categories (id, name, description) values (DEFAULT,"pants", "Pantalones cortos y largos");
insert into categories (id, name, description) values (DEFAULT,"accesories", "Cintos, gorras, medias y cualquier tipo de accesorio");


-- users
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Santi', 'Martino', 'sm@middo.com', '$2a$10$mDUATNVe3DQIypsda2OdCeNUPqPwylIxqfMOEkEW/8v2GQD32KivG', 'Russia', 'Zhankhoteko', '10/7/1991', 'male', null, null, true, '12/24/2019');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Juani', 'Barriera', 'juani@middo.com', '$2a$10$ozRAt7zKsUl.8tSKdC8.H.fvbgRdg0J4As/NoHFMxcKdbM/5IH8Du', 'Russia', 'Zhankhoteko', '10/7/1991', 'male', null, null, true, '12/24/2019');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Nahue', 'Ibarra', 'nah@middo.com', '$2a$10$SYwoPFrtw0rSIx6HY/ixu.ygaoYXNlB4Vy15K3ZlRdCtLuAmOSGka', 'Russia', 'Zhankhoteko', '10/7/1991', 'male', null, null, true, '12/24/2019');

insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Jennifer', 'Wallace', 'jenny@middo.com', '$2a$10$ggFzEoQ/6AYoXVU1HrHNmuaTy6xZzeJQrN977Adi5uhGOB23l9NDS', 'Salamanca', 'Salamanca', '1992-04-20', 'female', 'prof-img-prof-img-square.jpg', 'Jennifer', true, '12/24/2018');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Mahalia', 'Chimenti', 'mchimenti1@harvard.edu', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Philippines', 'Pines', '5/15/1994', 'female', 'prof-img-photo-1597689530931-a8edd8a31808.jpg', null, false, '5/2/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Marline', 'Van Halen', 'user_default@middo.com', '$2a$10$hyrC6XmMRkSmgZRrc.fSgerwFZ2XdHobxe5t/twpbpGJDpvczbj3u', 'Nicaragua', 'Boaco', '3/26/1997', 'male', 'prof-img-photo-1597799103501-8a421a387cc5.jpg', null, false, '5/28/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Dennie', 'Fullstone', 'dfullstone3@answers.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Ivory Coast', 'Tabou', '3/12/1997', 'male', 'prof-img-photo-1587464196619-4bb33b420536.jpg', null, false, '10/21/2019');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Zacharie', 'Sleightholm', 'user_admin@middo.com', '$2a$10$kda9LhRL1chDK8sm8oPiOuzNAOcgGdaHMQVBa.Epm4trFHdlMqOW2', 'Indonesia', 'Lokorae', '2/5/1997', 'female', 'prof-img-photo-1556474835-b0f3ac40d4d1.jpg', null, true, '7/2/2020');

insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Sheelah', 'Machent', 'smachent5@independent.co.uk', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Philippines', 'Manuel Roxas', '12/29/1981', 'female', null, null, false, '7/7/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Olly', 'Newrick', 'onewrick6@free.fr', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Cuba', 'Cacocum', '10/25/1985', 'female', null, null, false, '9/1/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Josee', 'Sinnie', 'jsinnie7@salon.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Colombia', 'Girardot', '10/4/1987', 'female', null, null, false, '2/23/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Marline', 'O'' Ronan', 'moronan8@reuters.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Australia', 'Sydney', '9/14/1986', 'female', null, null, true, '1/28/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Sybil', 'Sommerland', 'ssommerland9@ibm.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Argentina', 'Laborde', '9/14/1981', 'female', null, null, false, '1/12/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Patin', 'Pudsey', 'ppudseya@tinyurl.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'China', 'Huangjinbu', '12/20/1987', 'male', null, null, false, '3/6/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Georgena', 'Thorald', 'gthoraldb@163.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Indonesia', 'Isak', '7/24/1982', 'female', null, null, false, '10/24/2019');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Johnath', 'Farrand', 'jfarrandc@upenn.edu', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Indonesia', 'Ngurensiti', '4/28/1997', 'female', null, null, false, '8/26/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Emlynne', 'Rubi', 'erubid@pinterest.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Luxembourg', 'Wilwerwiltz', '12/21/1984', 'female', null, null, false, '1/2/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Sigmund', 'Hulett', 'shulette@deliciousdays.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Ukraine', 'Gradizhsk', '5/25/1999', 'male', null, null, false, '10/22/2019');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Beitris', 'Van Halen', 'bvanhalenf@slate.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Philippines', 'San Quintin', '6/5/1993', 'female', null, null, false, '1/7/2020');
insert into users (id, first_name, last_name, email, password, province, location, birthdate, gender, image, alt, admin, register_date) values (DEFAULT, 'Horten', 'Legg', 'hleggg@tinyurl.com', '$2a$10$ZF.n/m2C4RVMW9S/T/gGHOH7wW.mgQ8MsYkgydYD/X3k9mNB3kybO', 'Yemen', 'Zakhim', '3/8/2004', 'male', null, null, false, '8/22/2020');


-- products
INSERT INTO products VALUES
(DEFAULT, 'Remera Bleach ','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit. ',1,1740,'remera-bleach.png','Remera Bleach'),
(DEFAULT, 'Remera 3D System','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',1,1980,'remera-3d.png','remera 3D system'),
(DEFAULT, 'Remera Pretty Fly','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',1,1820,'remera-verde.png','Remera verde'),
(DEFAULT, 'Buzo HDD Format CH','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',3,3490,'canguro-marron.png','buzo canguro marron'),
(DEFAULT, 'Buzo Disagree','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',3,4790,'buzo.png','buzo disagree'),
(DEFAULT, 'Chaleco Empathy','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',3,3980,'chaleco-tribal.png','chaleco'),
(DEFAULT, 'Campera Middle of ','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit. ',3,3891,'campera-rosa.png',NULL),
(DEFAULT, 'Pantalones corderoy marrón','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',4,3590,'pants-corderoy.png','pantalones corderoy marron'),
(DEFAULT, 'Pantalones corderoy negro','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',4,3590,'corderoy-negro.png','pantalones corderoy negro'),
(DEFAULT, 'Ultra skinny - Indy','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',4,1820,'jean-blueroll.png','jean blue'),
(DEFAULT, 'Gorro Beanie 2000','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',5,990,'beanie.png','gorro beanie 2000'),
(DEFAULT, 'Gorro Beanie Khaos  ','Lorem ipsum\, dolor sit amet consectetur adipisicing elit. Fugit iusto velit expedita eius labore? Esse magni aut unde\, soluta architecto sit voluptatem maxime\, labore excepturi\, enim facilis quas accusantium. Reprehenderit.',5,1390,'beanie-khaos.png',NULL),
(DEFAULT, 'Cinturon Black Season ',' Cinturon negro\, hecho de cuero 100% paraguayo.',5, 560,'imagen - cinturon black season 560.png',NULL),
(DEFAULT, 'Pantalón Kazaa','Pantalón ergonómico negro\, especial para el invierno. Estético a la vista y confortable.',2, 3220,'imagen - pantalon kazaa pant 3220.png','Pantalón Kazaa'),
(DEFAULT, 'Pantalón The Ozz ','Pantalón jean blanco\, estético y bonito. ',4,2112,'imagen - pantalon the ooz gr 2112.png','Pantalón The Ozz'),
(DEFAULT, 'Gorra Oblivion','Gorra de tela\, bien diseñada y cómoda.',5, 780,'imagen - imagen - gorra_oblivion.png','Gorra Oblivion');


-- products_sizes
insert into products_sizes (id, product_id, size_id, stock) values (null, 1, 1, 11);
insert into products_sizes (id, product_id, size_id, stock) values (null, 1, 2, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 1, 3, 16);
insert into products_sizes (id, product_id, size_id, stock) values (null, 1, 4, 12);
insert into products_sizes (id, product_id, size_id, stock) values (null, 1, 5, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 2, 2, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 2, 3, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 2, 4, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 2, 5, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 2, 1, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 3, 3, 11);
insert into products_sizes (id, product_id, size_id, stock) values (null, 3, 4, 9);
insert into products_sizes (id, product_id, size_id, stock) values (null, 3, 5, 2);
insert into products_sizes (id, product_id, size_id, stock) values (null, 3, 1, 16);
insert into products_sizes (id, product_id, size_id, stock) values (null, 3, 2, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 4, 4, 12);
insert into products_sizes (id, product_id, size_id, stock) values (null, 4, 5, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 4, 1, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 4, 2, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 4, 3, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 5, 5, 4);
insert into products_sizes (id, product_id, size_id, stock) values (null, 5, 1, 9);
insert into products_sizes (id, product_id, size_id, stock) values (null, 5, 2, 13);
insert into products_sizes (id, product_id, size_id, stock) values (null, 5, 3, 7);
insert into products_sizes (id, product_id, size_id, stock) values (null, 5, 4, 15);
insert into products_sizes (id, product_id, size_id, stock) values (null, 6, 1, 12);
insert into products_sizes (id, product_id, size_id, stock) values (null, 6, 2, 5);
insert into products_sizes (id, product_id, size_id, stock) values (null, 6, 3, 20);
insert into products_sizes (id, product_id, size_id, stock) values (null, 6, 4, 18);
insert into products_sizes (id, product_id, size_id, stock) values (null, 6, 5, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 7, 2, 3);
insert into products_sizes (id, product_id, size_id, stock) values (null, 7, 3, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 7, 4, 14);
insert into products_sizes (id, product_id, size_id, stock) values (null, 7, 5, 10);
insert into products_sizes (id, product_id, size_id, stock) values (null, 7, 1, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 8, 3, 16);
insert into products_sizes (id, product_id, size_id, stock) values (null, 8, 4, 12);
insert into products_sizes (id, product_id, size_id, stock) values (null, 8, 5, 2);
insert into products_sizes (id, product_id, size_id, stock) values (null, 8, 1, 4);
insert into products_sizes (id, product_id, size_id, stock) values (null, 8, 2, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 9, 4, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 9, 5, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 9, 1, 4);
insert into products_sizes (id, product_id, size_id, stock) values (null, 9, 2, 5);
insert into products_sizes (id, product_id, size_id, stock) values (null, 9, 3, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 10, 5, 14);
insert into products_sizes (id, product_id, size_id, stock) values (null, 10, 1, 10);
insert into products_sizes (id, product_id, size_id, stock) values (null, 10, 2, 16);
insert into products_sizes (id, product_id, size_id, stock) values (null, 10, 3, 4);
insert into products_sizes (id, product_id, size_id, stock) values (null, 10, 4, 17);
insert into products_sizes (id, product_id, size_id, stock) values (null, 11, 1, 3);
insert into products_sizes (id, product_id, size_id, stock) values (null, 11, 2, 11);
insert into products_sizes (id, product_id, size_id, stock) values (null, 11, 3, 7);
insert into products_sizes (id, product_id, size_id, stock) values (null, 11, 4, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 11, 5, 3);
insert into products_sizes (id, product_id, size_id, stock) values (null, 12, 2, 10);
insert into products_sizes (id, product_id, size_id, stock) values (null, 12, 3, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 12, 4, 7);
insert into products_sizes (id, product_id, size_id, stock) values (null, 12, 5, 2);
insert into products_sizes (id, product_id, size_id, stock) values (null, 12, 1, 5);
insert into products_sizes (id, product_id, size_id, stock) values (null, 13, 3, 10);
insert into products_sizes (id, product_id, size_id, stock) values (null, 13, 4, 13);
insert into products_sizes (id, product_id, size_id, stock) values (null, 13, 5, 13);
insert into products_sizes (id, product_id, size_id, stock) values (null, 13, 1, 8);
insert into products_sizes (id, product_id, size_id, stock) values (null, 13, 2, 7);
insert into products_sizes (id, product_id, size_id, stock) values (null, 14, 4, 12);
insert into products_sizes (id, product_id, size_id, stock) values (null, 14, 5, 7);
insert into products_sizes (id, product_id, size_id, stock) values (null, 14, 1, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 14, 2, 6);
insert into products_sizes (id, product_id, size_id, stock) values (null, 14, 3, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 15, 5, 9);
insert into products_sizes (id, product_id, size_id, stock) values (null, 15, 1, 1);
insert into products_sizes (id, product_id, size_id, stock) values (null, 15, 2, 15);
insert into products_sizes (id, product_id, size_id, stock) values (null, 15, 3, 9);
insert into products_sizes (id, product_id, size_id, stock) values (null, 15, 4, 17);
insert into products_sizes (id, product_id, size_id, stock) values (null, 16, 1, 11);
insert into products_sizes (id, product_id, size_id, stock) values (null, 16, 2, 19);
insert into products_sizes (id, product_id, size_id, stock) values (null, 16, 3, 9);
insert into products_sizes (id, product_id, size_id, stock) values (null, 16, 4, 5);
insert into products_sizes (id, product_id, size_id, stock) values (null, 16, 5, 5);