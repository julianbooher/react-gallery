CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,	
    path VARCHAR (200),
    description VARCHAR (200),
    likes INTEGER default 0
);

INSERT INTO gallery (path, description) VALUES ('https://i.imgur.com/T9EgmNB.jpeg', 'Photo of me at Camp Nou in Barcelona');
INSERT INTO gallery (path, description) VALUES ('https://i.imgur.com/jfTSJSA.jpeg', 'Tasting barrels of whiskey at J Carver Distillery in Waconia');

SELECT * FROM gallery;
