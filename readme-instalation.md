Terdapat table **Fishes**

| Column Name | Type    |
| ----------- | ------- |
| id          | SERIAL  |
| name        | VARCHAR |
| type        | VARCHAR |
| weight      | INTEGER |

# Sequelize Intro

Record 

- buat gitignore
- npm init

## 1. [Apa itu sequelize?](https://sequelize.org/)

Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## 2. [Install sequelize](https://sequelize.org/docs/v6/getting-started/)
Jangan lupa, npm init dan .gitignore

Install sequelize.

command: `npm install --save sequelize`

Install database driver. 

command: `npm install --save pg`

## 3. [Install sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/)
Sequelize-cli adalah sebuah bantuan lagi dari sequelize, yang dapat mengenerate file2 yang nanti kita butuhkan dalam penggunaan sequlize.

command: `npm install -D sequelize-cli`


## 4. [Initialize sequelize-cli](https://sequelize.org/docs/v6/other-topics/migrations/#project-bootstrapping)
command: `npx sequelize-cli init`

Init ini akan mengenerate 4 folder yaitu:

- config, contains config file, which tells CLI how to connect with database
- models, contains all models for your project
- migrations, contains all migration files
- seeders, contains all seed files

## 5. [Config sequelize](https://sequelize.org/docs/v6/other-topics/migrations/#configuration)
Sesuaikan credential untuk koneksi ke database ada di config/config.json.

## 6. [Help](https://www.npmjs.com/package/sequelize-cli)
Kalau bingung atau butuh bantuan, coba jalankan command `npx sequelize-cli help` atau lihat ke dokumentasi.

## 7. [Create database](https://sequelize.org/docs/v6/other-topics/migrations/)
Buat database melalui sequelize.

command: `npx sequelize-cli db:create`

## 8. [Generate model and migration](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)
Dengan generate model maka otomatis akan mengenerate juga migration, yang isinya adalah instruksi untuk membuat table dengan nama plural dari model beserta attributtes yang ada dalam table.

command: `npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,isActive:boolean`

kalau kita ingin melihat apa saja attribute yang ada di model:generate, bisa digunakan command `npx sequelize-cli model:generate --help`.  

[Tipe data di sequelize](https://sequelize.org/v5/manual/data-types.html)

## 9. [Running Migration](https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations)
Menjalankan semua migration yang statusnya belum dijalankan.

command: `npx sequelize-cli db:migrate`

Bisa juga mengundo migration

command: `npx sequelize-cli db:migrate:undo:all`

## 10. [Generate seeder](https://sequelize.org/v5/manual/migrations.html#creating-first-seed)
Mengenerate file seeder.

command: `npx sequelize-cli seed:generate --name demo-user`

## 11. [Running seeder](https://sequelize.org/docs/v6/other-topics/migrations/#running-seeds)
Menjalankan semua seeder.

command: `npx sequelize-cli db:seed:all`

## 12. Using model
Menggunakan model yang telah di generate oleh sequelize, bisa di require index dari folder model lalu diikuti dengan nama modelnya. 

```
const { User } = require('./models/index') 
```
or
```
const User = require('./models/index').User
```

## 13. [Get data](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#specifying-attributes-for-select-queries) 
Menampilkan data dari table.
```
User
    .findAll()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```
more detail: https://sequelize.org/api/v6/class/src/model.js~model

## 14. Migration dan Model itu SANGAT BERBEDA
`SANGAT BERBEDA`

TIDAK ADA HUBUNGANNYA SAMA SEKALI

Migration, berhubungan dengan struktur table 

Model, berhubungan dengan data yang ada dalam table 
