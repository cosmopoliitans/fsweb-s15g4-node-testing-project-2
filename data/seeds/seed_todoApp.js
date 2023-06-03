/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultGorevler = [
  { Adi: "Kişisel Gelişim", Aciklama: "Kendine vakit ayır." },
  { Adi: "Sosyal Aktiviteler", Aciklama: "Sosyalleşmek için vakit ayır." },
];

const defaultTasklar = [
  {
    Adi: "Kitap oku",
    Aciklama:
      "Okumak istediğiniz kitapları belirleyin ve her hafta birkaç bölüm okuyun.",
    GorevId: 1,
  },
  {
    Adi: "Beceriler edin",
    Aciklama:
      "Yeni beceriler edinmek için online kurslara veya seminerlere kaydolun.",
    GorevId: 1,
  },
  {
    Adi: "Ruh sağlığı",
    Aciklama:
      "Meditasyon veya yoga gibi stres yönetimi tekniklerini uygulayın.",
    GorevId: 1,
  },
  {
    Adi: "Randevu planla",
    Aciklama:
      "Aile ve arkadaşlarınızla zaman geçirmek için düzenli olarak randevular planlayın.",
    GorevId: 2,
  },
  {
    Adi: "Hobilerin olsun",
    Aciklama:
      "Hobilerinizle ilgilenin ve zaman ayırın (müzik, resim, spor vb.).",
    GorevId: 2,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Tasklar").truncate(); // veri tabanını temizliyor
  await knex("Gorevler").truncate(); // veri tabanını temizliyor

  await knex("Gorevler").insert(defaultGorevler); // oluşturulan datayı tabloya atıyor
  await knex("Tasklar").insert(defaultTasklar); // oluşturulan datayı tabloya atıyor
};
