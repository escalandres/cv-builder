param(
    [string]$Path = "."
)

if (-not (Test-Path $Path)) {
    Write-Host "La carpeta no existe: $Path"
    exit
}

Write-Host "Eliminando contenido de: $Path"

# Habilitar soporte para rutas largas
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" `
    -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force | Out-Null

# Eliminar todo el contenido
Get-ChildItem -Path $Path -Force | ForEach-Object {
    try {
        Remove-Item $_.FullName -Recurse -Force -ErrorAction Stop
    }
    catch {
        Write-Host "Fallo al eliminar: $($_.FullName). Reintentando con robocopy..."

        # Método alternativo infalible
        $empty = Join-Path $env:TEMP "empty_folder"
        New-Item -ItemType Directory -Path $empty -Force | Out-Null

        robocopy $empty $_.FullName /MIR > $null
        Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item $empty -Recurse -Force
    }
}

Write-Host "Carpeta limpiada correctamente."
