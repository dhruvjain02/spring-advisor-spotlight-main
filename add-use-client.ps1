$files = Get-ChildItem -Path "src\components\ui" -Filter "*.tsx" -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "'use client'") {
        $newContent = "'use client'`n`n" + $content
        Set-Content -Path $file.FullName -Value $newContent
    }
}
