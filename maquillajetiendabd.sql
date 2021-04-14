CREATE DATABASE `tiendamaquillaje`; USE `tiendamaquillaje`;

CREATE TABLE `categorias` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) DEFAULT NULL,
  `imagen` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB AUTO_INCREMENT = 11;

INSERT INTO
  `categorias`(`id`, `nombre`, `imagen`)
VALUES
  (
    1,
    'categoria 1',
    'https://ep01.epimg.net/elpais/imagenes/2019/08/26/escaparate/1566825042_356700_1566898181_noticia_no'
  ),
  (
    2,
    'categoria 2',
    'https://ep01.epimg.net/elpais/imagenes/2019/08/26/escaparate/1566825042_356700_1566898181_noticia_no'
  ),
  (
    3,
    'categoria 3',
    'https://ep01.epimg.net/elpais/imagenes/2019/08/26/escaparate/1566825042_356700_1566898181_noticia_no'
  ),
  (
    4,
    'Labiales',
    'https://st3.depositphotos.com/1491329/12724/i/950/depositphotos_127244696-stock-photo-makeup-set-pal'
  ),
  (
    5,
    'polvos',
    'https://st3.depositphotos.com/1491329/12724/i/950/depositphotos_127244696-stock-photo-makeup-set-pal'
  ),
  (
    6,
    'Delineadores',
    'https://images-na.ssl-images-amazon.com/images/I/41a-01ihBCL._SY355_.jpg'
  ),
  (
    7,
    'Lapiz de cejas',
    'https://www.hogarmania.com/archivos/201705/maquillaje-cejas-668x400x80xX.jpg'
  ),
  (
    8,
    'PRUEBAS LABIALES 2',
    'https://i.pinimg.com/236x/6d/9a/97/6d9a975c14743e56235f31c57548a3d1--lipstick-swatches-matte-lipstic'
  ),
  (9, 'PRUEBA 1984', 'PRUEBA 1984'),
  (10, 'prueba 1948', 'prueba 1948');

CREATE TABLE `direcciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(250) DEFAULT NULL,
  `id_usuario` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB;

CREATE TABLE `lista_compras` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_producto` INT(11) DEFAULT NULL,
  `id_usuario` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB;

CREATE TABLE `pedidos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` INT(11) DEFAULT NULL,
  `id_direccion` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB;

