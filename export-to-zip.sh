#!/bin/bash

PROJECT_NAME=$(basename "$PWD")
ZIP_FILE="${PROJECT_NAME}.zip"

powershell.exe -NoProfile -Command "
Add-Type -AssemblyName System.IO.Compression.FileSystem;
function ZipFolder(\$source, \$destination) {
    if (Test-Path \$destination) { Remove-Item \$destination }
    [System.IO.Compression.ZipFile]::CreateFromDirectory(\$source, \$destination);
}
ZipFolder '.' '${ZIP_FILE}';
"

# Eliminar node_modules del zip
zip -d "$ZIP_FILE" "node_modules/*" 2>/dev/null
echo "Archivo ZIP creado: $ZIP_FILE"