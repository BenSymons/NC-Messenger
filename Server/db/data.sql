DROP DATABASE IF EXISTS nc_messenger;

CREATE DATABASE nc_messenger;

\c nc_messenger;
CREATE TABLE users (
    username varchar(12) PRIMARY KEY,
    avatar_url varchar
);

CREATE TABLE chat_log (
    message_id serial PRIMARY KEY,
    username varchar(12) REFERENCES users (username) NOT NULL,
    message_body text
);

INSERT INTO users (username, avatar_url)
    VALUES ('BEN', 'http://img.photobucket.com/albums/v490/Poopenstance/catwithtie.gif');

INSERT INTO chat_log (username, message_body)
    VALUES ('BEN', 'Hi SQL! Nice to see you');

