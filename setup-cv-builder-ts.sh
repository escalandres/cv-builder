#!/usr/bin/env bash
# =============================================================
#  CV Builder – Scaffold de estructura React + Vite
#  Ejecutar desde la carpeta donde quieres crear el proyecto:
#  $ bash setup-cv-builder.sh
# =============================================================

PROJECT="cv-builder"
SRC="$PROJECT/src"

echo ""
echo "  Creando estructura: $PROJECT"
echo ""

# ── Carpetas ──────────────────────────────────────────────────
folders=(
    "$PROJECT"
    "$SRC/components"
    "$SRC/editor"
    "$SRC/ui"
    "$SRC/templates"
    "$SRC/hooks"
    "$SRC/data"
    "$SRC/styles"
)

for folder in "${folders[@]}"; do
    mkdir -p "$folder"
    echo "  [+] $folder/"
done

# ── Archivos ──────────────────────────────────────────────────
files=(
    # Raíz
    "$PROJECT/index.html"
    "$PROJECT/vite.config.ts"
    "$PROJECT/favicon.svg"
    "$PROJECT/.gitignore"

    # App entry
    "$SRC/App.tsx"

    # components/ – layout de la aplicación
    "$SRC/components/Topbar.tsx"
    "$SRC/components/EditorPanel.tsx"
    "$SRC/components/PreviewPanel.tsx"
    "$SRC/components/JsonPanel.tsx"
    "$SRC/components/ImportModal.tsx"
    "$SRC/components/Toast.tsx"

    # editor/ – secciones del formulario
    "$SRC/editor/HeaderSection.tsx"
    "$SRC/editor/SummarySection.tsx"
    "$SRC/editor/SkillsSection.tsx"
    "$SRC/editor/ExperienceSection.tsx"
    "$SRC/editor/ProjectsSection.tsx"
    "$SRC/editor/EducationSection.tsx"
    "$SRC/editor/CertificationsSection.tsx"
    "$SRC/editor/BottomSection.tsx"

    # ui/ – primitivos reutilizables
    "$SRC/ui/Field.tsx"
    "$SRC/ui/SectionCard.tsx"
    "$SRC/ui/BulletEditor.tsx"
    "$SRC/ui/Button.tsx"

    # templates/
    "$SRC/templates/TemplateRenderer.tsx"
    "$SRC/templates/StandardCV.tsx"
    "$SRC/templates/HarvardCV.tsx"
    "$SRC/templates/EuropassCV.tsx"

    # hooks/
    "$SRC/hooks/useCv.ts"
    "$SRC/hooks/useToast.ts"
    "$SRC/hooks/useLocalStorage.ts"

    # data/
    "$SRC/data/cv.model.ts"
    "$SRC/data/constants.ts"

    # styles/
    "$SRC/styles/globals.css"
    "$SRC/styles/editor.css"
    "$SRC/styles/standard.css"
    "$SRC/styles/harvard.css"
    "$SRC/styles/europass.css"
    "$SRC/styles/print.css"
)

for file in "${files[@]}"; do
    touch "$file"
    echo "  [+] $file"
done

# ── Resumen ───────────────────────────────────────────────────
echo ""
echo "  Estructura creada exitosamente."
echo "  ${#folders[@]} carpetas  |  ${#files[@]} archivos"
echo ""
echo "  Próximos pasos:"
echo "    cd $PROJECT"
echo "    npm create vite@latest . -- --template react-ts"
echo "    npm install"
echo "    npm run dev"
echo ""