CREATE TABLE `productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) DEFAULT NULL,
  `precio` DOUBLE(15, 5) DEFAULT NULL,
  `id_categoria` INT(11) DEFAULT NULL,
  `imagen` VARCHAR(255) DEFAULT NULL,
  `descripcion` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB AUTO_INCREMENT = 16;

/*Data for the table `productos` */
INSERT INTO
  `productos`(
    `id`,
    `nombre`,
    `precio`,
    `id_categoria`,
    `imagen`,
    `descripcion`
  )
VALUES
  (
    4,
    'maquillaje 1',
    14000.00000,
    4,
    'https://lbel.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200084962_producto_rouge_lintense_labial_barra_rouge.jpg',
    'este es el maquillaje 1'
  ),
  (
    5,
    'maquillaje 2',
    19000.00000,
    3,
    'https://lbel.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/200084962_producto_rouge_lintense_labial_barra_rouge.jpg',
    'este es el maquillaje 2'
  ),
  (
    6,
    'polvo 1',
    25000.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    7,
    'polvo 2',
    7000.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    8,
    'polvo 3',
    10000.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    9,
    'polvo 4',
    5000.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    10,
    'polvo 5',
    9500.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    11,
    'polvo 5',
    5500.00000,
    5,
    'https://falabella.scene7.com/is/image/FalabellaCO/3792808_1?q=i?wid=800&hei=800&qlt=70',
    'este es el polvo 1'
  ),
  (
    12,
    'Labial mate',
    15000.00000,
    4,
    'https://images.squarespace-cdn.com/content/v1/579202971b631b5dbc741986/1532446685269-7I7FHMW207K98EOWWI21/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIarJWwnumkapRz_nmTYj1d',
    'esto es un labial mate'
  ),
  (
    13,
    'Prueba 123',
    123456.00000,
    2,
    'https://i.pinimg.com/236x/6d/9a/97/6d9a975c14743e56235f31c57548a3d1--lipstick-swatches-matte-lipsticks.jpg',
    'esto es una prueba'
  ),
  (
    14,
    'prueba 5',
    1984.00000,
    3,
    'https://i.pinimg.com/236x/6d/9a/97/6d9a975c14743e56235f31c57548a3d1--lipstick-swatches-matte-lipsticks.jpg',
    'esto es la prueba 5'
  ),
  (
    15,
    'PRODUCTO PRUEBA martes 13',
    12000.00000,
    8,
    'http://cdn.shopify.com/s/files/1/0274/7619/7428/products/labial-liquido-mate-maquillaje-samy-3_1200x630.jpg',
    'esto es una prueba PRODUCTO PRUEBA martes 13'
  );

/*Table structure for table `productos_de_pedidos` */
DROP TABLE IF EXISTS `productos_de_pedidos`;

CREATE TABLE `productos_de_pedidos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_producto` INT(11) DEFAULT NULL,
  `cantidad` INT(11) DEFAULT NULL,
  `id_pedido` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB;

/*Data for the table `productos_de_pedidos` */
/*Table structure for table `recomendaciones` */
DROP TABLE IF EXISTS `recomendaciones`;

CREATE TABLE `recomendaciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(250) DEFAULT NULL,
  `nombre` VARCHAR(100) DEFAULT NULL,
  `correo` VARCHAR(100) DEFAULT NULL,
  `id_tipo_recomendacion` INT(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB AUTO_INCREMENT = 4;

/*Data for the table `recomendaciones` */
INSERT INTO
  `recomendaciones`(
    `id`,
    `descripcion`,
    `nombre`,
    `correo`,
    `id_tipo_recomendacion`
  )
VALUES
  (
    1,
    'ESTO ES UNA PRUEBA DE UN MENSAJE',
    'MARIA PRUEBAS',
    'PRUEBAS@GMAIL.COM',
    1
  ),
  (
    2,
    'ESTO ES UNA PRUEBA DE UN MENSAJE 23',
    'MARIA PRUEBAS',
    'PRUEBAS@GMAIL.COM',
    2
  ),
  (
    3,
    'ESTO ES UNA PRUEBA DE UN MENSAJE 3',
    'MARIA PRUEBAS',
    'PRUEBAS@GMAIL.COM',
    2
  );

/*Table structure for table `tipos_recomendaciones` */
DROP TABLE IF EXISTS `tipos_recomendaciones`;

CREATE TABLE `tipos_recomendaciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB AUTO_INCREMENT = 9;

/*Data for the table `tipos_recomendaciones` */
INSERT INTO
  `tipos_recomendaciones`(`id`, `nombre`)
VALUES
  (1, 'Quejas'),
  (2, 'Mejoras'),
  (3, 'Otros'),
  (4, 'Prueba1'),
  (5, 'Prueba2'),
  (6, 'Prueba3'),
  (7, 'Prueba4'),
  (8, 'Prueba5');

/*Table structure for table `usuarios` */
DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(100) DEFAULT NULL,
  `contrasena` VARCHAR(100) DEFAULT NULL,
  `nombre` VARCHAR(100) DEFAULT NULL,
  `apellidos` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = INNODB AUTO_INCREMENT = 5;

/*Data for the table `usuarios` */
INSERT INTO
  `usuarios`(
    `id`,
    `correo`,
    `contrasena`,
    `nombre`,
    `apellidos`
  )
VALUES
  (
    1,
    'pruebas123@gmail.com',
    '123',
    'pruebas1',
    'pruebas 1'
  ),
  (
    2,
    'pruebas23@gmail.com',
    '123456',
    'NOMBRE 2',
    'APELLIDO 2'
  ),
  (
    4,
    'maria@gmail.com',
    '123',
    'MARIA 5',
    'PRUEBA 5'
  );