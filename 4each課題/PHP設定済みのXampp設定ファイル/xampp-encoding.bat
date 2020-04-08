@echo off
echo -----------------------------
echo MYSQLエンコード変更ツール
echo -----------------------------
echo 
echo MY.INIのバックアップファイルを作成
copy C:\xampp\mysql\bin\my.ini C:\xampp\mysql\bin\my.ini.backup
echo MY.INIのオリジナルファイルを削除
del C:\xampp\mysql\bin\my.ini
echo MY.INIのオリジナルファイルを変更
copy .\my.ini C:\xampp\mysql\bin\my.ini

echo PHP.INIのバックアップファイルを作成
copy C:\xampp\php\php.ini C:\xampp\php\php.ini.backup
echo PHP.INIのオリジナルファイルを削除
del C:\xampp\php\php.ini
echo PHP.INIのオリジナルファイルを変更
copy .\php.ini C:\xampp\php\php.ini

echo config.inc.phpのバックアップファイルを作成
copy C:\xampp\phpMyAdmin\config.inc.php C:\xampp\phpMyAdmin\config.inc.php.backup
echo config.inc.phpのオリジナルファイルを削除
del C:\xampp\phpMyAdmin\config.inc.php
echo config.inc.phpのオリジナルファイルを変更
copy .\config.inc.php C:\xampp\phpMyAdmin\config.inc.php
echo -----------------------------
echo 完了
pause