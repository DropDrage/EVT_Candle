<?php
require_once 'vendor/autoload.php';

$loader = new Twig_Loader_String();
$twig = new Twig_Environment($loader);

try {
    // указывае где хранятся шаблоны
    $loader = new Twig_Loader_Filesystem('base');

    // инициализируем Twig
    $twig = new Twig_Environment($loader);

    // подгружаем шаблон
    $template = $twig->loadTemplate('main.html');
    $title = 'Home';

    // передаём в шаблон переменные и значения
    // выводим сформированное содержание

    include 'index.php';


} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}
?>


