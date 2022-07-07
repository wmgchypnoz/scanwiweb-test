<?php

$sku = $_POST["sku"];
$name = $_POST["name"];
$price = $_POST["price"];
$productType = $_POST["productType"];
$size = $_POST["size"];
$height = $_POST["height"];
$width = $_POST["width"];
$length = $_POST["length"];
$weight = $_POST["weight"];

$host = "localhost";
$dbname = "product_list";
$username = "root";
$password = "";

$conn = mysqli_connect(hostname: $host,
                       username: $username,
                       password: $password,
                       database: $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO product (sku, name, price, productType, size, height, width, length, weight) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) { 
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sssssssss",
                       $sku,
                       $name,
                       $price,
                       $productType,
                       $size,
                       $height,
                       $width,
                       $length,
                       $weight);
                       
mysqli_stmt_execute($stmt);

echo "Record saved.";