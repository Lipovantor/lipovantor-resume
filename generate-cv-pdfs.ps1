Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Escape-Html {
  param([Parameter(Mandatory = $true)][string]$Text)

  return [System.Net.WebUtility]::HtmlEncode($Text)
}

function Join-HtmlList {
  param([Parameter(Mandatory = $true)][string[]]$Items)

  $builder = New-Object System.Text.StringBuilder
  foreach ($item in $Items) {
    [void]$builder.AppendLine("<li>$(Escape-Html $item)</li>")
  }
  return $builder.ToString()
}

function Join-ExperienceHtml {
  param([Parameter(Mandatory = $true)][object[]]$Items)

  $builder = New-Object System.Text.StringBuilder
  foreach ($item in $Items) {
    $linksHtml = ""
    if ($item.Links.Count -gt 0) {
      $linksHtml = @"
<ul class="links">
$(Join-HtmlList $item.Links)
</ul>
"@
    }

    [void]$builder.AppendLine(@"
<article class="entry">
  <div class="entry__header">
    <h3>$(Escape-Html $item.Header)</h3>
    <p class="period">$(Escape-Html $item.Period)</p>
  </div>
  <p>$(Escape-Html $item.Description)</p>
  $linksHtml
</article>
"@)
  }

  return $builder.ToString()
}

function Join-EducationHtml {
  param([Parameter(Mandatory = $true)][object[]]$Items)

  $builder = New-Object System.Text.StringBuilder
  foreach ($item in $Items) {
    [void]$builder.AppendLine(@"
<article class="entry entry--compact">
  <div class="entry__header">
    <h3>$(Escape-Html $item.Header)</h3>
  </div>
  <p>$(Escape-Html $item.Description)</p>
</article>
"@)
  }

  return $builder.ToString()
}

function Build-ResumeHtml {
  param([Parameter(Mandatory = $true)][hashtable]$Resume)

  $hardSkillsHtml = Join-HtmlList $Resume.HardSkills
  $softSkillsHtml = Join-HtmlList $Resume.SoftSkills
  $experienceHtml = Join-ExperienceHtml $Resume.Experience
  $educationHtml = Join-EducationHtml $Resume.Education

  return @"
<!DOCTYPE html>
<html lang="$($Resume.Language)">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>$(Escape-Html $Resume.Name) - CV</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: #10231b;
      background: #f4f7f4;
      line-height: 1.45;
      font-size: 12px;
    }
    .page {
      max-width: 900px;
      margin: 0 auto;
      background: #ffffff;
      padding: 34px 38px 40px;
    }
    .hero {
      border-bottom: 2px solid #d6e5d8;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .hero h1 {
      margin: 0 0 4px;
      font-size: 28px;
      line-height: 1.1;
    }
    .hero .role {
      margin: 0 0 10px;
      font-size: 15px;
      font-weight: 700;
      color: #24503d;
    }
    .hero .contacts {
      margin: 0;
      color: #3c5448;
      font-size: 11px;
    }
    section {
      margin-bottom: 22px;
    }
    h2 {
      margin: 0 0 10px;
      font-size: 16px;
      color: #1f4a39;
      border-bottom: 1px solid #dce8df;
      padding-bottom: 6px;
    }
    .columns {
      display: flex;
      gap: 22px;
      align-items: flex-start;
    }
    .column {
      flex: 1 1 0;
      min-width: 0;
    }
    ul {
      margin: 0;
      padding-left: 18px;
    }
    li + li {
      margin-top: 4px;
    }
    .entry {
      margin-bottom: 16px;
    }
    .entry--compact {
      margin-bottom: 12px;
    }
    .entry__header h3 {
      margin: 0 0 3px;
      font-size: 13px;
      line-height: 1.25;
    }
    .entry p {
      margin: 0;
    }
    .period {
      color: #4d6658;
      font-size: 11px;
      margin-bottom: 5px !important;
    }
    .links {
      margin-top: 6px;
    }
    @page {
      size: A4;
      margin: 16mm 12mm;
    }
  </style>
</head>
<body>
  <main class="page">
    <header class="hero">
      <h1>$(Escape-Html $Resume.Name)</h1>
      <p class="role">$(Escape-Html $Resume.Role)</p>
      <p class="contacts">$(Escape-Html $Resume.Contacts)</p>
    </header>

    <section>
      <h2>$(Escape-Html $Resume.AboutTitle)</h2>
      <p>$(Escape-Html $Resume.AboutText)</p>
    </section>

    <section class="columns">
      <div class="column">
        <h2>$(Escape-Html $Resume.HardSkillsTitle)</h2>
        <ul>
          $hardSkillsHtml
        </ul>
      </div>
      <div class="column">
        <h2>$(Escape-Html $Resume.SoftSkillsTitle)</h2>
        <ul>
          $softSkillsHtml
        </ul>
      </div>
    </section>

    <section>
      <h2>$(Escape-Html $Resume.ExperienceTitle)</h2>
      $experienceHtml
    </section>

    <section>
      <h2>$(Escape-Html $Resume.EducationTitle)</h2>
      $educationHtml
    </section>
  </main>
</body>
</html>
"@
}

function Write-Utf8BomFile {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Content
  )

  $encoding = New-Object System.Text.UTF8Encoding($true)
  [System.IO.File]::WriteAllText($Path, $Content, $encoding)
}

