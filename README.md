# LSC Theme for OJS 3.5

Child theme of the OJS **Default Theme**, visually inspired by [Literary Studies Conference / lscusd.id](https://lscusd.id/).

## Cara CDN (tanpa upload plugin / tanpa SSH)

Mirip pemanggilan Font Awesome / jsDelivr — ini **mengubah tampilan Default Theme** lewat CSS/JS remote (bukan instal tema penuh).

1. Install & aktifkan plugin **Custom Header** (Plugin Gallery).
2. Buka Settings plugin itu, paste:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triandi30/ojs-lsc-theme@main/cdn/lsc-ojs.css">
<script defer src="https://cdn.jsdelivr.net/gh/triandi30/ojs-lsc-theme@main/cdn/lsc-ojs.js"></script>
```

3. Save, lalu hard-refresh halaman jurnal.

File: [`cdn/lsc-ojs.css`](cdn/lsc-ojs.css), [`cdn/lsc-ojs.js`](cdn/lsc-ojs.js), [`cdn/snippet.html`](cdn/snippet.html).

**Batasan:** tidak bisa ganti struktur template Smarty (hero custom, dsb.) — hanya styling + sedikit JS.

## Look & feel

| Element | Treatment |
| --- | --- |
| Header | White, slim; logo left, uppercase green nav |
| Palette | Forest green `#145F03`, link green `#119300`, bronze `#993300` |
| Typography | **Raleway** (headings / nav) + **Open Sans** (body) |
| Homepage | Centered hero, banner image, dotted section dividers |
| Footer | Dark bar (`#111`) |

## Requirements

- OJS **3.5.x**
- Default Theme enabled (parent)

## Install (tanpa akses server / SSH)

OJS **tidak** memuat tema langsung dari URL GitHub. Yang bisa dilakukan: simpan kode di GitHub, unduh arsip, lalu upload lewat panel admin.

### A. Upload lewat admin OJS (paling umum)

Syarat: akun **Journal Manager** / **Site Admin**.

1. Unduh release `.tar.gz` dari GitHub (atau pakai file `lscTheme.tar.gz` yang disediakan).
2. Masuk OJS → **Settings → Website → Plugins**.
3. Klik **Upload A New Plugin**.
4. Pilih file `lscTheme.tar.gz` → Upload.
5. Aktifkan tema: **Settings → Website → Appearance → Theme** → **LSC Theme** → Save.
6. **Administration → Clear Template Cache** (dan Clear Data Caches bila ada).

> Arsip harus berisi folder `lscTheme/` di root (bukan isi file langsung). Format wajib `.tar.gz`, bukan `.zip`.

### B. Akses server (jika ada SSH)

```bash
cp -r lscTheme /path/to/ojs/plugins/themes/lscTheme
chown -R www-data:www-data /path/to/ojs/plugins/themes/lscTheme
```

Folder name **must** be `lscTheme`.

## Recommended setup (to match lscusd.id)

1. Upload a **logo** (circular works well) under Appearance → Setup.
2. Upload a wide **homepage image** (banner).
3. Enable **Show journal summary on homepage** in the theme options.
4. Write journal description / additional homepage HTML for About-style content.
5. Optionally set **Accent colour** (default bronze `#993300`).

## Customisation

| File | Purpose |
| --- | --- |
| `styles/colors.less` | Colour & font tokens |
| `styles/lsc.less` | Layout, header, homepage, footer |
| `templates/frontend/pages/indexJournal.tpl` | Homepage structure |
| `js/main.js` | Light scroll-reveal |

Because this is a **child theme**, OJS Default Theme updates still apply; your overrides stay in this plugin.

## License

GNU GPL v3 (same as OJS / PKP themes).
