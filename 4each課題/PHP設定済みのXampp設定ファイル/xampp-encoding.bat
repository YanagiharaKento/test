@echo off
echo -----------------------------
echo MYSQL�G���R�[�h�ύX�c�[��
echo -----------------------------
echo 
echo MY.INI�̃o�b�N�A�b�v�t�@�C�����쐬
copy C:\xampp\mysql\bin\my.ini C:\xampp\mysql\bin\my.ini.backup
echo MY.INI�̃I���W�i���t�@�C�����폜
del C:\xampp\mysql\bin\my.ini
echo MY.INI�̃I���W�i���t�@�C����ύX
copy .\my.ini C:\xampp\mysql\bin\my.ini

echo PHP.INI�̃o�b�N�A�b�v�t�@�C�����쐬
copy C:\xampp\php\php.ini C:\xampp\php\php.ini.backup
echo PHP.INI�̃I���W�i���t�@�C�����폜
del C:\xampp\php\php.ini
echo PHP.INI�̃I���W�i���t�@�C����ύX
copy .\php.ini C:\xampp\php\php.ini

echo config.inc.php�̃o�b�N�A�b�v�t�@�C�����쐬
copy C:\xampp\phpMyAdmin\config.inc.php C:\xampp\phpMyAdmin\config.inc.php.backup
echo config.inc.php�̃I���W�i���t�@�C�����폜
del C:\xampp\phpMyAdmin\config.inc.php
echo config.inc.php�̃I���W�i���t�@�C����ύX
copy .\config.inc.php C:\xampp\phpMyAdmin\config.inc.php
echo -----------------------------
echo ����
pause