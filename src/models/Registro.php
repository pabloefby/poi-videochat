<?php

$servername = "localhost"; // Servidor MySQL (cambia si es necesario)
$username = "root"; // Usuario de MySQL
$password = "chilaquil"; // Contraseña de MySQL (déjala vacía si no tiene)
$dbname = "db_poi"; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $usuario = $_POST["username"];
    $nombre = $_POST["nomComp"];
    $correo = $_POST["correo"];
    $contrasena = password_hash($_POST["password"], PASSWORD_DEFAULT); // Encriptar la contraseña

    // Preparar la consulta SQL para evitar inyecciones SQL
    $stmt = $conn->prepare("INSERT INTO usuarios (usuario, nombre, email, contraseña) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $usuario, $nombre, $correo, $contrasena);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
