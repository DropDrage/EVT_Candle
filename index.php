<?php
require_once 'vendor/autoload.php';

$loaderBase = new Twig_Loader_String();
$loaderComponent = new Twig_Loader_String();
$twigBase = new Twig_Environment($loaderBase);
$twigComponent = new Twig_Environment($loaderComponent);

try {
    // место где наши компоненты/шаблоны
    $loaderBase = new Twig_Loader_Filesystem('base');
    $loaderComponent = new Twig_Loader_Filesystem('base/components');

    // включаем твиг
    $twigBase = new Twig_Environment($loaderBase);
    $twigComponent = new Twig_Environment($loaderComponent);


    $header = $twigComponent->loadTemplate('header.html');
    $footer = $twigComponent->loadTemplate('footer.html');


    // тут мы можем передать значения в компоненту
    echo $header->render(array(
        'count' => '3',
    ));

    echo $template->render(array(
        'title' => $title,
    ));

    echo $footer->render(array(
        'count' => '3',
    ));

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}
?>

