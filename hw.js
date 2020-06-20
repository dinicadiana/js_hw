'use strict';

class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = birthDate;
    
        this.saveInfo();
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Person (id, firstName, lastName, birthDate) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate}")');
        } catch (error) {
            throw error;
        }
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
    
        this._salary = salary;

        this.saveInfo();
    }

    get salary(){
        return this._salary;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Employee (id, firstName, lastName, birthDate, salary) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._salary}")');
        } catch (error) {
            throw error;
        }
    }

    promote(newSalary) {
        this._salary = newSalary;
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('UPDATE Employee SET salary = "${this._salary}" WHERE id = ${thid._id}');
        } catch (error) {
            throw error;
        }
    }

    fire() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('DELETE FROM Employee WHERE id = ${thid._id}');
        } catch (error) {
            throw error;
        }
    }
}

class Student extends Person {
    constructor(id, firstName, lastName, birthDate, scholarship) {
        super(id, firstName, lastName, birthDate);
    
        this._scholarship = scholarship;

        this.saveInfo();
    }

    get scholarship() {
        return this._scholarship;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Student (id, firstName, lastName, birthDate, scholarship) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._scholarship}")');
        } catch (error) {
            throw error;
        }
    }

    evaluateStudent(){
        if (this._scholarship >= 9000) {
            return "This student has a grade point average higher than 9.5";
        } else if (this._scholarship >= 700) {
            return "This student has a grade point average higher than 9.3";
        } else {
            return "The grade point average is less than 9.3";
        }
    }
}

class Teacher extends Employee {
    constructor(id, firstName, lastName, birthDate, salary, subject) {
        super(id, firstName, lastName, birthDate, salary);
    
        this._subject = subject;

        this.saveInfo();
    }

    get subject() {
        return this._subject;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Teacher (id, firstName, lastName, birthDate, salary, subject) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._salary, this._subject}")');
        } catch (error) {
            throw error;
        }
    }
}

class Administrator extends Employee {
    constructor(id, firstName, lastName, birthDate, salary, department) {
        super(id, firstName, lastName, birthDate, salary);
    
        this._department = department;

        this.saveInfo();
    }

    get department() {
        return this._department;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Administrator (id, firstName, lastName, birthDate, salary, department) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._salary, this._department}")');
        } catch (error) {
            throw error;
        }
    }
}

class ProDean extends Employee {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate, salary);

        this.saveInfo();
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO ProDean (id, firstName, lastName, birthDate, salary) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._salary}")');
        } catch (error) {
            throw error;
        }
    }
}

class DepartmentHead extends Teacher {
    constructor(id, firstName, lastName, birthDate, salary, subject, department) {
        super(id, firstName, lastName, birthDate, salary, subject);
    
        this._department = department;

        this.saveInfo();
    }

    get department() {
        return this._department;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO DepartamentHead (id, firstName, lastName, birthDate, salary, department) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._salary, this._department}")');
        } catch (error) {
            throw error;
        }
    }
}

class Dean extends ProDean {
    constructor(id, firstName, lastName, birthDate, salary, year) {
        super(id, firstName, lastName, birthDate, salary);

        this._year = year;

        this.saveInfo();
    }

    get year() {
        return this._year;
    }

    saveInfo() {
        var mysql = require('mysql');
        var mySqlConnection = mysql.createConnection({host: '127.0.0.1', user: '', password: '', database: 'mydb'});

        try {
            mySqlConnection.query('INSERT INTO Dean (id, firstName, lastName, birthDate, year) VALUES ("${this._id, this._firstName, this._lastName, this._birthDate, this._year}")');
        } catch (error) {
            throw error;
        }
    }
}