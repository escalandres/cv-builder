# Obtener ruta del proyecto
$ProjectPath = Get-Location
$ProjectName = Split-Path $ProjectPath -Leaf
$ZipFile = "$ProjectName.zip"

# Ruta temporal para copiar archivos sin node_modules
$TempPath = Join-Path $env:TEMP "export_$ProjectName"

# Limpiar si ya existe
if (Test-Path $TempPath) {
    Remove-Item $TempPath -Recurse -Force
}

# Copiar proyecto excepto node_modules
Write-Host "Copiando archivos..."
robocopy $ProjectPath $TempPath /E /XD node_modules > $null

# Comprimir
Write-Host "Comprimiendo en $ZipFile..."
if (Test-Path $ZipFile) {
    Remove-Item $ZipFile -Force
}

Compress-Archive -Path "$TempPath\*" -DestinationPath $ZipFile -Force

# Limpiar temporales
Remove-Item $TempPath -Recurse -Force

Write-Host "Listo. Archivo generado: $ZipFile"
