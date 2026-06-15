# Pancasila sebagai Nilai Moral dan Etika di Era Modern

Website edukasi interaktif yang mempromosikan nilai-nilai Pancasila sebagai pedoman moral dan etika di era modern dan digital. Website ini dibuat sebagai penyelesaian tugas akhir Mata Kuliah Pancasila.

## 📋 Deskripsi Proyek

Website ini menyajikan materi pembelajaran tentang Pancasila dengan pendekatan modern yang relevan dengan perkembangan teknologi dan era digital. Tujuannya adalah untuk meningkatkan pemahaman generasi muda tentang nilai-nilai Pancasila dan penerapannya dalam kehidupan sehari-hari, khususnya dalam konteks digital.

## 🎯 Tujuan

### Tujuan Umum
Memberikan pemahaman kepada masyarakat, khususnya generasi muda, tentang pentingnya Pancasila sebagai pedoman nilai moral dan etika dalam menghadapi perkembangan era modern dan digital.

### Tujuan Khusus
- Meningkatkan pemahaman tentang nilai-nilai Pancasila
- Memahami makna setiap sila dan penerapannya dalam kehidupan sehari-hari
- Menanamkan sikap moral dan etika yang baik
- Mengajak generasi muda menggunakan teknologi secara bijak
- Memberikan edukasi tentang etika bermedia sosial dan penggunaan internet yang positif
- Menunjukkan bahwa Pancasila tetap relevan di era modern

## ✨ Fitur

### 1. Halaman Beranda
- Penjelasan tentang Pancasila dan 5 sila
- Tujuan pembelajaran
- Implementasi Pancasila di era modern
- Hero banner dengan visual menarik

### 2. Fenomena Sosial
- Analisis fenomena sosial relevan dengan Pancasila:
  - Cyberbullying
  - Hoaks dan Misinformasi
  - Intoleransi Beragama
  - Individualisme Ekstrem
  - Korupsi Digital
- Penjelasan kasus nyata
- Dampak sosial dari setiap fenomena

### 3. Nilai Moral dan Etika
- Analisis nilai moral dan etika berdasarkan kasus nyata
- Implementasi nilai Pancasila dalam kehidupan sehari-hari
- Hubungan antara kasus nyata dengan sila-sila Pancasila
- Sikap yang seharusnya dimiliki

### 4. Media Interaktif
- **Video Edukasi**: Pilihan video pembelajaran tentang Pancasila
- **Kuis Interaktif**: 50 soal pilihan ganda tentang Pancasila dengan:
  - Pertanyaan untuk setiap sila (10 soal per sila)
  - Skor instan
  - Penjelasan jawaban
  - Feedback langsung
- **Infografis Visual**: Visualisasi setiap sila dengan cara yang mudah dipahami
- **Sistem Komentar**: Pengunjung dapat memberikan komentar dan masukan

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5**: Struktur halaman web
- **CSS3**: Styling dan desain responsif
- **JavaScript (ES6+)**: Logika interaktif dan fungsionalitas

### Backend & Database
- **Firebase Firestore**: Database untuk menyimpan:
  - Komentar pengunjung
  - Soal kuis (50 pertanyaan)
  - Hasil kuis
  - Data video edukasi

### External Libraries
- **Firebase SDK (v10.7.1)**: Untuk integrasi database
- **Google Fonts**: Font untuk tampilan yang lebih baik

## 📁 Struktur File

```
pancasila/
├── index.html              # Halaman beranda
├── fenomena.html           # Halaman fenomena sosial
├── nilai.html              # Halaman nilai moral dan etika
├── media.html              # Halaman media interaktif
├── style.css               # Stylesheet utama
├── index.js                # JavaScript dengan Firebase integration
├── README.md               # Dokumentasi proyek
├── .gitignore              # File untuk Git ignore
└── ChatGPT Image*.png      # Gambar untuk hero banner
```

## 🚀 Cara Instalasi

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk Firebase dan gambar eksternal)
- Text editor (VS Code, Sublime Text, dll)

### Langkah-langkah

1. **Clone atau download repository**
   ```bash
   git clone [repository-url]
   cd pancasila
   ```

