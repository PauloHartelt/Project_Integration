CREATE DATABASE
  connecting_db;

DROP TABLE
  IF EXISTS dim_users;

CREATE TABLE IF NOT EXISTS
  dim_users (
    id SERIAL PRIMARY KEY NOT NULL,
    nome TEXT,
    email TEXT UNIQUE,
    senha TEXT
  );