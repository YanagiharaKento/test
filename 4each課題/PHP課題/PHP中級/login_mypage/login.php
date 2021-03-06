<?php
session_start();
if(isset($_SESSION['id'])){
    header("Location:mypage.php");
}
?>

<!DOCTYPE HTML>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>マイページ登録</title>
        <link rel="stylesheet" type="text/css" href="login.css">
    </head>
    <body>
        <header>
            <img src="4eachblog_logo.jpg" class="logo">
            <div class="login"><a href="login.php">ログイン</a></div>
        </header>
        
        <main>
            <div class="form_contents">
                <form action="mypage.php" method="post">     
                    <div class="mail">
                        <label>メールアドレス</label><br>
                        <input type="text" class="formbox" size="40" value="<?php
                        if(isset($_COOKIE['mail'])){
                            echo $_COOKIE['mail']; 
                        } ?>" name="mail">
                    </div><br>
                    <div class="password">
                        <label>パスワード</label><br>
                        <input type="password" class="formbox" size="40" value="<?php 
                        if(isset($_COOKIE['password'])){
                            echo $_COOKIE['password'];
                        } ?>" name="password">
                    </div><br>
                    <div class="loginbutton">
                        <input type="submit" class="submit_button" size="35" value="ログイン">
                    </div>      
                </form>
            </div>
        </main>
        
        <footer>
            ⓒ 2018 InterNous.inc. All rights reserved
        </footer>
    </body>
</html>