2. **Konfigurasi Firebase**
   
   Buka file `index.js` dan ganti konfigurasi Firebase dengan konfigurasi project Firebase Anda:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.firebasestorage.app",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Setup Firebase Firestore**
   - Buat project di [Firebase Console](https://console.firebase.google.com/)
   - Aktifkan Firestore Database
   - Atur rules database sesuai kebutuhan
   - Copy konfigurasi ke file `index.js`

4. **Jalankan website**
   - Buka file `index.html` langsung di browser
   - Atau gunakan live server di VS Code
   - Atau deploy ke hosting (GitHub Pages, Netlify, Vercel, dll)

## 📊 Database Structure

### Collection: `komentar`
```javascript
{
  nama: string,
  email: string (optional),
  komentar: string,
  tanggal: timestamp
}
```

### Collection: `quiz`
```javascript
{
  questions: [
    {
      id: string,
      sila: number (1-5),
      nomor: number,
      pertanyaan: string,
      pilihan: array of strings,
      jawaban_benar: number,
      penjelasan: string
    }
  ],
  createdAt: timestamp
}
```

### Collection: `quiz_results`
```javascript
{
  score: number,
  total: number,
  percentage: number,
  tanggal: timestamp,
  jawaban: array
}
```

### Collection: `videos`
```javascript
{
  id: string,
  judul: string,
  url: string,
  deskripsi: string
}
```

## 🎨 Desain & Styling

### Color Scheme
- **Primary**: #CE1126 (Merah Indonesia)
- **Secondary**: #E94B5F (Merah muda)
- **Background**: Putih dan abu-abu
- **Text**: Hitam dan putih

### Responsive Design
- Mobile-first approach
- Breakpoint: 768px
- Optimized untuk desktop, tablet, dan mobile

## 📝 Fitur Kuis

### Struktur Kuis
- **Total Soal**: 50 pertanyaan
- **Distribusi**: 10 soal untuk setiap sila
- **Format**: Pilihan ganda (4 opsi)
- **Scoring**: Otomatis dengan feedback langsung
- **Penjelasan**: Setiap jawaban dilengkapi penjelasan

### Kategori Soal
1. **Sila 1**: Ketuhanan Yang Maha Esa (10 soal)
2. **Sila 2**: Kemanusiaan yang Adil dan Beradab (10 soal)
3. **Sila 3**: Persatuan Indonesia (10 soal)
4. **Sila 4**: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan (10 soal)
5. **Sila 5**: Keadilan Sosial bagi Seluruh Rakyat Indonesia (10 soal)

## 🔧 Fungsi JavaScript Utama

### Firebase Functions
- `addComment(commentData)`: Menambah komentar ke database
- `getComments()`: Mengambil semua komentar dari database
- `initializeQuizQuestions()`: Inisialisasi soal kuis ke database
- `updateQuizQuestions()`: Update soal kuis di database
- `getQuizQuestions()`: Mengambil soal kuis dari database
- `saveQuizResult(result)`: Menyimpan hasil kuis
- `getVideos()`: Mengambil data video dari database

### UI Functions
- `loadComments()`: Memuat dan menampilkan komentar
- `loadVideos()`: Memuat dan menampilkan video
- `displayQuestion()`: Menampilkan pertanyaan kuis
- `selectAnswer(index)`: Menangani jawaban pengguna
- `showResults()`: Menampilkan hasil kuis

## 🌐 Deployment

### GitHub Pages
1. Push code ke GitHub repository
2. Go to Settings > Pages
3. Select branch (main/master)
4. Website akan live di `https://username.github.io/repository-name`

### Netlify
1. Drag and drop folder ke Netlify
2. Atau connect dengan Git repository
3. Website akan live secara otomatis

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow instructions

## 📄 Lisensi

© 2026 J Marcellino Chrisland Siahaan. All rights reserved.

## 👤 Author

**J Marcellino Chrisland Siahaan**
- Instagram: [@jmarcellinoo](https://www.instagram.com/jmarcellinoo)
- GitHub: [jmarcellinochrisland](https://github.com/jmarcellinochrisland)

## 🤝 Kontribusi

Project ini dibuat untuk tugas akhir Mata Kuliah Pancasila. Kontribusi, saran, dan masukan sangat dihargai.

## 📞 Kontak

- Email: nothing@gmail.com
- Telepon: 08123456789

## 🙏 Acknowledgments

- Mata Kuliah Pancasila
- Firebase untuk layanan database
- Sumber-sumber referensi tentang Pancasila

---

**Note**: Pastikan untuk mengganti konfigurasi Firebase dengan konfigurasi project Anda sendiri sebelum menggunakan website ini.
