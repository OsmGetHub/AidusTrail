<?php
    namespace App\Controller;

    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;

    final class AppController extends AbstractController{
        public function App() : Response{
            return $this->render('App/index.html.twig');
        }
    }
?>