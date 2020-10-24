<?php
 
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
date_default_timezone_set('America/Sao_Paulo');
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

if($nome != '' && $email != '' && $mensagem != ''){
  $verificaEmail = true;
}else{
  $verificaEmail = false;
}

  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #000;
  }
  a{
  color: #000;
  text-decoration: none;
  }
  a:hover {
  color: #000;
  text-decoration: none;
  }
  </style>
  
    <html>
        <body style='margin: 0px; padding: 0px; font-family: Lato, sans-serif;'>
            Nome: $nome<br><br>
            Email: $email<br><br>
            Mensagem: $mensagem
        </body>
    </html>
  ";
  
  $emailenviar = "williamliberos@gmail.com";
  $destino = $emailenviar;
  $assunto = "Contato pelo site!";
 
 
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= 'From:' . $nome . " " . $email;
   
  if($verificaEmail){
    $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  }

  if($enviaremail && $verificaEmail){
    echo "true";
  } else {
    echo "false";
  }
?>