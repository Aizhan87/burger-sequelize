CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);