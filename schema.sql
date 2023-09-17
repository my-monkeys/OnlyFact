-- create a schema if it doesn't exist named 'onlyFact'

CREATE SCHEMA IF NOT EXISTS onlyFact;

-- create a table named 'fact' in the schema 'onlyFact'

CREATE TABLE IF NOT EXISTS onlyFact.fact (
    id INT NOT NULL AUTO_INCREMENT,
    desc TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    up_votes INT NOT NULL DEFAULT 0,
    down_votes INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

-- Insert some data into the table (desc: "The only fact is that there is no fact", author: "Anonymous")

INSERT INTO onlyFact.fact (desc, author) VALUES ("The only fact is that there is no fact", "Anonymous");

