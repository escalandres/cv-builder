# ================================
# create-i18n.ps1
# ================================

$projectRoot = Get-Location

$i18nRoot = Join-Path $projectRoot "src\i18n\locales"

$languages = @(
    "es",
    "en",
    "pt",
    "fr",
    "de",
    "nl"
)

$files = @(
    "App.json",

    "EditorPanel.json",
    "ImportModal.json",
    "JsonPanel.json",
    "PreviewPanel.json",
    "Toast.json",
    "Topbar.json",

    "BottomSection.json",
    "CertificationsSection.json",
    "EducationSection.json",
    "ExperienceSection.json",
    "HeaderSection.json",
    "ProjectsSection.json",
    "SkillsSection.json",
    "SummarySection.json",

    "AcademicCV.json",
    "EuropassCV.json",
    "HarvardCV.json",
    "MinimalistCV.json",
    "ModernCV.json",
    "StandardCV.json",
    "TemplateRenderer.json"
)

if (-not (Test-Path $i18nRoot)) {

    New-Item `
        -Path $i18nRoot `
        -ItemType Directory `
        -Force | Out-Null
}

foreach ($language in $languages) {

    $languagePath = Join-Path $i18nRoot $language

    if (-not (Test-Path $languagePath)) {

        New-Item `
            -Path $languagePath `
            -ItemType Directory `
            -Force | Out-Null
    }

    foreach ($file in $files) {

        $fullPath = Join-Path $languagePath $file

        if (-not (Test-Path $fullPath)) {

            '{}' | Out-File `
                -FilePath $fullPath `
                -Encoding utf8
        }
    }
}

Write-Host ""
Write-Host "✓ i18n structure created successfully" -ForegroundColor Green
Write-Host ""
Write-Host "Location:"
Write-Host $i18nRoot