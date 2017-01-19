<?php
header('X-XSS-Protection: 0');
if (isset($_POST['correoe'])) {
    echo $_POST['correoe'];
}