function Convert-HtmlToPdf {
  param(
    [Parameter(Mandatory = $true)][string]$BrowserPath,
    [Parameter(Mandatory = $true)][string]$HtmlPath,
    [Parameter(Mandatory = $true)][string]$PdfPath
  )

  if (Test-Path $PdfPath) {
    Remove-Item $PdfPath -Force
  }

  $fileUri = [System.Uri]::new($HtmlPath).AbsoluteUri
  $arguments = @(
    "--headless",
    "--disable-gpu",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=12000",
    "--print-to-pdf=$PdfPath",
    $fileUri
  )

  $process = Start-Process -FilePath $BrowserPath -ArgumentList $arguments -PassThru -Wait -NoNewWindow
  if ($process.ExitCode -ne 0) {
    throw "Edge exited with code $($process.ExitCode) while printing $HtmlPath."
  }

  if (-not (Test-Path $PdfPath)) {
    throw "PDF was not created: $PdfPath"
  }
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$tempDir = Join-Path $root ".cv-pdf-temp"

if (-not (Test-Path $tempDir)) {
  New-Item -ItemType Directory -Path $tempDir | Out-Null
}

$browserPath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $browserPath)) {
  throw "Microsoft Edge was not found at $browserPath"
}

$resumes = @(
  @{
    Language = "en"
    HtmlPath = (Join-Path $tempDir "cv-en.html")
    PdfPath = (Join-Path $root "cv-en.pdf")
    Name = "Sergey Bayraktar"
    Role = "Middle WordPress Developer"
    Contacts = "Email: lipovantor7@gmail.com | Telegram: @Lipovantor | Phone: +38 097 07 805 39"
    AboutTitle = "About"
    AboutText = "WordPress developer focused on custom themes, redesign work, and improving existing websites. I also have web design experience, which helps me create cleaner interfaces and make better visual decisions. I value readable code and stable delivery without unnecessary complexity."
    HardSkillsTitle = "Key Skills"
    HardSkills = @(
      "HTML",
      "CSS (SCSS)",
      "BEM",
      "Flexbox",
      "JavaScript (jQuery)",
      "PHP",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "npm",
      "Gulp",
      "Git",
      "Figma"
    )
    SoftSkillsTitle = "Soft Skills"
    SoftSkills = @(
      "Clear communication",
      "Attention to detail",
      "Responsibility",
      "Structured thinking",
      "Problem solving",
      "Team collaboration",
      "Adaptability",
      "Client focus"
    )
    ExperienceTitle = "Experience"
    Experience = @(
      @{
        Header = "Middle WordPress Developer, GoIT"
        Period = "September 2023 - Present"
        Description = "Developing a custom theme for the main GoITeens website and the GoITeens School website, continuously working on redesigns and improvements, and creating and updating conversion landing pages."
        Links = @(
          "GoITeens - https://goiteens.com/",
          "GoITeens School - https://school.goiteens.com/"
        )
      },
      @{
        Header = "WordPress Developer, EcDev"
        Period = "June 2021 - October 2023"
        Description = "Built WordPress and WooCommerce websites, improved existing functionality, and maintained client projects."
        Links = @(
          "Sammamish Mortgage - https://www.sammamishmortgage.com/",
          "Rise Construction - https://riseconstructiontx.com/",
          "GunfightersINC - https://gunfightersinc.com/",
          "Picup Media - https://picupmedia.com/"
        )
      },
      @{
        Header = "Layout Developer for Angular, DeepInspire"
        Period = "November 2021 - March 2022"
        Description = "Worked on layout and assisted with front-end development for two large trading platforms."
        Links = @(
          "Tokenise Brokerage - https://www.tokenise.io/",
          "Tokenise Exchange - https://tokenisestock.exchange/"
        )
      },
      @{
        Header = "WordPress Developer, Coelix"
        Period = "April 2021 - August 2021"
        Description = "Developed WordPress and WooCommerce websites, added features, and supported launched products."
        Links = @(
          "Gamezo - https://gamezo.gg/"
        )
      },
      @{
        Header = 'Web Developer, Studio "Mart"'
        Period = "October 2020 - April 2021"
        Description = "Created WordPress websites and web applications, integrated layouts into WordPress, and improved active projects."
        Links = @(
          "AFGroup - https://a-f.com.ua/",
          "Mitridat - https://www.mitridat.odessa.ua/",
          "Vedanta - https://vedanta-auto.com.ua/"
        )
      }
    )
    EducationTitle = "Education"
    Education = @(
      @{
        Header = "Odessa National Academy of Food Technologies (2004 - 2009)"
        Description = "Engineer-technologist in winemaking industry."
      },
      @{
        Header = 'Front-End + Angular Basics, "BelHard" (2019, Minsk)'
        Description = "Front-end training focused on layout fundamentals and Angular basics."
      },
      @{
        Header = 'Front-End Pro, "Hillel" (2019, Odesa)'
        Description = "Advanced front-end course with certificate."
      }
    )
  },
  @{
    Language = "fr"
    HtmlPath = (Join-Path $tempDir "cv-fr.html")
    PdfPath = (Join-Path $root "cv-fr.pdf")
    Name = "Sergey Bayraktar"
    Role = "Developpeur WordPress Middle"
    Contacts = "Email : lipovantor7@gmail.com | Telegram : @Lipovantor | Telephone : +38 097 07 805 39"
    AboutTitle = "A propos"
    AboutText = "Developpeur WordPress specialise dans les themes sur mesure, les redesigns et l'amelioration de sites existants. J'ai aussi de l'experience en web design, ce qui m'aide a creer des interfaces plus propres et a prendre de meilleures decisions visuelles. J'accorde de l'importance a un code lisible et a une livraison stable sans complexite inutile."
    HardSkillsTitle = "Competences cles"
    HardSkills = @(
      "HTML",
      "CSS (SCSS)",
      "BEM",
      "Flexbox",
      "JavaScript (jQuery)",
      "PHP",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "npm",
      "Gulp",
      "Git",
      "Figma"
    )
    SoftSkillsTitle = "Soft skills"
    SoftSkills = @(
      "Communication claire",
      "Attention aux details",
      "Sens des responsabilites",
      "Pensee structuree",
      "Resolution de problemes",
      "Travail en equipe",
      "Adaptabilite",
      "Orientation client"
    )
    ExperienceTitle = "Experience"
    Experience = @(
      @{
        Header = "Middle WordPress Developer, GoIT"
        Period = "Septembre 2023 - Aujourd'hui"
        Description = "Developpement d'un theme sur mesure pour le site principal de GoITeens et le site de l'ecole GoITeens School, travail continu sur les redesigns et les ameliorations, creation et mise a jour de landing pages de conversion."
        Links = @(
          "GoITeens - https://goiteens.com/",
          "GoITeens School - https://school.goiteens.com/"
        )
      },
      @{
        Header = "Developpeur WordPress, EcDev"
        Period = "Juin 2021 - Octobre 2023"
        Description = "Creation de sites WordPress et WooCommerce, amelioration de fonctionnalites existantes et maintenance de projets clients."
        Links = @(
          "Sammamish Mortgage - https://www.sammamishmortgage.com/",
          "Rise Construction - https://riseconstructiontx.com/",
          "GunfightersINC - https://gunfightersinc.com/",
          "Picup Media - https://picupmedia.com/"
        )
      },
      @{
        Header = "Developpeur d'integration pour Angular, DeepInspire"
        Period = "Novembre 2021 - Mars 2022"
        Description = "Participation a l'integration et a l'aide au developpement front-end de deux grandes plateformes de trading."
        Links = @(
          "Tokenise Brokerage - https://www.tokenise.io/",
          "Tokenise Exchange - https://tokenisestock.exchange/"
        )
      },
      @{
        Header = "Developpeur WordPress, Coelix"
        Period = "Avril 2021 - Aout 2021"
        Description = "Developpement de sites WordPress et WooCommerce, ajout de fonctionnalites et support des produits deja lances."
        Links = @(
          "Gamezo - https://gamezo.gg/"
        )
      },
      @{
        Header = 'Developpeur web, studio "Mart"'
        Period = "Octobre 2020 - Avril 2021"
        Description = "Creation de sites et d'applications web sous WordPress, integration de maquettes et amelioration de projets actifs."
        Links = @(
          "AFGroup - https://a-f.com.ua/",
          "Mitridat - https://www.mitridat.odessa.ua/",
          "Vedanta - https://vedanta-auto.com.ua/"
        )
      }
    )
    EducationTitle = "Formation"
    Education = @(
      @{
        Header = "Academie nationale des technologies alimentaires d'Odessa (2004 - 2009)"
        Description = "Ingenieur-technologue de l'industrie vinicole."
      },
      @{
        Header = 'Front-End + bases d''Angular, "BelHard" (2019, Minsk)'
        Description = "Formation front-end axee sur les fondamentaux de l'integration et les bases d'Angular."
      },
      @{
        Header = 'Front-End Pro, "Hillel" (2019, Odessa)'
        Description = "Cours avance de front-end avec certificat."
      }
    )
  },
  @{
    Language = "ru"
    HtmlPath = (Join-Path $tempDir "cv-ru.html")
    PdfPath = (Join-Path $root "cv-ru.pdf")
    Name = "Сергей Байрактар"
    Role = "Middle WordPress Developer"
    Contacts = "Email: lipovantor7@gmail.com | Telegram: @Lipovantor | Телефон: +38 097 07 805 39"
    AboutTitle = "Обо мне"
    AboutText = "Я WordPress-разработчик с фокусом на кастомные темы, редизайн и улучшение существующих сайтов. Также у меня есть опыт в веб-дизайне, что помогает делать интерфейсы чище и принимать более точные визуальные решения. Для меня важны читаемый код и стабильная реализация без лишней сложности."
    HardSkillsTitle = "Ключевые навыки"
    HardSkills = @(
      "HTML",
      "CSS (SCSS)",
      "БЭМ",
      "Flexbox",
      "JavaScript (jQuery)",
      "PHP",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "npm",
      "Gulp",
      "Git",
      "Figma"
    )
    SoftSkillsTitle = "Софт скиллы"
    SoftSkills = @(
      "Четкая коммуникация",
      "Внимание к деталям",
      "Ответственность",
      "Структурное мышление",
      "Решение проблем",
      "Командная работа",
      "Адаптивность",
      "Ориентация на результат"
    )
    ExperienceTitle = "Опыт работы"
    Experience = @(
      @{
        Header = "Middle WordPress Developer, GoIT"
        Period = "сентябрь 2023 - настоящее время"
        Description = "Разработка уникальной темы для главного сайта GoITeens и сайта школы GoITeens School, постоянная работа над редизайном и улучшениями, создание и правка конверсионных лендингов."
        Links = @(
          "GoITeens - https://goiteens.com/",
          "GoITeens School - https://school.goiteens.com/"
        )
      },
      @{
        Header = "WordPress-разработчик, EcDev"
        Period = "июнь 2021 - октябрь 2023"
        Description = "Разработка сайтов на WordPress и WooCommerce, доработка существующего функционала и поддержка клиентских проектов."
        Links = @(
          "Sammamish Mortgage - https://www.sammamishmortgage.com/",
          "Rise Construction - https://riseconstructiontx.com/",
          "GunfightersINC - https://gunfightersinc.com/",
          "Picup Media - https://picupmedia.com/"
        )
      },
      @{
        Header = "Верстка под Angular, DeepInspire"
        Period = "ноябрь 2021 - март 2022"
        Description = "Верстка и помощь в разработке двух крупных трейд-платформ на Angular."
        Links = @(
          "Tokenise Brokerage - https://www.tokenise.io/",
          "Tokenise Exchange - https://tokenisestock.exchange/"
        )
      },
      @{
        Header = "WordPress-разработчик, Coelix"
        Period = "апрель 2021 - август 2021"
        Description = "Разработка сайтов на WordPress и WooCommerce, добавление нового функционала и поддержка готовых проектов."
        Links = @(
          "Gamezo - https://gamezo.gg/"
        )
      },
      @{
        Header = 'Веб-разработчик, студия "Mart"'
        Period = "октябрь 2020 - апрель 2021"
        Description = "Разработка сайтов и веб-приложений под WordPress, натяжка верстки и доработка уже работающих проектов."
        Links = @(
          "AFGroup - https://a-f.com.ua/",
          "Mitridat - https://www.mitridat.odessa.ua/",
          "Vedanta - https://vedanta-auto.com.ua/"
        )
      }
    )
    EducationTitle = "Образование"
    Education = @(
      @{
        Header = "ОНАПТ (2004 - 2009)"
        Description = "Инженер-технолог винодельческой промышленности."
      },
      @{
        Header = 'Front-End + основы Angular, "БеллХард" (2019, Минск)'
        Description = "Курс по фронтенду с фокусом на верстку и базовые основы Angular."
      },
      @{
        Header = 'Front-End Pro, "Hillel" (2019, Одесса)'
        Description = "Продвинутый курс по фронтенду с сертификатом."
      }
    )
  }
)

foreach ($resume in $resumes) {
  $html = Build-ResumeHtml -Resume $resume
  Write-Utf8BomFile -Path $resume.HtmlPath -Content $html
  Convert-HtmlToPdf -BrowserPath $browserPath -HtmlPath $resume.HtmlPath -PdfPath $resume.PdfPath
}
