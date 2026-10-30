# Starbucks — Wrapped in Joy

Website statis bertema kampanye holiday dengan inspirasi tampilan Starbucks. Project ini dibuat untuk tugas mini project menggunakan HTML, CSS, dan JavaScript.

> **Catatan:** Ini adalah konsep website untuk pembelajaran, bukan website resmi Starbucks. Nama dan merek dagang tetap milik pemiliknya.

## Deskripsi

**Wrapped in Joy** mengangkat suasana liburan melalui warna merah, hijau, dan krem. Website berisi pengenalan kampanye, profil singkat, contoh koleksi produk holiday, serta informasi kontak.

## Section Website

| Section | Isi |
|---|---|
| Home / Hero | Identitas kampanye, deskripsi, dan tombol menuju koleksi |
| About / Profile | Cerita dan tujuan kampanye |
| Main Content | Kartu contoh minuman dan merchandise holiday |
| Contact & Footer | Informasi kontak, media sosial, dan informasi pendukung |

## Fitur

- Navigasi antar-section.
- Menu navigasi mobile.
- Kartu produk dengan tombol detail.
- Dialog / pop-up untuk deskripsi produk.
- Tampilan responsif untuk desktop dan smartphone.
- Website statis tanpa backend, database, autentikasi, atau CRUD.

## Teknologi

- **HTML5** — struktur dan konten halaman.
- **CSS3** — layout, warna, tipografi, dan responsive design.
- **Vanilla JavaScript** — navigasi mobile dan dialog detail produk.

## Struktur Folder

```text
starbucks-wrapped-in-joy/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
```

## Cara Menjalankan

1. Download dan ekstrak ZIP project.
2. Buka folder project di Visual Studio Code.
3. Buka `index.html` di browser, atau gunakan ekstensi Live Server.

## Upload ke GitHub

Buat repository bernama `starbucks-wrapped-in-joy`, lalu upload seluruh isi folder. Alternatif melalui terminal:

```bash
git init
git add .
git commit -m "Initial website project"
git branch -M main
git remote add origin https://github.com/USERNAME/starbucks-wrapped-in-joy.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kelompok.

## Kolaborasi GitHub

Buat Issues untuk membagi pekerjaan. Setiap anggota mengerjakan task melalui branch masing-masing, melakukan commit, push, lalu membuat Pull Request menuju `main` untuk direview.

Contoh nama branch:

- `feature/navbar`
- `feature/about`
- `feature/products`
- `feature/contact-footer`
- `fix/responsive`

Contoh perintah:

```bash
git checkout -b feature/navbar
git add .
git commit -m "Add responsive navigation"
git push origin feature/navbar
```

## GitHub Pages

1. Buka repository → **Settings** → **Pages**.
2. Pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`.
4. Klik **Save** dan tunggu URL publikasi dari GitHub.

## Contoh Pembagian Tugas

Sesuaikan dengan jumlah anggota kelompok:

- Anggota 1: struktur HTML dan navigasi.
- Anggota 2: section About dan konten kampanye.
- Anggota 3: katalog produk dan styling card.
- Anggota 4: JavaScript, pengujian responsif, dan dokumentasi.

## Pengembangan Selanjutnya

- Mengganti ilustrasi CSS dengan foto produk yang memiliki izin penggunaan.
- Menambahkan halaman detail produk jika dibutuhkan.
- Menguji aksesibilitas, kontras warna, dan tampilan di berbagai ukuran layar.
