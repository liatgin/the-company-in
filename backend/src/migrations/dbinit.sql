CREATE TABLE companies
(
    id uuid NOT NULL PRIMARY KEY,
    logo text,
    name text ,
    domain text,
    description text,
    industry text,
    money_raised int, 
    market_cap int,
    annual_revenue int,
    location text,
    number_of_employees int
);