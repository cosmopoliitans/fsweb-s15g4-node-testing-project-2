/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Gorevler", (t) => {
      t.increments("GorevId"); // id atıyor
      t.string("Adi").notNullable(); // boş olamaz
      t.string("Aciklama");
    })
    .createTable("Tasklar", (t) => {
      t.increments("TaskId"); // id atıyor
      t.string("Adi").notNullable(); // boş olamaz
      t.string("Aciklama");
      t.timestamp("EklemeTarihi").defaultTo(knex.fn.now()); //taskın eklenme tarihi
      t.integer("GorevId")
        .references("GorevId") // eşleştirme yapıldı
        .inTable("Gorevler")
        .onDelete("CASCADE"); // referans olan tablodaki bir kayıt silindiğinde, bu referansa sahip olan diğer tablodaki ilgili kayıtların da otomatik olarak silinmesini ifade eder.
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Tasklar").dropTableIfExists("Gorevler");
};
