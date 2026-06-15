// Import Firebase from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqm6eSPgYypaowLyF5SY8gLlb9FPs_EBA",
  authDomain: "pancasila-e3f03.firebaseapp.com",
  projectId: "pancasila-e3f03",
  storageBucket: "pancasila-e3f03.firebasestorage.app",
  messagingSenderId: "25371943924",
  appId: "1:25371943924:web:c3d020d1753a38877e4fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase initialized successfully");

// Add comment to database
export async function addComment(commentData) {
  try {
    const docRef = await addDoc(collection(db, "komentar"), {
      ...commentData,
      tanggal: Timestamp.now()
    });
    console.log("Comment added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding comment: ", error);
    throw error;
  }
}

// Get comments from database
export async function getComments() {
  try {
    const q = query(collection(db, "komentar"), orderBy("tanggal", "desc"));
    const querySnapshot = await getDocs(q);
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return comments;
  } catch (error) {
    console.error("Error getting comments: ", error);
    throw error;
  }
}

// Initialize quiz questions in Firebase
export async function initializeQuizQuestions() {
  try {
    const quizRef = collection(db, "quiz");
    const querySnapshot = await getDocs(quizRef);
    
    // Only add if quiz collection is empty
    if (querySnapshot.empty) {
      const quizData = {
        questions: [
          // Sila 1: Ketuhanan Yang Maha Esa (10 soal)
          {
            id: "q1",
            sila: 1,
            nomor: 1,
            pertanyaan: "Apa makna dari sila pertama Pancasila 'Ketuhanan Yang Maha Esa'?",
            pilihan: [
              "Bangsa Indonesia percaya adanya Tuhan Yang Maha Esa",
              "Indonesia adalah negara agama tertentu",
              "Semua wajib beragama yang sama",
              "Negara mengatur semua kegiatan keagamaan"
            ],
            jawaban_benar: 0,
            penjelasan: "Sila pertama berarti bangsa Indonesia percaya adanya Tuhan Yang Maha Esa, namun negara tidak memaksakan agama tertentu kepada warganya."
          },
          {
            id: "q2",
            sila: 1,
            nomor: 2,
            pertanyaan: "Bagaimana sila pertama menjamin kebebasan beragama?",
            pilihan: [
              "Dengan melarang semua agama kecuali satu",
              "Dengan memberikan kebebasan untuk memeluk dan menjalankan agama masing-masing",
              "Dengan mengatur semua ritual keagamaan",
              "Dengan mewajibkan semua warga beragama"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila pertama menjamin kebebasan beragama dengan memberikan hak kepada setiap warga untuk memeluk dan menjalankan agamanya masing-masing."
          },
          {
            id: "q3",
            sila: 1,
            nomor: 3,
            pertanyaan: "Apa yang dimaksud dengan toleransi dalam sila pertama?",
            pilihan: [
              "Mengabaikan agama orang lain",
              "Menghormati dan menghargai perbedaan agama",
              "Memaksa orang lain untuk berpindah agama",
              "Mengkritik agama orang lain"
            ],
            jawaban_benar: 1,
            penjelasan: "Toleransi dalam sila pertama berarti menghormati dan menghargai perbedaan agama yang dianut oleh setiap warga negara."
          },
          {
            id: "q4",
            sila: 1,
            nomor: 4,
            pertanyaan: "Bagaimana hubungan antara agama dan negara menurut sila pertama?",
            pilihan: [
              "Negara adalah agama",
              "Agama dan negara terpisah namun saling menghormati",
              "Agama mengatur negara",
              "Negara mengatur agama"
            ],
            jawaban_benar: 1,
            penjelasan: "Menurut sila pertama, agama dan negara terpisah namun saling menghormati. Negara menjamin kebebasan beragama tanpa campur tangan dalam urusan internal agama."
          },
          {
            id: "q5",
            sila: 1,
            nomor: 5,
            pertanyaan: "Apa contoh pengamalan sila pertama di sekolah?",
            pilihan: [
              "Memaksa semua siswa beragama sama",
              "Mengadakan kegiatan keagamaan sesuai agama masing-masing",
              "Melarang kegiatan keagamaan di sekolah",
              "Menghina agama orang lain"
            ],
            jawaban_benar: 1,
            penjelasan: "Contoh pengamalan sila pertama di sekolah adalah mengadakan kegiatan keagamaan yang sesuai dengan agama masing-masing siswa dengan saling menghormati."
          },
          {
            id: "q6",
            sila: 1,
            nomor: 6,
            pertanyaan: "Mengapa sila pertama ditempatkan sebagai sila pertama?",
            pilihan: [
              "Karena itu kebetulan",
              "Karena itu adalah dasar dan fondasi bagi sila-sila lainnya",
              "Karena itu yang paling pendek",
              "Karena itu yang paling mudah diingat"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila pertama ditempatkan sebagai sila pertama karena merupakan dasar dan fondasi bagi sila-sila lainnya dalam Pancasila."
          },
          {
            id: "q7",
            sila: 1,
            nomor: 7,
            pertanyaan: "Apa yang tidak boleh dilakukan terhadap agama orang lain?",
            pilihan: [
              "Menghormati perayaan hari raya mereka",
              "Menghina atau merendahkan agama mereka",
              "Mengucapkan selamat hari raya",
              "Belajar tentang agama mereka"
            ],
            jawaban_benar: 1,
            penjelasan: "Tidak boleh menghina atau merendahkan agama orang lain. Setiap warga negara harus menghormati perbedaan agama."
          },
          {
            id: "q8",
            sila: 1,
            nomor: 8,
            pertanyaan: "Bagaimana sila pertama berkaitan dengan moral?",
            pilihan: [
              "Tidak ada kaitannya",
              "Menjadi sumber moral dan etika dalam kehidupan",
              "Hanya untuk upacara formal",
              "Hanya untuk orang yang beragama"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila pertama menjadi sumber moral dan etika dalam kehidupan karena kepercayaan kepada Tuhan membentuk karakter dan perilaku manusia."
          },
          {
            id: "q9",
            sila: 1,
            nomor: 9,
            pertanyaan: "Apa yang dimaksud dengan 'ketuhanan' dalam sila pertama?",
            pilihan: [
              "Percaya pada banyak dewa",
              "Percaya pada Tuhan Yang Maha Esa",
              "Tidak percaya pada Tuhan",
              "Percaya pada diri sendiri sebagai Tuhan"
            ],
            jawaban_benar: 1,
            penjelasan: "'Ketuhanan' dalam sila pertama berarti percaya pada Tuhan Yang Maha Esa, yaitu Tuhan yang esa dan mahakuasa."
          },
          {
            id: "q10",
            sila: 1,
            nomor: 10,
            pertanyaan: "Bagaimana sikap terhadap ateis menurut sila pertama?",
            pilihan: [
              "Menghukum mereka",
              "Menghormati pilihan mereka namun tetap mengajak dialog",
              "Memaksa mereka beragama",
              "Mengucilkan mereka"
            ],
            jawaban_benar: 1,
            penjelasan: "Sikap yang tepat adalah menghormati pilihan mereka namun tetap mengajak dialog dengan baik, tanpa paksaan atau diskriminasi."
          },
          // Sila 2: Kemanusiaan yang Adil dan Beradab (10 soal)
          {
            id: "q11",
            sila: 2,
            nomor: 11,
            pertanyaan: "Apa makna dari 'kemanusiaan yang adil' dalam sila kedua?",
            pilihan: [
              "Semua manusia sama tanpa perbedaan",
              "Memperlakukan semua manusia dengan adil tanpa diskriminasi",
              "Manusia boleh melakukan apa saja",
              "Hanya manusia tertentu yang berhak mendapat keadilan"
            ],
            jawaban_benar: 1,
            penjelasan: "'Kemanusiaan yang adil' berarti memperlakukan semua manusia dengan adil tanpa diskriminasi, menghargai martabat setiap manusia."
          },
          {
            id: "q12",
            sila: 2,
            nomor: 12,
            pertanyaan: "Apa yang dimaksud dengan 'beradab' dalam sila kedua?",
            pilihan: [
              "Berpenampilan mewah",
              "Bersikap sopan, santun, dan menghargai martabat manusia",
              "Berpendidikan tinggi saja",
              "Berasal dari keluarga terpandang"
            ],
            jawaban_benar: 1,
            penjelasan: "'Beradab' berarti bersikap sopan, santun, dan menghargai martabat manusia dalam setiap perilaku dan interaksi."
          },
          {
            id: "q13",
            sila: 2,
            nomor: 13,
            pertanyaan: "Bagaimana sila kedua melarang diskriminasi?",
            pilihan: [
              "Dengan mengizinkan diskriminasi tertentu",
              "Dengan menjamin persamaan hak dan kewajiban bagi semua warga",
              "Dengan membedakan perlakuan berdasarkan status",
              "Dengan mengabaikan perbedaan"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kedua melarang diskriminasi dengan menjamin persamaan hak dan kewajiban bagi semua warga negara tanpa memandang perbedaan."
          },
          {
            id: "q14",
            sila: 2,
            nomor: 14,
            pertanyaan: "Apa contoh pelanggaran sila kedua?",
            pilihan: [
              "Menghormati perbedaan suku",
              "Bullying dan penghinaan terhadap orang lain",
              "Membantu teman yang kesulitan",
              "Menghargai pendapat orang lain"
            ],
            jawaban_benar: 1,
            penjelasan: "Bullying dan penghinaan terhadap orang lain adalah contoh pelanggaran sila kedua karena tidak menghargai martabat manusia."
          },
          {
            id: "q15",
            sila: 2,
            nomor: 15,
            pertanyaan: "Bagaimana sila kedua berkaitan dengan HAM?",
            pilihan: [
              "Tidak ada kaitannya",
              "Sila kedua adalah dasar pengakuan HAM di Indonesia",
              "HAM lebih penting dari Pancasila",
              "Sila kedua melawan HAM"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kedua adalah dasar pengakuan Hak Asasi Manusia (HAM) di Indonesia karena menjamin martabat dan persamaan semua manusia."
          },
          {
            id: "q16",
            sila: 2,
            nomor: 16,
            pertanyaan: "Apa yang harus dilakukan jika melihat orang lain dizalimi?",
            pilihan: [
              "Ikut menzalimi",
              "Diam saja",
              "Membela dan membantu korban",
              "Merekam dan menyebarkan"
            ],
            jawaban_benar: 2,
            penjelasan: "Menurut sila kedua, kita harus membela dan membantu korban ketidakadilan karena menghargai martabat manusia."
          },
          {
            id: "q17",
            sila: 2,
            nomor: 17,
            pertanyaan: "Bagaimana sikap terhadap penyandang disabilitas?",
            pilihan: [
              "Mengucilkan mereka",
              "Menghina mereka",
              "Menghormati dan membantu mereka",
              "Menganggap mereka beban"
            ],
            jawaban_benar: 2,
            penjelasan: "Sila kedua mewajibkan kita menghormati dan membantu penyandang disabilitas karena mereka memiliki martabat manusia yang sama."
          },
          {
            id: "q18",
            sila: 2,
            nomor: 18,
            pertanyaan: "Apa makna keadilan dalam sila kedua?",
            pilihan: [
              "Keadilan hanya untuk orang kaya",
              "Keadilan yang seimbang dan proporsional bagi semua",
              "Keadilan sesuai keinginan pribadi",
              "Keadilan yang diskriminatif"
            ],
            jawaban_benar: 1,
            penjelasan: "Keadilan dalam sila kedua adalah keadilan yang seimbang dan proporsional bagi semua tanpa memandang status, ras, atau agama."
          },
          {
            id: "q19",
            sila: 2,
            nomor: 19,
            pertanyaan: "Bagaimana sila kedua dalam era digital?",
            pilihan: [
              "Tidak relevan lagi",
              "Mencegah cyberbullying dan menghargai privasi digital",
              "Membolehkan komentar jahat di media sosial",
              "Mengabaikan etika digital"
            ],
            jawaban_benar: 1,
            penjelasan: "Dalam era digital, sila kedua sangat relevan untuk mencegah cyberbullying dan menghargai privasi serta martabat manusia di dunia maya."
          },
          {
            id: "q20",
            sila: 2,
            nomor: 20,
            pertanyaan: "Apa hubungan sila kedua dengan sila pertama?",
            pilihan: [
              "Tidak ada hubungan",
              "Sila kedua adalah implementasi dari sila pertama dalam hubungan antar manusia",
              "Sila pertama lebih penting",
              "Sila kedua menggantikan sila pertama"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kedua adalah implementasi dari sila pertama dalam hubungan antar manusia, karena menghargai manusia adalah bagian dari penghambaan kepada Tuhan."
          },
          // Sila 3: Persatuan Indonesia (10 soal)
          {
            id: "q21",
            sila: 3,
            nomor: 21,
            pertanyaan: "Apa makna dari sila ketiga 'Persatuan Indonesia'?",
            pilihan: [
              "Indonesia adalah negara satu suku",
              "Bangsa Indonesia harus bersatu dalam keberagaman",
              "Semua harus sama persis",
              "Perbedaan harus dihapus"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila ketiga berarti bangsa Indonesia harus bersatu dalam keberagaman, mengutamakan persatuan di atas perbedaan."
          },
          {
            id: "q22",
            sila: 3,
            nomor: 22,
            pertanyaan: "Apa yang dimaksud dengan 'Bhinneka Tunggal Ika'?",
            pilihan: [
              "Semua sama",
              "Berbeda-beda tetapi tetap satu",
              "Hanya satu yang benar",
              "Perbedaan tidak penting"
            ],
            jawaban_benar: 1,
            penjelasan: "'Bhinneka Tunggal Ika' berarti berbeda-beda tetapi tetap satu, semboyan yang sesuai dengan sila ketiga Pancasila."
          },
          {
            id: "q23",
            sila: 3,
            nomor: 23,
            pertanyaan: "Bagaimana cara menjaga persatuan Indonesia?",
            pilihan: [
              "Dengan memusuhi suku lain",
              "Dengan menghargai perbedaan dan mengutamakan persatuan",
              "Dengan memisahkan diri",
              "Dengan mengabaikan perbedaan"
            ],
            jawaban_benar: 1,
            penjelasan: "Cara menjaga persatuan Indonesia adalah dengan menghargai perbedaan suku, agama, ras, dan budaya serta mengutamakan persatuan bangsa."
          },
          {
            id: "q24",
            sila: 3,
            nomor: 24,
            pertanyaan: "Apa bahaya dari sikap primordialisme?",
            pilihan: [
              "Memperkuat persatuan",
              "Mengancam persatuan bangsa",
              "Tidak berpengaruh",
              "Membangun kebersamaan"
            ],
            jawaban_benar: 1,
            penjelasan: "Sikap primordialisme (mengutamakan kelompok sendiri) dapat mengancam persatuan bangsa karena memicu konflik antar kelompok."
          },
          {
            id: "q25",
            sila: 3,
            nomor: 25,
            pertanyaan: "Apa contoh pengamalan sila ketiga di sekolah?",
            pilihan: [
              "Membentuk kelompok berdasarkan suku",
              "Bekerja sama dengan teman dari berbagai daerah",
              "Mengucilkan teman yang berbeda",
              "Hanya bergaul dengan teman seagama"
            ],
            jawaban_benar: 1,
            penjelasan: "Contoh pengamalan sila ketiga di sekolah adalah bekerja sama dengan teman dari berbagai daerah tanpa membedakan suku atau daerah."
          },
          {
            id: "q26",
            sila: 3,
            nomor: 26,
            pertanyaan: "Bagaimana sikap terhadap ujaran kebencian (hate speech)?",
            pilihan: [
              "Ikut menyebarkan",
              "Menolak dan melaporkan ujaran kebencian",
              "Diam saja",
              "Menganggap itu wajar"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila ketiga mengharuskan kita menolak dan melaporkan ujaran kebencian karena dapat mengancam persatuan bangsa."
          },
          {
            id: "q27",
            sila: 3,
            nomor: 27,
            pertanyaan: "Apa peran Bahasa Indonesia dalam persatuan?",
            pilihan: [
              "Hanya untuk formalitas",
              "Sebagai bahasa persatuan yang menghubungkan seluruh bangsa",
              "Menggantikan bahasa daerah",
              "Hanya untuk orang tertentu"
            ],
            jawaban_benar: 1,
            penjelasan: "Bahasa Indonesia berperan sebagai bahasa persatuan yang menghubungkan seluruh bangsa Indonesia dari berbagai daerah."
          },
          {
            id: "q28",
            sila: 3,
            nomor: 28,
            pertanyaan: "Bagaimana sila ketiga dalam era globalisasi?",
            pilihan: [
              "Tidak relevan",
              "Semakin penting untuk menjaga identitas nasional",
              "Harus dihapus",
              "Hanya untuk sejarah"
            ],
            jawaban_benar: 1,
            penjelasan: "Dalam era globalisasi, sila ketiga semakin penting untuk menjaga identitas nasional dan persatuan bangsa di tengah pengaruh asing."
          },
          {
            id: "q29",
            sila: 3,
            nomor: 29,
            pertanyaan: "Apa yang harus dilakukan jika terjadi konflik antar suku?",
            pilihan: [
              "Ikut memperkeruh",
              "Memediasi dan mencari solusi damai",
              "Mendukung salah satu pihak",
              "Diam saja"
            ],
            jawaban_benar: 1,
            penjelasan: "Jika terjadi konflik antar suku, kita harus memediasi dan mencari solusi damai untuk menjaga persatuan bangsa."
          },
          {
            id: "q30",
            sila: 3,
            nomor: 30,
            pertanyaan: "Apa makna cinta tanah air dalam sila ketiga?",
            pilihan: [
              "Hanya kata-kata",
              "Sikap bangga dan siap membela negara",
              "Tidak peduli dengan negara",
              "Hanya untuk acara formal"
            ],
            jawaban_benar: 1,
            penjelasan: "Cinta tanah air dalam sila ketiga berarti sikap bangga dan siap membela negara, serta melestarikan kekayaan alam dan budaya Indonesia."
          },
          // Sila 4: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan (10 soal)
          {
            id: "q31",
            sila: 4,
            nomor: 31,
            pertanyaan: "Apa makna dari sila keempat?",
            pilihan: [
              "Rakyat berkuasa mutlak",
              "Keputusan diambil melalui musyawarah dengan hikmat kebijaksanaan",
              "Hanya pemimpin yang berkuasa",
              "Demokrasi tanpa batas"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila keempat berarti keputusan diambil melalui musyawarah dengan hikmat kebijaksanaan dalam permusyawaratan perwakilan."
          },
          {
            id: "q32",
            sila: 4,
            nomor: 32,
            pertanyaan: "Apa yang dimaksud dengan 'musyawarah'?",
            pilihan: [
              "Debat panas",
              "Diskusi untuk mencari mufakat bersama",
              "Voting tanpa diskusi",
              "Keputusan sepihak"
            ],
            jawaban_benar: 1,
            penjelasan: "'Musyawarah' adalah diskusi untuk mencari mufakat bersama, bukan voting atau keputusan sepihak."
          },
          {
            id: "q33",
            sila: 4,
            nomor: 33,
            pertanyaan: "Apa yang dimaksud dengan 'hikmat kebijaksanaan'?",
            pilihan: [
              "Kekuasaan mutlak",
              "Kebijaksanaan yang dipandu oleh nilai moral dan etika",
              "Kecerdasan semata",
              "Pengalaman saja"
            ],
            jawaban_benar: 1,
            penjelasan: "'Hikmat kebijaksanaan' adalah kebijaksanaan yang dipandu oleh nilai moral dan etika, bukan sekadar kecerdasan atau pengalaman."
          },
          {
            id: "q34",
            sila: 4,
            nomor: 34,
            pertanyaan: "Apa yang dimaksud dengan 'permusyawaratan perwakilan'?",
            pilihan: [
              "Semua orang ikut musyawarah",
              "Wakil rakyat yang musyawarah mewakili aspirasi rakyat",
              "Hanya pemimpin yang musyawarah",
              "Musyawarah tanpa wakil"
            ],
            jawaban_benar: 1,
            penjelasan: "'Permusyawaratan perwakilan' berarti wakil rakyat yang musyawarah mewakili aspirasi rakyat dalam pengambilan keputusan."
          },
          {
            id: "q35",
            sila: 4,
            nomor: 35,
            pertanyaan: "Bagaimana sila keempat dalam sistem demokrasi Indonesia?",
            pilihan: [
              "Demokrasi Barat murni",
              "Demokrasi Pancasila yang berbeda dari demokrasi Barat",
              "Tidak ada demokrasi",
              "Demokrasi komunis"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila keempat menghasilkan demokrasi Pancasila yang berbeda dari demokrasi Barat karena berlandaskan musyawarah dan hikmat kebijaksanaan."
          },
          {
            id: "q36",
            sila: 4,
            nomor: 36,
            pertanyaan: "Apa peran wakil rakyat dalam sila keempat?",
            pilihan: [
              "Mengabaikan aspirasi rakyat",
              "Menyerap dan memperjuangkan aspirasi rakyat",
              "Mengambil keputusan sendiri",
              "Hanya untuk kepentingan pribadi"
            ],
            jawaban_benar: 1,
            penjelasan: "Peran wakil rakyat dalam sila keempat adalah menyerap dan memperjuangkan aspirasi rakyat dalam musyawarah perwakilan."
          },
          {
            id: "q37",
            sila: 4,
            nomor: 37,
            pertanyaan: "Bagaimana sikap jika tidak setuju dengan keputusan musyawarah?",
            pilihan: [
              "Memaksa kehendak sendiri",
              "Menghormati keputusan bersama",
              "Mengundurkan diri",
              "Menghina keputusan"
            ],
            jawaban_benar: 1,
            penjelasan: "Jika tidak setuju dengan keputusan musyawarah, sikap yang tepat adalah menghormati keputusan bersama karena sudah melalui proses musyawarah."
          },
          {
            id: "q38",
            sila: 4,
            nomor: 38,
            pertanyaan: "Apa contoh pelanggaran sila keempat?",
            pilihan: [
              "Musyawarah untuk mencari mufakat",
              "Keputusan sepihak tanpa musyawarah",
              "Menghargai pendapat orang lain",
              "Diskusi terbuka"
            ],
            jawaban_benar: 1,
            penjelasan: "Keputusan sepihak tanpa musyawarah adalah contoh pelanggaran sila keempat karena tidak menghargai prinsip musyawarah."
          },
          {
            id: "q39",
            sila: 4,
            nomor: 39,
            pertanyaan: "Bagaimana sila keempat dalam organisasi sekolah?",
            pilihan: [
              "Ketua kelas berkuasa mutlak",
              "Keputusan diambil melalui musyawarah kelas",
              "Guru yang menentukan semua",
              "Tidak ada organisasi"
            ],
            jawaban_benar: 1,
            penjelasan: "Dalam organisasi sekolah, sila keempat diterapkan dengan mengambil keputusan melalui musyawarah kelas, bukan keputusan sepihak."
          },
          {
            id: "q40",
            sila: 4,
            nomor: 40,
            pertanyaan: "Apa hubungan antara musyawarah dan demokrasi?",
            pilihan: [
              "Tidak ada hubungan",
              "Musyawarah adalah ciri khas demokrasi Indonesia",
              "Demokrasi tanpa musyawarah",
              "Musyawara menghancurkan demokrasi"
            ],
            jawaban_benar: 1,
            penjelasan: "Musyawarah adalah ciri khas demokrasi Indonesia yang membedakannya dari demokrasi negara lain yang lebih mengandalkan voting."
          },
          // Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia (10 soal)
          {
            id: "q41",
            sila: 5,
            nomor: 41,
            pertanyaan: "Apa makna dari sila kelima?",
            pilihan: [
              "Keadilan hanya untuk orang kaya",
              "Keadilan sosial bagi seluruh rakyat Indonesia tanpa diskriminasi",
              "Keadilan sesuai keinginan",
              "Keadilan yang timpang"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kelima berarti keadilan sosial bagi seluruh rakyat Indonesia tanpa diskriminasi, menjamin kesejahteraan bersama."
          },
          {
            id: "q42",
            sila: 5,
            nomor: 42,
            pertanyaan: "Apa yang dimaksud dengan 'keadilan sosial'?",
            pilihan: [
              "Keadilan hukum saja",
              "Keadilan dalam semua aspek kehidupan: ekonomi, sosial, politik",
              "Keadilan hanya untuk tertentu",
              "Keadilan formal saja"
            ],
            jawaban_benar: 1,
            penjelasan: "'Keadilan sosial' berarti keadilan dalam semua aspek kehidupan: ekonomi, sosial, politik, dan hukum bagi seluruh rakyat."
          },
          {
            id: "q43",
            sila: 5,
            nomor: 43,
            pertanyaan: "Bagaimana sila kelima berkaitan dengan pemerataan ekonomi?",
            pilihan: [
              "Mengizinkan ketimpangan",
              "Mendorong pemerataan ekonomi dan kesejahteraan",
              "Hanya untuk orang kaya",
              "Mengabaikan kemiskinan"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kelima mendorong pemerataan ekonomi dan kesejahteraan untuk mengurangi ketimpangan dan kemiskinan."
          },
          {
            id: "q44",
            sila: 5,
            nomor: 44,
            pertanyaan: "Apa contoh pengamalan sila kelima?",
            pilihan: [
              "Mengabaikan orang miskin",
              "Membantu orang yang membutuhkan dan mendukung UMKM",
              "Hanya memikirkan diri sendiri",
              "Mengambil hak orang lain"
            ],
            jawaban_benar: 1,
            penjelasan: "Contoh pengamalan sila kelima adalah membantu orang yang membutuhkan dan mendukung UMKM untuk pemerataan ekonomi."
          },
          {
            id: "q45",
            sila: 5,
            nomor: 45,
            pertanyaan: "Bagaimana sila kelima dalam era digital?",
            pilihan: [
              "Tidak relevan",
              "Mendorong donasi online dan dukungan digital untuk UMKM",
              "Hanya untuk transaksi tunai",
              "Mengabaikan teknologi"
            ],
            jawaban_benar: 1,
            penjelasan: "Dalam era digital, sila kelima dapat diterapkan melalui donasi online dan dukungan digital untuk UMKM dan pemerataan ekonomi."
          },
          {
            id: "q46",
            sila: 5,
            nomor: 46,
            pertanyaan: "Apa yang dimaksud dengan 'bagi seluruh rakyat Indonesia'?",
            pilihan: [
              "Hanya untuk sebagian rakyat",
              "Untuk semua warga negara tanpa pengecualian",
              "Hanya untuk yang beragama",
              "Hanya untuk yang berpendidikan"
            ],
            jawaban_benar: 1,
            penjelasan: "'Bagi seluruh rakyat Indonesia' berarti untuk semua warga negara tanpa pengecualian, tidak membedakan suku, agama, ras, atau status."
          },
          {
            id: "q47",
            sila: 5,
            nomor: 47,
            pertanyaan: "Bagaimana sikap terhadap ketimpangan ekonomi?",
            pilihan: [
              "Menerima ketimpangan",
              "Berusaha mengurangi ketimpangan melalui keadilan sosial",
              "Memperbesar ketimpangan",
              "Mengabaikan kemiskinan"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kelima mewajibkan kita berusaha mengurangi ketimpangan melalui keadilan sosial dan pemerataan ekonomi."
          },
          {
            id: "q48",
            sila: 5,
            nomor: 48,
            pertanyaan: "Apa peran pemerintah dalam sila kelima?",
            pilihan: [
              "Mengabaikan rakyat miskin",
              "Membuat kebijakan untuk kesejahteraan seluruh rakyat",
              "Hanya melayani orang kaya",
              "Memperketat ketimpangan"
            ],
            jawaban_benar: 1,
            penjelasan: "Peran pemerintah dalam sila kelima adalah membuat kebijakan untuk kesejahteraan seluruh rakyat, bukan hanya segelintir orang."
          },
          {
            id: "q49",
            sila: 5,
            nomor: 49,
            pertanyaan: "Apa hubungan antara hak dan kewajiban dalam sila kelima?",
            pilihan: [
              "Hak tanpa kewajiban",
              "Hak dan kewajiban seimbang",
              "Kewajiban tanpa hak",
              "Tidak ada hubungan"
            ],
            jawaban_benar: 1,
            penjelasan: "Dalam sila kelima, hak dan kewajiban harus seimbang. Setiap warga memiliki hak untuk mendapatkan keadilan dan kewajiban untuk menegakkan keadilan."
          },
          {
            id: "q50",
            sila: 5,
            nomor: 50,
            pertanyaan: "Bagaimana sila kelima sebagai tujuan akhir Pancasila?",
            pilihan: [
              "Bukan tujuan akhir",
              "Sila kelima adalah tujuan akhir dari seluruh sila Pancasila",
              "Sila pertama lebih penting",
              "Semua sila sama penting tanpa tujuan"
            ],
            jawaban_benar: 1,
            penjelasan: "Sila kelima adalah tujuan akhir dari seluruh sila Pancasila, yaitu mewujudkan keadilan sosial dan kesejahteraan bagi seluruh rakyat Indonesia."
          }
        ],
        createdAt: Timestamp.now()
      };
      
      await addDoc(quizRef, quizData);
      console.log("Quiz questions initialized in Firebase");
    }
  } catch (error) {
    console.error("Error initializing quiz questions:", error);
  }
}

// Update quiz questions in Firebase
export async function updateQuizQuestions() {
  try {
    const quizRef = collection(db, "quiz");
    const querySnapshot = await getDocs(quizRef);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const docRef = doc.ref;
      
      const updatedQuestions = [
        // Sila 1: Ketuhanan Yang Maha Esa (10 soal)
        {
          id: "q1",
          sila: 1,
          nomor: 1,
          pertanyaan: "Apa makna dari sila pertama Pancasila 'Ketuhanan Yang Maha Esa'?",
          pilihan: [
            "Bangsa Indonesia percaya adanya Tuhan Yang Maha Esa",
            "Indonesia adalah negara agama tertentu",
            "Semua wajib beragama yang sama",
            "Negara mengatur semua kegiatan keagamaan"
          ],
          jawaban_benar: 0,
          penjelasan: "Sila pertama berarti bangsa Indonesia percaya adanya Tuhan Yang Maha Esa, namun negara tidak memaksakan agama tertentu kepada warganya."
        },
        {
          id: "q2",
          sila: 1,
          nomor: 2,
          pertanyaan: "Bagaimana sila pertama menjamin kebebasan beragama?",
          pilihan: [
            "Dengan melarang semua agama kecuali satu",
            "Dengan memberikan kebebasan untuk memeluk dan menjalankan agama masing-masing",
            "Dengan mengatur semua ritual keagamaan",
            "Dengan mewajibkan semua warga beragama"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila pertama menjamin kebebasan beragama dengan memberikan hak kepada setiap warga untuk memeluk dan menjalankan agamanya masing-masing."
        },
        {
          id: "q3",
          sila: 1,
          nomor: 3,
          pertanyaan: "Apa yang dimaksud dengan toleransi dalam sila pertama?",
          pilihan: [
            "Mengabaikan agama orang lain",
            "Menghormati dan menghargai perbedaan agama",
            "Memaksa orang lain untuk berpindah agama",
            "Mengkritik agama orang lain"
          ],
          jawaban_benar: 1,
          penjelasan: "Toleransi dalam sila pertama berarti menghormati dan menghargai perbedaan agama yang dianut oleh setiap warga negara."
        },
        {
          id: "q4",
          sila: 1,
          nomor: 4,
          pertanyaan: "Bagaimana hubungan antara agama dan negara menurut sila pertama?",
          pilihan: [
            "Negara adalah agama",
            "Agama dan negara terpisah namun saling menghormati",
            "Agama mengatur negara",
            "Negara mengatur agama"
          ],
          jawaban_benar: 1,
          penjelasan: "Menurut sila pertama, agama dan negara terpisah namun saling menghormati. Negara menjamin kebebasan beragama tanpa campur tangan dalam urusan internal agama."
        },
        {
          id: "q5",
          sila: 1,
          nomor: 5,
          pertanyaan: "Apa contoh pengamalan sila pertama di sekolah?",
          pilihan: [
            "Memaksa semua siswa beragama sama",
            "Mengadakan kegiatan keagamaan sesuai agama masing-masing",
            "Melarang kegiatan keagamaan di sekolah",
            "Menghina agama orang lain"
          ],
          jawaban_benar: 1,
          penjelasan: "Contoh pengamalan sila pertama di sekolah adalah mengadakan kegiatan keagamaan yang sesuai dengan agama masing-masing siswa dengan saling menghormati."
        },
        {
          id: "q6",
          sila: 1,
          nomor: 6,
          pertanyaan: "Mengapa sila pertama ditempatkan sebagai sila pertama?",
          pilihan: [
            "Karena itu kebetulan",
            "Karena itu adalah dasar dan fondasi bagi sila-sila lainnya",
            "Karena itu yang paling pendek",
            "Karena itu yang paling mudah diingat"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila pertama ditempatkan sebagai sila pertama karena merupakan dasar dan fondasi bagi sila-sila lainnya dalam Pancasila."
        },
        {
          id: "q7",
          sila: 1,
          nomor: 7,
          pertanyaan: "Apa yang tidak boleh dilakukan terhadap agama orang lain?",
          pilihan: [
            "Menghormati perayaan hari raya mereka",
            "Menghina atau merendahkan agama mereka",
            "Mengucapkan selamat hari raya",
            "Belajar tentang agama mereka"
          ],
          jawaban_benar: 1,
          penjelasan: "Tidak boleh menghina atau merendahkan agama orang lain. Setiap warga negara harus menghormati perbedaan agama."
        },
        {
          id: "q8",
          sila: 1,
          nomor: 8,
          pertanyaan: "Bagaimana sila pertama berkaitan dengan moral?",
          pilihan: [
            "Tidak ada kaitannya",
            "Menjadi sumber moral dan etika dalam kehidupan",
            "Hanya untuk upacara formal",
            "Hanya untuk orang yang beragama"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila pertama menjadi sumber moral dan etika dalam kehidupan karena kepercayaan kepada Tuhan membentuk karakter dan perilaku manusia."
        },
        {
          id: "q9",
          sila: 1,
          nomor: 9,
          pertanyaan: "Apa yang dimaksud dengan 'ketuhanan' dalam sila pertama?",
          pilihan: [
            "Percaya pada banyak dewa",
            "Percaya pada Tuhan Yang Maha Esa",
            "Tidak percaya pada Tuhan",
            "Percaya pada diri sendiri sebagai Tuhan"
          ],
          jawaban_benar: 1,
          penjelasan: "'Ketuhanan' dalam sila pertama berarti percaya pada Tuhan Yang Maha Esa, yaitu Tuhan yang esa dan mahakuasa."
        },
        {
          id: "q10",
          sila: 1,
          nomor: 10,
          pertanyaan: "Bagaimana sikap terhadap ateis menurut sila pertama?",
          pilihan: [
            "Menghukum mereka",
            "Menghormati pilihan mereka namun tetap mengajak dialog",
            "Memaksa mereka beragama",
            "Mengucilkan mereka"
          ],
          jawaban_benar: 1,
          penjelasan: "Sikap yang tepat adalah menghormati pilihan mereka namun tetap mengajak dialog dengan baik, tanpa paksaan atau diskriminasi."
        },
        // Sila 2: Kemanusiaan yang Adil dan Beradab (10 soal)
        {
          id: "q11",
          sila: 2,
          nomor: 11,
          pertanyaan: "Apa makna dari 'kemanusiaan yang adil' dalam sila kedua?",
          pilihan: [
            "Semua manusia sama tanpa perbedaan",
            "Memperlakukan semua manusia dengan adil tanpa diskriminasi",
            "Manusia boleh melakukan apa saja",
            "Hanya manusia tertentu yang berhak mendapat keadilan"
          ],
          jawaban_benar: 1,
          penjelasan: "'Kemanusiaan yang adil' berarti memperlakukan semua manusia dengan adil tanpa diskriminasi, menghargai martabat setiap manusia."
        },
        {
          id: "q12",
          sila: 2,
          nomor: 12,
          pertanyaan: "Apa yang dimaksud dengan 'beradab' dalam sila kedua?",
          pilihan: [
            "Berpenampilan mewah",
            "Bersikap sopan, santun, dan menghargai martabat manusia",
            "Berpendidikan tinggi saja",
            "Berasal dari keluarga terpandang"
          ],
          jawaban_benar: 1,
          penjelasan: "'Beradab' berarti bersikap sopan, santun, dan menghargai martabat manusia dalam setiap perilaku dan interaksi."
        },
        {
          id: "q13",
          sila: 2,
          nomor: 13,
          pertanyaan: "Bagaimana sila kedua melarang diskriminasi?",
          pilihan: [
            "Dengan mengizinkan diskriminasi tertentu",
            "Dengan menjamin persamaan hak dan kewajiban bagi semua warga",
            "Dengan membedakan perlakuan berdasarkan status",
            "Dengan mengabaikan perbedaan"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kedua melarang diskriminasi dengan menjamin persamaan hak dan kewajiban bagi semua warga negara tanpa memandang perbedaan."
        },
        {
          id: "q14",
          sila: 2,
          nomor: 14,
          pertanyaan: "Apa contoh pelanggaran sila kedua?",
          pilihan: [
            "Menghormati perbedaan suku",
            "Bullying dan penghinaan terhadap orang lain",
            "Membantu teman yang kesulitan",
            "Menghargai pendapat orang lain"
          ],
          jawaban_benar: 1,
          penjelasan: "Bullying dan penghinaan terhadap orang lain adalah contoh pelanggaran sila kedua karena tidak menghargai martabat manusia."
        },
        {
          id: "q15",
          sila: 2,
          nomor: 15,
          pertanyaan: "Bagaimana sila kedua berkaitan dengan HAM?",
          pilihan: [
            "Tidak ada kaitannya",
            "Sila kedua adalah dasar pengakuan HAM di Indonesia",
            "HAM lebih penting dari Pancasila",
            "Sila kedua melawan HAM"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kedua adalah dasar pengakuan Hak Asasi Manusia (HAM) di Indonesia karena menjamin martabat dan persamaan semua manusia."
        },
        {
          id: "q16",
          sila: 2,
          nomor: 16,
          pertanyaan: "Apa yang harus dilakukan jika melihat orang lain dizalimi?",
          pilihan: [
            "Ikut menzalimi",
            "Diam saja",
            "Membela dan membantu korban",
            "Merekam dan menyebarkan"
          ],
          jawaban_benar: 2,
          penjelasan: "Menurut sila kedua, kita harus membela dan membantu korban ketidakadilan karena menghargai martabat manusia."
        },
        {
          id: "q17",
          sila: 2,
          nomor: 17,
          pertanyaan: "Bagaimana sikap terhadap penyandang disabilitas?",
          pilihan: [
            "Mengucilkan mereka",
            "Menghina mereka",
            "Menghormati dan membantu mereka",
            "Menganggap mereka beban"
          ],
          jawaban_benar: 2,
          penjelasan: "Sila kedua mewajibkan kita menghormati dan membantu penyandang disabilitas karena mereka memiliki martabat manusia yang sama."
        },
        {
          id: "q18",
          sila: 2,
          nomor: 18,
          pertanyaan: "Apa makna keadilan dalam sila kedua?",
          pilihan: [
            "Keadilan hanya untuk orang kaya",
            "Keadilan yang seimbang dan proporsional bagi semua",
            "Keadilan sesuai keinginan pribadi",
            "Keadilan yang diskriminatif"
          ],
          jawaban_benar: 1,
          penjelasan: "Keadilan dalam sila kedua adalah keadilan yang seimbang dan proporsional bagi semua tanpa memandang status, ras, atau agama."
        },
        {
          id: "q19",
          sila: 2,
          nomor: 19,
          pertanyaan: "Bagaimana sila kedua dalam era digital?",
          pilihan: [
            "Tidak relevan lagi",
            "Mencegah cyberbullying dan menghargai privasi digital",
            "Membolehkan komentar jahat di media sosial",
            "Mengabaikan etika digital"
          ],
          jawaban_benar: 1,
          penjelasan: "Dalam era digital, sila kedua sangat relevan untuk mencegah cyberbullying dan menghargai privasi serta martabat manusia di dunia maya."
        },
        {
          id: "q20",
          sila: 2,
          nomor: 20,
          pertanyaan: "Apa hubungan sila kedua dengan sila pertama?",
          pilihan: [
            "Tidak ada hubungan",
            "Sila kedua adalah implementasi dari sila pertama dalam hubungan antar manusia",
            "Sila pertama lebih penting",
            "Sila kedua menggantikan sila pertama"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kedua adalah implementasi dari sila pertama dalam hubungan antar manusia, karena menghargai manusia adalah bagian dari penghambaan kepada Tuhan."
        },
        // Sila 3: Persatuan Indonesia (10 soal)
        {
          id: "q21",
          sila: 3,
          nomor: 21,
          pertanyaan: "Apa makna dari sila ketiga 'Persatuan Indonesia'?",
          pilihan: [
            "Indonesia adalah negara satu suku",
            "Bangsa Indonesia harus bersatu dalam keberagaman",
            "Semua harus sama persis",
            "Perbedaan harus dihapus"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila ketiga berarti bangsa Indonesia harus bersatu dalam keberagaman, mengutamakan persatuan di atas perbedaan."
        },
        {
          id: "q22",
          sila: 3,
          nomor: 22,
          pertanyaan: "Apa yang dimaksud dengan 'Bhinneka Tunggal Ika'?",
          pilihan: [
            "Semua sama",
            "Berbeda-beda tetapi tetap satu",
            "Hanya satu yang benar",
            "Perbedaan tidak penting"
          ],
          jawaban_benar: 1,
          penjelasan: "'Bhinneka Tunggal Ika' berarti berbeda-beda tetapi tetap satu, semboyan yang sesuai dengan sila ketiga Pancasila."
        },
        {
          id: "q23",
          sila: 3,
          nomor: 23,
          pertanyaan: "Bagaimana cara menjaga persatuan Indonesia?",
          pilihan: [
            "Dengan memusuhi suku lain",
            "Dengan menghargai perbedaan dan mengutamakan persatuan",
            "Dengan memisahkan diri",
            "Dengan mengabaikan perbedaan"
          ],
          jawaban_benar: 1,
          penjelasan: "Cara menjaga persatuan Indonesia adalah dengan menghargai perbedaan suku, agama, ras, dan budaya serta mengutamakan persatuan bangsa."
        },
        {
          id: "q24",
          sila: 3,
          nomor: 24,
          pertanyaan: "Apa bahaya dari sikap primordialisme?",
          pilihan: [
            "Memperkuat persatuan",
            "Mengancam persatuan bangsa",
            "Tidak berpengaruh",
            "Membangun kebersamaan"
          ],
          jawaban_benar: 1,
          penjelasan: "Sikap primordialisme (mengutamakan kelompok sendiri) dapat mengancam persatuan bangsa karena memicu konflik antar kelompok."
        },
        {
          id: "q25",
          sila: 3,
          nomor: 25,
          pertanyaan: "Apa contoh pengamalan sila ketiga di sekolah?",
          pilihan: [
            "Membentuk kelompok berdasarkan suku",
            "Bekerja sama dengan teman dari berbagai daerah",
            "Mengucilkan teman yang berbeda",
            "Hanya bergaul dengan teman seagama"
          ],
          jawaban_benar: 1,
          penjelasan: "Contoh pengamalan sila ketiga di sekolah adalah bekerja sama dengan teman dari berbagai daerah tanpa membedakan suku atau daerah."
        },
        {
          id: "q26",
          sila: 3,
          nomor: 26,
          pertanyaan: "Bagaimana sikap terhadap ujaran kebencian (hate speech)?",
          pilihan: [
            "Ikut menyebarkan",
            "Menolak dan melaporkan ujaran kebencian",
            "Diam saja",
            "Menganggap itu wajar"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila ketiga mengharuskan kita menolak dan melaporkan ujaran kebencian karena dapat mengancam persatuan bangsa."
        },
        {
          id: "q27",
          sila: 3,
          nomor: 27,
          pertanyaan: "Apa peran Bahasa Indonesia dalam persatuan?",
          pilihan: [
            "Hanya untuk formalitas",
            "Sebagai bahasa persatuan yang menghubungkan seluruh bangsa",
            "Menggantikan bahasa daerah",
            "Hanya untuk orang tertentu"
          ],
          jawaban_benar: 1,
          penjelasan: "Bahasa Indonesia berperan sebagai bahasa persatuan yang menghubungkan seluruh bangsa Indonesia dari berbagai daerah."
        },
        {
          id: "q28",
          sila: 3,
          nomor: 28,
          pertanyaan: "Bagaimana sila ketiga dalam era globalisasi?",
          pilihan: [
            "Tidak relevan",
            "Semakin penting untuk menjaga identitas nasional",
            "Harus dihapus",
            "Hanya untuk sejarah"
          ],
          jawaban_benar: 1,
          penjelasan: "Dalam era globalisasi, sila ketiga semakin penting untuk menjaga identitas nasional dan persatuan bangsa di tengah pengaruh asing."
        },
        {
          id: "q29",
          sila: 3,
          nomor: 29,
          pertanyaan: "Apa yang harus dilakukan jika terjadi konflik antar suku?",
          pilihan: [
            "Ikut memperkeruh",
            "Memediasi dan mencari solusi damai",
            "Mendukung salah satu pihak",
            "Diam saja"
          ],
          jawaban_benar: 1,
          penjelasan: "Jika terjadi konflik antar suku, kita harus memediasi dan mencari solusi damai untuk menjaga persatuan bangsa."
        },
        {
          id: "q30",
          sila: 3,
          nomor: 30,
          pertanyaan: "Apa makna cinta tanah air dalam sila ketiga?",
          pilihan: [
            "Hanya kata-kata",
            "Sikap bangga dan siap membela negara",
            "Tidak peduli dengan negara",
            "Hanya untuk acara formal"
          ],
          jawaban_benar: 1,
          penjelasan: "Cinta tanah air dalam sila ketiga berarti sikap bangga dan siap membela negara, serta melestarikan kekayaan alam dan budaya Indonesia."
        },
        // Sila 4: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan (10 soal)
        {
          id: "q31",
          sila: 4,
          nomor: 31,
          pertanyaan: "Apa makna dari sila keempat?",
          pilihan: [
            "Rakyat berkuasa mutlak",
            "Keputusan diambil melalui musyawarah dengan hikmat kebijaksanaan",
            "Hanya pemimpin yang berkuasa",
            "Demokrasi tanpa batas"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila keempat berarti keputusan diambil melalui musyawarah dengan hikmat kebijaksanaan dalam permusyawaratan perwakilan."
        },
        {
          id: "q32",
          sila: 4,
          nomor: 32,
          pertanyaan: "Apa yang dimaksud dengan 'musyawarah'?",
          pilihan: [
            "Debat panas",
            "Diskusi untuk mencari mufakat bersama",
            "Voting tanpa diskusi",
            "Keputusan sepihak"
          ],
          jawaban_benar: 1,
          penjelasan: "'Musyawarah' adalah diskusi untuk mencari mufakat bersama, bukan voting atau keputusan sepihak."
        },
        {
          id: "q33",
          sila: 4,
          nomor: 33,
          pertanyaan: "Apa yang dimaksud dengan 'hikmat kebijaksanaan'?",
          pilihan: [
            "Kekuasaan mutlak",
            "Kebijaksanaan yang dipandu oleh nilai moral dan etika",
            "Kecerdasan semata",
            "Pengalaman saja"
          ],
          jawaban_benar: 1,
          penjelasan: "'Hikmat kebijaksanaan' adalah kebijaksanaan yang dipandu oleh nilai moral dan etika, bukan sekadar kecerdasan atau pengalaman."
        },
        {
          id: "q34",
          sila: 4,
          nomor: 34,
          pertanyaan: "Apa yang dimaksud dengan 'permusyawaratan perwakilan'?",
          pilihan: [
            "Semua orang ikut musyawarah",
            "Wakil rakyat yang musyawarah mewakili aspirasi rakyat",
            "Hanya pemimpin yang musyawarah",
            "Musyawarah tanpa wakil"
          ],
          jawaban_benar: 1,
          penjelasan: "'Permusyawaratan perwakilan' berarti wakil rakyat yang musyawarah mewakili aspirasi rakyat dalam pengambilan keputusan."
        },
        {
          id: "q35",
          sila: 4,
          nomor: 35,
          pertanyaan: "Bagaimana sila keempat dalam sistem demokrasi Indonesia?",
          pilihan: [
            "Demokrasi Barat murni",
            "Demokrasi Pancasila yang berbeda dari demokrasi Barat",
            "Tidak ada demokrasi",
            "Demokrasi komunis"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila keempat menghasilkan demokrasi Pancasila yang berbeda dari demokrasi Barat karena berlandaskan musyawarah dan hikmat kebijaksanaan."
        },
        {
          id: "q36",
          sila: 4,
          nomor: 36,
          pertanyaan: "Apa peran wakil rakyat dalam sila keempat?",
          pilihan: [
            "Mengabaikan aspirasi rakyat",
            "Menyerap dan memperjuangkan aspirasi rakyat",
            "Mengambil keputusan sendiri",
            "Hanya untuk kepentingan pribadi"
          ],
          jawaban_benar: 1,
          penjelasan: "Peran wakil rakyat dalam sila keempat adalah menyerap dan memperjuangkan aspirasi rakyat dalam musyawarah perwakilan."
        },
        {
          id: "q37",
          sila: 4,
          nomor: 37,
          pertanyaan: "Bagaimana sikap jika tidak setuju dengan keputusan musyawarah?",
          pilihan: [
            "Memaksa kehendak sendiri",
            "Menghormati keputusan bersama",
            "Mengundurkan diri",
            "Menghina keputusan"
          ],
          jawaban_benar: 1,
          penjelasan: "Jika tidak setuju dengan keputusan musyawarah, sikap yang tepat adalah menghormati keputusan bersama karena sudah melalui proses musyawarah."
        },
        {
          id: "q38",
          sila: 4,
          nomor: 38,
          pertanyaan: "Apa contoh pelanggaran sila keempat?",
          pilihan: [
            "Musyawarah untuk mencari mufakat",
            "Keputusan sepihak tanpa musyawarah",
            "Menghargai pendapat orang lain",
            "Diskusi terbuka"
          ],
          jawaban_benar: 1,
          penjelasan: "Keputusan sepihak tanpa musyawarah adalah contoh pelanggaran sila keempat karena tidak menghargai prinsip musyawarah."
        },
        {
          id: "q39",
          sila: 4,
          nomor: 39,
          pertanyaan: "Bagaimana sila keempat dalam organisasi sekolah?",
          pilihan: [
            "Ketua kelas berkuasa mutlak",
            "Keputusan diambil melalui musyawarah kelas",
            "Guru yang menentukan semua",
            "Tidak ada organisasi"
          ],
          jawaban_benar: 1,
          penjelasan: "Dalam organisasi sekolah, sila keempat diterapkan dengan mengambil keputusan melalui musyawarah kelas, bukan keputusan sepihak."
        },
        {
          id: "q40",
          sila: 4,
          nomor: 40,
          pertanyaan: "Apa hubungan antara musyawarah dan demokrasi?",
          pilihan: [
            "Tidak ada hubungan",
            "Musyawarah adalah ciri khas demokrasi Indonesia",
            "Demokrasi tanpa musyawarah",
            "Musyawara menghancurkan demokrasi"
          ],
          jawaban_benar: 1,
          penjelasan: "Musyawarah adalah ciri khas demokrasi Indonesia yang membedakannya dari demokrasi negara lain yang lebih mengandalkan voting."
        },
        // Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia (10 soal)
        {
          id: "q41",
          sila: 5,
          nomor: 41,
          pertanyaan: "Apa makna dari sila kelima?",
          pilihan: [
            "Keadilan hanya untuk orang kaya",
            "Keadilan sosial bagi seluruh rakyat Indonesia tanpa diskriminasi",
            "Keadilan sesuai keinginan",
            "Keadilan yang timpang"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kelima berarti keadilan sosial bagi seluruh rakyat Indonesia tanpa diskriminasi, menjamin kesejahteraan bersama."
        },
        {
          id: "q42",
          sila: 5,
          nomor: 42,
          pertanyaan: "Apa yang dimaksud dengan 'keadilan sosial'?",
          pilihan: [
            "Keadilan hukum saja",
            "Keadilan dalam semua aspek kehidupan: ekonomi, sosial, politik",
            "Keadilan hanya untuk tertentu",
            "Keadilan formal saja"
          ],
          jawaban_benar: 1,
          penjelasan: "'Keadilan sosial' berarti keadilan dalam semua aspek kehidupan: ekonomi, sosial, politik, dan hukum bagi seluruh rakyat."
        },
        {
          id: "q43",
          sila: 5,
          nomor: 43,
          pertanyaan: "Bagaimana sila kelima berkaitan dengan pemerataan ekonomi?",
          pilihan: [
            "Mengizinkan ketimpangan",
            "Mendorong pemerataan ekonomi dan kesejahteraan",
            "Hanya untuk orang kaya",
            "Mengabaikan kemiskinan"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kelima mendorong pemerataan ekonomi dan kesejahteraan untuk mengurangi ketimpangan dan kemiskinan."
        },
        {
          id: "q44",
          sila: 5,
          nomor: 44,
          pertanyaan: "Apa contoh pengamalan sila kelima?",
          pilihan: [
            "Mengabaikan orang miskin",
            "Membantu orang yang membutuhkan dan mendukung UMKM",
            "Hanya memikirkan diri sendiri",
            "Mengambil hak orang lain"
          ],
          jawaban_benar: 1,
          penjelasan: "Contoh pengamalan sila kelima adalah membantu orang yang membutuhkan dan mendukung UMKM untuk pemerataan ekonomi."
        },
        {
          id: "q45",
          sila: 5,
          nomor: 45,
          pertanyaan: "Bagaimana sila kelima dalam era digital?",
          pilihan: [
            "Tidak relevan",
            "Mendorong donasi online dan dukungan digital untuk UMKM",
            "Hanya untuk transaksi tunai",
            "Mengabaikan teknologi"
          ],
          jawaban_benar: 1,
          penjelasan: "Dalam era digital, sila kelima dapat diterapkan melalui donasi online dan dukungan digital untuk UMKM dan pemerataan ekonomi."
        },
        {
          id: "q46",
          sila: 5,
          nomor: 46,
          pertanyaan: "Apa yang dimaksud dengan 'bagi seluruh rakyat Indonesia'?",
          pilihan: [
            "Hanya untuk sebagian rakyat",
            "Untuk semua warga negara tanpa pengecualian",
            "Hanya untuk yang beragama",
            "Hanya untuk yang berpendidikan"
          ],
          jawaban_benar: 1,
          penjelasan: "'Bagi seluruh rakyat Indonesia' berarti untuk semua warga negara tanpa pengecualian, tidak membedakan suku, agama, ras, atau status."
        },
        {
          id: "q47",
          sila: 5,
          nomor: 47,
          pertanyaan: "Bagaimana sikap terhadap ketimpangan ekonomi?",
          pilihan: [
            "Menerima ketimpangan",
            "Berusaha mengurangi ketimpangan melalui keadilan sosial",
            "Memperbesar ketimpangan",
            "Mengabaikan kemiskinan"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kelima mewajibkan kita berusaha mengurangi ketimpangan melalui keadilan sosial dan pemerataan ekonomi."
        },
        {
          id: "q48",
          sila: 5,
          nomor: 48,
          pertanyaan: "Apa peran pemerintah dalam sila kelima?",
          pilihan: [
            "Mengabaikan rakyat miskin",
            "Membuat kebijakan untuk kesejahteraan seluruh rakyat",
            "Hanya melayani orang kaya",
            "Memperketat ketimpangan"
          ],
          jawaban_benar: 1,
          penjelasan: "Peran pemerintah dalam sila kelima adalah membuat kebijakan untuk kesejahteraan seluruh rakyat, bukan hanya segelintir orang."
        },
        {
          id: "q49",
          sila: 5,
          nomor: 49,
          pertanyaan: "Apa hubungan antara hak dan kewajiban dalam sila kelima?",
          pilihan: [
            "Hak tanpa kewajiban",
            "Hak dan kewajiban seimbang",
            "Kewajiban tanpa hak",
            "Tidak ada hubungan"
          ],
          jawaban_benar: 1,
          penjelasan: "Dalam sila kelima, hak dan kewajiban harus seimbang. Setiap warga memiliki hak untuk mendapatkan keadilan dan kewajiban untuk menegakkan keadilan."
        },
        {
          id: "q50",
          sila: 5,
          nomor: 50,
          pertanyaan: "Bagaimana sila kelima sebagai tujuan akhir Pancasila?",
          pilihan: [
            "Bukan tujuan akhir",
            "Sila kelima adalah tujuan akhir dari seluruh sila Pancasila",
            "Sila pertama lebih penting",
            "Semua sila sama penting tanpa tujuan"
          ],
          jawaban_benar: 1,
          penjelasan: "Sila kelima adalah tujuan akhir dari seluruh sila Pancasila, yaitu mewujudkan keadilan sosial dan kesejahteraan bagi seluruh rakyat Indonesia."
        }
      ];
      
      await docRef.update({
        questions: updatedQuestions,
        updatedAt: Timestamp.now()
      });
      
      console.log("Quiz questions updated in Firebase");
    }
  } catch (error) {
    console.error("Error updating quiz questions in Firebase:", error);
  }
}

// Get quiz questions from Firebase
export async function getQuizQuestions() {
  try {
    const quizRef = collection(db, "quiz");
    const querySnapshot = await getDocs(quizRef);
    
    if (querySnapshot.empty) {
      // Initialize quiz questions if collection is empty
      await initializeQuizQuestions();
      const newSnapshot = await getDocs(quizRef);
      if (!newSnapshot.empty) {
        const doc = newSnapshot.docs[0];
        return doc.data().questions || [];
      }
      return [];
    }
    
    // Get questions from the single document
    const doc = querySnapshot.docs[0];
    const questions = doc.data().questions || [];
    
    return questions;
  } catch (error) {
    console.error("Error getting quiz questions:", error);
    return [];
  }
}

export async function saveQuizResult(result) {
  try {
    const docRef = await addDoc(collection(db, "quiz_results"), {
      ...result,
      tanggal: Timestamp.now()
    });
    console.log("Quiz result saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving quiz result: ", error);
    throw error;
  }
}

// Initialize videos in Firebase (only 1 document with all videos)
export async function initializeVideos() {
  try {
    const videosRef = collection(db, "videos");
    const querySnapshot = await getDocs(videosRef);
    
    // Only add if videos collection is empty
    if (querySnapshot.empty) {
      const videoData = {
        videos: [
          {
            id: "video1",
            judul: "Sila 1: Ketuhanan Yang Maha Esa",
            url: "https://www.youtube.com/embed/oUldyUkWNOI",
            deskripsi: "Penjelasan detail tentang sila pertama Pancasila dan penerapannya dalam kehidupan berbangsa dan bernegara."
          },
          {
            id: "video2",
            judul: "Sila 2: Kemanusiaan yang Adil dan Beradab",
            url: "https://www.youtube.com/embed/QmurM1uyd88",
            deskripsi: "Memahami nilai kemanusiaan dalam Pancasila dan implementasinya dalam menghargai martabat manusia."
          },
          {
            id: "video3",
            judul: "Sila 3: Persatuan Indonesia",
            url: "https://www.youtube.com/embed/J_WrfuSF7JY",
            deskripsi: "Pentingnya menjaga persatuan dan kesatuan bangsa Indonesia dalam keberagaman."
          },
          {
            id: "video4",
            judul: "Sila 4: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan",
            url: "https://www.youtube.com/embed/vhYim_LeFQY",
            deskripsi: "Penjelasan tentang demokrasi Indonesia yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan."
          },
          {
            id: "video5",
            judul: "Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia",
            url: "https://www.youtube.com/embed/XbhCEqqSxuI",
            deskripsi: "Memahami nilai keadilan sosial dalam Pancasila dan implementasinya untuk kesejahteraan seluruh rakyat Indonesia."
          }
        ],
        createdAt: Timestamp.now()
      };
      
      await addDoc(videosRef, videoData);
      console.log("Videos initialized in Firebase");
    }
  } catch (error) {
    console.error("Error initializing videos:", error);
  }
}

// Update videos in Firebase to remove 'nomor' field
export async function updateVideosInFirebase() {
  try {
    const videosRef = collection(db, "videos");
    const querySnapshot = await getDocs(videosRef);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const docRef = doc.ref;
      
      const updatedVideos = [
        {
          id: "video1",
          judul: "Sila 1: Ketuhanan Yang Maha Esa",
          url: "https://www.youtube.com/embed/oUldyUkWNOI",
          deskripsi: "Penjelasan detail tentang sila pertama Pancasila dan penerapannya dalam kehidupan berbangsa dan bernegara."
        },
        {
          id: "video2",
          judul: "Sila 2: Kemanusiaan yang Adil dan Beradab",
          url: "https://www.youtube.com/embed/QmurM1uyd88",
          deskripsi: "Memahami nilai kemanusiaan dalam Pancasila dan implementasinya dalam menghargai martabat manusia."
        },
        {
          id: "video3",
          judul: "Sila 3: Persatuan Indonesia",
          url: "https://www.youtube.com/embed/J_WrfuSF7JY",
          deskripsi: "Pentingnya menjaga persatuan dan kesatuan bangsa Indonesia dalam keberagaman."
        },
        {
          id: "video4",
          judul: "Sila 4: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan",
          url: "https://www.youtube.com/embed/vhYim_LeFQY",
          deskripsi: "Penjelasan tentang demokrasi Indonesia yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan."
        },
        {
          id: "video5",
          judul: "Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia",
          url: "https://www.youtube.com/embed/XbhCEqqSxuI",
          deskripsi: "Memahami nilai keadilan sosial dalam Pancasila dan implementasinya untuk kesejahteraan seluruh rakyat Indonesia."
        }
      ];
      
      await docRef.update({
        videos: updatedVideos,
        updatedAt: Timestamp.now()
      });
      
      console.log("Videos updated in Firebase (nomor field removed)");
    }
  } catch (error) {
    console.error("Error updating videos in Firebase:", error);
  }
}

export async function getVideos() {
  try {
    const videosRef = collection(db, "videos");
    const querySnapshot = await getDocs(videosRef);
    
    if (querySnapshot.empty) {
      // Initialize videos if collection is empty
      await initializeVideos();
      const newSnapshot = await getDocs(videosRef);
      if (!newSnapshot.empty) {
        const doc = newSnapshot.docs[0];
        return doc.data().videos || [];
      }
      return [];
    }
    
    // Get videos from the single document
    const doc = querySnapshot.docs[0];
    const videos = doc.data().videos || [];
    
    // Check if videos still have 'nomor' field and update if needed
    const hasNomorField = videos.some(video => video.hasOwnProperty('nomor'));
    if (hasNomorField) {
      console.log("Detected 'nomor' field in Firebase videos, updating...");
      await updateVideosInFirebase();
      // Get updated videos
      const updatedSnapshot = await getDocs(videosRef);
      const updatedDoc = updatedSnapshot.docs[0];
      return updatedDoc.data().videos || [];
    }
    
    return videos;
  } catch (error) {
    console.error("Error getting videos:", error);
    // Fallback to hardcoded videos if Firebase fails
    return [
      {
        id: "video1",
        judul: "Sila 1: Ketuhanan Yang Maha Esa",
        url: "https://www.youtube.com/embed/oUldyUkWNOI",
        deskripsi: "Penjelasan detail tentang sila pertama Pancasila dan penerapannya dalam kehidupan berbangsa dan bernegara."
      },
      {
        id: "video2",
        judul: "Sila 2: Kemanusiaan yang Adil dan Beradab",
        url: "https://www.youtube.com/embed/QmurM1uyd88",
        deskripsi: "Memahami nilai kemanusiaan dalam Pancasila dan implementasinya dalam menghargai martabat manusia."
      },
      {
        id: "video3",
        judul: "Sila 3: Persatuan Indonesia",
        url: "https://www.youtube.com/embed/J_WrfuSF7JY",
        deskripsi: "Pentingnya menjaga persatuan dan kesatuan bangsa Indonesia dalam keberagaman."
      },
      {
        id: "video4",
        judul: "Sila 4: Kerakyatan yang Dipimpin Hikmat Kebijaksanaan",
        url: "https://www.youtube.com/embed/vhYim_LeFQY",
        deskripsi: "Penjelasan tentang demokrasi Indonesia yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan."
      },
      {
        id: "video5",
        judul: "Sila 5: Keadilan Sosial bagi Seluruh Rakyat Indonesia",
        url: "https://www.youtube.com/embed/XbhCEqqSxuI",
        deskripsi: "Memahami nilai keadilan sosial dalam Pancasila dan implementasinya untuk kesejahteraan seluruh rakyat Indonesia."
      }
    ];
  }
}
